import { View, Text, StyleSheet } from 'react-native'

export default function Dashboard() {
  return (
    <View style={styles.MainView}>
      <View style={styles.TopView}></View>
      <View style={styles.BottomView}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(74,79,116)',
  },
  TopView: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    width: '100%',
    height: '70%',
    backgroundColor: '#d1d7e0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
