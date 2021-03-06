exports.config = {
    
    
    
        /**
    
         * server configurations
    
         */


      //  services: ['selenium-standalone'],
        host: '127.0.0.1',
        port: 4444,
    
    
        /**
    
         * specify test files
    
         */
    
        specs: [
    
            './login.js'
    
        ],
    
    
    
    
        /**
    
         * capabilities
    
         */
    
        capabilities: [ {
    
            browserName: 'chrome'
    
        }],
    
    
    
        /**
    
         * test configurations
    
         */
    
        logLevel: 'silent',
    
        coloredLogs: true,
    
        screenshotPath: 'shots',
    
        baseUrl: 'http://yhgao.cybozu-dev.com',
    
        waitforTimeout: 10000,
    
        framework: 'mocha',
    
    
    
        reporters: ['dot'],
    
        reporterOptions: {
    
            outputDir: './'
    
        },
    
    
    
        mochaOpts: {
    
            ui: 'bdd'
    
        },
    
    
    
        /**
    
         * hooks
    
         */
    
        onPrepare: function() {
    
            console.log('let\'s go');
    
        },
    
        onComplete: function() {
    
            console.log('that\'s it');
    
        }
    
    };