import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import useLocalStorageState from "use-local-storage-state/src/useLocalStorageState";
import { useCartContext } from "../../../context/CartProvider";
import { Quantifier } from "./Quantifier";

export interface Product {
    id: string,
    prodname: string,
    quantity: number,
    sale_price: number,
    price: number,
    address: string,
    status: boolean,
    description: string,
    createdDate: Date,
    updatedDate: Date,
    image: string,
    categoryId: string,
    cartQuantity: number,
    totalPrice: number
}

const CartScreens = ({ route, navigation }: any) => {

    const { cart, setCartStorageFromCart, getCart, setCartStorageFromDetail, totalPrice, calcTotalPrice }: any = useCartContext();

    const checkCart = () => {
        if (cart.length > 0) {
            navigation.push('address')
        } else {
            Alert.alert('Giỏ hàng trống!');
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'#ffffff'} barStyle={"dark-content"} />
                <View>
                    <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back" size={30} style={styles.titleHeaderICon} />
                    </TouchableOpacity>
                    <View style={{}}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Giỏ hàng</Text>
                    </View>

                    <FlatList
                        scrollEnabled={false}
                        data={cart}
                        renderItem={({ item }: any) =>
                            <View style={styles.mainItem}>
                                <Image source={{ uri: item.image }} style={{
                                    width: '20%',
                                    height: '100%',
                                }}></Image>
                                <View style={styles.mainItemMid}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#17202A' }}>{item.prodname}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FA4319' }}>{item.price} VNĐ</Text>
                                </View>
                                <Quantifier pro={item} />

                            </View>
                        }
                    />

                    

                    <TouchableOpacity style={styles.check} onPress={() => checkCart()}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FDFEFE' }}>Mua hàng</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FDFEFE' }}>{totalPrice} VNĐ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.conti} onPress={() => navigation.navigate('ListPro')}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#17202A', textAlign:'center'}}>Mua thêm hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFEFE',
        height: '100%',
        width: '100%',
        padding: 20,
        marginTop: 20
    },
    mainItem: {
        width: '100%',
        height: 100,
        marginTop: 20,  
        backgroundColor: '#FDFEFE',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgItem: {
        width: '20%',
        height: '100%',
    },
    titleHeaderICon: {
        color: 'black',
        fontSize: 35,
        paddingTop: 5,
        justifyContent: 'center'
    },
    mainItemMid: {
        padding: 15,
        width: '40%',
    },
    mainItemRight: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    quantity: {
        height: 40,
        width: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#A6ACAF',
        borderColor: '#A6ACAF'
    },
    trash: {
        height: 40,
        width: 40,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#FA4319',
        borderColor: '#FA4319'
    },
    code: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    check: {
        width: '100%',
        height: 50,
        marginTop:15,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius:20,
        
    },
    conti:{
        width: '100%',
        height: 50,
        marginTop:15,
        paddingHorizontal: 10,
        backgroundColor: '#ffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
       
    }
})
export default CartScreens;