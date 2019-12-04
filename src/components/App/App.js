import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';

// VARS
const dataURL = 'https://docs.google.com/spreadsheets/d/1Q_y_GKBnxryHc6_5kYRtPZqOpbVTHVdV274pNtCJvug/edit?usp=sharing';

function App() {
	return (
	  	<div className="App">
	  		<Layout dataURL={dataURL}></Layout>
	  	</div>
	);
}

export default App;
