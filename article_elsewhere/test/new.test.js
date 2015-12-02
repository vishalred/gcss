// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/news/next-big-thing-small/elsewhere-web/2014/04/24";

// Browserstack testing key

var key = "http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub";

// <Home Page | Artcile Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "Article (Elsewhere on the Web)";

// Desktop Tests



grouped(["Windows10"], function () {

    test(testName.concat(" Windows 10 IE11 1366x768"), function () {

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
        checkLayout(driver, "specs/new.gspec", ["windows10IE11_1366x768"]);
        driver.quit();

    });

    test(testName.concat(" Windows 10 Chrome 42 1366x768"), function () {

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
        checkLayout(driver, "specs/new.gspec", ["windows10chrome42_1366x768"]);
        driver.quit();

    });

    test(testName.concat(" Windows 10 Firefox 37 1366x768"), function () {

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
        checkLayout(driver, "specs/new.gspec", ["windows10ff37_1366x768"]);
        driver.quit();

    });

});


grouped(["Windows8.1"], function () {

    test(testName.concat(" on windows 8.1 IE11 1366x768"), function () {

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
        checkLayout(driver, "specs/new.gspec", ["windows8.1IE11_1366x768"]);
        driver.quit();

    });

    test(testName.concat(" on windows 8.1 Chrome 42 1366x768"), function () {

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
        checkLayout(driver, "specs/new.gspec", ["windows8.1chrome42_1366x768"]);
        driver.quit();

    });

    test(testName.concat(" on windows 8.1 Firefox 37 1366x768"), function () {

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
        checkLayout(driver, "specs/new.gspec", ["windows8.1ff37_1366x768"]);
        driver.quit();

    });

});


