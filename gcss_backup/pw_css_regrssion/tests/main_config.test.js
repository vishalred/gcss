// As test is asynchronous u cannot call it so many times the grid becomes unresponsive.
// we need to reduce load on server grid so I am trying to run using params

var platforms = {
    win_8_1_1176x2500_ie_11 : {
        deviceName: "one",
        size: "1176x2500",
        tags: ["desktop1176x2500"]
    },
    win_8_1_1175x2500_ie_11 : {
        deviceName: "two",
        size: "1175x2500",
        tags: ["desktop1175x2500"]

    },
    win_8_1_991x2500_ie_11 : {
        deviceName: "three",
        size: "991x2500",
        tags: ["desktop991x2500"]


    }

};// created an object for all platforms I am going to use this


/*
 This function creates an instance of WebDriver
 and stores it in a test session. Later it will be picked up
 by after-test event
 */
function openDriver(url, size, browserSize) {

    var driver = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "IE",
        desiredCapabilities: {
            os: 'Windows',
            os_version: '8.1',
            browser: 'IE',
            browser_version: '11.0',
            resolution: '1920x1080',//resolution is desktop’s screen resolution

        }
    });

    session.put("driver", driver);

    // Checking if url is actually a uri or a full url
    if (url != null) {
        if (url.indexOf("http://") != 0 && url.indexOf("https://") != 0) {
            url = "http://" + domain + url;
        }
        resize(driver, browserSize);//browser resize
        driver.get(url);
    }
    else {
        resize(driver, browserSize);//browser resize
        driver.get("http://" + domain);
    }
    return driver;
}


/*
 This event will be called after each test.
 Here we will close the browser window.
 */
afterTest(function (test) {
    var driver = session.get("driver");
        driver.quit();
    }
});



