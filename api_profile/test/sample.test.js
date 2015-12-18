// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/api/google-maps";

// Browserstack testing key

var key = "http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "api_profile";

test(testName.concat("_iPhone5S_iPhone_320x568"), function () {

    var driver = createGridDriver(key, {
        browserName: "iPhone",
        desiredCapabilities: {
            platform: 'MAC',
            device: 'iPhone 5S',
            browserName: 'iPhone'

        }
    });

    driver.get(path);
    checkLayout(driver, "specs/new.gspec", ["iPhone5S_iPhone_320x568"]);
    driver.quit();

});