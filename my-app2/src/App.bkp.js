import React, { Component } from "react";
//import Button from "./component/Button/index";
//import { Link } from "react-router-dom";

class App extends Component {
  state = {
    personagens: [],
  };

  async componentWillMount() {
    try {
      const response = await fetch("https://api.dotnetcrud.ml/api/users");
      const dataJson = await response.json();
      this.setState({ personagens: dataJson });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        {
        this.state.personagens.map(personagem => {
          return (
            <div key={personagem.id}>
              {personagem.name}
            </div>
          );
        })
        }
      </div>
    );
  }
  /*
  render() {
    return (
      <div>
        <Button>Salvar</Button>
        <Link to="/personagem/1">Personagem</Link>
      </div>
    );
  }
  */
}

export default App;
