// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/api/google-maps";

// Browserstack testing key

var key = "http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "api_profile";

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
