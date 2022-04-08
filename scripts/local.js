const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');
var browserstack = require('browserstack-local');

//creates an instance of Local
var bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
var bs_local_args = { 'key': ACCESS_KEY };

// starts the Local instance with the required arguments
bs_local.start(bs_local_args, function() {
  console.log("Started BrowserStackLocal");
  // check if BrowserStack local instance is running
  console.log(bs_local.isRunning());
  runTestWithCaps(); 
});
// Input capabilities
var capabilities = {
	'bstack:options' : {
		"os" : "OS X",
		"osVersion" : "Sierra",
		"buildName" : "Final-Snippet-Test",
		"sessionName" : "Selenium-4 Nodejs snippet test",
		"local" : "true",
		"seleniumVersion" : "4.0.0",
		"userName" : "USER_NAME",
		"accessKey" : "ACCESS_KEY",
	},
	"browserName" : "Chrome",
	"browserVersion" : "latest",
}

async function runTestWithCaps () {
     let driver = new webdriver.Builder().usingServer(`https://rutvikchandla_2MEern:AXHzyg34Qr81Nep231pu@hub-cloud.browserstack.com/wd/hub`).withCapabilities(capabilities).build();
     try{
       await driver.get("http://bs-local.com:45691/check");

       const body = await driver.wait(webdriver.until.elementLocated(By.css('body')), 10000);
       const bodyText =  await driver.wait(webdriver.until.elementIsVisible(body, 10000)).getText();
       assert(bodyText == 'Up and running');
       //marking the test as Passed if product has been added to the cart
       await driver.executeScript(
         'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Local test is successful"}}'
       );
     } catch(e) {
       //marking the test as Failed if product has not been added to the cart
       console.log("Error:", e.message)
       await driver.executeScript(
         'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Couldn\'t connect to local"}}'
       );
     }
     await driver.quit();
     // stop the Local instance
    bs_local.stop(function() {
        console.log("Stopped BrowserStackLocal");
    });
}

