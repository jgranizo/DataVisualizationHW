
import React, { Component } from 'react';

class FavoriteFruitSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFruit: ''
    };
  }

  handleFruitChange = (e) => {
    this.setState({
      selectedFruit: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your favorite fruit is: ${this.state.selectedFruit}`);
  };

  render() {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Select your favorite fruit:</h3>
        {fruits.map((fruit, index) => (
          <label key={index}>
            <input
              type="radio"
              name="fruit"
              value={fruit}
              checked={this.state.selectedFruit === fruit}
              onChange={this.handleFruitChange}
            />
            {fruit}
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  }
}
     
export default FavoriteFruitSelector;