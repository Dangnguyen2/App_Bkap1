import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/Component/Home/HomeScreen";
import ListProductScreen from "../../Screens/Component/Product/ListProductScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const HomeStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Homescreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ListPro" component={ListProductScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default HomeStack;