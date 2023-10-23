import React from "react";
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HeaderMyAccount from "./HeaderMyAccount";
const MyInfo = ()=>{
    return (
        <>
        <HeaderMyAccount icon1="chevron-back-outline" title="My Info" icon2=""></HeaderMyAccount>
        <View style={{paddingHorizontal:15,padding:30,backgroundColor:'#edede9'}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:'black',fontSize:18}}>My profile</Text>
                <SimpleLineIcons name="pencil" style={{fontSize:15}}></SimpleLineIcons>
            </View>
                <View style={styles.form}>
                    <View style={styles.group}>
                        <Text style={{paddingBottom:10,color:'black'}}>First Name</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={{paddingBottom:10,color:'black'}}>Last Name</Text>
                    </View>
                </View>
           
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:50}}>
                <Text style={{color:'black',fontSize:18}}>Login information</Text>
                {/* <SimpleLineIcons name="pencil" style={{fontSize:17}}></SimpleLineIcons> */}
            </View>
                <View style={styles.form}>
                    <View style={styles.group}>
                        <Text style={{paddingBottom:10,color:'black'}}>Email</Text>
                    </View>
                    <View style={styles.groupasus}>
                        <Text style={{paddingBottom:10,color:'black'}}>Password</Text>
                        <Text style={{fontSize:40,top:-30,right:-30}}>.............</Text>
                        <SimpleLineIcons name="pencil" style={{fontSize:15,color:'black'}}></SimpleLineIcons>
                    </View>
                </View>

                <View >
                <Text style={{paddingTop:50,color:'black',fontSize:18}}>Notifications</Text>
                <Text style={{paddingTop:10}}>You can manually allow or disable this Application notifications.</Text>
                </View>
                
            <TouchableOpacity style={styles.btn}>
                <Text style={{color:'#ffffff',fontSize:17}}>Enable notifications</Text>
            </TouchableOpacity>

            <View >
                <Text style={{paddingTop:20,textAlign:"center",color:'black'}}>Delete my account</Text>
            </View>
        </View>
        
        
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        // flex:1,
        backgroundColor:'#f3ffbd',
    },
    form:{
        padding:5,
        backgroundColor:'white',
        marginTop:20,
        paddingHorizontal:30
    },
    group:{
        marginTop:15,
    },
    groupasus:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15,
    },
    ip:{
        borderWidth:0.2,
        backgroundColor:'#fff',
        borderColor:'grey',
        paddingLeft:20
    },
    icon:{
        fontSize:20,
        position:'absolute',
        top:10,
        zIndex:1000
    },
    group1:{
        marginTop:20,
        marginBottom:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
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
export default MyInfo;