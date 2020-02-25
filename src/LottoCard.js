import React, { useState } from 'react'
import LottoCardHeader from './LottoCardHeader'
import Num from './Num'
import './LottoCard.scss'

function LottoCard(props) {

  // state
  const [selectedNums, setSelectedNums] = useState([])

  // event handlers, etc.
  const handleSelectedNumsChange = (num) => {
    let newSelectedNums = [...selectedNums]
    const indexFound = selectedNums.findIndex(idx => idx === num)
    // If number is checked (found in list), remove it. Otherwise, add it to end of array and sort.
    if (indexFound >= 0) {
      newSelectedNums.splice(indexFound, 1)
    } else {
      newSelectedNums = newSelectedNums.concat([num]).sort((a, b) => a - b)
    }
    setSelectedNums(newSelectedNums)
  }

  const shouldDisableNum = (num) => {
    return (selectedNums.length === props.maxNums && !selectedNums.includes(num))
  }

  // JSX functions
  const nums = () => {
    const numsArr = []
    for (let i = 1; i <= 49; i++) {
      numsArr.push(<Num key={i} numName={i} onNumChange={handleSelectedNumsChange} isDisabled={shouldDisableNum(i)} />)
    }
    return numsArr
  }

  return (
    <li className="LottoCardListItem">
      <div className="LottoCard">
        <LottoCardHeader selectedNums={selectedNums} handleRemoveCard={() => props.handleRemoveCard(props.id)} />
        <ul className="LottoCard__numsList">
          {nums()}
        </ul>
      </div>
    </li>
  )
}

export default LottoCard
