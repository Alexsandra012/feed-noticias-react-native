import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Avatar from './components/Avatar';
import Card from './components/Card';

const DATA = [
  {
    id: '1',
    userAvatar: require('./assets/images/avatar1.jpeg'),
    userName: 'Alexsandra Vitória',
    postText:
      'Todo mundo sabe que moda e maquiagem tem tudo haver',
    postImage: require('./assets/images/post1.png')
  },
  {
    id: '2',
    userAvatar: require('./assets/images/avatar1.jpeg'),
    userName: 'Alexsandra Vitória',
    postText:
      'Aqui você encontrará as maiores inspirações para compor o seu look.',
    postImage: require('./assets/images/post2.jpg')
  },
  {
    id: '3',
    userAvatar: require('./assets/images/avatar1.jpeg'),
    userName: 'Alexsandra Vitória',
    postText:
      'A make beauty é uma das tendencias que mais estão em alta, e que realçam a beleza natural da mulher.',
    postImage: require('./assets/images/post3.png')
  },
  {
    id: '4',
    userAvatar: require('./assets/images/avatar1.jpeg'),
    userName: 'Alexsandra Vitória',
    postText:
      'Tricôs e coturno têm tudo a ver, estão totalmente em alta nas coleções de outono inverno!',
    postImage: require('./assets/images/post4.png')
  }
];

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;

export default function App() {
  return (
    <Container>
      <Header headerTitle='Em alta' />
      <RowContainer>
        <Avatar imageSource={require('./assets/images/avatar1.jpeg')} />
        <InputContainer />
      </RowContainer>
      <Card data={DATA} />
    </Container>
  );
}
