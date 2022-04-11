const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');
const browserstack = require('browserstack-local');

// Input capabilities
const { localTestCapabilities, hubURL } = require('../conf');

//creates an instance of Local
const bs_local = new browserstack.Local();

const bs_local_args = { 'key': process.env.BROWSERSTACK_ACCESS_KEY || "YOUR_ACCESS_KEY" };

// starts the Local instance with the required arguments
bs_local.start(bs_local_args, function () {
  console.log("Started BrowserStackLocal");
  runTestWithCaps();
});

async function runTestWithCaps() {
  let driver = new webdriver.Builder()
    .usingServer(hubURL)
    .withCapabilities(localTestCapabilities)
    .build();

  try {
    await driver.get("http://bs-local.com:45691/check");

    const body = await driver.wait(
      webdriver.until.elementLocated(By.css('body'))
      , 10000);

    const bodyText = await driver.wait(
      webdriver.until.elementIsVisible(body, 10000)
    ).getText();

    assert(bodyText == 'Up and running');
    //marking the test as local is up
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Local test is successful"}}'
    );
  } catch (e) {
    //marking the local test as Failed 
    console.log("Error:", e.message)
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Couldn\'t connect to local"}}'
    );
  } finally {
    if (driver) {
      await driver.quit();
    }
  }

  // stop the Local instance
  bs_local.stop(function () {
    console.log("Stopped BrowserStackLocal");
  });
}
