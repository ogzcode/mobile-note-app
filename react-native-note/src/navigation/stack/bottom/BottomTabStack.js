import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../../screen/home/Home";
import AddNote from "../../../screen/AddNote";
import Settings from "../../../screen/Settings";


import { CustomHeader } from "./components/CustomHeader";
import { CustomTabBar } from "./components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                header: props => <CustomHeader title={props.route.name} />,
            }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen name="AddNote" component={AddNote}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarLabel: '',
                }}
            />
        </Tab.Navigator>
    );
}