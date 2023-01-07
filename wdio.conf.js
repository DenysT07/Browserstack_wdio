exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
      // ||'bsuser_sdnKq2',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'cGJtqnesRHFAaiprx7xo',
  
    updateJob: false,
    specs: [
      'test/specs/*.e2e.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://3ecd2ba6381c89282aac224409abe3a2b621ca5f',
      'browserstack.debug': true,
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000,
    }
  };