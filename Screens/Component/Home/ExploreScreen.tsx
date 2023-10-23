import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
const ExploreScreen = ({navigation}:any)=>{
    return(
       <>
       <ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate('Collection')}>
            <View>
                <View style={styles.btn_logo1}>
                    <Text style={{color:'#ffffff',fontSize:30,textAlign:"center"}}>The GO-14</Text>
                    <Entypo name="chevron-with-circle-right" style={styles.icon1_logo}> </Entypo>
                </View>
                <Image source={require('../../../assets/Explore.gif')} style={{width:'100%',height:800}}></Image>
            </View>
            </TouchableOpacity>

       </ScrollView>
       </>
    )
}
const styles = StyleSheet.create({
    btn_logo1:{
        alignItems:"center",
        // borderWidth:3,
        // paddingVertical:50,
        paddingHorizontal:50,
        // textAlign:"center",
        position:"absolute",
        zIndex:1000,
        top:150,
        right:65,
        padding:130,
    },
    icon1_logo:{
        alignItems:"center",
        color:'#ffffff',
        fontSize:50,
        textAlign:"center",
        paddingTop:20,
        marginLeft:20
    },
   
})

export default ExploreScreen;