import React, { Component } from 'react';
import'./App.css'
import { animals } from './animals';
import AnimalCard from './AnimalCard';

class App extends Component {
  state = {
    animals: animals,
    search:'',
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({
      animals: updatedArray,
    });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedAnimalsArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedAnimalsArray,
      };
    });
    console.log(this.state);
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {

    const animalFilter = animals.filter(animal => {
      return animal.name.toLowerCase().includes(this.state.search.toLowerCase())
    });

    return (
      <main >
        <input type="text" onChange={this.searchHandler}/>
        <h3>{this.state.animals.length} animal cards in display</h3>
        <div className="animalsList">
        
        {animalFilter.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            like={animal.likes}
            remove={() => this.removeHandler(animal.name)}
            // remove={this.removeHandler.bind(this, animal.name)}
            add={() => this.addLikeHandler(animal.name)}
          />
        ))}
      </div>
      </main>
    );
  }
}

export default App;