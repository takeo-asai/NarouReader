import React from 'react';
import { Linking, View } from 'react-native';
import { List, ListItem, Text, Icon, Card, CardItem, Body, Left, Right } from 'native-base';

import { NovelType } from '../modules/novel';

type Props = {
  novels: NovelType[],
};

const openUrl = (url: string) => {
  Linking.canOpenURL(url).then((isSupported) => {
    if (isSupported) {
      Linking.openURL(url);
    } else {
      console.error('OpenURL', url);
    }
  });
};

const Table = (props: Props) => (
  <List
    dataArray={props.novels}
    renderRow={(novel: NovelType) => (
      <ListItem onPress={() => openUrl(`https://google.com/?ab=${novel.ncode}`)}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text>{novel.title}</Text>
          <Text numberOfLines={3}>{novel.description}</Text>
          <Text>
            {novel.keywords} {novel.writer} {novel.updatedAt}
            {novel.stories}
          </Text>

          <Icon type="FontAwesome" name="star" />
        </View>
      </ListItem>
    )}
  />
);
const card = (props: Props) => (
  <View>
    {props.novels &&
      props.novels.map(novel => (
        <Card key={novel.ncode}>
          <CardItem>
            <Body>
              <Text>{novel.title}</Text>
              <Text note>{novel.writer}</Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Body>
              <Text note>{novel.description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left><Text>{novel.keywords}</Text></Left>
            <Body>
              <Text>details</Text>
            </Body>
            <Right><Text>{novel.updatedAt}</Text></Right>
          </CardItem>
        </Card>
      ))}
  </View>
);

export default card;
