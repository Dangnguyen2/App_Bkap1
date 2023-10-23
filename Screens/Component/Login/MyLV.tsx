import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
const MyLV = ({navigation}:any)=>{
    return(
        <>
          <ScrollView>
          <View style={styles.container}>
                <View style={{paddingTop:40,height:100,alignItems:"center"}}>
                    <Text style={{fontSize:23,color:'black'}}>Welcome to your Account</Text>
                </View>
                <View style={styles.form}>
                <Text style={{textAlign:"center",color:'black'}}>Please connect or create an account</Text>
                    <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('Login')}>
                        <Text style={{color:'#ffffff'}}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnRegister} onPress={()=>navigation.navigate('Register')}>
                        <Text style={{color:'black'}} >Create an account</Text>
                    </TouchableOpacity>

                    <View style={styles.group1}>
                        <View style={{alignItems:"center"}}>
                            <TouchableOpacity onPress={()=>Alert.alert('Discover Account Benefits')}>
                            <Text style={{color:'black',borderBottomWidth:1,fontSize:15}}>Discover Account Benefits</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
                    <View style={{marginTop:20,flexDirection:"row",justifyContent:"space-between",backgroundColor:'white'}}>
                        <Image source={require('../../../assets/ImgMylV.png')} style={{width:100,height:100}}></Image>
                        <Text style={{color:'black',paddingTop:32,width:200,paddingLeft:10}}>Discover & pair Louis Vuitton Connected Objects </Text>
                        <Icon name="chevron-forward" style={{fontSize:14,color:"black",paddingTop:45,paddingRight:20}}></Icon>
                    </View>
            </View>
            
          </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        paddingTop:40,
        paddingBottom:200,
        paddingHorizontal:20,
        // flex:1,
        backgroundColor:'#f3ffbd',
    },
    form:{
        padding:30,
        backgroundColor:'white',
        // marginTop:40,
        paddingHorizontal:30
    },

    group1:{
        alignItems:'center',
    },
    
    btnLogin:{
        padding:20,
        marginTop:25,
        marginBottom:20,
        backgroundColor:'black',
        paddingVertical:20,
        alignItems:'center',
    },
    btnRegister:{
        marginBottom:30,
        borderWidth:1,
        paddingVertical:20,
        alignItems:'center',
    }
})
export default MyLV;