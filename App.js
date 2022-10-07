import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
    NativeBaseProvider
} from 'native-base';
import {SideBar} from "./components/sidebar";

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <SideBar/>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
