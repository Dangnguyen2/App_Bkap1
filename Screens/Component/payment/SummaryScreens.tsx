import React, { useContext, useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Alert, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


import axios from "axios";
import { useCartContext } from "../../../context/CartProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../../context/UserProvider";

const SummaryScreens = ({ route, navigation }: any) => {
    const { cart, setCartStorageFromCart, getCart, setCartStorageFromDetail, totalPrice, getTotalPrice, calcTotalPrice, order, getOrder, setOrderStorage, payment, getPayment, setPaymentStorage, delCart }: any = useCartContext();
    const { Logout, user }: any = useContext(UserContext);
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const orderform = route.params;
    useEffect(() => {

    }, [])

    axios.get('http://172.16.0.37:3000/api/users')
        .then((res) => {
            let data = res.data;
            setId(data.id)
            setName(data.name)
            setBirthday(data.birthday)
            setEmail(data.email)
            setPhone(data.phone)
        })
        .catch((e) => {
            console.log(`login error ${e}`);
        });



    const checkOut = async () => {
        let totalPrice = cart.reduce((total: any, item: any) => total + item.amount * item.price, 0);
        let formOrders = {
            totalPrice: order.totalPrice,
            phone: order.phone,
            email: order.email,
            address: order.address,
            user_id: order.user_id

        }

        console.log(cart);
        console.log(formOrders)
        var formurlencoded = require('form-urlencoded');
        const data = formurlencoded(formOrders);
        if (cart.length > 0) {
            axios.post('http://172.16.0.37:3000/api/orders', data).
                then((respone) => {
                    if (respone.data.statusCode === 200) {

                        if (respone.data.iD != null) {
                            let formOrderDetails = [{}];
                            let orderDetails: any;
                            {
                                cart.map((c: any) => (
                                    orderDetails = {
                                        product_id: c.id,
                                        price: c.price,
                                        quantity: c.cartQuantity,
                                        order_id: respone.data.iD
                                    },

                                    axios.post('http://172.16.0.37:3000/api/order_detail', formurlencoded(orderDetails)).
                                        then((respone) => {
                                            // console.log(orderDetails);
                                            // if (respone.data.statusCode === 200) {
                                            //   navigation.navigate('Home');
                                            // } else {
                                            //   alert(respone.data.message);
                                            // }
                                        }
                                        )
                                        .catch((err) =>
                                            console.log(err)
                                        )
                                ))
                                delCart();
                                // Alert.alert("Order successfully");
                                navigation.push('thankscreen');
                            }
                        }

                    } else {
                        console.log(respone.data)
                    }
                }
                )
                .catch((err) =>
                    console.log(err)
                )
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'#ffffff'} barStyle={"dark-content"} />
            <View style={styles.titlePayment}>
                <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={30} style={styles.btn} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.titlePaymentText}>Tổng quan</Text>
                </View>
            </View>
            <View style={styles.contact}>
                <View style={styles.address}>
                    <View style={styles.addressEdit}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Địa chỉ</Text>
                        {/* <TouchableOpacity><Text style={{fontSize:18,color:'#FA4319',fontWeight:'bold'}}>Edit</Text></TouchableOpacity> */}
                    </View>
                    <Text style={{ fontSize: 18, color: 'black' }}>{order.address}</Text>
                </View>
                <View style={styles.address}>
                    <View style={styles.addressEdit}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Số điện thoại</Text>
                        {/* <TouchableOpacity><Text style={{fontSize:18,color:'#FA4319',fontWeight:'bold'}}>Edit</Text></TouchableOpacity> */}
                    </View>
                    <Text style={{ fontSize: 18, color: 'black' }}>{order.phone}</Text>
                </View>
                <View style={styles.address}>
                    <View style={styles.addressEdit}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Thanh toán</Text>
                        {/* <TouchableOpacity><Text style={{fontSize:18,color:'#FA4319',fontWeight:'bold'}}>Edit</Text></TouchableOpacity> */}
                    </View>
                    <Text style={{ fontSize: 18, color: 'black' }}>{payment.type}</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>{payment.bank}</Text>
                </View>

                <View style={styles.address}>
                    <View style={styles.addressEdit}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Đơn hàng</Text>
                    </View>
                    <FlatList
                        scrollEnabled={false}
                        data={order.listOrderDetail}
                        renderItem={({ item }: any) =>
                            <View style={styles.addressEdit}>
                                <Text style={{ fontSize: 15, color: 'black' }}>{item.name} x {item.quantity}</Text>
                                <Text style={{ fontSize: 18, color: 'black' }}>{item.price} VNĐ</Text>
                            </View>
                        }
                    />
                    <View style={{ width: '100%', height: 2, backgroundColor: '#F5EDED' }}></View>
                    <View style={styles.addressTotal}>
                        <Text style={{ fontSize: 18, color: 'black' }}>Tổng tiền</Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>{totalPrice} VNĐ</Text>
                    </View>

                </View>



            </View>
            <TouchableOpacity style={styles.button} onPress={() => { checkOut() }}>
                <Text style={styles.buttonText}>Đặt hàng</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10,
        height: '100%',
        width: '100%'
    },
    titlePayment: {
        marginTop: 20,
        paddingBottom: 30
    },
    titlePaymentICon: {
        color: 'black',
        fontSize: 35,
        paddingTop: 5,
        justifyContent: 'center'
    },
    titlePaymentText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contact: {
        marginTop: 20,

    },
    btn: {
        color: 'black'
    },
    address: {
        borderWidth: 1,
        borderColor: '#F5EDED',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    addressEdit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    button: {
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 15
    },
    addressTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    }
})

export default SummaryScreens;

function showToast(message: any) {
    throw new Error("Function not implemented.");
}
