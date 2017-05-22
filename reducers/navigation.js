
import Home from '../src/Home'
import CharacterSelect from '../src/CharacterSelect'

const AppRouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
     header: null
    }),
  },
  CharacterSelect: { screen: CharacterSelect },

}

import { StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator(AppRouteConfigs, {
  cardStyle: {backgroundColor: 'transparent'}
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};