import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}:any)=>{
    return(
        <View style={{padding:5}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={25} color="black" style={{paddingTop:5}} />
                </TouchableOpacity>
                <Image source={require('../../../assets/LogoLV.png')} style={{width:120,height:'100%'}}></Image>
                <Icon name="" size={30} color="black" />
            </View>
        </View>
    )
}

export default Header;