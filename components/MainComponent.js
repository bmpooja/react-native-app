import React, {Component} from 'react';
import {View, Platform, DrawerLayoutAndroidBase} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { icon } from 'react-native-elements'
import Home from './HomeComponent';
import Contacts from './ContactsComponent';
import About from './AboutComponent';

const HomeNavigator = createStackNavigator ({
    Home: {screen: Home}
}, {
    navigationOption: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"
        },
        headerTintColor: "#fff"
    })
})
const MenuNavigator =createStackNavigator(
    {
    Menu: {screen: Menu},
    DishDetailComponent: {screen: DishDetailComponent},
    },{
    initialRouteName: 'Menu',
    navigationOption: {
        headerStyle: {
            backgroundColor: '512DAB'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})

const ContactNavigator =createStackNavigator(
    {
        Contacts: {screen: Contacts}
    }, {
        navigationOption: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTitleStyle: {
                color: "#fff"
            },
            headerTintColor: "#fff"
        })
    })

    const AboutNavigator =createStackNavigator(
        {
            About: {screen: About}
        }, {
            navigationOption: ({ navigation }) => ({
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff"
            })
        })
// const Test = createAppContainer(MenuNavigator);
const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOption: {
            title: 'Home',
            drawLabel: 'Home'
        }
    },
    Menu:{
        screen: MenuNavigator,
        navigationOption: {
            title: 'Menu',
            drawLabel: 'Menu'
        }
    },
    Contact:{
        screen: ContactNavigator,
        navigationOption: {
            title: 'Contacts',
            drawLabel: 'Contacts'
        }
    },About:{
        screen: AboutNavigator,
        navigationOption: {
            title: 'About',
            drawLabel: 'About'
        }
    }
},
 {
    drawerBackgroundColor: '#D1C4E9'
}

)

class MainComponent extends Component {
    render(){
        return(
        <View style={{flex:1, paddingTop: 0 }}>          
            <MainNavigator/>
            </View>
            )
    }
}

export default MainComponent