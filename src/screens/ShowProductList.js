import { View ,Text,FlatList,StyleSheet,Image} from "react-native"
import React from 'react';
import PRODUCTS from "../../data/dummy_data";
const showProduct =(props) =>{

   return(
       
           <FlatList
           data = {PRODUCTS}
           renderItem = {itemData =>(
               <View style={styles.card}>
                   <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: itemData.item.imageUrl }} />
            
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{itemData.item.title}</Text>
              <Text style={styles.price}>${itemData.item.price.toFixed(2)}</Text>
            </View>
               </View>
           )}>

           </FlatList>
       
   )

}
showProduct.navigationOptions = navData => {
    return {
      headerTitle:  'Mobiles List',
    
    };
  };
  const styles = StyleSheet.create({
      container:{
          flex:1,
          margin:10
      },
      card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding:10,
        margin:5
      },
      imageContainer: {
        width: '100%',
        height: 200,
        alignContent:'center',
        alignSelf:'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
      },
      image: {
        width: '100%',
        height: '100%'
      },
      details: {
        alignItems: 'center',
        height: 70,
        padding: 10
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 2
      },
      price: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#888'
      },
  })
export default showProduct;