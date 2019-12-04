import React from 'react';
import './Card.css';

const Card = (props) => {
	const d = props.data;
	let pageCost, otherFees;

	// conditionally show page costs & other fees
	if (parseFloat(d.total_cost) > 0) {
		pageCost = (
			<div className="cost-details">
				<p>{`Cost/page: $${d.page_cost}`}</p>
				<p>{`Other fees: $${d.other_fees}`}</p>
			</div>
		)
	} else {
		pageCost = '';
		otherFees = '';
	}

	// same for document notes 
	const note = d.doc_notes.length > 0 ? <p className="info"><strong>Note: </strong>{`${d.doc_notes}`}</p> : ''
	
	return (
		<div className="card">
			<header>
				<h2>{d.city}</h2>
				<a className="url" href={d.website}>{d.website.split('//')[1].split('/')[0]}</a>
			</header>

			<div className="data-section">
				<div className="cost">
					<h3 className="day">Total Cost</h3>
					<p className="time">{`$${d.total_cost}`}</p>
					
				</div>
				<div className="response">
					<h3>Response Time</h3>
					<p>{d.response_time}</p>
				</div>
			</div>

			{pageCost}

			{note}
		</div>
	);
}

export default Card;



