import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserContext } from "../../../context/UserProvider";
const HomeScreen = ({ navigation }: any) => {
    const [newPro, setnewPro] = useState([]);
    const [proOBQ, setProOBQ] = useState([]);
    const [email, setEmail] = useState('');
    const { user, setUser, getUser }: any = useContext(UserContext);
    const [name, setName] = useState('');
    let data: any;

    axios.get('http://172.16.0.37:3000/api/users')
        .then((res) => {
            data = res.data;
            console.log(data);
            setName(data.data.name);
        })
        .catch((e) => {
            console.log(`login error ${e}`);
        });
    const getApi = async () => {
        return fetch('http://172.16.0.37:3000/api/products2').
            then((response) => response.json())
            .then((data) => setnewPro(data.data))
            .catch(err => console.log(err))

    }
    const getApi1 = async () => {
        return fetch('http://172.16.0.37:3000/api/products').
            then((response) => response.json())
            .then((data) => setProOBQ(data.result))
            .catch(err => console.log(err))

    }
    useEffect(() => {
        getApi();
        getApi1();
    }, []);
    return (
        <ScrollView >
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'#ffffff'} barStyle={"dark-content"} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ paddingTop: 5 }}>
                        <Image source={require('../../../assets/LogoLV.png')} style={{ width: 50, height: 110 }}></Image>
                    </View>
                    <View style={styles.headerTop}>
                        <Text style={{ fontSize: 20, paddingRight: 10, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Xin chào {name} !</Text>
                    </View>
                    {/* <View style={styles.headerMid}>
                    <Text style={{ fontSize: 30, width: '60%', fontWeight: 'bold', color: '#17202A' }}>Chúc bạn một ngày tốt lành</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/image/avatar1.jpg')} style={{ width: 50, height: 50, borderRadius: 50 }}></Image>
                    </TouchableOpacity>
                        </View> */  }
                </View>

                <View style={styles.content}>
                    <View style={styles.contentTop}>
                        <Text style={{ fontSize: 30, width: '70%', fontWeight: 'bold', color: '#17202A' }}>Sản phẩm nổi bật</Text>
                    </View>
                    <ScrollView horizontal>
                        <FlatList
                            scrollEnabled={false}
                            data={newPro}
                            horizontal
                            renderItem={({ item }: any) =>
                                <TouchableOpacity style={styles.poppularItem} onPress={() => navigation.push('ProductDetail', { item })}>
                                    <Image source={{ uri: item.image }} style={styles.imgItem}></Image>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontWeight: 'bold', color: '#17202A' }}>{item.prodname}</Text>
                                    <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>{item.price} VNĐ</Text>
                                        <View style={styles.cart}>
                                            <Icon name="cart-outline" size={20} color={"#FDFEFE"} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </ScrollView>

                    <View style={{ marginTop: 20 }}>
                        <View style={styles.contentTop}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#17202A' }}>Sản phẩm mới</Text>
                            {/* <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                            <Text style={{ fontSize: 20 }}>All</Text>
                        </TouchableOpacity> */}
                        </View>
                        <View style={styles.container1}>
                            <FlatList
                                scrollEnabled={false}
                                data={proOBQ}
                                numColumns={2}
                                columnWrapperStyle={styles.row}
                                renderItem={({ item }: any) =>
                                    <View style={styles.item}>
                                        {item.sale_price > 0 ?
                                            <View style={styles.sale}>
                                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 13 }}>{(100 - (item.sale_price / item.price * 100)).toFixed(0)}%</Text>
                                            </View>
                                            : <View ></View>
                                        }
                                        <TouchableOpacity onPress={() => { navigation.navigate('ProductDetail', { item }) }}>
                                            <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
                                        </TouchableOpacity>
                                        <View style={styles.dess}>
                                            {item.sale_price > 0 ?
                                                <Text style={styles.dess_text}><Text style={{ textDecorationLine: 'line-through', color: 'gray' }}>{item.price} $</Text> <Text style={{ color: 'red' }}> {item.sale_price} VNĐ</Text></Text>
                                                : <Text style={[styles.dess_text, { color: 'red' }]}> {item.price} VNĐ</Text>}<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#17202A', textAlign: 'center' }}>{item.prodname}</Text>


                                        </View>
                                    </View>
                                }
                            />
                        </View>
                    </View>
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
        color: 'yellow'
    },
    header: {
        paddingBottom: 20
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sale: {
        width: 35,
        height: 35,
        color: 'black',
        borderRadius: 50,
        padding: 7,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerMid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flex: 1,
        justifyContent: 'space-between'
    },
    item: {
        width: '50%',
        marginRight: 10
    },
    dess: {
        // backgroundColor:'black',
        paddingVertical: 7
    },
    dess_text: {
        paddingHorizontal: 15,
        color: 'black',
        textAlign: 'center',
        paddingBottom: 10,

    },
    headerBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ABB2B9',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    content: {
        paddingBottom: 20
    },
    contentTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15
    },
    poppularItem: {
        width: 200,
        height: 300,
        backgroundColor: '#FDFEFE',
        borderWidth: 1,
        borderColor: '#FDFEFE',
        borderRadius: 20,
        marginRight: 10
    },
    imgItem: {
        width: '100%',
        height: '70%',

    },
    cart: {
        width: 30,
        height: 30,
        marginRight: 10,
        paddingLeft: 3,
        backgroundColor: '#FA4319',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FA4319',
        borderRadius: 10
    },
    setItem: {
        width: '100%',
        height: 350,
        marginTop: 20,
        backgroundColor: '#FDFEFE',
        borderRadius: 20
    },
    imgSet: {
        width: '100%',
        height: '70%',
        borderRadius: 20
    },
    arrow: {
        width: 50,
        height: 50,
        marginRight: 10,
        paddingLeft: 10,
        backgroundColor: '#FA4319',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FA4319',
        borderRadius: 15
    }
})

export default HomeScreen;