import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  ListView,
  StyleSheet
} from 'react-native';

export default class FilmCard extends React.Component {
  render() {
    const film = this.props.data
    return (
      <View style={styles.container}>
        <Text> {film.title} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb'
  }
})
