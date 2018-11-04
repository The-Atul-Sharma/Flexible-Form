import React, { Component, Fragment } from 'react';
import './App.css';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';

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
			'name': 'usercity',
			'label': 'State',
			'type': 'select',
			'placeholder': 'Choose your state',
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

	renderComponent = item => {
		switch(item.type) {
			case 'text':
			case 'number':  
				return <Input 
					inputType={item.type}
					label={item.label}
					name={item.name}
					handleInputChange={e => this.handleInputChange(e, item.name)}
					value={this.state[item.name] || ''}
					placeholder={item.placeholder}
				/>;
			case 'select':
				return <Select 
					name={item.name}
					label={item.label}
					placeholder={item.placeholder}
					handleInputChange={e => this.handleInputChange(e, item.name)}
					options={item.values}
					value={this.state[item.name] || ''}
				/>;
		  	default:
				return;
		}
	}

	handleInputChange(e, name) {
		this.setState({[name]: e.target.value }, () => console.log('name:', this.state));
	}

	render() {
		return (
			<div className="container">
				{flexiConfig.items.map((item) => 
					<Fragment>
						{this.renderComponent(item)}
					</Fragment>	
					)	
				}
			</div>
		);
	}
}

export default App;
