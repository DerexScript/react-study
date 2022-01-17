import React, { Component } from "react";

const url = "https://api.dotnetcrud.ml/api/users";

class AppProvider extends Component {
  state = {
    externalData: null,
  };

  fetchUsers = async () => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      if (data) {
        this.setState({ externalData: data });
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    if (this.state.externalData === null) {
      //console.log(`Rendering...... ${this.state.externalData}`);
      return <div>Rendering......</div>;
    } else {
      //console.log(`OK...... ${this.state.externalData}`);
      return (
        <div>
          {this.state.externalData.map((personagem) => {
            return <div key={personagem.id}>{personagem.name}</div>;
          })}
        </div>
      );
    }
  }
}

export default AppProvider;
