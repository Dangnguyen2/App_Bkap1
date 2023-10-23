import React, { useContext, useState } from "react";
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import CheckBox from '@react-native-community/checkbox';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../../context/UserProvider";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const LoginScreen = ({ navigation }: any) => {
    const [isCheck, setIsCheck] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkemail, checkEmail] = useState('');
    const [checkpassword, checkPassword] = useState('');
    const [CheckEmail, setCheckEmail] = useState(true);
    const { setUser }: any = useContext(UserContext);
    const [message, setMessage] = useState('');    

    const showToast = (message: any) => {
        Toast.show({
            type: 'error',
            text1: 'Message',
            text2: message
        });
    }

    // const onSubmit = async () => {
    //     let formData = {
    //         email: email,
    //         password: password,
    //         _ischeck: isCheck
    //     }
    //     let regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    //     if (!regexEmail.test(formData.email)) {
    //         setCheckEmail(false);
    //     } else {
    //         setCheckEmail(true)
           
    //     }
    //     formData.password === '' ? checkPassword('Password cannot be blank') : checkPassword('')
    //     formData.email === '' ? checkEmail('Password cannot be blank') : checkEmail('')
    //     if(formData.email !== '' && formData.password !== '' && regexEmail.test(formData.email)){
    //         console.log(formData)
    //         var formurlencoded = require('form-urlencoded');
    //         const data = formurlencoded(formData);
    //         axios.post('http://192.168.1.102:3000/api/login',data).
    //             then((respone)=>{
    //                 if(respone.data.statusCode === 200){
    //                     setUser(respone.data.result)
    //                     AsyncStorage.setItem('users',JSON.stringify(respone.data.result))
    //                     navigation.navigate('Home')
    //                 } else{
    //                     Alert.alert(respone.data.message)
    //                 }
    //             }
    //             )
    //             .catch((err)=>{
    //                 console.log(err)
    //             })
    //     }


    // }
    const onSubmit = async () => {
        let formData = {
            email: email,
            password: password,
            _isCheck: isCheck
        }
        let regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (formData.email === '' || formData.password === '') {
            setCheckEmail(false);
            showToast('Dữ liệu không hơp lệ');
            // Alert.alert('Dữ liệu không hơp lệ')
        } else {
            if (!regexEmail.test(formData.email)) {
                setCheckEmail(false);
                setMessage('email không đúng định dạng');
            } else {
                setCheckEmail(true);
                console.log(formData)
                var formurlencoded = require('form-urlencoded');
                const data = formurlencoded(formData);
                axios.post('http://172.16.0.37:3000/api/login', data).
                    then((respone) => {
                        // console.log('signin '+ JSON.stringify(response.data))
                        if (respone.data.statusCode === 200) {
                            setUser(respone.data.result)
                            AsyncStorage.setItem('users',JSON.stringify(respone.data.result))
                            navigation.navigate('Home')
                        } else {
                            showToast(respone.data.message);
                            // Alert.alert(response.data.message)
                        }
                    }
                    ).catch((err) => console.log(err))
            }
        }

    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'#ffffff'} barStyle={"dark-content"} />
            <View style={{paddingTop:40,height:90,borderBottomWidth:0.5}}>
                    <Text style={{fontWeight:'bold',textTransform:'uppercase',fontSize:23,color:'black'}}>Đăng nhập tài khoản LW</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.group}>
                        <Text style={{paddingBottom:10,textTransform:'uppercase',color:'black'}}>Email *</Text>
                        <TextInput placeholder="name@example.com" style={styles.ip}  onChangeText={(value) => setEmail(value)} placeholderTextColor={'black'}></TextInput>
                        {!checkemail && <Text style={{ color: 'red' }}>{message}</Text>}
                    </View>
                    <View style={styles.group}>
                        <Text style={{paddingBottom:10,textTransform:'uppercase',color:'black'}}>Password *</Text>
                        <TextInput style={styles.ip} secureTextEntry={true} placeholder="Mật khẩu"  onChangeText={(value) => setPassword(value)} placeholderTextColor={'black'}></TextInput>
                        
                    </View>
                </View>
            {/* <View style={styles.checked}>
                <TouchableOpacity onPress={() => { navigation.navigate('ForgetPassword') }}><Text style={{ fontSize: 18, color: 'black' }}>Quên mật khẩu?</Text></TouchableOpacity>
            </View> */}
            <TouchableOpacity style={styles.button} /* onPress={() => {login(email,password)}}*/ onPress={() => onSubmit()}><Text style={styles.buttonText}>Đăng nhập</Text></TouchableOpacity>
            <View style={styles.chuyenTrang}>
                <Text style={{ fontSize: 18 , color: 'black' }}>Chưa có tài khoản?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}><Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> Đăng ký</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3ffbd',
        flex: 1,
        paddingHorizontal: 30
    },
    headerText: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20
    },
    form:{
        padding:35,
        backgroundColor:'white',
        marginTop:30,
        paddingHorizontal:30
    },

    group:{
        marginTop:15,
    },
    group1:{
        marginTop:20,
        marginBottom:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    ip:{
        borderWidth:0.2,
        backgroundColor:'#fff',
        borderColor:'grey',
        paddingLeft:20,
        color:'black'
    },
    formLogin: {
        marginTop: 20
    },
    iconLogin: {
        fontSize: 25,
        position: 'absolute',
        zIndex: 1000,
        top: 12,
        paddingLeft: 10,
        color: '#FA4319'
    }
    ,
    formLoginInputNumber: {
        borderWidth: 1,
        borderColor: '#FA4319',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 50,
        borderRadius: 10
    },
    formLoginInputPassword: {
        borderWidth: 1,
        borderColor: '#FA4319',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 50,
        borderRadius: 10
    },
    checked: {
        marginTop: 20,
        alignItems: 'flex-end'
    },
    button: {
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        padding: 15,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        fontSize: 15,
        paddingVertical:20,
    },
    chuyenTrang: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen