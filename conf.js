exports.singleTestCapabilities = {
  'device' : 'iPhone 11',
  'realMobile' : 'true',
  'os_version' : '14.0',
  'browserName' : 'iPhone',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

exports.localTestCapabilities = {
  'device' : 'iPhone 11',
  'realMobile' : 'true',
  'os_version' : '14.0',
  'browserName' : 'iPhone',
  'browserstack.local' : 'true',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

exports.parallelTestCapabilities = [
  {
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'Windows',
    'build': 'BStack-[NodeJS] Sample Build',
    'name': 'Parallel test 1'
  },
  {
    'os_version': 'Monterey',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'OS X',
    'build': 'BStack-[NodeJS] Sample Build',
    'name': 'Parallel test 2'
  },
  {
    'os_version' : 'Big Sur',
    'browserName' : 'Safari',
    'os' : 'OS X',
    'build': 'BStack-[NodeJS] Sample Build',
    'name': 'Parallel test 3'
  },
  {
    'browserName': 'Android',
    'device': 'Samsung Galaxy S20',
    'realMobile': 'true',
    'build': 'BStack-[NodeJS] Sample Build',
    'name': 'Parallel test 4'
  },
  {
    'browserName': 'iPhone',
    'device': 'iPhone 12 Pro Max',
    'realMobile': 'true',
    'build': 'BStack-[NodeJS] Sample Build',
    'name': 'Parallel test 5'
  }
];

exports.userName = process.env["BROWSERSTACK_USER_NAME"] || "YOUR_USER_NAME";
exports.accessKey = process.env["BROWSERSTACK_ACCESS_KEY"] || "YOUR_ACCESS_KEY";