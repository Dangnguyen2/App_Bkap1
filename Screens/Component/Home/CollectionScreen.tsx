import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const CollectionScreen = ({navigation}:any)=>{
    return(
       <>
        <TouchableOpacity style={styles.btn_add} onPress={()=>navigation.goBack()}>
            <Icon name="close-outline" size={26} color="#ffffff"  />
            </TouchableOpacity>

       <ScrollView>
            <View >
                <View style={styles.btn_logo1}>
                    <Text style={{color:'#ffffff',fontSize:30,textAlign:"center"}}>The GO-14</Text>
                </View>
                <Image source={require('../../../assets/Collection/Collection6.gif')} style={{width:'100%',height:600}}></Image>
            </View>
            <View style={styles.btn_sotre}>
                    <Text style={{fontSize:15,color:'black',textAlign:"center",paddingTop:50}}>Reminiscent of Nicolas Ghesquiere's first Louis Vuitton fashion show in October 2014, the GO-14 takes ít name from this debut moment and the tailblazing spirit of the Maison. Exclusively available in Louis Vuitton stores.</Text>
                    <TouchableOpacity style={styles.btn}>
                            <Text style={{color:'#ffffff',fontSize:17}}>Locate a store</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1}>
                            <Text style={{color:'#ffffff',fontSize:17}}>Contact a client advisor</Text>
                        </TouchableOpacity>
                </View>
                <View >
                    <Image source={require('../../../assets/Collection/Collection2.png')} style={{width:'100%',height:600}}></Image>
                </View>
                <View style={styles.btn_sotre1}>
                    <Image source={require('../../../assets/Collection/Collection7.png')} style={{width:'100%',height:400}}></Image>
                    <Text style={{fontSize:22,color:'black',paddingTop:70,fontWeight:"bold"}}>Savoir-faire</Text>
                    <Text style={{fontSize:15,color:'black',paddingTop:10,textAlign:"center"}}>Form the lambskin leather and gilded finishes to the bag's quilted exterior and refined interior details, the GO-14  calls on the expertise and savoir-faire of Louis Vuitton's ateliers - perpetuating the Maison's long tradition of leatherworking craftsmanship.</Text>
                    <TouchableOpacity style={styles.btn}>
                            <Text style={{color:'#ffffff',fontSize:17}}>Learn more</Text>
                        </TouchableOpacity>
                </View>
                <View >
                    <Image source={require('../../../assets/Collection/Collection3.png')} style={{width:'100%',height:600}}></Image>
                </View>
                <View style={styles.btn_sotre1}>
                    <Text style={{fontSize:15,color:'black',paddingTop:10,textAlign:"center"}}>Unveriled in large, medium, and mini sizes, the GO-14 is a versatile model that can be worn in multiple different ways, bringing its unique elegance to all aspects of everyday life.</Text>
                </View>
                <View >
                    <Image source={require('../../../assets/Collection/Collection4.png')} style={{width:'100%',height:500}}></Image>
                </View>
                <View style={styles.btn_sotre1}>
                    <Image source={require('../../../assets/Collection/Collection5.png')} style={{width:'100%',height:400}}></Image>
                    <Text style={{fontSize:22,color:'black',paddingTop:70,fontWeight:"bold"}}>Caring for Your GO-14</Text>
                    <Text style={{fontSize:15,color:'black',paddingTop:10,textAlign:"center"}}>An emblem of exceptional craftsmanship - the GO-14 embodies the Maison's commitment to longevity as a creation that withstands the test of time. To preserve your GO-14, as a courtery, Louis Vuitton offers multiple care, repairing, and restoring services carried out by a trusted team of experts.</Text>
                    <TouchableOpacity style={styles.btn}>
                            <Text style={{color:'#ffffff',fontSize:17}}>Contact a client advisor</Text>
                        </TouchableOpacity>
                </View>
                <View >
                <TouchableOpacity>
            <View >
                <View style={styles.btn_logo2}>
                    <Text style={{color:'#ffffff',fontSize:30,textAlign:"center"}}>Discover the GO-1 in Stores</Text>
                    <Entypo name="chevron-with-circle-right" style={styles.icon1_logo}> </Entypo>
                </View>
                <Image source={require('../../../assets/Collection/Collection6.gif')} style={{width:'100%',height:800}}></Image>
            </View>
            </TouchableOpacity>
            </View>
       </ScrollView>
       </>
    )
}
const styles = StyleSheet.create({
    btn_logo1:{
        alignItems:"center",
        paddingHorizontal:50,
        position:"absolute",
        zIndex:1000,
        top:150,
        right:65,
        padding:130,
    },
    btn_logo2:{
        alignItems:"center",
        paddingHorizontal:50,
        position:"absolute",
        zIndex:1000,
        top:180,
        right:15,
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
    btn_sotre:{
        paddingHorizontal:15,
        // padding:10,
        alignItems:"center"
    },
    btn_sotre1:{
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:30,
        alignItems:"center"
    },
    btn:{
        width:'100%',
        padding:20,
        marginTop:30,
        marginBottom:30,
        backgroundColor:'black',
        paddingVertical:20,
        alignItems:'center',
        borderRadius:3
    },
    btn1:{
        width:'100%',
        marginBottom:60,
        backgroundColor:'black',
        paddingVertical:20,
        alignItems:'center',
        borderRadius:3
    },
    btn_add:{
        width:50,
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        position:'absolute',
        zIndex:1000,
        top:20,
        right:20,
    }
   
})

export default CollectionScreen;