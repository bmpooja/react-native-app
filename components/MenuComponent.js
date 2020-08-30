import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import{dishes} from '../shared/dishes';
import DishdetailComponent from './DishDetailComponent';

class Menu extends Component {
    constructor(props){
        super(props)
        this.state ={
            dishes: dishes
        }
    }
static navigationOptions = {
    title: 'Menu'
};

    render(){
    const renderMenuItem = ({item, index}) => {
            return (
                <ListItem
                key= {index}
                title= {item.name}
                subtitle= {item.description}
                onPress = {()=> navigate('DishDetailComponent', {dishId: item.id})}
                hideChevron={true}
                leftAvatar={{ source: require('./images/uthappizza.png')}}
                />
            )
        }
        console.log('navigation from menuComponent: ',this.props.navigation)
    const { navigate } = this.props.navigation;    
    return (
        <FlatList 
            data={this.state.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />      
    )
    }
    }

export default Menu;