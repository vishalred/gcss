// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/category/mapping";

// Browserstack testing key

var key = "http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "Category_Term";

test(testName.concat("_iPadAir_iPad_768x1024"), function () {

    var driver = createGridDriver(key, {
        browserName: "iPad",
        desiredCapabilities: {
            platform: 'MAC',
            device: 'iPad Air',
            browserName: 'iPad'


        }
    });

    driver.get(path);
    checkLayout(driver, "specs/new.gspec", ["iPadAir_iPad_768x1024"]);
    driver.quit();

});



