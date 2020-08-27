import React, {Component} from 'react';
import Menu from './MenuComponent';
import { dishes } from '../shared/dishes';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishes
        }
    }

    render(){
        return(
            <Menu dishes= {this.state.dishes}/>
        )
    }
}

export default MainComponent