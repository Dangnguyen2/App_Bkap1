import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from "react";



export const AuthContext = createContext({});

const AuthProvider = ({ children, navigation }: any) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // const [notes, setNotes] = useState([]);

    const register =  (name: string, email: string, phone: string, address: string, birthday: string, password: string) => {
        setIsLoading(true);
        axios.post('http://192.168.1.103/api/users', { name, email, phone, address, birthday, password })
            .then(res => {
                let userInfo = res.data.result;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                navigation.navigate('Login');
                setIsLoading(false);
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
            });
    }

    // const login = (email: string, password: string) => {
    //     setIsLoading(true);
    //     axios.post(`http://192.168.1.103:19776/api/Account/login`, { email, password })
    //         .then((res) => {
    //             let userInfo = res.data;
    //             // console.log(userInfo);
    //             setUserInfo(userInfo);
    //             AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    //             setIsLoading(false);

    //         })
    //         .catch((e) => {
    //             console.log(`login error ${e}`);
    //             setIsLoading(true);
    //         });
    // }
    const Logout = () => {
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
    }
    // const getNotes = async () =>{
    //     const result = await AsyncStorage.getItem('userInfo');

    //     if(result !== null){
    //         setUserInfo(JSON.parse(result));
    //     }
    // }

    // useEffect(()=>{
    //     getNotes();
    // })

    return (
        <AuthContext.Provider value={{
            isLoading,
            userInfo,
            register,
            // getNotes,
            setUserInfo,
            Logout,
        }}>{children}</AuthContext.Provider>
    )
}


export default AuthProvider;