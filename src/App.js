import './App.css';
import React from 'react';
import ButtonDemo from './ButtonDemo';
import AlertDemo from './AlertDemo';
import SpinnerDemo from './SpinnerDemo';

function App() {
	return (
		<React.Fragment>
			<div className='container py-5'>
				<h1>Button Component</h1>
				<div className='mt-4'>
					<ButtonDemo></ButtonDemo>
				</div>
				<div className='my-5'></div>
				<h1>Alert Component</h1>
				<div className='mt-4'>
					<AlertDemo></AlertDemo>
				</div>
				<div className='my-5'></div>
				<h1>Spinner Component</h1>
				<div className='mt-4'>
					<SpinnerDemo></SpinnerDemo>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;