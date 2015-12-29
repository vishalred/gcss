// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "https://www.programmableweb.com/user/register";

// Browserstack testing key

var key = "http://nishantkumar7:FfjHEzFuTokze1hXpspr@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "user_register";

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

//// Test Group for Tablet Devices
//
//grouped([testName.concat("_Tablet_768x1024")], function () {
//
//    test(testName.concat("_iPadAir_iPad_768x1024"), function () {
//
//        var driver = createGridDriver(key, {
//            browserName: "iPad",
//            desiredCapabilities: {
//                platform: 'MAC',
//                device: 'iPad Air',
//                browserName: 'iPad'
//
//
//            }
//        });
//
//        driver.get(path);
//        checkLayout(driver, "specs/new.gspec", ["iPadAir_iPad_768x1024"]);
//        driver.quit();
//
//    });
//
//    test(testName.concat("_GoogleNexus7_android_768x1024"), function () {
//
//        var driver = createGridDriver(key, {
//            browserName: "android",
//            desiredCapabilities: {
//                platform: 'ANDROID',
//                device: 'Google Nexus 7',
//                browserName: 'android'
//
//
//            }
//        });
//
//        driver.get(path);
//        checkLayout(driver, "specs/new.gspec", ["GoogleNexus7_android_768x1024"]);
//        driver.quit();
//
//    });
//
//});
//
//// Test Group for Mobile Devices
//
//grouped([testName.concat("_Mobile")], function () {
//
//    test(testName.concat("_SamsungGalaxyS5_android_360x640"), function () {
//
//        var driver = createGridDriver(key, {
//            browserName: "android",
//            desiredCapabilities: {
//                platform: 'ANDROID',
//                device: 'Samsung Galaxy S5',
//                browserName: 'android'
//
//
//            }
//        });
//
//        driver.get(path);
//        checkLayout(driver, "specs/new.gspec", ["SamsungGalaxyS5_android_360x640"]);
//        driver.quit();
//
//    });
//
//    test(testName.concat("_iPhone5_iPhone_320x568"), function () {
//
//        var driver = createGridDriver(key, {
//            browserName: "iPhone",
//            desiredCapabilities: {
//                platform: 'MAC',
//                device: 'iPhone 5',
//                browserName: 'iPhone'
//
//            }
//        });
//
//        driver.get(path);
//        checkLayout(driver, "specs/new.gspec", ["iPhone5_iPhone_320x568"]);
//        driver.quit();
//
//    });
//
//});
