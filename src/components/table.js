import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';

type Props = {
  items: string[],
};

const Table = (props: Props) => (
  <List
    dataArray={props.items}
    renderRow={item => (
      <ListItem>
        <Text>{item}</Text>
      </ListItem>
    )}
  />
);

export default Table;
