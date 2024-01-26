import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Alexander Kliesch',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Automation', 'Security'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'GitHub Actions',
		// What do you want to learn in this workshop? 
		expectations: [
			'Learning more about Jenkins (which I know knothing about)'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'Magic: The Gathering', 
			'Spend time with friends',
			'chill'
		]
	}
});
