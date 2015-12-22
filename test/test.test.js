// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/add/sdk";

// Browserstack testing key

var key = "http://nishantkumar7:FfjHEzFuTokze1hXpspr@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "add sdk";

// Test Group for Desktop Devices


test(testName.concat("_iPhone5_iPhone_320x568"), function () {

    var driver = createGridDriver(key, {
        browserName: "iPhone",
        desiredCapabilities: {
            platform: 'MAC',
            device: 'iPhone 5',
            browserName: 'iPhone'

        }
    });

    driver.get(path);
    checkLayout(driver, "specs/new.gspec", ["iPhone5_iPhone_320x568"]);
    driver.quit();

});
