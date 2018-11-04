import React, { Component, Fragment } from 'react';
import './App.css';
import Input from '../../components/Input/Input';

const flexiConfig = {
	items: [
		{
			'name': 'username',
			'label': 'Full Name',
			'placeholder': 'Enter your name',
			'type': 'text',
		},
		{
			'name': 'usercontact_no',
			'label': 'Mobile No',
			'placeholder': 'Enter your mobile no',
			'type': 'number',
		},
		{
			'name': 'states',
			'label': 'states',
			'type': 'dropdown',
			'values': [
				'Maharashtra',
				'Kerala',
				'Tamil Nadu',
			]
		}
	]
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	handleInputChange(e, name) {
		this.setState({[name]: e.target.value }, () => console.log('name:', this.state));
	}

	render() {
		return (
			<div className="container">
				{flexiConfig.items.map((item) => 
					<Fragment>
						{ (item.type === 'text' || item.type === 'number') && <Input 
							inputType={item.type}
							label={item.label}
							name={item.name}
							handleInputChange={e => this.handleInputChange(e, item.name)}
							value={this.state[item.name] || ''}
							placeholder={item.placeholder}
						/>}	
					</Fragment>	
					)	
				}
			</div>
		);
	}
}

export default App;
