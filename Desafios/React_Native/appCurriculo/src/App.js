import React , {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import fotoPerfil from './assets/fotoPerfil.jpg';

import Card from './components/Card';

const App = () => {

    function handleContats(contat){
        switch(contat){
            case 'linkedin':
                Alert.alert('Meu Linkedin','https://www.linkedin.com/in/caio-c%C3%A9sar-anast%C3%A1cio-120635207/')
                break
            case 'github':
                Alert.alert('Meu Github','https://github.com/CaioCesarRocha')
                break
            case 'gmail':
                Alert.alert('Meu Email','caio.cesar209@gmail.com')
                break    
        }
    }

    return (  
        <View style={style.page}>
            <View style={style.container}>
                <Image style={style.foto} source={fotoPerfil}/>
                <Text style={style.name}>Caio César Rocha</Text>
                <Text style={style.occupation}>Desenvolvedor Mobile</Text>
                <View style={style.contats}>
                    <TouchableOpacity onPress={() => handleContats('github')}>
                       <Icon name="github" size={30}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleContats('gmail')}>
                        <Icon name="gmail" size={30}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleContats('linkedin')}> 
                        <Icon name="linkedin" size={30}/>
                    </TouchableOpacity>
                </View>         
            </View>
            <Card title="Formação Acadêmica">
                <Text style={style.cardContentText}> Técnico em Eletrônica </Text>
                <Text style={style.cardContentText}> Sistemas de Informação</Text>
                <Text style={style.cardContentText}> Curso da Eduzz DIO</Text>
            </Card>
            <Card title="Experiência Profissional">
                <Text style={style.cardContentText}> Estudante</Text>
                <Text style={style.cardContentText}> Estagiário da TI</Text>
            </Card>
            
        </View>      
    )         
}


const style = StyleSheet.create({
  page:{
      backgroundColor: '#E7E7E7',
      flex: 1,
  },
  container:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 55
  },
  foto: {
      width: 250,
      height: 250,
      borderRadius: 125,
  },
  name:{
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10,
  },
  occupation:{
      color: '#939393',
      marginTop: 10,
  },
  contats:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 20,
  },
  cardContentText:{
    color: '#939393',
    marginBottom: 10
  },

})

export default App;
