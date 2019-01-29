import React, { Component } from 'react'
import LottoCardHeader from './LottoCardHeader'
import Num from './Num'
import './LottoCard.scss'

class LottoCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedNums: this.props.nums || [],
    }

    this.handleSelectedNumsChange = this.handleSelectedNumsChange.bind(this)
  }

  createNums = () => {
    let numsArr = []

    for (let i = 1; i <= 49; i++) {
      numsArr.push(
        <Num key={i} numName={i} onNumChange={this.handleSelectedNumsChange} isDisabled={this.shouldDisableNum(i)} />
      )
    }
    return numsArr
  }

  shouldDisableNum = (num) => {
    const selectedNums = this.state.selectedNums
    if (selectedNums.length === 7 && !selectedNums.includes(num)) {
      return true
    }
    else {
      return false
    }
  }

  handleSelectedNumsChange(num) {
    // Remove value from array if it exists, otherwise add it to array and sort
    const _toggleValueInArray = function(arr, val) {
      const indexFound = arr.findIndex((el) => el === val)
      // If number is already checked, remove it
      if (indexFound >= 0) {
        arr.splice(indexFound, 1)
      // Otherwise, add it and re-sort the list
      } else {
        arr[arr.length] = val
        arr.sort((a, b) => a - b)
      }
      return arr
    }

    this.setState({
      selectedNums: _toggleValueInArray(this.state.selectedNums, num)
    })
  }

  render() {
    return (
      <li className="LottoCardListItem">
        <div className="LottoCard">
          <LottoCardHeader selectedNums={this.state.selectedNums} />
          <ul className="LottoCard__numsList">
            {this.createNums()}
          </ul>
        </div>
      </li>
    )
  }
}

export default LottoCard
