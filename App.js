import React from 'react';
import {  Text, View,ScrollView,Image} from 'react-native';

export default function App() {
  return (
    <ScrollView >
      <View style={{alignItems: 'center',justifyContent: 'center',flex:1}}>
        <Text style={{fontSize:50,color:"black",fontWeight:"bold",fontStyle:"italic",marginTop:50}}>RESUME</Text></View>
      <View >
        <Text style={{fontSize:30,color:"blue",fontWeight:"200",marginLeft:25,marginTop:50,flex:1}}>PROFILE</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:"flex-start",alignItems:"flex-start",flex:1}}>
        <Image style={{width:150, height: 150,borderRadius:150,marginTop:40,marginLeft:20}}
          source={{uri:'https://images.static-collegedunia.com/public/college_data/images/appImage/_1%20Entrance.jpg'}}
          />
          <View style= {{marginLeft:25,marginTop:75}}>
          <Text style={{fontSize:25,color:'black',fontWeight:'600'}}>Adithiya G</Text>
          <Text style={{fontSize:20,color:'black',fontWeight:'600'}}>B.Tech ECM II Year</Text>
        </View>
        </View>
        <View style = {{flex:1,marginTop:50}}>
        <Text style={{fontSize:30,color:'blue',fontWeight:'200',marginLeft:25}}>
        SKILLS
        </Text>
        <Text style={{fontSize:20,marginLeft:35}}>1.Programming Langugage Known:</Text>
        <Text style={{fontSize:20,marginLeft:70}}>> C</Text> 
        <Text style={{fontSize:20,marginLeft:70}}>> C++</Text> 
        <Text style={{fontSize:20,marginLeft:70}}>> Python</Text> 
        <Text style={{fontSize:20,marginLeft:35}}>2.Application Developer in REACT NATIVE PLATFORM:</Text>
      </View>
      <View style = {{flex:1,marginTop:50}}>
      <Text style={{fontSize:30,color:'blue',fontWeight:'200',marginLeft:25}}>
      ACCOMPLISHMENTS
        </Text>
      <Text style={{fontSize:20,marginLeft:35}}>1.CodeBuzz 2.O @VIT CHENNAI</Text>
      <Text style={{fontSize:20,marginLeft:35}}>2.Member in Disciplinary Committee TECHNOVIT 2019</Text>
      <Text style={{fontSize:20,marginLeft:35}}>3.Participated in Workshop of APP DEVELOPMENT IN REACT NATIVE PLATFORM @VIT CHENNAI</Text>
      

      </View>

    </ScrollView>
  );
}

