import React, { Component, Fragment } from 'react';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  handleAddRepositorio = () => {};

  render() {
    const { repositoryInput } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepositorio}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>Facebook/React</strong> (A declarative, efficient, and flexible JavaScript
              library for building user interfaces.)
            </p>
            <a href="https://github.com/facebook/react">Acessar</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Main;
