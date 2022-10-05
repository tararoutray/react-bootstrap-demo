import './App.css';
import React from 'react';
import ButtonDemo from './ButtonDemo';

function App() {
	return (
		<React.Fragment>
			<div className='container py-5'>
				<h1>Button Component</h1>
				<div className='mt-4'>
					<ButtonDemo></ButtonDemo>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;