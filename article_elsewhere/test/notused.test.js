
grouped(["windows8.1IE11"], function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows8.1IE11"]);
        driver.quit();

    });

});

grouped(["windows8.1chrome42"], function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows8.1chrome42"]);
        driver.quit();

    });

});

grouped(["windows8.1ff37"], function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows8.1ff37"]);
        driver.quit();

    });

});

grouped(["windows7IE11"], function () {

    test(testName.concat(" on windows 7 IE11 1366x768"), function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows7IE11"]);
        driver.quit();

    });

});

grouped(["windows7ie10"], function () {

    test(testName.concat(" on windows 7 IE 10 1366x768"), function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows7ie10"]);
        driver.quit();

    });

});

grouped(["windows7IE9"], function () {

    test(testName.concat(" on windows 7 IE9 1366x768"), function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows7IE9"]);
        driver.quit();

    });

});

grouped(["windows7chrome42"], function () {

    test(testName.concat(" on windows 7 Chrome 42 1366x768"), function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows7chrome42"]);
        driver.quit();

    });


});

grouped(["windows7ff37"], function () {

    test(testName.concat(" on windows 7 Firefox 37 1366x768"), function () {

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
        checkLayout(driver, "specs/main.gspec", ["windows7ff37"]);
        driver.quit();

    });

});

grouped(["appleOSXYosemitesafari8"], function () {

    test(testName.concat(" on Apple OS X Yosemite  Safari  8 1366x768"), function () {

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
        checkLayout(driver, "specs/main.gspec", ["appleOSXYosemitesafari8"]);
        driver.quit();

    });


});

grouped(["appleOSXYosemitechrome46"], function () {

    test(testName.concat(" on  Apple OS X Yosemite Chrome 46 1366x768"), function () {

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
        checkLayout(driver, "specs/main.gspec", ["appleOSXYosemitechrome46"]);
        driver.quit();

    });

});