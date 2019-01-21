import React, { Component } from 'react'
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

  handleSelectedNumsChange(num) {
    console.log("Selected nums changed!")

    // Remove value from array if it exists, otherwise add it to array and sort
    const _toggleValueInArray = function(arr, val) {
      const indexFound = arr.findIndex((el) => el === val)
      if (indexFound >= 0) {
        arr.splice(indexFound, 1)
      } else {
        arr[arr.length] = val
        arr.sort()
      }
      return arr
    }

    this.setState({
      selectedNums: _toggleValueInArray(this.state.selectedNums, num)
    })
  }

  render() {

    const _createNums = () => {
      let numsArr = [];

      for (let i = 1; i <= 49; i++) {
        numsArr.push(
          <Num key={i} numName={i} onNumChange={this.handleSelectedNumsChange} />
        );
      }
      return numsArr;
    }

    return (
      <li className="LottoCardListItem">
        <div className="LottoCard">
          {_createNums()}
        </div>
      </li>
    );
  }
}

export default LottoCard
