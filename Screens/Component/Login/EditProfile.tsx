import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Image, StyleSheet, SafeAreaView, Text, View, TouchableOpacity, TextInput, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { UserContext } from "../../../context/UserProvider";

// color: '#D3D3D3'
const EditProfile = ({ navigation, route }: any) => {
    const { Logout, user }: any = useContext(UserContext);
    const [item, setItem] = useState(route.params.data.data);
    // console.log('item item '+item);
    const [id, setId] = useState(item.id);
    const [name, setName] = useState(item.name);
    const [email, setEmail] = useState(item.email);
    const [phone, setPhone] = useState(item.phone);
    const [address, setAddress] = useState(item.address);
    const [birthday, setBirthday] = useState(item.birthday);
    const [password, setPassword] = useState(item.password);

    useEffect(() => {

    }, [item])
    axios.get(`http://192.168.1.102:3000/api/users/id=${user.id}`)
        .then((res) => {
            setItem(res.data);
        })
        .catch((e) => {
            console.log(`login error ${e}`);
        });

    const hundleRegister = () => {
        let formData = {
            id: id,
            name: name,
            email: email,
            phone: phone,
            address: address,
            birthday: birthday,
            password: password
        }
        console.log(formData);
        var formurlencoded = require('form-urlencoded');
            const data = formurlencoded(formData);
        axios.put('http://172.16.0.37:3000/api/user/' + id, data).
            then((response) => {
                if (response.data.statusCode == 200) {

                    navigation.navigate('Home');
                } else {
                    console.log('sai thong tin');

                }
            }).catch((err) => console.log(err))
    }


    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'black'} barStyle={"dark-content"} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon name="chevron-small-left" style={styles.titleHeaderICon} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', paddingLeft:70 }}>Sửa người dùng</Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Image source={require("../../../assets/image/avatar1.jpg")} style={{ width: 100, height: 100, borderRadius: 50 }} />
            </View>
            <View style={styles.form}>
                <View style={styles.formTitle}>
                    <Text style={{ paddingBottom: 5, fontSize: 16, color: 'black', paddingLeft: 20 }}>Tên người dùng</Text>
                    <TextInput placeholder="User name" style={styles.formTextInput} onChangeText={(text) => setName(text)} defaultValue={item.name}></TextInput>
                </View>
                <View style={styles.formTitle}>
                    <Text style={{ paddingBottom: 5, fontSize: 16, color: 'black', paddingLeft: 20 }}>Tài khoản email</Text>
                    <TextInput placeholder="Email" style={styles.formTextInput} onChangeText={(text) => setEmail(text)} defaultValue={item.email}></TextInput>
                </View>
                <View style={styles.formTitle}>
                    <Text style={{ paddingBottom: 5, fontSize: 16, color: 'black', paddingLeft: 20 }}>Phone</Text>
                    <TextInput placeholder="Enter phone" style={styles.formTextInput} onChangeText={(text) => setPhone(text)} defaultValue={item.phone}></TextInput>
                </View>
                <View style={styles.formTitle}>
                    <Text style={{ paddingBottom: 5, fontSize: 16, color: 'black', paddingLeft: 20 }}>Address</Text>
                    <TextInput placeholder="Address" style={styles.formTextInput} onChangeText={(text) => setAddress(text)} defaultValue={item.address}></TextInput>
                </View>
                <View style={styles.formTitle}>
                    <Text style={{ paddingBottom: 5, fontSize: 16, color: 'black', paddingLeft: 20 }}>Birthday</Text>
                    <TextInput placeholder="Birthday" style={styles.formTextInputC} onChangeText={(text) => setBirthday(text)} defaultValue={item.birthday}></TextInput>
                </View>
            </View>
            <TouchableOpacity style={{ marginVertical: 20 }} onPress={() => { hundleRegister() }}>
                <Text style={styles.save}>Lưu</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#f7f8fa'
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleHeaderICon: {
        color: 'black',
        fontSize: 35,
        paddingTop: 5,
        justifyContent: 'center'
    },
    form: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10
    },
    formTitle: {
        marginBottom: 10
    },
    formTextInput: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        color:'black'
    },
    formTextInputC:{
        borderBottomWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingBottom:20,
        color:'black'
    },
    save: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'orange'
    }

})

export default EditProfile;