# JSON Creator
* Simple JSON data creator built with Node.js
* Outputs data.json

## Installation

1. Clone the repository
2. `cd` to the cloned repository
3. Run `npm install`

## Running the app

1. `node app.js --help` : Prints out every possible argument
2. `node app.js add --title="TITLE" --body="CONTENT"` : Parses an instance to the json document
3. `node app.js remove --title="TITLE"` : Removes an instance from the json document
4. `node app.js read --title="TITLE"` : Reads an instance from the json document
5. `node app.js list` : Lists every instance from the json document

## Debugging
#### Debugging with `debugger;`

1. `node inspect app.js`
2. `nodemon inspect app.js`

#### Debuggin with Chrome Dev Tools `chrome://inspect` => `Dedicated Dev Tools`

1. `node --inspect-brk app.js`
2. `nodemon --inspect-brk app.js`
