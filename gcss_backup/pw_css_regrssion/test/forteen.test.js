//driver to set capabilites
test("browserstack test for homepage on Windows 8.1 991x2500 Chrome 41", function () {
/*
    var driver2 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "Firefox",
        desiredCapabilities: {
            os: 'Windows',
            os_version: '8.1',
            browser: 'IE',
            browser_version: '11.0',
            resolution: '1920x1080',//resoultion is desktop’s screen resolution

        }
    });

    */
    var driver1 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "Chrome",
        desiredCapabilities: {
            os: 'Windows',
            os_version: '8.1',
            browser: 'Chrome',
            browser_version: '41.0',
            resolution: '1920x1080',//resoultion is desktop’s screen resolution

        }
    });
    resize(driver1, "991x2500");//browser resize

    driver1.get("http://qa2.programmableweb.com/");
    checkLayout(driver1, "spec/main.spec", ["desktopch41991x2500"]);
    driver1.quit();

    /*
    resize(driver2, "991x2500");
    driver2.get("http://qa2.programmableweb.com/");
    checkLayout(driver2, "api_new_row.spec", ["mobile"]);

    driver2.quit();
    */

});
