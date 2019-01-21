import React, { Component } from 'react'

class Landing extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    this.props.onCardCountChange(ev.target.value)
  }

  handleSubmit(ev) {
    ev.preventDefault()
  }

  render() {
    return (
      <div className="Landing">
        <h1>
          <label htmlFor="howMany">
            How many tickets?
          </label>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="howMany"
            type="number"
            name="howMany"
            min="1"
            max="10"
            step="1"
            defaultValue="3"
            onChange={this.handleChange}
          />
          <button
            type="submit"
          >
            Go!
          </button>
        </form>
      </div>
    )
  }
}

export default Landing;
