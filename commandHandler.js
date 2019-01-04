const json = require('./json.js');

// Add a new instance and print the result
var addAction = (title, body) => {
	var instance = json.addInstance(title, body);
	printMessage(instance, 'NEW INSTANCE CREATED', 'INSTANCE TITLE TAKEN')
}

// Fetch all data and print each item
var listAction = () => {
	var data = json.getAll();

	if (data[0]) {
		data.forEach((element, index) => {
			printMessage(element, `INDEX: ${index}`, 'INSTANCE NOT FOUND')
		});
	} else {
		console.log("INSTANCE NOT FOUND");
	}
}

// Fetch an instance and print the result
var readAction = (title) => {
	var instance = json.getInstance(title);
	printMessage(instance, 'READING THE INSTANCE', 'INSTANCE NOT FOUND')
}

// Remove an instance and print the result
var removeAction = (title) => {
	var removedInstance = json.removeInstance(title);
	printMessage(removedInstance, 'INSTANCE REMOVED', 'INSTANCE NOT FOUND')
}

var printMessage = (instance, initialMessage, errorMessage) => {
	if (instance) {
		console.log('--------------');
		console.log(initialMessage);
		console.log(`TITLE: ${instance.title}`);
		console.log(`BODY: ${instance.body}`);
		console.log('--------------');
	} else {
		console.log(errorMessage);
	}
}

module.exports = {
	addAction,
	listAction,
	readAction,
	removeAction
}