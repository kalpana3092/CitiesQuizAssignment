import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";
import HomeViewStyle from './HomeView.style';

const HomeView = () => {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      })
    return (
        <SafeAreaView style={HomeViewStyle.safeArea}>
            <View style = { HomeViewStyle.topContainer}>
            <View style = {HomeViewStyle.textContainer}>
                <Text style = {HomeViewStyle.placeButtonTitle}>5 cities placed</Text>
            </View>
            <View style = {HomeViewStyle.textContainer}>
                <Text style = {HomeViewStyle.placeButtonTitle}>361 kilometers left</Text>
            </View>
            <View style = {HomeViewStyle.cityTextContainer}>
                <Text style = {HomeViewStyle.textTitle}> select the location of {"\n"} "Amsterdam" </Text>
            </View>
            </View>
            <MapView
                 style={HomeViewStyle.mapView}
                 region = {region}
                 onRegionChangeComplete = {region => setRegion(region)}
             />
            <View style = { HomeViewStyle.buttonContainer}>
            <TouchableOpacity style = {HomeViewStyle.placeButton}
                 onPress = {()=>console.log('book')}>
                <Text style = {HomeViewStyle.placeButtonTitle}>place</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )  
}
export default HomeView