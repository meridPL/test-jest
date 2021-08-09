import React from 'react'
import { observer } from 'mobx-react-lite';
import { Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

interface IITem {
   item: number,
   handleClick: (option: string) => void
}

const Item = ({ item, handleClick }: IITem) => {
   return (
      <Card>
         <Text>Item number {item}</Text>
         <Button
            title="Click"
            onPress={() => handleClick("dddr")}
         />
      </Card>
   )
}

export default observer(Item);