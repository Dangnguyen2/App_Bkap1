import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type HeaderProps = {
    icon1:string,
    icon2:string,
    title:string
}
const HeaderMyAccount = ({icon1,icon2,title}:HeaderProps)=>{
    
    return(
       <>
            <View style={{paddingTop:15,paddingBottom:15}}>
            <View style={{paddingHorizontal:15}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:5}}>
                    <TouchableOpacity>
                        <Icon name={icon1} size={25} color="black" />
                    </TouchableOpacity>
                    <Text style={{color:'black',fontSize:18}}>{title}</Text>
                    <MaterialCommunityIcons name={icon2} size={25} color="black"  />
                </View>
                

            </View>
            </View>
       </>
    )
}


export default HeaderMyAccount;