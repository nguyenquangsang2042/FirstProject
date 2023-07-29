import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';

export default function App() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View
            style={{
                flex: 1,
                backgroundColor: '#495E57',
            }}>
            <LittleLemonHeader />
        </View>
        </SafeAreaView>
    );

}

