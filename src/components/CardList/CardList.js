import React from 'react';
import Card from '../Card/Card';
import './CardList.css';


const CardList = (props) => {
	const data = props.data.sort((a,b) => {
		return parseInt(b.route) - parseInt(a.route);
	});

 	return (
 		<div className="card-list">
 			{data.map((d,i) => {
 				return (
 					<Card className='card' data={d} key={i} id={d.city}></Card>
 				)
 			})}
 		</div>
 	)
	
}


export default CardList;
