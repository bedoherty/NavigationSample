/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

//  Import our scenes
import SearchScene from './app/scenes/SearchScene';
import DetailsScene from './app/scenes/DetailsScene';

const RouterWithRedux = connect()(Router);
import allReducers from './app/reducers';

const store = createStore(allReducers);

export default class SampleNavigation extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux
        sceneStyle={styles.sceneStyles}
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.titleStyle}
        >
          <Scene key="root">
            <Scene key="search" component={SearchScene} title="IMO Acronyms" initial={true} />
            <Scene key="details" component={DetailsScene} title="Disease Related Group" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  sceneStyles: {
    backgroundColor: '#bdbdbd',
    height: '100%',
    width: '100%',
    paddingTop: 64,
  },
  navBarStyle: {
    backgroundColor: '#082e4c',
  },
  titleStyle: {
    color: 'white',
    fontFamily: "Brandon Grotesque",
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('SampleNavigation', () => SampleNavigation);
