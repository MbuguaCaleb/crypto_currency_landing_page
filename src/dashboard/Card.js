import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Card({ title, amount }) {
  return (
    <TouchableOpacity style={[styles.Card, styles.Container]}>
      <View>
        <Text>{title}</Text>
        <Text>{amount}</Text>
      </View>
      <View style={styles.Container}>
        <TouchableOpacity>
          <View style={[styles.SmallCard, styles.LeftMargin]}>
            <Text style={styles.WhiteText}>Finish Goal</Text>
          </View>
        </TouchableOpacity>
        <AntDesign name='right' size={25}  />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Card: {
    marginVertical: 20,
    backgroundColor: '#fff',
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
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SmallCard: {
    backgroundColor: 'rgb(0,231,113)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  WhiteText: {
    color: 'white',
  },
  LeftMargin: {
    marginLeft: 2,
  },
 
})
