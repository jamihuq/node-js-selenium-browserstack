exports.hubURL = "https://hub.browserstack.com/wd/hub"

const userCredentials = {
  "userName": process.env["BROWSERSTACK_USERNAME"] || "ziahuq_blYaNV",
  "accessKey": process.env["BROWSERSTACK_ACCESS_KEY"] || "UzhT7avEeGYzPpdsNhyf"
}

exports.singleTestCapabilities = {
  'bstack:options': {
    "os": "OS X",
    "osVersion": "Monterey",
    "buildName": "browserstack-build-1",
    "sessionName": "Selenium-4 Nodejs snippet test",
    "local": "false",
    "seleniumVersion": "4.0.0",
    ...userCredentials,
  },
  "browserName": "Chrome",
  "browserVersion": "latest",
}

exports.localTestCapabilities = {
  'bstack:options': {
    "os": "OS X",
    "osVersion": "Monterey",
    "buildName": "browserstack-build-1",
    "sessionName": "Selenium-4 Nodejs snippet test",
    "local": "true",
    "seleniumVersion": "4.0.0",
    ...userCredentials
  },
  "browserName": "Chrome",
  "browserVersion": "latest",
}

const parallelTestBaseCapability = {
  "buildName": "browserstack-build-1",
  "local": "false",
  "seleniumVersion": "4.0.0",
  ...userCredentials
};

exports.parallelTestCapabilities = [
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Monterey",
      "sessionName": "Selenium-4 Nodejs snippet test1",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Monterey",
      "sessionName": "Selenium-4 Nodejs snippet test2",
      ...parallelTestBaseCapability
    },
    "browserName": "Safari",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Monterey",
      "sessionName": "Selenium-4 Nodejs snippet test3",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Monterey",
      "sessionName": "Selenium-4 Nodejs snippet test4",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Monterey",
      "sessionName": "Selenium-4 Nodejs snippet test5",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },

];
