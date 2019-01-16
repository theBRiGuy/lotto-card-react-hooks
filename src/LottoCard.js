import React, { Component } from 'react';
import Num from './Num';

class LottoCard extends Component {

  constructor(props) {
    super(props);

    const _createNums = () => {
      let numsArr = [];

      for (let i = 1; i <= 49; i++) {
        numsArr.push(
          <Num key={i} numName={i} />
        );
      }
      return numsArr;
    }

    this.state = {
      selectedNums: this.props.nums || [],
      nums: _createNums()
    };

  }

  render() {

    return (
      <li className="LottoCardListItem">
        <div className="LottoCard">
          {this.state.nums}
        </div>
      </li>
    );
  }
}

export default LottoCard;
