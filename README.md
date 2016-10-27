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

## Running without Node.js

This front-end can be run with any HTTP server capable of serving static
files. Here's how to do it with Python 3:

```bash
python3 -m http.server       
```

Then go to `http://0.0.0.0:8000` in a browser.
