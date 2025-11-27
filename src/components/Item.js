import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false,
    };
  }

  toggleCart = () => {
    this.setState({ inCart: !this.state.inCart });
  };

  render() {
    const { name, category } = this.props;
    const { inCart } = this.state;

    return (
      <li className={inCart ? "in-cart" : ""}>
        {name}
        <button onClick={this.toggleCart}>Add to Cart</button>
      </li>
    );
  }
}

export default Item;
