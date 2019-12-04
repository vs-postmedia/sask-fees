import React, { Component, Fragment } from 'react';
import * as Moment from 'moment-timezone';
import Tabletop from 'tabletop';
import Input from '../Input/Input';
import CardList from '../CardList/CardList';
import './Layout.css';

export class Layout extends Component {
	state = {
		data: [],
		filteredData: []
	};

	componentDidMount() {
		const that = this;
		Tabletop.init({
				key: this.props.dataURL,
				simpleSheet: true
			}).then(function(data, tabletop) { 
				that.setState({
					data: data,
					filteredData: data
				});
			});
	}

	handleInputChange(event) {
		const selectedData = event.target.value === '' ? this.state.data : this.state.data.filter(d => d.city.toLowerCase().includes(event.target.value.toLowerCase()));

		this.setState({
			filteredData: selectedData
		});
	}

	render() {
		let results;
		if (this.state.filteredData.length > 0) {
			results = <CardList data={this.state.filteredData}></CardList>;
		} else {
			results = <p className="no-data">No cancellations</p>;
		}
		return (
			<Fragment>
				<h1>Fees May Apply</h1>
				<Input onChange={this.handleInputChange.bind(this)}></Input>
				{results}
			</Fragment>
		);
	}
}

export default Layout;
/*
<SummaryBox data={this.state.data}></SummaryBox>
{results}
*/