import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useCartContext } from "../../../context/CartProvider";
const ProductDetail = ({ route, navigation }: any) => {
   
    const {item} = route.params;
    const{cart, setCartStorageFromCart, getCart, setCartStorageFromDetail, totalPrice, calcTotalPrice}:any = useCartContext();
    return (
        <>
            <ScrollView>
                <View style={{ paddingBottom: 30 }}>
                    <View style={{ padding: 15 }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <EvilIcons name="close" style={{ fontSize: 35, color: 'black' }}></EvilIcons>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                <Icon name="cart-outline" size={30} style={{ fontSize: 35, color: 'black' }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', paddingTop: 5, fontWeight: 'bold', textAlign: 'center' }}>{item.prodname}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                        {item.sale_price > 0 ?
                            <View style={styles.sale}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13, textAlign: "center" }}>{(100 - (item.sale_price / item.price * 100)).toFixed(0)}%</Text>
                            </View>
                            : <View ></View>
                        }
                        <Image source={{ uri: item.image }} style={{ height: 350, width: '100%' }}></Image>
                    </View>

                    <View style={styles.btn_sotre}>
                        <TouchableOpacity style={styles.btn} onPress={() => setCartStorageFromDetail(item)}>
                            <Text style={{ color: 'black', fontSize: 17 }}>Thêm vào giỏ hàng</Text>
                        </TouchableOpacity>
                        {item.sale_price > 0 ?
                            <Text style={styles.dess_text}><Text style={{ textDecorationLine: 'line-through', color: 'black' }}>{item.price} đ</Text> <Text style={{ color: 'red' }}> {item.sale_price} đ</Text></Text>
                            : <Text style={[styles.dess_text, { color: 'red' }]}> {item.price} VNĐ</Text>}
                        <View>
                            <View style={{ paddingTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 17, color: 'black' }}>Mô tả sản phẩm</Text>
                                <Feather name="minus" style={{ fontSize: 15, paddingTop: 5, color: 'black' }}></Feather>
                            </View>
                            <Text style={styles.des_text}>{item.description}</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>

            

        </>
    )
}

const styles = StyleSheet.create({

    btn_sotre: {
        paddingHorizontal: 15,
        paddingTop: 20,
        // alignItems:"center",
    },
    btn: {
        width: '100%',
        padding: 20,
        // paddingTop:20;
        marginTop: 25,
        marginBottom: 30,
        paddingVertical: 20,
        borderWidth: 0.7,
        alignItems: 'center',
        borderRadius: 3
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        marginTop:10
    },
    dess_text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18
    },
    btn_add: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        position: 'absolute',
        bottom: 30,
        right: 30,
        // bottom:80,
        // right:30,
    },
    sale: {
        backgroundColor: 'red',
        width: 60,
        height: 60,
        paddingHorizontal: 16,
        paddingVertical: 20,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1000,
    },
    des_text: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
        color: 'black'
    },
})
export default ProductDetail;