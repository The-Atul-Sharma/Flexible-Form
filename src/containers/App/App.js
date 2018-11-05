import React, { Component, Fragment } from 'react';
import './App.css';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';
import flexiConfig from './store';

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
		this.setState({[name]: e.target.value });
	}

	updateCheckboxValue(name, newSelection, newSelectionArray) {
		if(this.state[name].indexOf(newSelection) > -1) {
			newSelectionArray = this.state[name].filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state[name], newSelection];
		}
		this.setState({ [name]: newSelectionArray });
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
		alert("Check your console");
		console.log("state", this.state);
	}

	render() {
		return (
			<div className="container">
				{flexiConfig.items.map((item) => 
					<Fragment key={item.name}>
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
