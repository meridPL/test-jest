/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import NaviContainer from '../component/NaviContainer';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { UPDATE } from 'mobx/dist/internal';

// test('b', () => {
//   renderer.create(<App />);

// });
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


describe('Testing react navigation', () => {
  test('check about screen', async () => {
    jest.mock('@react-navigation/native', () => ({
      ...jest.requireActual('@react-navigation/native'),
      navigation: {
        navigate: jest.fn()
      },
      navigate: jest.fn()
    }));
    const route = {
      params: {
        ind: 10
      }
    }
    const navigation = {navigate: jest.fn()}
    const component = (
      <AboutScreen
        navigation={navigation}
        route={route}
      />
    );

    const { findByText, update } = render(component);

    const toClick = await findByText('Home');

    const newBody = await findByText('the number you have chosen is 10');
    await waitFor(async () => expect(newBody).toBeTruthy())



    fireEvent(toClick, 'press');

  });

  // test('page contains the header and 10 items', async () => {
  //   const component = (
  //     <NavigationContainer>
  //       <NaviContainer />
  //     </NavigationContainer>
  //     // <App/>
  //   );
  //   const { findByText, findAllByText } = render(component)

  //   const header = await findByText('homescreen', {timeout: 10});
  //   const items = await findAllByText(/Item number/);

  //   //   expect(header).toBeTruthy();
  //   //   expect(items.length).toBe(10);

  // })
  // test('page contains the header and 10 items', async () => {
  //   const component = (
  //     <NavigationContainer>
  //       <NaviContainer />
  //     </NavigationContainer>
  //   );

  //   const { findByText, findAllByText } = render(component);

  //   const header = await findByText('homescreen');
  //   const items = await findAllByText(/Item number/);

  //   expect(header).toBeTruthy();
  //   expect(items.length).toBe(10);
  // });

  // test('clicking on one item takes you to the details screen', async () => {
  //   const component = (
  //     <NavigationContainer>
  //       <NaviContainer />
  //     </NavigationContainer>
  //   );

  //   const { findByText } = render(component);
  //   const toClick = await findByText('Item number 5');

  //   fireEvent(toClick, 'press');
  //   const newHeader = await findByText('Showing details for 5');
  //   const newBody = await findByText('the number you have chosen is 5');

  //   expect(newHeader).toBeTruthy();
  //   expect(newBody).toBeTruthy();
  // });


});

// test('b', () => {
//   renderer.create(<AboutScreen />);  
// });

// test('form submits two answers', () => {
//   const allQuestions = ['q1', 'q2'];
//   const mockFn = jest.fn();

//   const { getAllByA11yLabel, getByText } = render(
//     <AboutScreen  />
//   );

//   const answerInputs = getAllByA11yLabel('answer input');
//   // console.log("🚀 ~ file: App-test.tsx ~ line 33 ~ test ~ answerInputs", answerInputs[0])

//   fireEvent.changeText(answerInputs[0], 'a1');
//   // fireEvent.changeText(answerInputs[1], 'a2');
//   fireEvent.press(getByText('Home'));

//   // expect(mockFn).toBeCalledWith({
//   //   '1': { q: 'q1', a: 'a1' },
//   //   '2': { q: 'q2', a: 'a2' },
//   // });
// });

// it('c', () => {
//   const tree = renderer.create(<HomeScreen />).toJSON();
//   // console.log("🚀 ~ file: App-test.tsx ~ line 20 ~ it ~ tree", tree.children.length)

//   expect(tree.children.length).toBe(4);
//   expect.toMatchSnapshot();
// });

// test('a', () => {
//   const tree = renderer.create(<HomeScreen />);
//   expect(tree).toMatchSnapshot();
// });
