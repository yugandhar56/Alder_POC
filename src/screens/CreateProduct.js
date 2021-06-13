import { View ,ActivityIndicator,ScrollView,StyleSheet, Alert,Button,Text} from "react-native";
import React from 'react';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import Colors from "../constants/Colors";




const CreateProduct = (props) =>{
            
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");
    const [isLoading, setisLoading] = useState(false);
  
    const showList = () =>{

        props.navigation.navigate("ProductList")

    }


    const userLoginHandler = async () =>{

        console.log( "=================" + email)
        setisLoading(true)
        const response = await fetch(`https://shoppin-app-4032c-default-rtdb.firebaseio.com/mobiles.json`,{
            method:'POST',
            headers:{
              'Content-Type' :'application/json'
            },
            body:JSON.stringify({
              name : name,
              email:email,
              mobile :mobile,
              address :address,
              pincode :pincode
            }
            )
          }).then(response =>{
            setisLoading(false)
            Alert.alert("Sucess !!",
            "data uploaded sucessfully",[{
                text:'okay',
                style:'default',
                // onPress:
            }])
          }).catch(err =>{
            setisLoading(false)
            Alert.alert("Warning !!",
            err.message,[{
                text:'okay',
                style:'default',
                // onPress:
            }])
          }) ;
       

    }


   return(
  
    <ScrollView>
      <View style={styles.form}>
      <Text style = {styles.title}> Enter Your Data</Text>
       <TextInput
        label="Name"
        keyboardType='default'
        onChangeText={text=>setname(text)}
        value={name}
        style={styles.input}
        placeholder="enter name"
       ></TextInput>
       <TextInput
        label="email"
        keyboardType='email-address'
        onChangeText={text=>setemail(text)}
        value={email}
        style={styles.input}
        placeholder="enter email"
       ></TextInput>
       <TextInput
        label="mobile"
        keyboardType='phone-pad'
        onChangeText={text=>setmobile(text)}
        value={mobile}
        maxLength={10}
        style={styles.input}
        placeholder="enter mobile"
       ></TextInput>
       <TextInput
        label="address"
        keyboardType='default'
        onChangeText={text=>{
            setaddress(text)
            }}
        value={address}
        style={styles.input}
        placeholder="enter address"
       ></TextInput>
       <TextInput
        label="pincode"
        keyboardType='number-pad'
        maxLength ={6}
        onChangeText={text=>setpincode(text)}
        value={pincode}
        style={styles.input}
    
        placeholder="enter pincode"
       ></TextInput>
       <View style={{height:20}}>
       
       </View>
       { isLoading ? <ActivityIndicator 
          size ='small'
          color={Colors.primary}>
          </ActivityIndicator> :
          <Button title = 'Submit'
          color={Colors.primary}
          onPress = {userLoginHandler}>
        
          </Button>}
          <View style={{height:20}}>
       
       </View>
       <Button title = 'Show List'
          color={Colors.primary}
          onPress = {showList}>
        
          </Button>
      </View>
    </ScrollView>
  
  
   )

}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderWidth:1,
        borderColor:'black',
        paddingHorizontal:10,
        margin:10,
        width:'100%'


      },
      title:{
         fontSize:18,
         color:"#000000",
         alignContent:'center'
        
      },
      form: {
        margin: 20,
        flexDirection:'column'
      }
})

export default CreateProduct;