import React, { useContext, useEffect, useRef, useState } from "react";
import { SafeAreaView, Image, Text, TouchableOpacity, View, Button, StyleSheet, StatusBar, Animated } from "react-native";

import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";
import { UserContext } from "../../../context/UserProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }: any) => {
    const { Logout, user }: any = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [id, setId] = useState('');
    // console.log('data id '+id); 
    let data: any;
    axios.get('http://172.16.0.37:3000/api/users/'+ `?email=${email}`)
        .then((res) => {
            console.log(res.data);
            data = res.data;
            setId(data.data.id);
            setName(data.data.name);
            setEmail(data.data.email);
        })
        .catch((e) => {
            console.log(`login error ${e}`);
        });

    const handleLogout = () => {
        Logout();
        navigation.navigate('Login')
    }
    // console.log('usestate username '+userName);

    useEffect(() => {
        axios
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'#D3D3D3'} barStyle={"light-content"} />
            <View style={styles.titleHeader}>
                <View style={styles.titleHeaderTextProfile}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Icon name="chevron-small-left" style={styles.titleHeaderICon} />
                    </TouchableOpacity>
                    <Text style={styles.titleHeaderTextProfileText}>Tài khoản người dùng</Text>
                </View>
                <View style={styles.headerImage}>
                    <Image source={require("../../../assets/image/avatar1.jpg")} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <Text style={{ color: 'black', fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>{name ? name: ''}</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomProfile}>
                    <TouchableOpacity style={styles.bottomProfileLeft} onPress={() => navigation.navigate('EditProfile', { data })}>
                        <Icons name="user-circle" style={styles.titleHeaderIConUserP} />
                        <Text style={styles.bottomProfileLeftText}>Sửa trang người dùng</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomProfileRight}>
                        <Icon name="chevron-small-right" style={styles.titleHeaderICon} />
                    </View>
                </View>
                {/* <View style={styles.bottomProfile}>
                    <TouchableOpacity style={styles.bottomProfileLeft} onPress={() => navigation.navigate('OrderHistory')}>
                        <Iconss name="clipboard-list" style={styles.titleHeaderIConUserH} />
                        <Text style={styles.bottomProfileLeftText}>Lịch sử đơn hàng</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomProfileRight}>
                        <Icon name="chevron-small-right" style={styles.titleHeaderICon} />
                    </View>
                </View> */}
                {/* <View style={styles.bottomProfile}>
                    <TouchableOpacity style={styles.bottomProfileLeft} onPress={() => navigation.navigate('Order')}>
                        <Iconss name="luggage-cart" style={styles.titleHeaderIConUser} />
                        <Text style={styles.bottomProfileLeftText}>Đơn hàng</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomProfileRight}>
                        <Icon name="chevron-small-right" style={styles.titleHeaderICon} />
                    </View>
                </View> */}
                {/* <View style={{ top: '20%' }}>
                    <Button title="Logout" onPress={() => { handleLogout() }} />
                </View> */}
                <TouchableOpacity style={{marginTop:30}} onPress={() => { handleLogout() }}>
                    <Text style={styles.buttonText}>Đăng Xuất</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3ffbd',
        flex: 1,

    },
    titleHeader: {
        paddingHorizontal: 15,
        marginTop: 30
    },
    titleHeaderTextProfile:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30
    },
    titleHeaderTextProfileText:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:50
    },
    headerImage: {
        alignItems: 'center',

    },
    titleHeaderICon: {
        color: 'black',
        fontSize: 35,
        paddingTop: 5,
        justifyContent: 'center'
    },
    titleHeaderIConUser: {
        fontSize: 25,
        color: 'black',
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ffff',
        borderRadius: 10

    },
    titleHeaderIConUserP:{
        fontSize: 25,
        color: 'black',
        padding: 9,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ffff',
        borderRadius: 10
    },
    titleHeaderIConUserH:{
        fontSize: 25,
        color: 'black',
        paddingHorizontal:12,
        paddingVertical:8,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ffff',
        borderRadius: 10
    },
    titleHeaderText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bottom: {
        backgroundColor: '#f3ffbd',
        flex: 2,
        top: '5%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 15
    },
    bottomProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    bottomProfileLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomProfileLeftText: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 20
    },
    bottomProfileRight: {},
    buttonText:{
        color:'white',
        backgroundColor:'black',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:10
    }
})

export default Profile;