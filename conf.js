const userCredentials = {
  'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
}

exports.hubURL = "https://hub-cloud.browserstack.com/wd/hub"

exports.singleTestCapabilities = {
  'device': 'iPhone 11',
  'realMobile': 'true',
  'os_version': '14.0',
  'browserName': 'iPhone',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'browserstack-build-1', // CI/CD job or build name
  ...userCredentials
}

exports.localTestCapabilities = {
  'device': 'iPhone 11',
  'realMobile': 'true',
  'os_version': '14.0',
  'browserName': 'iPhone',
  'browserstack.local': 'true',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'browserstack-build-1', // CI/CD job or build name
  ...userCredentials
}

exports.parallelTestCapabilities = [
  {
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'Windows',
    'build': 'browserstack-build-1',
    'name': 'Parallel test 1',
    ...userCredentials
  },
  {
    'os_version': 'Monterey',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'OS X',
    'build': 'browserstack-build-1',
    'name': 'Parallel test 2',
    ...userCredentials
  },
  {
    'os_version': 'Big Sur',
    'browserName': 'Safari',
    'os': 'OS X',
    'build': 'browserstack-build-1',
    'name': 'Parallel test 3',
    ...userCredentials
  },
  {
    'browserName': 'Android',
    'device': 'Samsung Galaxy S20',
    'realMobile': 'true',
    'build': 'browserstack-build-1',
    'name': 'Parallel test 4',
    ...userCredentials
  },
  {
    'browserName': 'iPhone',
    'device': 'iPhone 12 Pro Max',
    'realMobile': 'true',
    'build': 'browserstack-build-1',
    'name': 'Parallel test 5',
    ...userCredentials
  }
];
