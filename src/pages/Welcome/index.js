import React from 'react';
import LinearGradients from "reac-native-linear-gradients";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';


export default function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                Botão Flutuante
                </Text>
                <View
                activeOpacity={0.7}
                style={styles.touchableOpacityStyle}>
                <View style={styles.floatingButtonStyle}/>
                </View>
            </View>
        </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#219EBC',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 20,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      right: 115,
      bottom: 30,
    },
    floatingButtonStyle: {
      opacity: 0.25,
      borderRadius: 10,
      backgroundColor: '#1A0D6A',
      resizeMode: 'contain',
      width: 250,
      height: 50,
    },
  });