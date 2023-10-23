import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Footer = ()=>{
    return(
        <>
        <View >
            <View style={styles.container1}>
                <View style={styles.form1}>
                    <Text style={{fontWeight:'bold',textTransform:'uppercase',fontSize:23,color:'black'}}>what you'll find in your lv account</Text>
                    <View style={styles.group2}>

                        <View style={{borderBottomWidth:0.3,height:45}}>
                            <Icon name="bag-handle-outline" style={styles.icon} />
                            <Text style={styles.ip1}>Access yout order history</Text>
                        </View>

                    </View>
                    <View style={styles.group2}>
                        <View style={{borderBottomWidth:0.3,height:55}}>
                        <Icon name="card-outline" style={styles.icon} />
                        <Text style={styles.ip1}>Manager your personal infromation</Text>
                        </View>
                    </View>
                    <View style={styles.group2}>
                    <View style={{borderBottomWidth:0.3,height:60}}>
                        <SimpleLineIcons name="envelope-letter" style={styles.icon} />
                        <Text style={styles.ip1}>Receive Louis Vuitton's digital communications</Text>
                        </View>
                    </View>
                    <View style={styles.group2}>
                        <Icon name="heart-outline" style={styles.icon} />
                        <Text style={styles.ip1}>Register your wishlist</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container2}> 
                <Text style={{fontSize:15,paddingTop:15,fontWeight:"bold",color:'black'}}>Client Services</Text>
                <View style={styles.group2}>
                    <SimpleLineIcons name="envelope-letter" style={styles.icon} />
                    <Text style={styles.ip2}>Email Us</Text>
                </View>
            </View>
        </View>
            </>
    )
}

const styles = StyleSheet.create({
    container1:{
        paddingHorizontal:20,
        backgroundColor:'white',
    },
    container2:{
        marginTop:20,
        paddingHorizontal:30,
        backgroundColor:'#ede7b1',
    },
    form1:{
        padding:20,
        backgroundColor:'#f3ffbd',
        marginTop:40,
        paddingHorizontal:30

    },
    group2:{
        marginTop:15,
        // borderBottomWidth:1
    },
    ip1:{
        paddingLeft:40,
        paddingTop:10,
        color:'black'
    },
    ip2:{
        paddingLeft:40,
        paddingTop:10,
        paddingBottom:20,
        color:'black'
    },
    icon:{
        fontSize:20,
        position:'absolute',
        top:10,
        zIndex:1000,
        color:'black'
    },
   
})
export default Footer;