import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext<any>({});
const UserProvider = ({ children }: any) =>{
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState('');
    const getUser = async () =>{
        const result = await AsyncStorage.getItem('users');
        if (result !== null){
            setUser(JSON.parse(result));
        }
    }
    
    const Logout = async () =>{
        await AsyncStorage.removeItem('users');
        setUser('');
    }
    useEffect(()=>{
        getUser();
    },[]);
    return (
        <UserContext.Provider value={{ user, setUser, getUser, Logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;