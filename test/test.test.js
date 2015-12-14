

// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/category/all/mashups";

// Browserstack testing key

var key = "http://nishantkumar7:FfjHEzFuTokze1hXpspr@hub.browserstack.com/wd/hub";

// <Home Page | Article Page | [... ]> <Platform > < browser > <version > <resolution >

// Test Page Name

var testName = "Mashup_Listing";

 //Test Group for Desktop Devices
test(testName.concat("_GoogleNexus7_android_768x1024"), function () {

    var driver = createGridDriver(key, {
        browserName: "android",
        desiredCapabilities: {
            platform: 'ANDROID',
            device: 'Google Nexus 5',
            browserName: 'android'


        }
    });

    driver.get(path);
    checkLayout(driver, "specs/new.gspec", ["GoogleNexus7_android_768x1024"]);
    driver.quit();

});