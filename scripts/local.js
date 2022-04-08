const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');
var browserstack = require('browserstack-local');

//creates an instance of Local
var bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
var bs_local_args = { 'key': 'ACCESS_KEY' };

// starts the Local instance with the required arguments
bs_local.start(bs_local_args, function() {
  console.log("Started BrowserStackLocal");
  // check if BrowserStack local instance is running
  console.log(bs_local.isRunning());
  runTestWithCaps(); 
});

// Input capabilities
const capabilities = {
    'device' : 'iPhone 11',
    'realMobile' : 'true',
    'os_version' : '14.0',
    'browserName' : 'iPhone',
    'browserstack.local' : 'true',
    'name': 'BStack-[NodeJS] Sample Test', // test name
    'build': 'BStack Build Number 1' // CI/CD job or build name
}

async function runTestWithCaps () {
     let driver = new webdriver.Builder().usingServer(`https://USERNAME:ACCESS_KEY@hub-cloud.browserstack.com/wd/hub`).withCapabilities(capabilities).build();
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

