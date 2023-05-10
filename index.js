/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import home from './App';
import Category from './src/screens/category';

AppRegistry.registerComponent(appName, () => home);
