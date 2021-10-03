import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import AppHeader from '../components/AppHeader';
import SoundButton from '../components/SoundButton'

export default class BuzzerScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <SoundButton color={this.props.navigation.getParam('color')}/>
      <TouchableOpacity style={styles.backbutton} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
    <Text style={styles.backbuttontext}>←Back</Text>
    </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  backbutton:{
justifyContent:'center',
alignSelf:'left',
borderWidth:2,
borderRadius:15,
marginTop:50,
marginLeft:30,
width:80,
height:50,
backgroundColor:'black'
},
backbuttontext:{
marginLeft:7,
fontSize:20,
marginTop:-2.5,
color:'white'
}
})