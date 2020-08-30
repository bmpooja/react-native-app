import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';


class ContactComponent extends Component {
    constructor(){
        super()
    } 

    static navigationOptions = {
        title: 'Contacts'
    };

    render() {
        return(
            <Card>
                <Text>
                Our Address

                121, Clear Water Bay Road
                Clear Water Bay, Kowloon
                HONG KONG
                Tel: +852 1234 5678
                Fax: +852 8765 4321
                Email:confusion@food.net
                </Text>
            </Card>
        )
    }
}

export default ContactComponent;