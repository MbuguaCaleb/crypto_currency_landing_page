import { View, StyleSheet } from 'react-native'
import Body from './Body'
import Header from './Header'

export default function Dashboard() {
  return (
    <View style={styles.MainView}>
      <View style={styles.TopView}>
        <Header />
      </View>
      <View style={styles.BottomView}>
        <Body />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(74,79,116)',
  },
  TopView: {
    width: '100%',
    height: '30%',
  },
  BottomView: {
    width: '100%',
    height: '70%',
    backgroundColor: '#d1d7e0',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
})
