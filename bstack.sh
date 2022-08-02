#!/bin/bash
rm -rf node-js-selenium-browserstack
git clone https://github.com/jamihuq/node-js-selenium-browserstack.git
cd node-js-selenium-browserstack
cd tests
npm install
npm run parallel
