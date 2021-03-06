import React, { Component } from 'react';
import {ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { dishes } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


function RenderItem (props) {
    const item = props.item;

    if(item != null){
        return (
            <Card
            featuredTitle= {item.name}
            featuredSubtitle={item.designation}
            images ={require('./images/uthappizza.png')}
            >
                <Text style={{margin: 10}}>
                {item.description}
                </Text>
            </Card>
        );
    } else {
        return(<View></View>)
    }
}
class Home extends Component {
    constructor(){
        super()
        this.state = {
            dishes: dishes,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    static navigationOptions = {
        title : 'Home'
    }

    render() {
        console.log('promotions from home component :',this.state.promotions[0]);
        return(
            <ScrollView>
                <RenderItem
                item ={this.state.dishes.filter((dish) => dish.featured)[0]}
            />
                <RenderItem
                item ={this.state.promotions.filter((promotion) => promotion.featured)[0]}
            />
                <RenderItem
                item ={this.state.leaders.filter((leader) => leader.featured)[0]}
            />

            </ScrollView>
        )
    }
}

export default Home;