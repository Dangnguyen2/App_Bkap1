import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderMyAccount from "./HeaderMyAccount";
const MyWishlist = ()=>{

    const listPro = [
        {id:1, name:'product'},
        {id:2, name:'product'},
        {id:3, name:'product'},
        {id:4, name:'product'},
        
    ]

    return (
        <>
        <HeaderMyAccount icon1="chevron-back-outline" title="My wishlist" icon2="share-outline"></HeaderMyAccount>
        <View style={{paddingHorizontal:15,padding:30,backgroundColor:'#edede9'}}>
            <Text>4 products</Text>
        </View>
        <View style={styles.container}>
        <FlatList
            scrollEnabled={false}
            data={listPro}
            numColumns={2}
            columnWrapperStyle={styles.row}
                renderItem={(item)=>
                    <View style={styles.item}>
                        <View >
                            <View style={styles.sale}>
                                <Entypo name="dots-three-horizontal" style={{color:'black',textAlign:'center',fontSize:13}}></Entypo>
                            </View>
                            <Image source={require('../../../assets/Products/ImgProduct2.jpg')} style={{width:'100%',height:180}}/>
                            
                        </View>
                        <View style={{paddingVertical:4,borderTopWidth:2,width:60}}>
                        </View>
                        <Text style={styles.dess_text}>Giày thể thao LV Stake</Text>
                    </View>
            }
        />

        </View>
        
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    row:{
        flex:1,
        justifyContent:'space-between'
    },
    item:{
        width:'50%',
    },
   
    dess_text:{
        paddingHorizontal:15,
        color:'black',
        textAlign:'left',
        paddingBottom:15
    },
    sale:{
        width:35,
        height:35,
        borderRadius:50,
        padding:7,
        position:'absolute',
        top:10,
        right:10,
        zIndex:1000,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default MyWishlist;