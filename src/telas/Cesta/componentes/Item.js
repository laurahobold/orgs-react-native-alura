import React from 'react';
import Texto from '../../../componentes/texto';
import { Image, View, StyleSheet, FlatList } from 'react-native';

export default function Item({ titulo, lista }) {
  const renderItem = ({ item: { nome, imagem } }) =>
    <View key={nome} style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  return <>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <FlatList
      data={lista}
      renderItem={renderItem}
      keyExtractor={({ nome }) => nome}
    />
    {lista.map(({ nome, imagem }) => {
      return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
      </View>
    })}
  </>
}

const estilos = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  },
})