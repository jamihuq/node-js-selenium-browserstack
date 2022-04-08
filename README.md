# node-js-selenium-browserstack

## prerequisite
Nodejs installed on your system <br>
https://nodejs.org/en/

## Steps
<b>Step-1</b><br>
Clone the repo, go to the cloned directory and install the dependencies with command: <br/>
```
npm install 
```

<b>Step-2</b><br>
Configure the capabilities and swap your credentials. <br/>
If you wish to run a single test <br/>
1. navigate to /script/single.js
2. Change the OS or browser if you want.
3. Use your BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESSKEY from the dashboard.

```javascript
var capabilities = {
	'bstack:options' : {
		"os" : "OS X", 
		"osVersion" : "Sierra",
		"buildName" : "Final-Snippet-Test",
		"sessionName" : "Selenium-4 Nodejs snippet test",
		"local" : "false",
		"seleniumVersion" : "4.0.0",
		"userName" : "USER_NAME", //IMP: Use your browserstack username here
		"accessKey" : "ACCESS_KEY", //IMP: Use your browserstack accesskey here
	},
	"browserName" : "Chrome",
	"browserVersion" : "latest",
}
```
<b>Step-3</b><br>
Run the test and see the session on the browserstack dashboard. <br/>
Follow step-2 then,

To run a single test session:
``` 
node ./script/single.js
```
---
To run a local test session:
also provide the access key to bs_local_args
```javascript
// replace <browserstack-accesskey> with your key.
var bs_local_args = { 'key': ACCESS_KEY };
```

``` 
node ./script/local.js
```
---
To run a parallel test session:
``` 
node ./script/parallel.js
```