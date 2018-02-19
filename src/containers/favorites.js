import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

import Table from '../components/table';

type StateToProps = {
  favorites: string[],
};
type DispatchToProps = {
  refresh: () => void,
};

function Favorites(props: StateToProps & DispatchToProps) {
  return <Table items={props.favorites} />;
}

const mapStateToProps: MapStateToProps<*, *, StateToProps> = state => ({
  favorites: state.favorites.favorites,
});
const mapDispatchToProps: MapDispatchToProps<*, *, DispatchToProps> = dispatch => ({
  refresh: () => dispatch({ type: 'REFRESH_RANKING' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
