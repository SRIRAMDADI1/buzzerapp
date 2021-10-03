import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import AppHeader from '../components/AppHeader'
import db from '../config'

export default class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state={
      redStatus:true,
      greenStaus:true,
      blueStatus:true,
      yellowStatus:true,
    }
  }
  goToBuzzerScreen=(buzzerColor)=>{
    this.props.navigation.navigate('BuzzerScreen',{color:buzzerColor})
    var teamRef = db.ref('teams/'+buzzerColor)
    teamRef.update({enabled:false})
  }

  componentDidMount(){
    var teamRef = db.ref('teams')
    teamRef.on("value",(data)=>{
      var teamDetails = data.val();
      this.setState({
        redStatus: teamDetails.red.enabled,
        greenStatus: teamDetails.green.enabled,
        blueStatus: teamDetails.blue.enabled,
        yellowStatus: teamDetails.yellow.enabled,
      })
    })
  }

render(){
  return(
    <View>
    <AppHeader/>
    <TouchableOpacity 
    disabled = {!this.state.redStatus}
    style={[styles.button,{backgroundColor:'red'}]}
    onPress={()=>{this.goToBuzzerScreen('red')}} >
   <Text style={styles.buttonText} >Team1</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    disabled = {!this.state.greenStatus}
    style={[styles.button,{backgroundColor:'green'}]}
    onPress={()=>{this.goToBuzzerScreen('green')}} >   
    <Text style={styles.buttonText} >Team2</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    disabled = {!this.state.yellowStatus}
    style={[styles.button,{backgroundColor:'yellow'}]}
    onPress={()=>{this.goToBuzzerScreen('yellow')}} >   
    <Text style={styles.buttonText} >Team3</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    disabled = {!this.state.blueStatus}
    style={[styles.button,{backgroundColor:'blue'}]}
    onPress={()=>{this.goToBuzzerScreen('blue')}} >   
    <Text style={styles.buttonText} >Team4</Text>
    </TouchableOpacity>


    </View>
  )
}

}

const styles=StyleSheet.create({
button:{
justifyContent:'center',
alignSelf:'center',
borderWidth:2,
borderRadius:15,
marginTop:50,
width:200,
height:50,
backgroundColor:'green'
},
buttonText:{
textAlign:'center',
fontSize:20,
 color:'white'
},


})