
import {createStore} from "redux";   //components need to connect to a store 

export const UPDATE_NAME = "UPDATE_NAME";  
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"; 
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"; 
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"; 
export const ADD_INGREDIENTS = "ADD_INGREDIENTS"; 
export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS"; 
export const ADD_RECIPE = "ADD_RECIPE"; 

//action types that descibes what the action will do, they need to be exported so they can reach the components

const initialState = {   //sets up the initial state 
    recipeName : " ", 
    recipeCategory: " ", 
    authorFirst: " ", 
    authorLast: " ", 
    ingredients: [], 
    instructions: [], 
    recipes: []
}; 

function reducer(state = initialState, action) {
    const {type, payload} = action; // destructing action for easy access to its props // payload is the data you are sending to the store to have changed. 
    switch (type) { //tests the type property of the action object 
        case UPDATE_NAME :    
            return {...state, recipeName: payload}; 
        // each case should update the piece of state that it needs to and copies the rest of state in an unchanging way 
        case UPDATE_CATEGORY : 
            return {...state, recipeCategory: payload}; 
        case UPDATE_AUTHOR_FIRST :
            return {...state, authorFirst: payload}; 
        case UPDATE_AUTHOR_LAST :
            return {...state, authorLast: payload}; 
        case ADD_INGREDIENTS :
            const newIngredients = {...state, ingredients: payload}; // we need to make a copy of the list before we make changes to it below. 
            return {...state, ingredients: newIngredients}; 
        case ADD_INSTRUCTIONS : 
            const newInstructions = {...state, instructions: payload}; 
            return {...state, instructions: newInstructions}; 
        case ADD_RECIPE :
            const {
                recipeName,
                recipeCategory,
                authorFirst,
                authorLast, 
                ingredients, 
                instructions, 
            } = state; 
            const recipe = {
                recipeName, 
                recipeCategory, 
                authorFirst, 
                authorLast, 
                ingredients, 
                instructions 
            }; 
            const newRecipes = [...state.recipes, recipe]; 
            return {...state, recipes: newRecipes}; 
            // we'll pull all the values we've been storing so far off of state and build a recipe object with it. Then we we'll want to copy our list of recipes and add our a new recipe to it. Then of course we need to copy the rest of state in an immutable way.
        default: 
            return state;   //unaltered state 
  }
} 

export default createStore(reducer); //creating and exporting our store 