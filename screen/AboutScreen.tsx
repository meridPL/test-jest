import React, { useState } from 'react'
import { observer } from 'mobx-react-lite';
import { Button, Text, View } from 'react-native';
import { PropsNavi } from '../component/NaviContainer';
import { TextInput } from 'react-native-gesture-handler';

const AboutScreen = ({ navigation, route, onSubmit }: PropsNavi<"AboutScreen"> & { onSubmit: () => void }) => {
   const item = route.params.ind;
   const [date, setDate] = useState("")

   return (
      <View>
         <Text>Showing details for {item}</Text>
         <Text>the number you have chosen is {item}</Text>
         <TextInput accessibilityLabel="answer input"
            accessibilityHint="input"
            onChangeText={text => setDate(text)}
         />
         <Button title="Home"
            onPress={() => {
               navigation.navigate("HomeScreen")
               // onSubmit()
            }}
         />
      </View>
   )
}

export default observer(AboutScreen);