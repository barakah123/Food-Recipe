import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { recipe } from './recipe';
import Footer from "./Footer";
import Navbar from "./Navbar"
import './App.css';

const state = {
    recipe: recipe,
    searchfield: ''
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            recipe: recipe,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })    
    }
    render() {
        const filteredRecipe = this.state.recipe.filter(recipe =>{
            return recipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            
            <div>
            <Navbar/>
            <div className='tc'>
            <h1 className='f2'>Food Recipes</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList recipe={filteredRecipe} />
            </Scroll>
            <Footer/>
            </div>
            </div>
    
    );
    }
}

export default App