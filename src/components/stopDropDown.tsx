import { StackHeaderProps } from '@react-navigation/stack'
import { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { getEqualHitSlop } from '../helpers/hitSlopHelper'
import { nameToSlug } from '../helpers/textHelper'

const stations: { name: string }[] = [
  { name: 'Baguley' },
  { name: 'Manchester Airport' },
  { name: 'Benchill' },
  { name: 'Barlow Moor Road' },
  { name: 'Crossacres' },
]

type StationProps = {
  station: string
  setStation: Dispatch<SetStateAction<string>>
}

const StopDropDown = (props: StationProps) => {
  return (
    <View>
      <Text>Select a station:</Text>
      <SelectDropdown
        buttonStyle={styles.select}
        data={stations.map((station) => station.name)}
        onSelect={(selectedItem: string, index) => {
          props.setStation(selectedItem)
        }}
      ></SelectDropdown>
    </View>
  )
}

export default StopDropDown

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
  },
  select: {
    backgroundColor: '#ffffff',
    border: '#252525',
    borderWidth: 2,
    borderRadius: 6,
    marginVertical: 4,
  },
})
