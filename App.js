import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from './components/Cita'

const App = () => {

  //Definir state citas

  const [citas, setCitas] = useState([
    {id: "1", paciente: "Hook", propietario: 'Brian', sintomas: "No come"},
    {id: "2", paciente: "Hooker", propietario: 'Brian', sintomas: "No corre"}
  ]);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Proyecto Citas</Text>
      <FlatList 
        data={citas}
        renderItem={({item}) => <Cita cita={item}/> }
        keyExtractor={cita => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },

  titulo: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default App;
