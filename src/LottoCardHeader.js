import React from 'react'
import './LottoCardHeader.scss'

function LottoCardHeader(props) {

	return (
		<div className="LottoCardHeader">
			<ul className="LottoCardHeader__numList">
				{props.selectedNums.map((num, i) => <li key={i} className="LottoCardHeader__numList__num">{num}</li>)}
			</ul>
			<ul className="LottoCardHeader__actionsList">
				<li className="LottoCardHeader__actionsList__item--remove"><button onClick={props.handleRemoveCard}>Remove</button></li>
			</ul>
		</div>
	)
}

export default LottoCardHeader