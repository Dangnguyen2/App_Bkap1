import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { AuthContext } from "../../../context/AuthContext";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import  Icon  from "react-native-vector-icons/Entypo";
const RegisterScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const { setUserInfo }: any = useContext(AuthContext);
    const [checkEmail, setCheckEmail] = useState(true);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const showToast = (message1: any) => {
        Toast.show({
            type: 'error',
            text1: 'Message',
            text2: message
        });
    }

    const Register = () => {
        setIsLoading(true);
        let formData = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            birthday: birthday,
            password: password,
        }

        let regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (formData.email === '' || formData.phone === '' || formData.password === '') {
            setCheckEmail(false);
            showToast('Dữ liệu không hơp lệ');
        } else {
            if (!regexEmail.test(formData.email)) {
                setCheckEmail(false)
                setMessage('Email không đúng định dạng');
            } else {
                setCheckEmail(true);
                var formurlencoded = require('form-urlencoded');
                const data = formurlencoded(formData);
                axios.post('http://172.16.0.37:3000/api/users', data).
                    then((response) => {
                        console.log(response.data.statusCode)
                        if (response.data.statusCode == 200) { 
                            // let userInfo = response.data.result;
                            // setUserInfo(userInfo);
                            // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
                            navigation.navigate('Login');
                        } else {
                            showToast(response.data.message);
                        }
                    }
                    ).catch((err) => {
                        console.log(err);
                    }
                    )
            }
        }
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'black'} barStyle={"dark-content"} />
            {/* <Spinner visible={isLoading} /> */}
            <View style={styles.title}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <Icon name="chevron-small-left" style={styles.titleHeaderICon} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: 'black', paddingLeft: 110 }}>Đăng Ký</Text>
            </View>
            <View style={styles.formLogin}>
                <View style={styles.formLoginTitle}>
                    <Text style={{ paddingBottom:10,textTransform:'uppercase',color:'black' }}>Tên người dùng</Text>
                    <TextInput placeholder="Tên người dùng" style={styles.formLoginTextInput} autoCapitalize="none" onChangeText={(value) => setName(value)} />
                </View>
                <View style={styles.formLoginTitle}>
                    <Text style={{ paddingBottom:10,textTransform:'uppercase',color:'black' }}>Tài khoản email</Text>
                    <TextInput placeholder="Tài khoản email" style={styles.formLoginTextInput} autoCapitalize="none" onChangeText={(value) => setEmail(value)} />
                    {!checkEmail && <Text style={{ color: 'red' }}>{message}</Text>}
                </View>
                <View style={styles.formLoginTitle}>
                    <Text style={{ paddingBottom:10,textTransform:'uppercase',color:'black' }}>Số điện thoại</Text>
                    <TextInput placeholder="Số điện thoại" style={styles.formLoginTextInput} autoCapitalize="none" onChangeText={(value) => setPhone(value)} />
                </View>
                <View style={styles.formLoginTitle}>
                    <Text style={{ paddingBottom:10,textTransform:'uppercase',color:'black' }}>Địa chỉ</Text>
                    <TextInput placeholder="Địa chỉ" style={styles.formLoginTextInput} onChangeText={(value) => setAddress(value)} />
                </View>
                <View style={styles.formLoginTitle}>
                    <Text style={{ paddingBottom:10,textTransform:'uppercase',color:'black' }}>Ngày sinh</Text>
                    <TextInput placeholder="Ngày sinh" style={styles.formLoginTextInput} onChangeText={(value) => setBirthday(value)} />
                </View>
                <View style={styles.formLoginTitle}>
                    <Text style={{ paddingBottom:10,textTransform:'uppercase',color:'black' }}>Mật khẩu</Text>
                    <TextInput placeholder="Mật khẩu" style={styles.formLoginTextInput} onChangeText={(value) => setPassword(value)} />
                </View>
            </View>
            {/* <View style={styles.clickPolicy}>
                <Text style={{ fontSize: 15 }}>By continuing, I confirm that I have read and agree</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15 }}>to the </Text>
                    <TouchableOpacity><Text style={{ fontSize: 15, color: '#FF4500' }}>Terms and Conditions</Text></TouchableOpacity>
                    <Text style={{ fontSize: 15 }}> and </Text>
                    <TouchableOpacity><Text style={{ fontSize: 15, color: '#FF4500' }}>Privacy Policy.</Text></TouchableOpacity>
                </View>
            </View> */}
            <TouchableOpacity style={styles.buttonSingUp} onPress={() =>  Register() }>
                <Text style={styles.buttonSignUpText}>Đăng Ký</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3ffbd',
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 30,
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems:'center'

    }, titleHeaderICon: {
        color: 'black',
        fontSize: 35,
        paddingTop: 5,
        justifyContent: 'center'
    },
    formLogin: {
         padding:30,
        backgroundColor:'white',
        marginTop:30,
        paddingBottom:40,
        paddingHorizontal:30
    },
    formLoginTitle: {
        paddingBottom: 6,
        color:'#fffff'
    },
    formLoginTextInput: {
        borderColor: 'gray',
        padding: 8,
        borderWidth: 0.2,
        fontSize: 15,
        color: 'black',
        paddingLeft: 15,
        backgroundColor:'#fff',
    }
    ,
    clickPolicy: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonSingUp: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop:30
    },
    buttonSignUpText: {
        backgroundColor: 'black',
        padding: 9,
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        paddingVertical:20,
    }
    ,
    or: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    continue: {
        width: '100%',
        marginBottom:30
    },
    continue_google: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 4,
        borderColor: 'gray',
        borderWidth: 1
    },
    continue_facebook: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1
    }
})
export default RegisterScreen;