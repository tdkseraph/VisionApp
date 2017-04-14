import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    Navigator,
    StatusBar,
    View
} from 'react-native';
import WelcomeScreen from './components/welcome.js'
import AnalysisScreen from './components/analysis.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './stores/reducer.js'

const store = createStore(reducer);

export default class App extends Component {
    renderScene(route, navigator) {
        return <route.component navigator={navigator}/>
    }

    render() {
        const defaultRoure = {
            title: 'Welcome Screen',
            component: WelcomeScreen
        }

        return (
            <Provider store={store}>
                <Navigator initialRoute={defaultRoure} renderScene={this.renderScene}/>
            </Provider>
        )
    }
}

