import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const MyAccountScreen = ()=>{
    return(
       <>
            <View style={{paddingHorizontal:15}}>
                <View style={{paddingTop:15}}>
                    <Text style={{color:'black',fontSize:18,textAlign:"center"}}>MyLV</Text>
                </View>
                <View style={{padding:50}}>
                    <Text style={{ alignItems:'center', bottom:20,right:50,}}>Welcome</Text>
                </View>

                <View >
                    <View style={{flexDirection:"row",paddingTop:5,borderBottomWidth:0.3,height:50}}>
                        <View style={{flexDirection:"row"}}>
                        <AntDesign name="user" style={{fontSize:20,color:'black'}}></AntDesign>
                        <Text style={{color:'black',paddingLeft:15}}>My info</Text>
                        </View>
                        <AntDesign name="right" style={{fontSize:16,color:'black',paddingLeft:255}}></AntDesign>
                    </View>
                </View>
                <View style={{paddingTop:20}}>
                    <View style={{flexDirection:"row",paddingTop:5,borderBottomWidth:0.3,height:50}}>
                        <View style={{flexDirection:"row"}}>
                        <AntDesign name="customerservice" style={{fontSize:20,color:'black'}}></AntDesign>
                        <Text style={{color:'black',paddingLeft:15}}>My care services</Text>
                        </View>
                        <AntDesign name="right" style={{fontSize:16,color:'black',paddingLeft:200}}></AntDesign>
                    </View>
                </View>
                <View style={{paddingTop:20}}>
                    <View style={{flexDirection:"row",paddingTop:5,borderBottomWidth:0.3,height:50}}>
                        <View style={{flexDirection:"row"}}>
                        <Icon name="cube-outline" style={{fontSize:20,color:'black'}}></Icon>
                        <Text style={{color:'black',paddingLeft:15}}>My orders</Text>
                        </View>
                        <AntDesign name="right" style={{fontSize:16,color:'black',paddingLeft:240}}></AntDesign>
                    </View>
                </View>
                <View style={{paddingTop:20}}>
                    <View style={{flexDirection:"row",paddingTop:5,borderBottomWidth:0.3,height:50}}>
                        <View style={{flexDirection:"row"}}>
                        <Icon name="bookmark-outline" style={{fontSize:20,color:'black'}}></Icon>
                        <Text style={{color:'black',paddingLeft:15}}>My wishlist</Text>
                        </View>
                        <AntDesign name="right" style={{fontSize:16,color:'black',paddingLeft:235}}></AntDesign>
                    </View>
                </View>
                <View style={{paddingTop:20}}>
                    <View style={{flexDirection:"row",paddingTop:5,borderBottomWidth:0.3,height:50}}>
                        <View style={{flexDirection:"row"}}>
                        <FontAwesome name="connectdevelop" style={{fontSize:20,color:'black'}}></FontAwesome>
                        <Text style={{color:'black',paddingLeft:15}}>Connectivity</Text>
                        </View>
                        <AntDesign name="right" style={{fontSize:16,color:'black',paddingLeft:225}}></AntDesign>
                    </View>
                </View>
                <View style={{paddingTop:20}}>
                    <View style={{flexDirection:"row",paddingTop:5,height:50}}>
                        <View style={{flexDirection:"row"}}>
                        <AntDesign name="setting" style={{fontSize:20,color:'black'}}></AntDesign>
                        <Text style={{color:'black',paddingLeft:15}}>Help</Text>
                        </View>
                        <AntDesign name="right" style={{fontSize:16,color:'black',paddingLeft:275}}></AntDesign>
                    </View>
                </View>

            </View>
       </>
    )
}


export default MyAccountScreen;