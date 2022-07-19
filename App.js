import * as React from 'react';
import { Component } from 'react';
import {  View, TouchableOpacity, Text, StyleSheet, Image, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


class AlignSelfLayout extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      hole :"雫",
      image:{
        "本館": require('./assets/honkan.png'),
        "アネックス": require('./assets/anex.png'),
        "カシータ": require('./assets/casita.png'),
        "光": require('./assets/hikari.jpg'),
        "雫": require('./assets/shizuku.jpg'),
      }
    };
    this.change = this.change.bind(this);
  }

  change(hole){
    this.setState({hole: hole})
  }

  call(){
    Alert.alert("電話をかけます")
  }

  conslutation(){
    Alert.alert("事前相談をします")
  }
 
   render () {
    return (
     <PreviewLayout
       label="ホール一覧"
       selectedValue={this.state.hole}
       holes={["本館","アネックス","カシータ", "光","雫"]}
       images={{"アネックス":require("./assets/anexbutton.png"),"本館":require("./assets/honkanbutton.png"),"雫":require("./assets/shizukubutton.png"),"カシータ":require("./assets/casitabutton.png"),"光":require("./assets/hikaributton.jpg")}}
       setSelectedValue={this.change}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{this.state.hole}</Text>
      </View>
      <View style={styles.imageSection}>
        <Image style={styles.image} source={this.state.image[this.state.hole]}></Image>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.call}>
            <Text style={styles.buttonLabel}>電話</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.conslutation}>
            <Text style={styles.buttonLabel}>事前相談</Text>
          </TouchableOpacity>
        </View>
      </View>
     </PreviewLayout>
   )}
 };

const PreviewLayout = ({
  label,
  children,
  holes,
  selectedValue,
  setSelectedValue,
  images,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
   <View style={styles.container}>
     {children}
   </View>
   <View style={styles.listSection}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {holes.map((value) => (
        <TouchableOpacity
          key={value}
          style={styles.holebutton}
          onPress={() => setSelectedValue(value)}
        >
          <Image style={styles.holeImage} source={images[value]}></Image>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  </View>
);

function MembersScreen() {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Text>Members!</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="ホール一覧" component={AlignSelfLayout} />
        <Tab.Screen name="会員情報" component={MembersScreen}/>
        <Tab.Screen name="事前相談" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    minHeight: 200,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: 'center',
  },
  holebutton:{
   borderRadius: 4,
   backgroundColor: "oldlace",
   alignSelf: "flex-start",
   marginHorizontal: "1%",
   marginBottom: 6,
   alignItems: "center",
   width:'48%',
   height:100,
  },
  holeImage: {
   width:'100%',
   height:'100%',
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
    textAlign:'center',
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 24,
  },
  imageSection:{
   flex:12
  },
  image: {
   resizeMode:'contain',
   width:'100%',
   height:'100%',
  },
  titleSection:{
   flex:8
  },
  title: {
   fontSize:30,
   margin:10,
   fontWeight:'bold',
   color: 'green'
  },
  buttonSection: {
   flex:8
  },
  listSection: {
   flex: 25
  }
});