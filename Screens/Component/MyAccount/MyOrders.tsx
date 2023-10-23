import React from "react";
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HeaderMyAccount from "./HeaderMyAccount";
const MyOrders = ()=>{
    return (
        <>
        <HeaderMyAccount icon1="chevron-back-outline" title="My orders" icon2=""></HeaderMyAccount>
        <View style={{paddingHorizontal:15,padding:30,backgroundColor:'#edede9',height:'100%'}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:'black',fontSize:18}}>My orders</Text>
                <SimpleLineIcons name="pencil" style={{fontSize:15}}></SimpleLineIcons>
            </View>
                <View style={styles.form}>
                    <View style={styles.group}>
                        <Text style={{paddingBottom:10,color:'black'}}>Product1</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={{paddingBottom:10,color:'black'}}>Product2</Text>
                    </View>
                </View>
           
            
                
            <TouchableOpacity style={styles.btn}>
                <Text style={{color:'#ffffff',fontSize:17}}>Discover product selection</Text>
            </TouchableOpacity>

        </View>
        
        
        </>
    )
}
const styles = StyleSheet.create({
    form:{
        padding:5,
        backgroundColor:'white',
        marginTop:20,
        paddingHorizontal:30
    },
    group:{
        marginTop:15,
    },
    btn:{
        padding:20,
        marginTop:25,
        marginBottom:30,
        // fontSize:10000,
        backgroundColor:'black',
        paddingVertical:20,
        alignItems:'center',
    }
})
export default MyOrders;