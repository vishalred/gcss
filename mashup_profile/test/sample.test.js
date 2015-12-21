// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/mashup/nostalgia";

// Browserstack testing key

var key = "http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "mashup_profile";

// Test Group for Desktop Devices

grouped([testName.concat("_Desktop_1366x768")], function () {

    test(testName.concat("_Windows10_IE_11_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "IE",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '10',
                browser: 'IE',
                browser_version: '11.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows10_IE_11_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows10_Chrome_42_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Chrome",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '10',
                browser: 'Chrome',
                browser_version: '42.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows10_Chrome_42_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows10_Firefox_37_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Firefox",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '10',
                browser: 'Firefox',
                browser_version: '37.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows10_Firefox_37_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows8.1_IE_11_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "IE",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '8.1',
                browser: 'IE',
                browser_version: '11.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows8.1_IE_11_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows8.1_Chrome_42_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Chrome",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '8.1',
                browser: 'Chrome',
                browser_version: '42.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows8.1_Chrome_42_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows8.1_Firefox_37_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Firefox",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '8.1',
                browser: 'Firefox',
                browser_version: '37.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows8.1_Firefox_37_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows7_IE_11_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "IE",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '7',
                browser: 'IE',
                browser_version: '11.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows7_IE_11_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows7_IE_10_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "IE",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '7',
                browser: 'IE',
                browser_version: '10.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows7_IE_10_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows7_IE_9_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "IE",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '7',
                browser: 'IE',
                browser_version: '9.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows7_IE_9_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows7_Chrome_42_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Chrome",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '7',
                browser: 'Chrome',
                browser_version: '42.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows7_Chrome_42_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_Windows7_Firefox_37_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Firefox",
            desiredCapabilities: {
                os: 'Windows',
                os_version: '7',
                browser: 'Firefox',
                browser_version: '37.0',
                resolution: '2048x1536'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["Windows7_Firefox_37_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_OSXYosemite_Safari_8_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Safari",
            desiredCapabilities: {
                os: 'OS X',
                os_version: 'Yosemite',
                browser: 'Safari',
                browser_version: '8.0',
                resolution: '1920 x 1080'//resoultion is desktop’s screen resolution

            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["OSXYosemite_Safari_8_1366x768"]);
        driver.quit();

    });

    test(testName.concat("_OSXYosemite_Chrome_46_1366x768"), function () {

        var driver = createGridDriver(key, {
            browser: "Chrome",
            desiredCapabilities: {
                os: 'OS X',
                os_version: 'Yosemite',
                browser: 'Chrome',
                browser_version: '46.0',
                resolution: '1920 x 1080'//resoultion is desktop’s screen resolution
            }
        });
        // Resizing the window to 1366 X 768
        resize(driver, "1366x768");//browser resize

        driver.get(path);
        checkLayout(driver, "specs/new.gspec", ["OSXYosemite_Chrome_46_1366x768"]);
        driver.quit();

    });


});