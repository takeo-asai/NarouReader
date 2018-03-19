import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { NovelType } from '../modules/novel';

type Props = {
  novels: NovelType[],
};

const Table = (props: Props) => (
  <List
    dataArray={props.novels}
    renderRow={(novel: NovelType) => (
      <ListItem>
        <Text>
          {novel.title}, {novel.description}, {novel.ncode}, {novel.keywords}, {novel.updatedAt},{' '}
          {novel.writer}, {novel.stories}
        </Text>
      </ListItem>
    )}
  />
);

export default Table;
