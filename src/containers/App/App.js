import React, { Component, Fragment } from 'react';
import './App.css';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';

const flexiConfig = {
	items: [
		{
			'name': 'username',
			'label': 'Full Name',
			'placeholder': 'Enter your name',
			'type': 'text',
		},
		{
			'name': 'userid',
			'label': 'User ID',
			'placeholder': 'Enter your id',
			'type': 'number',
		},
		{
			'name': 'userstate',
			'label': 'State',
			'type': 'select',
			'placeholder': 'Select your state',
			'values': [
				'Maharashtra',
				'Kerala',
				'Tamil Nadu',
			]
		},
		{
			'name': 'userskills',
			'label': 'Choose your skills?',
			'type': 'checkbox',
			'values': [
				'JavaScript',
				'HTML',
				'CSS',
				'ReactJS',
				'Redux',
				'D3.js'
			]
		},
		{
			'name': 'userbloodgroup',
			'label': 'Choose your blood group?',
			'type': 'radio',
			'values': [
				'A+',
				'A-',
				'B+',
				'B-',
				'AB+',
				'AB-',
				'O+',
				'O-'
			]
		},
		{
			'name': 'usermessage',
			'label': 'Message',
			'type': 'textarea',
			'placeholder': 'Enter your message',
			'rows': 5,
			'resize': false,
		},
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
					handleChange={e => this.handleInputChange(e, item.name)}
					value={this.state[item.name] || ''}
					placeholder={item.placeholder}
				/>;
			case 'select':
				return <Select 
					name={item.name}
					label={item.label}
					placeholder={item.placeholder}
					handleChange={e => this.handleInputChange(e, item.name)}
					options={item.values}
					value={this.state[item.name] || ''}
				/>;
			case 'checkbox':
				return <Checkbox 
					inputType={item.type}
					name={item.name}
					label={item.label}
					handleChange={e => this.handleCheckboxSelection(e, item.name)}
					options={item.values}
					value={this.state[item.name] || []}
				/>;
			case 'radio':
				return <Checkbox 
					inputType={item.type}
					name={item.name}
					label={item.label}
					handleChange={e => this.handleInputChange(e, item.name)}
					options={item.values}
					value={this.state[item.name] || []}
				/>;
			case 'textarea':  
				return <Textarea 
					inputType={item.type}
					label={item.label}
					name={item.name}
					handleChange={e => this.handleInputChange(e, item.name)}
					value={this.state[item.name] || ''}
					placeholder={item.placeholder}
					rows={item.rows}
					resize={item.resize}
				/>;
		  	default:
				return;
		}
	}

	handleInputChange(e, name) {
		this.setState({[name]: e.target.value }, () => console.log('state:', this.state));
	}

	updateCheckboxValue(name, newSelection, newSelectionArray) {
		if(this.state[name].indexOf(newSelection) > -1) {
			newSelectionArray = this.state[name].filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state[name], newSelection];
		}
		this.setState({ [name]: newSelectionArray }, () => console.log('state', this.state));
	}

	handleCheckboxSelection(e, name) {
		const newSelection = e.target.value;
		let newSelectionArray;

		if (!this.state[name]) {
			this.setState({
				[name]: []
			}, () => this.updateCheckboxValue(name, newSelection, newSelectionArray))
		} else { this.updateCheckboxValue(name, newSelection, newSelectionArray) }
	}

	handleButtonClick() {
		console.log("state", this.state);
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
				<Button 
					value="Submit"
					handleClick={() => this.handleButtonClick()}
				/>
			</div>
		);
	}
}

export default App;
