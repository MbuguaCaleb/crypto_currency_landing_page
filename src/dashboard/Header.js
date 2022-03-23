import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.MainHeadingArea}>
      <View style={styles.SubHeadingOne}>
        <Text style={[styles.LargeFontSize, styles.WhiteText]}>
          Afternoon Jo
        </Text>
        <Text style={styles.WhiteText}>Here's the Latest</Text>
      </View>
      <View style={styles.SubHeadingTwo}>
        <Text style={[styles.LargeFontSize, styles.LightGreenText]}>
          KES 42,000
        </Text>
        <Text style={styles.WhiteText}>Total Funds</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainHeadingArea: {
    marginTop: 50,
    marginHorizontal: 25,
    marginBottom: 15,
  },
  LargeFontSize: {
    fontSize: 28,
  },
  SubHeadingTwo: {
    marginTop: 15,
  },
  WhiteText: {
    color: '#d1d7e0',
  },
  LightGreenText: {
    color: 'rgb(0,231,113)',
  },
  WhiteText: {
    color: 'white',
  },
})
