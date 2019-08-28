import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/Home';
import Radar from '../screens/Radar';

const screens = createStackNavigator({
	Radar: Radar,
	Home: Home
}, {
	defaultNavigationOptions: {
	headerStyle: {
		borderBottomColor: "transparent",
		elevation: 0, // for android
	}
}}
);

export default createAppContainer(screens);