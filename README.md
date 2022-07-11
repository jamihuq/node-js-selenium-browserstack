# node-js-selenium-browserstack

## prerequisite
Nodejs installed on your system <br>
https://nodejs.org/en/

## Steps
<b>Step-1</b><br>
Clone the repo, go to the cloned directory and install the dependencies with commands: <br/>
```
git clone https://github.com/browserstack/node-js-selenium-browserstack.git
cd node-js-selenium-browserstack
npm install 
```

<b>Step-2</b><br>
Configure the capabilities and swap your credentials. <br/>
1. navigate to  `/conf.js`
2. Change the OS or browser if you want.
3. Use your BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY from the dashboard.

<b>Step-3</b><br>
Run the test and see the session on the browserstack dashboard. <br/>
Follow step-2 then,

To run a single test session:
``` 
npm run single
```
---
To run a local test session:
also provide the access key to bs_local_args
```javascript
// replace <browserstack-accesskey> with your key.
var bs_local_args = { 'key': ACCESS_KEY };
```

``` 
npm run local
```
---
To run a parallel test session:
``` 
npm run parallel
```
