// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/search/google";

// Browserstack testing key

var key = "http://nishantkumar7:FfjHEzFuTokze1hXpspr@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "/Search";

// Test Group for Desktop Devices

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

