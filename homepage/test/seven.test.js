//driver to set capabilites

test("browserstack test for For homepage windows 7 IE 11 1366x768", function () {

    var driver = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "IE",
        desiredCapabilities: {
            os: 'Windows',
            os_version: '7',
            browser: 'IE',
            browser_version: '11.0',
            resolution: '2048x1536',//resoultion is desktop’s screen resolution

        }
    });
    //we have use 1192x1080 because that will give inner width size 1176x1080
    resize(driver, "1366x768");//browser resize

    driver.get("http://www.programmableweb.com/");
    checkLayout(driver, "specs/main.gspec", ["windows7ie111136x768"]);
    //dumpPage(driver, "Home page", "specs/main.gspec", "dumpsn/windows10ie11136x768", 2048, 1536);
    //dumpPage(driver, "Home page", "specs/homepage.spec", "dumps/homepage", 200, 200);
    driver.quit();

});
