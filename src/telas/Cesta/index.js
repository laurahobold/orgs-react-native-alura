import React from 'react';
import { renderItem, FlatList, StyleSheet, View } from 'react-native'
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'
import Texto from '../../componentes/texto'

export default function Cesta({ topo, detalhes, item }) {
    return <>
        <FlatList
            data={item.lista}
            renderItem={renderItem}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={()=> {
                return <>
                <Topo {...topo} />
                <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Item {...item} />
                </View>
                </>

            }}
        />
            
        
    </>
}


const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});