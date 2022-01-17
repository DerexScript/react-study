import React, { Component } from "react";
//import Button from "./component/Button/index";
//import { Link } from "react-router-dom";

class App extends Component {
  // This is an example of how to fetch external data in response to updated props,
  // If you are using an async mechanism that does not support cancellation (e.g. a Promise).

  _currentId = null;

  state = {
    externalData: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (nextProps.id !== prevState.prevId) {
      return {
        externalData: null,
        prevId: nextProps.id,
      };
    }

    // No state update necessary
    return null;
  }

  componentDidMount() {
    this._loadAsyncData(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.externalData === null) {
      this._loadAsyncData(this.props.id);
    }
  }

  componentWillUnmount() {
    // Prevent potential setState calls after unmount,
    // (Since these trigger DEV warnigs)
    this._currentId = null;
  }

  render() {
    if (this.state.externalData === null) {
      // Render loading state ...
      //console.log("rendering..." + this.state.externalData);
      return (<div>rendering</div>);
    } else {
      // Render real UI ...
      //console.log(this.state.externalData);
      return (
        <div>
          {
          this.state.externalData.map(personagem => {
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
  }

  asyncLoadData() {
    /*
    let d = {id: 1, message: 'message'};
    return new Promise(resolve => setTimeout(resolve(d), 2000));
    */
    return fetch("https://api.dotnetcrud.ml/api/users").then((response) =>
      response.json()
    );
  }

  _loadAsyncData(id) {
    if (id === this._currentId) {
      // Data for this id is already loading
    }

    this._currentId = id;

    this.asyncLoadData(id).then((externalData) => {
      // Only update state if the Promise that has just resolved,
      // Reflects the most recently requested external data.
      if (id === this._currentId) {
        this.setState({ externalData });
      }
    });
  }
}

export default App;
