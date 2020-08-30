import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { dishes } from '../shared/dishes';


export  function RenderDish(props) {
    const dish = props.dish;
    console.log('dishes from renderdish dish :',dish)

console.log(props);
    if(dish !== null){
        return(
            <Card
            featuredTitle = {dish.name}
            featuredSubtitle={ dish.designation }
            image = {require('./images/uthappizza.png')}
            >
            <Text style ={{margin: 10}}>
                {dish.description}
            </Text>
            </Card>
        )
    } else {
        return(<View></View>)
    }
};

class DishDetailComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            dishes:dishes
        }
    }
    static navigationOptions = {
        title: 'Dish Detail'
    }
    render(){
        const dishId = this.props.navigation.getParam('dishId','');
    return(<RenderDish dish = {this.state.dishes[+dishId]}/>
    )
    }
}

export default DishDetailComponent;