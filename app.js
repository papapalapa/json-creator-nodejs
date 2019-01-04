const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const cmd = require('./commandHandler.js');

var titleOptions = {
	describe: 'Title of an instance',
	demand: true,
	alias: 't'
}

var bodyOptions = {
	describe: 'Content of a instance',
	demand: true,
	alias: 'b'
}

const argv = yargs
	.command('add', 'Add a new instance', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('read', 'Read an existing instance', {
		title: titleOptions
	})
	.command('remove', 'Remove an existing instance', {
		title: titleOptions
	})
	.command('list', 'List all existing instances')
	.help()
	.argv;

var command = argv._[0];

switch (command) {
	case 'add':
		cmd.addAction(argv.title, argv.body);
		break;
	case 'list':
		cmd.listAction();
		break;
	case 'read':
		cmd.readAction(argv.title);
		break;
	case 'remove':
		cmd.removeAction(argv.title);
		break;
	default:
		console.log('Command not recognized');
}