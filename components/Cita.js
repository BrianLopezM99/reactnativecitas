import React, {useState} from 'react';
import { Text, View } from 'react-native';

const Cita = ({cita}) => {
    return ( 
        <View>
              <Text>{cita.paciente}</Text>
        </View>
     );
}
 
export default Cita;