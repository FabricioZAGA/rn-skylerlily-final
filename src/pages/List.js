import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Search from '../components/Search.js';
import Card from '../components/Card.js';

const cardsInfo = [
  { image: `https://picsum.photos/id/302/200/200`, title: `Buenos dias amor`, description: `Amor amor, que tiene tu cara que ha perdido el color`, likes: 312 },
  { image: `https://picsum.photos/id/381/200/200`, title: `Alo alo`, description: `No dejabas de mirar estabas sola completamente bella y sensual`, likes: 241 },
  { image: `https://picsum.photos/id/338/200/200`, title: `Almohada`, description: `Amor como el nuestro no hay dos en la vida, por mas que se busque por mas que se esconda`, likes: 211 },
  { image: `https://picsum.photos/id/310/200/200`, title: `Preguntaselo a ella`, description: `Pues anda llamala y preguntaselo a ella`, likes: 187 },
  { image: `https://picsum.photos/id/352/200/200`, title: `El triste`, description: `Que triste fue decirnos adios cuando nos adorabamos mas`, likes: 90 },
  { image: `https://picsum.photos/id/301/200/200`, title: `Amar y querer`, description: `Es que casi todos sabemos querer, pero todos sabemos amar`, likes: 60 },
  // {image : ``, title : ``, description : ``, likes : ``},
];
export default function Login() {

  var renderCards = () => {
    var cardsList = [];
    cardsInfo.map((info, key) => {
      cardsList.push(<Card key={key} image={info.image} title={info.title} description={info.description} likes={info.likes} />)
    });
    return cardsList;
  }

  return (
    <SafeAreaView>
      <Search />
      <ScrollView >
        {renderCards()}
      </ScrollView>

    </SafeAreaView>
  );
}



