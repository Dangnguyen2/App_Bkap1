import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const ServicesScreen = ()=>{
    return(
       <>
       <ScrollView>
            <View style={{padding:5}}>
                <View style={{alignItems:"center",paddingTop:5}}>
                    <Text style={{color:'black',fontSize:18}}>Services</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:15}}>
                    <Text style={{fontSize:25,color:"black",paddingTop:40}}>Hello,</Text>
                    <Text style={{fontSize:14,paddingTop:20,color:'black'}}>Welcome to LV App Services. Discover in-app exclusivers, connect with our Client Services team, and explore our FAQ page.</Text>
            </View>
            <View style={{paddingTop:30}}>
                <View style={styles.btn_logo1}>
                    <Text style={{color:'#ffffff',fontSize:15,textAlign:"center"}}>Online or in store</Text>
                    <Text style={{color:'#ffffff',fontSize:20,textAlign:"center",paddingTop:10}}>Book an Appointment</Text>
                    <Entypo name="chevron-with-circle-right" style={styles.icon1_logo}> </Entypo>
                </View>
                <Image source={require('../../../assets/Services/ImgServices1.png')} style={{width:'100%',height:500}}></Image>
            </View>
          
            <View style={{paddingHorizontal:15}}>
                    <Text style={{fontSize:25,color:"black",paddingTop:40}}>Louis Vuitton Services</Text>
                    <Text style={{fontSize:14,paddingTop:20,color:'black'}}>From personalization to gift wrapping, explore a selection of tailor-made services.</Text>
            </View>
            <View style={{paddingTop:30}}>
                <Image source={require('../../../assets/Services/ImgServices2.png')} style={{width:'100%',height:350}}></Image>
            </View>

            <View style={{paddingHorizontal:15}}>
                    <Text style={{fontSize:14,color:"black",paddingTop:40}}>Personalization</Text>
                    <Text style={{fontSize:14,paddingTop:20,width:390,color:'black'}}>As an integral part of the Maison's heritage, Louis Vuitton's personalization offer spans a wide range of services to tranform your product into an entirely unique piece</Text>
            </View>
            <View style={{paddingTop:40}}>
                <Image source={require('../../../assets/Services/ImgServices3.png')} style={{width:'100%',height:350}}></Image>
            </View>
            <View style={{paddingHorizontal:15,paddingBottom:70}}>
                    <Text style={{fontSize:14,color:"black",paddingTop:40}}>Art of Gifting</Text>
                    <Text style={{fontSize:14,paddingTop:20,color:'black'}}>Louis Vuitton offers complementary wrapping on all orders, carefully packaged in the Maison's iconic boxes. Add a special touch with a personal note when sending a gift.</Text>
                    <Text style={{fontSize:25,color:"black",paddingTop:50}}>How may we help you?</Text>
                    <Text style={{fontSize:14,paddingTop:15,color:'black'}}>Connect with a Client Advisor, see our FAQ page, or discover our Care Services.</Text>
                <View>
                    <View style={{padding:20,flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.5}}>
                        <Text style={{fontSize:14,color:"black"}}>Contact us</Text>
                        <Icon name="chevron-forward" style={{fontSize:14,color:"black",marginTop:5}}></Icon>
                    </View>
                    <View style={{padding:20,flexDirection:"row",justifyContent:"space-between",borderBottomWidth:0.5}}>
                        <Text style={{fontSize:14,color:"black"}}>FAQ</Text>
                        <Icon name="chevron-forward" style={{fontSize:14,color:"black",marginTop:5}}></Icon>
                    </View>
                    <View style={{padding:20,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:14,color:"black"}}>Care services</Text>
                        <Icon name="chevron-forward" style={{fontSize:14,color:"black",marginTop:5}}></Icon>
                    </View>
                </View>
            </View>

            
       </ScrollView>
       </>
    )
}
const styles = StyleSheet.create({
    btn_logo1:{
        paddingHorizontal:50,
        alignItems:"center",
        position:"absolute",
        zIndex:1000,
        top:70,
        right:50,
        padding:130,
    },
    icon1_logo:{
        alignItems:"center",
        color:'#ffffff',
        fontSize:50,
        textAlign:"center",
        paddingTop:20,
        marginLeft:20
    }
})

export default ServicesScreen;