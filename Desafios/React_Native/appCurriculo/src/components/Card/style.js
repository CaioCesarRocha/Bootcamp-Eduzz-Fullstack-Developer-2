import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    cardContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'Center',
        marginTop: 20,
    },
    card:{
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#751aff', 
        padding: 10,
        backgroundColor: '#fff' 
    },
    cardHeader:{
  
    },
    cardContent:{
      marginTop: 10, 
    },
    cardContentText:{
      color: '#939393',
      marginBottom: 10
    }
});

export default style;