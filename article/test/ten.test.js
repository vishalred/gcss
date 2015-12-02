//driver to set capabilites

test("browserstack test for For Article windows 7 Chrome 42 1366x768", function () {

    var driver = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "Chrome",
        desiredCapabilities: {
            os: 'Windows',
            os_version: '7',
            browser: 'Chrome',
            browser_version: '42.0',
            resolution: '2048x1536',//resoultion is desktop’s screen resolution

        }
    });
    //we have use 1192x1080 because that will give inner width size 1176x1080
    resize(driver, "1366x768");//browser resize

    driver.get("http://www.programmableweb.com/news/paypal-launches-webhooks-payouts/elsewhere-web/2015/11/11");
    checkLayout(driver, "specs/main.gspec", ["windows7ch421136x768"]);
    //dumpPage(driver, "Home page", "specs/main.gspec", "dumpsn/windows10ie11136x768", 2048, 1536);
    //dumpPage(driver, "Home page", "specs/homepage.spec", "dumps/homepage", 200, 200);
    driver.quit();

});
