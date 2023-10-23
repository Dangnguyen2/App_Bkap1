import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Component/Home/HomeScreen';
import ExploreScreen from '../Screens/Component/Home/ExploreScreen';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import MyLV from '../Screens/Component/Login/MyLV';
import ServicesScreen from '../Screens/Component/Home/ServicesScreen';
import ListProductScreen from '../Screens/Component/Product/ListProductScreen';
import CartScreens from '../Screens/Component/cart/CartScreens';
import Profile from '../Screens/Component/Login/Profile';

const Tab = createBottomTabNavigator(); 
export const Tabs = ()=>{
    return (
    <Tab.Navigator  screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#ffdc5e',
        // tabBarActiveBackgroundColor:'yellow',
        // tabBarShowLabel:false,
        tabBarStyle:{
                position:'absolute',
                // elevation:0,
                // borderRadius:15,
                // height:90,
                backgroundColor:'black',
                // borderStyle:'groove',
                ... styles.shadow
                },
            tabBarIconStyle:{
                // display:'none'
            }
            }
        }
        >
        
        <Tab.Screen name="Homescreen" component={HomeScreen} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:15}}>
                    <Image source={require('../assets/iconHome.png')}
                    resizeMode='contain'
                    style={{
                        paddingHorizontal:50,
                        width:25,
                        height:25,
                        marginBottom:20,
                        tintColor:focused ? '#ffdc5e' : '#ffffff'
                    }}
                    />
                </View>
            )
            }}/>
            <Tab.Screen name='ListPro' component={ListProductScreen} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:15}}>
                    <Image source={require('../assets/iconExplore.png')}
                    resizeMode='contain'
                    style={{
                        paddingHorizontal:50,
                        width:15,
                        height:15,
                        marginBottom:20,
                        tintColor:focused ? '#ffdc5e' : '#ffffff'
                    }}
                    />
                    {/* <Text style={{color:focused?'#e32f45':'#748c94',fontSize:12}}>Explore</Text> */}
                </View>
            )
            }}/>
        <Tab.Screen name='Cart' component={CartScreens} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:15}}>
                    <Image source={require('../assets/iconService.png')}
                    resizeMode='contain'
                    style={{
                        paddingHorizontal:50,
                        width:25,
                        height:25,
                        marginBottom:20,
                        tintColor:focused ? '#ffdc5e' : '#ffffff'
                    }}
                    />
                </View>
            )
            }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:15}}>
                    <Image source={require('../assets/LogoLV.png')}
                    resizeMode='contain'
                    style={{
                        paddingHorizontal:50,
                        width:35,
                        height:35,
                        marginBottom:20,
                        tintColor:focused ? '#ffffff' : '#ffffff'
                    }}
                    />
                </View>
            )
            }}/>
        
        
    </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow:{
        fontSize:30,
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})
export default Tabs;

