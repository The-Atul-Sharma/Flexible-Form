export default {
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