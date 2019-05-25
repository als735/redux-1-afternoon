import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Name.css";
import store, {UPDATE_NAME, UPDATE_CATEGORY} from "./../../store.js"; 

// The store is an object with a method on it called dispatch that we can use to send actions to the reducer.

class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState(); 
    // The store is an object with a method on it called getState that we can use to access the Redux state object. We'll invoke this method inside our constructor and store the return value in a constant so we can reference it easily below in state. 
    this.state = {
      name: reduxState.name,
      category: reduxState.category 
    };
  }
  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }
  saveChanges() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.recipeName
    });
    store.dispatch({
      type: UPDATE_CATEGORY,
      payload: this.state.recipeCategory 
    }); 
    // Send data to Redux state// it fires for ech piece of data that this component needs to save to redux (in this case two)// both dispatch methods will send an action object to the reducer, the payload pulls the values of the input boxes from state where they are being stored.  
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
