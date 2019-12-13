import React from 'react';
import './Card.css';

const Card = (props) => {
	const d = props.data;
	let pageCost = '';

	// total cost
	const totalCost = d.total_cost !== '' ? d.total_cost : 'No reponse';

	// conditionally show page costs & other fees
	if (parseFloat(d.total_cost) > 0) {
		pageCost = (
			<div className="cost-details">
				<p>{`Cost/page: ${d.page_cost}`}</p>
				<p>{`Other fees: ${d.other_fees}`}</p>
			</div>
		)
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
					<p className="time">{`$${totalCost}`}</p>
					
				</div>
				<div className="response">
					<h3>Response time</h3>
					<p>{d.response_time}</p>
				</div>
			</div>

			{pageCost}

			{note}
		</div>
	);
}

export default Card;
