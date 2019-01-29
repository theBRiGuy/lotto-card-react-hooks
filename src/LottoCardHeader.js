import React, { Component } from 'react'
import './LottoCardHeader.scss'

class LottoCardHeader extends Component {

	render() {
		return (
			<div className="LottoCardHeader">
				<ul className="LottoCardHeader__numList">
					{
						this.props.selectedNums.map( (num, i) => (
							<li key={i} className="LottoCardHeader__numList__num">{num}</li>
						))
					}
				</ul>
				<ul className="LottoCardHeader__actionsList">
					<li className="LottoCardHeader__actionsList__item--remove">Remove</li>
				</ul>
			</div>
		)
	}
}

export default LottoCardHeader