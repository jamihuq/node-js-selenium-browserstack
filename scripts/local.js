const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');
const browserstack = require('browserstack-local');

// Input capabilities
const { localTestCapabilities, userName, accessKey } = require('../conf');

//creates an instance of Local
const bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
const bs_local_args = { 'key': process.env.BROWSERSTACK_ACCESS_KEY || "YOUR_ACCESS_KEY" };

// starts the Local instance with the required arguments
bs_local.start(bs_local_args, function() {
  console.log("Started BrowserStackLocal");
  // check if BrowserStack local instance is running
  console.log(bs_local.isRunning());
  runTestWithCaps(); 
});

// check if BrowserStack local instance is running
console.log(bs_local.isRunning());

async function runTestWithCaps () {
  let driver = new webdriver.Builder().usingServer(`https://${userName}:${accessKey}@hub-cloud.browserstack.com/wd/hub`).withCapabilities(localTestCapabilities).build();

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
  } finally {
    await driver.quit();
  }

  // stop the Local instance
  bs_local.stop(function() {
      console.log("Stopped BrowserStackLocal");
  });
}
