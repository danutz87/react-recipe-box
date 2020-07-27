import React from 'react';
import Tile from './tile';

class Index extends React.Component {
  render() {
    const data = this.props.data,
      tileNodes = data.map( (data) => {
        return (
          <Tile
            show={this.props.show}
            data={data}
          />
        );
      });
    return (
      <div className="container">
        <main className="tile-container">
          {tileNodes}
        </main>
      </div>
    );
  }
}

export default Index;
