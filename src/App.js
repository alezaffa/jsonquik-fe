import React from 'react'
import TransactionInfo from './components/transactionInfo';

class App extends React.Component {
  state = {
    json: {
      foo: '',
      year: '',
      date: '',
      importSum: [],
      count: [],
      transactions: [
        {
          transactionTotal: '',
          posId: []
        }
      ]
    }
  };

  componentDidMount() {
    fetch("http://localhost:8085/jsonquik/api/v2/json")
      .then(res => res.json())
      .then((data) => {
        this.setState({
          json: data
        });
      },
        (error) => {
          this.setState({
            data: ''
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TransactionInfo transactionInfo={this.state.json} />
        </header>
      </div>
    );
  }
}

export default App;
