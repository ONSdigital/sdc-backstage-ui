# sdc-backstage-ui

This repo provides a front-end for the backstage.

## Configuration

After cloning this repo you'll need a config file. Use the following command
if you want to use the deployed version of the
sdc-business-response-management API:

```bash
cp config-example.json config.json
```

If you want to run the sdc-business-response-management API locally use this
command instead:

```bash
cp config-local-dev.json config.json
```

## Prerequisites to running the app

A web server will need to be setup to serve ./index.html when matching any route
request with the exception of the ./dist folder and config.json file.

## Development

### Prerequisites
* [Install Node](https://nodejs.org/)
* From your command line or terminal, cd into your cloned directory and run:
```bash
npm install
```
* After all dependencies have been installed, from the command line run:
```bash
gulp dev
```
The Gulp task will run a node server that will build the minified files required
for development.

## Deployment

Run the first 2 development steps above, after this run:
```bash
gulp test
```
Optionally add a flag labelled port to change port number

## Running without Node.js

This front-end can be run with any HTTP server capable of serving static
files. Here's how to do it with Python 3:

```bash
python3 -m http.server       
```

Then go to `http://0.0.0.0:8000` in a browser.