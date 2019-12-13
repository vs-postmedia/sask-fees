import React from 'react';
import './Card.css';

const Card = (props) => {
	const d = props.data;
	let pageCost, otherFees;

	// total cost
	let totalCost = d.total_cost;
	if (d.total_cost === '') {
		totalCost = 'N/A';
	} else if (d.total_cost !== 'Not provided') {
		totalCost = `$${d.total_cost}`;
	}

	// conditionally show page costs & other fees
	if (d.other_fees !== '') {
		otherFees = <p className="fee-details">{`Other fees: ${d.other_fees}`}</p>
	}
	if (parseFloat(d.page_cost) > 0) {
		pageCost = <p className="fee-details">{`Cost/page: $${d.page_cost}`}</p>;
	}

	// same for document notes 
	const note = d.doc_notes.length > 0 ? <p className="info"><strong>Note: </strong>{`${d.doc_notes}`}</p> : ''

	// parse website string
	const url = d.website.includes('http') ? d.website : 'no-url';
	const website = d.website.includes('http') ? d.website.split('//')[1].split('/')[0] : d.website;
	
	return (
		<div className="card">
			<header>
				<h2>{d.muni}</h2>
				<a className={`url ${url}`} href={url} rel="noopener noreferrer" target="_blank">{website}</a>

			</header>

			<div className="data-section">
				<div className="cost">
					<h3 className="day">Total cost</h3>
					<p className="time">{`${totalCost}`}</p>
					{pageCost}
				</div>
				<div className="response">
					<h3>Response time</h3>
					<p>{d.response_time}</p>
					{otherFees}
				</div>
			</div>

			{note}
		</div>
	);
}

export default Card;
