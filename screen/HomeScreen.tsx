import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { PropsNavi } from '../component/NaviContainer';
import ContextApp from '../component/Context';
import Item from '../component/Item';

const HomeScreen = ({ navigation, route }: PropsNavi<"HomeScreen">) => {

   const context = useContext(ContextApp)
   const [items] = React.useState(
      new Array(20).fill(null).map((_, idx) => idx + 1)
   );

   const onOpacityPress = (item: number) => {
      console.log("🚀 ~ file: HomeScreen.tsx ~ line 16 ~ onOpacityPress ~ item", item)
      // navigation.navigate("AboutScreen", { ind: item })
      return (option: string) => {
         console.log("🚀 ~ file: HomeScreen.tsx ~ line 18 ~ return ~ option", option)

      }

   }

   return (
      <View style={{
         // flex:1
      }}>

         <Text>homescreen</Text>
         <Text>{context.title}</Text>
         <Button title="Change state"
            onPress={() => {
               context.setTitle("Aga")
            }}
         />
         <FlatList
            keyExtractor={(_, idx) => `${idx}`}
            data={items}
            renderItem={({ item }) => (
               <TouchableOpacity
                  onPress={() => {
                     console.log("🚀 ~ file: HomeScreen.tsx ~ line 39 ~ HomeScreen ~ onPress")
                     // onOpacityPress(item)
                  }}
               // style={styles.row}
               >
                  <Item item={item} handleClick={onOpacityPress(item)} />
               </TouchableOpacity>
            )}
         />
         <Text>b</Text>
         <View>
            <Text>d</Text>
         </View>
         <Text>c</Text>
         <Button title="About"
            onPress={() => {
               // navigation.navigate("AboutScreen")
            }}
         />
      </View>
   );
};

export default observer(HomeScreen);
