import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {inputKey: 0}

  countKey = () => {
    this.setState(prevState => ({inputKey: prevState.inputKey + 1}))
  }

  render() {
    const {inputKey} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-img"
        />
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <form className="input-container">
            <label htmlFor="input-keys" className="text">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-element"
              id="input-keys"
              onChange={this.countKey}
            />
            <p className="key-count">No.of letters: {inputKey}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
