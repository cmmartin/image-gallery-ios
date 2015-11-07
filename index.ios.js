/**
 * Publisher - React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import Dimensions from 'Dimensions'
import Carousel from './Carousel.ios'
import Author from './Author.ios'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React

const cards = [
  {
    title: 'hi there',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Aldrin_with_experiment.jpg' }
  },
  {
    title: 'hi there',
    image: { uri: 'http://www.nasa.gov/images/content/2333main_MM_Image_Feature_19_rs4.jpg' }
  },
  {
    title: 'hi there',
    image: { uri: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/05/man-on-moon.jpg' }
  }
]

class Publisher extends React.Component {

  render() {
    const dimensions = Dimensions.get('window')
    const { width, height } = dimensions

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={ styles.header }>
          <Author 
            name={ "Nikola Tesla".toUpperCase() }
            about={ "It's electric".toUpperCase() }
            avatar={ "http://educateinspirechange.org/wp-content/uploads/2015/07/znameniti-srbi.jpg" } />
        </View>
        <Carousel 
          width={ width } 
          indicatorColor={ '#bbb' } 
          inactiveIndicatorColor={ 'white' }
          indicatorSize={ 30 }>
          { 
            cards.map((card, i) => (
              <View key={ i } style={styles.imgContainer}>
                <Image 
                 source={card.image} 
                 style={[ styles.img, { width: width, height: height * 0.7 }]}>
                 <Text style={ styles.text }>{ card.title }</Text>
                </Image>
              </View>
            ))
          }
        </Carousel>
        <View style={ styles.header }>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  viewport: {
    flex: 1
  },
  header: {
    flex: 0.15,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    resizeMode: 'cover',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 28
  }
})

AppRegistry.registerComponent('Publisher', () => Publisher)
