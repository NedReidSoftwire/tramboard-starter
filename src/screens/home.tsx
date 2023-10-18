import { useState } from 'react'
import { StyleSheet, View, Linking } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { nameToSlug } from '../helpers/textHelper'
import { ScreenNavigationProps } from '../routes'
import StopDropDown from '../components/stopDropDown'
type HomeScreenProps = ScreenNavigationProps<'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [station, setStation] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <StopDropDown station={station} setStation={setStation} />
      <Button
        mode="contained"
        onPress={() =>
          Linking.openURL(
            'https://tfgm.com/public-transport/tram/stops/' +
              nameToSlug(station) +
              '-tram'
          )
        }
      >
        Go to details
      </Button>
      {/*<Button mode="contained" onPress={() => navigation.navigate('Details')}>*/}
      {/*  Go to details*/}
      {/*</Button>*/}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingBottom: 24,
  },
})
