import React, {useEffect, useState} from 'react'
import { SafeAreaView, StatusBar,StyleSheet, FlatList, View, Image, Text } from 'react-native'

export default function App () {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setPokemons(data.results)
    })
  }, [])

  return (
    <SafeAreaView>
      <View style={{top:50}}>
        <Text>+++++++ Veja abaixo os 15 Pokemons principais +++++++</Text>
      </View>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={PokemonShow}
      />
    </SafeAreaView>
  )
}

function PokemonShow(item) {

  const { name, url } = item.item

  const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')

  const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png'

  return (
    <View style={{ flexDirection: 'column', top: 94 }}>
      <Text>+ {name}</Text>
    </View>
  )
}