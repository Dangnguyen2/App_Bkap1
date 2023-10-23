import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useCartContext } from "../../../context/CartProvider";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListProductScreen = ({ route, navigation }: any) => {

    // const { item } = route.params;
    const { cart, setCartStorageFromCart, getCart, setCartStorageFromDetail, totalPrice, calcTotalPrice }: any = useCartContext();
    const [listpro, setpro] = useState([]);
    const [listpro1, setpro1] = useState([]);
    const [listcat, setcat] = useState([]);
    const [prod, setProd] = useState([]);
    const [prod1, setProd1] = useState([]);
    const [cate, setCate] = useState([]);
    const [search, setSearch] = useState('');
    const [visible, setVisible] = useState(false);
    const [selectCat, setSelectCat] = useState('Select Category');
    const [isClick, setIsClick] = useState(false);

    const getApi = async () => {
        return fetch('http://172.16.0.37:3000/api/products').
            then((response) => response.json())
            .then((data) => {
                setpro(data.result);
                setProd(data.result);
            })
            .catch(err => console.log(err))

    }
    const getApi2 = async () => {
        return fetch('http://172.16.0.37:3000/api/products1').
            then((response) => response.json())
            .then((data) => {
                setpro1(data.result);
                setProd1(data.result);
            })
            .catch(err => console.log(err))

    }
    const getApi1 = async () => {
        return fetch('http://172.16.0.37:3000/api/category').
            then((response) => response.json())
            .then((data) => {
                console.log(data.result);
                setcat(data.result);
                setCate(data.result);
            })
            .catch(err => console.log(err))

    }
    const searchFilterFunction = (text: any) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = listpro.filter(function (item: any) {
                const itemData = item.prodname ? item.prodname.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                console.log(itemData.indexOf(textData))
                return itemData.indexOf(textData) > -1;
            });
            setProd(newData);
            setSearch(text);
        }
        else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setProd(listpro);
            setSearch(text);
        }
    };
    // const searchFilterCat = (text: any) => {
    //     // Check if searched text is not blank
    //     if (text) {
    //         // Inserted text is not blank
    //         // Filter the masterDataSource
    //         // Update FilteredDataSource
    //         const newData = listpro1.filter(function (item: any) {
    //             const itemData = item.category.cate_name ? item.category.cate_name.toUpperCase() : ''.toUpperCase();
    //             const textData = text.toUpperCase();
    //             console.log(itemData.indexOf(textData))
    //             return itemData.indexOf(textData) > -1;
    //         });
    //         setCate(newData);
    //         setSearch(text);
    //     }
    //     else {
    //         // Inserted text is blank
    //         // Update FilteredDataSource with masterDataSource
    //         setCate(listcat);
    //         setSearch(text);
    //     }
    // };
    useEffect(() => {
        getApi();
        getApi1();

    }, []);

    return (

        <ScrollView>
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'#ffffff'} barStyle={"dark-content"} />
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Iconn name="chevron-small-left" style={{ fontSize: 40, color: 'black' }}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <Icon name="cart-outline" size={30} style={{ fontSize: 35, color: 'black' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                        <Text style={{ fontSize: 30 , color: 'black',fontWeight:'bold' }}>Danh sách sản phẩm</Text>
                        {/* <Icon name="options-outline" style={{fontSize:30,color:'black'}}></Icon> */}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.search}>
                            <Icon name="search-outline" size={20} color="black" />
                            <TextInput style={styles.textinput} placeholder="Tìm kiếm..." placeholderTextColor={'black'} onChangeText={(text) => searchFilterFunction(text)} value={search}></TextInput>
                            {search == '' ? null : (
                                <TouchableOpacity onPress={() => searchFilterFunction('')}>
                                    <Icon name="close" size={30} />
                                </TouchableOpacity>
                            )}
                        </View>
                        <TouchableOpacity onPress={() => { setVisible(true) }}>
                            <Feather name="filter" size={30} style={{ paddingLeft: 10, paddingBottom: 20 }} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container1}>
                        <FlatList
                            scrollEnabled={false}
                            data={prod}
                            numColumns={2}
                            columnWrapperStyle={styles.row}
                            renderItem={({ item }: any) =>
                                <View style={styles.item}>
                                    {item.sale_price > 0 ?
                                        <View style={styles.sale}>
                                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 13 }}>{(100 - (item.sale_price / item.price * 100)).toFixed(0)}%</Text>
                                        </View>
                                        : <View ></View>
                                    }
                                    <TouchableOpacity onPress={() => { navigation.navigate('ProductDetail', { item }) }}>
                                        <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
                                    </TouchableOpacity>
                                    <View style={styles.dess}>
                                        {item.sale_price > 0 ?
                                            <Text style={styles.dess_text}><Text style={{ textDecorationLine: 'line-through', color: 'gray' }}>{item.price} VNĐ</Text> <Text style={{ color: 'red' }}> {item.sale_price} VNĐ</Text></Text>
                                            : <Text style={[styles.dess_text, { color: 'red' }]}> {item.price} VNĐ</Text>}<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#17202A', textAlign: 'center' }}>{item.prodname}</Text>


                                    </View>
                                </View>
                            }
                        />
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        setVisible(!visible);
                    }}>
                    <View style={styles.conModal}>
                        <View style={styles.modal}>
                            {/* <TouchableOpacity style={styles.select} onPress={() => setIsClick(!isClick)}>
                                <Text style={{ fontSize: 18, color: '#000' }}>{selectCat}</Text>
                                {isClick ? (
                                    <Icon name="chevron-up" size={20} style={{ paddingRight: 10 }} />
                                ) : (
                                    <Icon name="chevron-down" size={20} style={{ paddingRight: 10 }} />
                                )}
                            </TouchableOpacity>
                            {isClick ? <View style={styles.dropDown}>
                                <FlatList
                                    data={listcat}
                                    renderItem={({ item }: any) =>
                                        <TouchableOpacity style={styles.select}>
                                            <Text style={{ fontSize: 18, color: '#000' }}
                                                onPress={() => {
                                                    setSelectCat(item.categoryname);
                                                    setSearch(item.categoryname);
                                                    setIsClick(false);
                                                    setVisible(false);
                                                    searchFilterCat(item.categoryname)
                                                }}
                                            >{item.categoryname}</Text>
                                        </TouchableOpacity>
                                    }
                                />
                            </View> : null} */}
                            <TouchableOpacity style={styles.sort}
                                onPress={() => {
                                    let list = listpro.sort((a: any, b: any) => a.prodname > b.prodname ? 1 : -1,);
                                    setpro(list);
                                    setVisible(false);
                                }}>
                                <Text style={{ fontSize: 18, color: '#000' }}>Sắp xếp theo tên</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.sort}
                                onPress={() => {
                                    let list = listpro.sort((a: any, b: any) => a.sale_price - b.sale_price);
                                    setpro(list);
                                    setVisible(false);
                                }}>
                                <Text style={{ fontSize: 18, color: '#000' }}>Giá thấp đến cao</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.sort}
                                onPress={() => {
                                    let list = listpro.sort((a: any, b: any) => b.sale_price - a.sale_price);
                                    setpro(list);
                                    setVisible(false);
                                }}>
                                <Text style={{ fontSize: 18, color: '#000' }}>Giá cao đến thấp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setVisible(false)
                                }}>
                                <Icon name="close" size={25} style={styles.close} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

        </ScrollView>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFEFE',
        height: '100%',
        width: '100%',
        padding: 10,
        marginTop: 10
    },
    container1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    row: {
        flex: 1,
        justifyContent: 'space-between'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        marginTop:10
    },
    item: {
        width: '50%',
        padding: 10
    },
    dess: {
        // backgroundColor:'black',
        paddingVertical: 8
    },
    dess_text: {
        paddingHorizontal: 15,
        color: 'black',
        textAlign: 'center',
        paddingBottom: 15,

    },
    textinput: {
        width: '80%',
        color: 'black'
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ABB2B9',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom: 15,
    },
    sale: {
        width: 35,
        height: 35,
        color: 'black',
        borderRadius: 50,
        padding: 7,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',

    },
    conModal: {
        flex: 0.8,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0.5)',
    },
    modal: {
        width: '70%',
        height: 200,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    sort: {
        width: '100%',
        height: 50,
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        paddingLeft: 20
    },
    select: {
        width: '100%',
        height: 50,
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dropDown: {
        width: '90%',
        height: 100,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        elevation: 5,
        alignSelf: 'center'
    },
    close: {
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 20,
        borderRadius: 10,
        width: 30,
        borderColor: 'black',
        color: 'black'
    }
})
export default ListProductScreen;