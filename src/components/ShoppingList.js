import React, { Component } from "react";
import Item from "./Item";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "All",
    };
  }

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };

  render() {
    const { items } = this.props;
    const { selectedCategory } = this.state;

    const filteredItems =
      selectedCategory === "All"
        ? items
        : items.filter((item) => item.category === selectedCategory);

    // Get unique categories for the dropdown
    const categories = ["All", ...new Set(items.map((i) => i.category))];

    return (
      <div>
        <label>
          Filter by category:
          <select
            value={selectedCategory}
            onChange={this.handleCategoryChange}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <ul className="Items">
          {filteredItems.map((item, idx) => (
            <Item key={idx} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
