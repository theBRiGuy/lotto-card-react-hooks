import React, { useState } from 'react'
import './Num.scss'

function Num(props) {

  // state
  const [isChecked, setChecked] = useState(false)

  // event handlers
  const handleChange = () => {
    setChecked(!isChecked)
    props.onNumChange(props.numName)
  }

  // helpers
  const id = `num_${Math.random().toString().replace(/0\./, '')}`

  return (
    <li className="Num">
      <input
        className="Num__checkbox"
        type="checkbox"
        id={id}
        checked={props.isChecked}
        disabled={props.isDisabled}
        onChange={handleChange}
      />
      <label
        className="Num__label"
        htmlFor={id}
        >
        {props.numName}
      </label>
    </li>
  );
}

export default Num
