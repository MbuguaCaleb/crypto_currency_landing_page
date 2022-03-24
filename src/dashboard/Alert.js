import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Alert() {
  return (
    <TouchableOpacity style={[styles.Card, styles.Container]}>
      <View>
        <Text style={styles.WhiteText}>
          This is an App Notification snackbar to{'\n'} show the User when they
          perform an{'\n'} action.Clicking it should change the text.
        </Text>
      </View>
      <AntDesign name='close' size={25} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Card: {
    marginVertical: 20,
    backgroundColor: 'deeppink',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    textShadowRadius: 1.5,
    elevation: 3,
  },
  WhiteText: {
    color: 'white',
  },
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
