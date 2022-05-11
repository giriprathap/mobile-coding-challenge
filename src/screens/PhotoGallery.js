import React,{ useState, useEffect } from 'react';
import {FlatList,Text,View,StyleSheet,StatusBar} from 'react-native';
import TeaserCell from './components/TeaserCell';

var favoritesArray = [];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor:'blue'
  }
});

const onFavButtonPress = (item) => {
 
}

const PhotoGallery = ({ route,navigation }) => {
  const [favorites,SetFavorites] = useState([]);
  useEffect(() => {
    fetch('https://api.npoint.io/959fe2808ac63258b9d8')
    .then((response) => response.json());
  },[]);

    return(
        <View style={styles.container}>
            <FlatList
            data={favorites}
            renderItem={({ item }) => (
              <TeaserCell item={item} onPress={() => onFavButtonPress(item)} navigation={navigation}/>
          )} 
            numColumns={2}
             />
        </View>
    );
}

export default PhotoGallery;





