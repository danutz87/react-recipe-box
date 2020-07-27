import React from 'react';
import TileFooter from './tile_footer';
import TileMain from './tile_main';

class Tile extends React.Component {
  handleClick() {
    console.log(this.props.data.key)
    this.props.show(this.props.data.key);
  }

  render() {
    return (
      <div
        className="tile"
        onClick={this.handleClick.bind(this)}
      >
        <TileMain
          title={this.props.data.title}
          img={this.props.data.img}
        />
        <TileFooter />
      </div>
    );
  }
}

export default Tile;
