import React from 'react-native'

const {
  StyleSheet,
  Text,
  View,
  Image
} = React

export default class Author extends React.Component {

  render() {
    const {
      name,
      avatar,
      about
    } = this.props

    return (
      <View style={ styles.container }>
        <Image source={{ uri: avatar }} style={ styles.image } />
        <View>
          <Text style={ styles.name }>{ name }</Text>
          <Text style={ styles.about }>{ about }</Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
	},
	image: {
		borderRadius: 20,
		width: 40,
		height: 40,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10
	},
	name: {
		margin: 0,
		fontSize: 18
	},
	about: {
        margin: 0,
        color: '#888',
        fontSize: 16
	}
})