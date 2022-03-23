import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Footer() {
  return (
    <TouchableOpacity style={[styles.Button, styles.LightGreenBackground]}>
      <Text style={[styles.WhiteText, styles.LargeFontSize]}>Show SnackBar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Button: {
    color: '#000',
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightGreenBackground: {
    backgroundColor: 'rgb(0,231,113)',
  },
  WhiteText: {
    color: 'white',
  },
  LargeFontSize: {
    fontSize: 16,
  },
})
