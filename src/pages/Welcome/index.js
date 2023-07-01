import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons} from '@expo/vector-icons';

export default function Welcome(){
    return(
      <SafeAreaView style={styles.container}>
          <View style={styles.container}>

            <View>
              <View style={styles.opcoes}>
                <TouchableOpacity><Text style={styles.text1}>Musicas</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.text2}>Playlist</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.text3}>Importar</Text></TouchableOpacity>
              </View>
            </View>

            <View>
              
            </View>

            <View
              activeOpacity={0.7}
              style={styles.touchableOpacityStyle}>
              <View style={styles.floatingButtonStyle}/>
            </View>

            <View style={styles.iconsPosition}>
              <TouchableOpacity style={styles.hearto}>
                <AntDesign name="hearto" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.playList}>
                <MaterialCommunityIcons name="playlist-music" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.music}>
                <Ionicons name="md-musical-notes-sharp" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.search}>
                <Feather name='search' size={25} color={'white'} />
              </TouchableOpacity>
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
      right: 0,
      bottom: 30,
    },
    floatingButtonStyle: {
      opacity: 0.25,
      borderRadius: 10,
      backgroundColor: '#1A0D6A',
      resizeMode: 'contain',
      
      width: 240,
      height: 45,
    },
    search:{
      position: 'absolute',
      left: -80,
    },
    music:{
      position: 'absolute',
      left: -30,
    },
    playList:{
      position: 'absolute',
      left: 18,
    },
    hearto:{
      left: 70,
    },
    iconsPosition:{
      position:'absolute',
      bottom:68,
    },
    opcoes:{
      color:'white',
      opacity:0.5,
      paddingTop:5,
      paddingBottom:6,
      paddingRight:35,
      paddingLeft: 35,
      padding:3,
      borderRadius:10,
      position:'absolute',
      backgroundColor: '#1A0D6A',
      flexDirection:'row',
      left:-110,
      top:-270,
    },
    text1:{
      fontWeight: 'bold',
      color:'#ffffff',
      right: 20,
    },
    text2:{
      fontWeight: 'bold',
      color:'#ffffff',
    },
    text3:{
      fontWeight: 'bold',
      color:'#ffffff',
      left: 20,
    }
  });