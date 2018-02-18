import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

import { Content, Button, Text } from 'native-base';

import Table from '../components/table';

type StateToProps = {
  rankings: string[],
};
type DispatchToProps = {
  refresh: () => void,
};

function Ranking(props: StateToProps & DispatchToProps) {
  return (
    <Content>
      <Button onPress={() => props.refresh()}>
        <Text>a</Text>
      </Button>
      <Table items={props.rankings} />
    </Content>
  );
}

const mapStateToProps: MapStateToProps<*, *, StateToProps> = state => ({
  rankings: state.ranking.rankings,
});
const mapDispatchToProps: MapDispatchToProps<*, *, DispatchToProps> = dispatch => ({
  refresh: () => dispatch({ type: 'REFRESH_RANKING' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
