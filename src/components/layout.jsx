import React from 'react';
import BoxesContainer from './boxes_container';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [] };
  }

  render() {
    return (

      <BoxesContainer />

    );
  }
}

export default Layout;
