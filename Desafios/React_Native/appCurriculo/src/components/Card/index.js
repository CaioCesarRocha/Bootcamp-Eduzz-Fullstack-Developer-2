import React from 'react';
import {View, Text} from 'react-native';
import  style from './style';

const Card = ({title, children}) => {
    return(
        <View style={style.cardContainer}>
        <View style={style.card}>
            <View style={style.cardHeader}>
                <Text>{title}</Text>
            </View> 
            <View style={style.cardContent}>
                {children}
            </View>
        </View>
    </View>
    );
}

export default Card;