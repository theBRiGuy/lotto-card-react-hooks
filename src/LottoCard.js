import React, { Component } from 'react'
import LottoCardHeader from './LottoCardHeader'
import Num from './Num'
import './LottoCard.scss'

class LottoCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedNums: []
    }

    this.handleSelectedNumsChange = this.handleSelectedNumsChange.bind(this)
  }

  handleSelectedNumsChange(num) {
    this.setState(oldState => {
      let selectedNums = [...oldState.selectedNums]
      const indexFound = oldState.selectedNums.findIndex(idx => idx === num)
      // If number is checked (found in list), remove it. Otherwise, add it to end of array and sort.
      if (indexFound >= 0) {
        selectedNums.splice(indexFound, 1)
      } else {
        selectedNums = selectedNums.concat([num]).sort((a, b) => a - b)
      }
      return { selectedNums }
    })
  }

  render() {
    const shouldDisableNum = (num) => {
      const selectedNums = this.state.selectedNums
      return (selectedNums.length === this.props.maxNums && !selectedNums.includes(num))
    }

    const nums = () => {
      const numsArr = []
      for (let i = 1; i <= 49; i++) {
        numsArr.push(<Num key={i} numName={i} onNumChange={this.handleSelectedNumsChange} isDisabled={shouldDisableNum(i)} />)
      }
      return numsArr
    }

    return (
      <li className="LottoCardListItem">
        <div className="LottoCard">
          <LottoCardHeader selectedNums={this.state.selectedNums} handleRemoveCard={this.props.handleRemoveCard.bind(this, this.props.id)} />
          <ul className="LottoCard__numsList">
            {nums()}
          </ul>
        </div>
      </li>
    )
  }
}

export default LottoCard
