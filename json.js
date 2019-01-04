const fs = require('fs');

// Read data.json
var fetchData = () => {
	try {
		var dataString = fs.readFileSync('data.json');
		return JSON.parse(dataString);
	} catch (error) {
		return [];
	}
};

// Write the passed value to data.json
var saveData = (data) => {
	fs.writeFileSync('data.json', JSON.stringify(data));
};

// Add a new instance if there's no instance with the same title
var addInstance = (title, body) => {
	var data = fetchData();
	var dataInstance = {
		title,
		body
	};
	// Check if there's any instance with the same title
	var duplicateData = data.filter((instance) => instance.title === title);

	// If no duplicate found, save the data
	if (duplicateData.length === 0) {
		data.push(dataInstance);
		saveData(data);
		return dataInstance;
	}
};

// Get all instances
var getAll = () => {
	return data = fetchData();
};

// Read one instance that matches the passed title
var getInstance = (title) => {
	var data = fetchData();
	var filteredInstance = data.filter(instance => instance.title === title);
	if (filteredInstance) {
		return filteredInstance[0];
	}
};

// Remove one instance that matches the passed title
var removeInstance = (title) => {
	var data = fetchData();
	var filteredInstance = data.filter(instance => instance.title !== title);
	saveData(filteredInstance);

	return data.length !== filteredInstance.length;
};

module.exports = {
	addInstance,
	getAll,
	getInstance,
	removeInstance
};