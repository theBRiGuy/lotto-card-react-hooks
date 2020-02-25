import React from 'react'

function Landing(props) {

  const handleChange = (ev) => {
    // TODO
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    // TODO
  }

  return (
    <div className="Landing">
      <h1>
        <label htmlFor="howMany">
          How many tickets?
        </label>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          id="howMany"
          type="number"
          name="howMany"
          min="1"
          max="10"
          step="1"
          defaultValue="3"
          onChange={handleChange}
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

export default Landing
