import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'
import Footer from './Footer'

export default function Body() {
  return (
    <View style={styles.MainBodyArea}>
      <Text style={[styles.LargeFontSize, styles.DarkGreyText]}>
        Your Goals
      </Text>
      <View></View>
      <Card title='Goal 1' amount='KES12,000' />
      <Card title='Goal 2' amount='KES12,000' />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  MainBodyArea: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  LargeFontSize: {
    fontSize: 20,
  },
  DarkGreyText: {
    color: 'rgb(74,79,116)',
  },
})
