//driver to set capabilites

test("browserstack test for For homepage on ipad air ", function () {

    var driver = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {   
        browserName: "iPad",
        desiredCapabilities: {
            platform: 'MAC',
            device: 'iPad Mini',
            browserName: 'iPad',
            

        }
    });
    //we have use 1192x1080 because that will give inner width size 1176x1080
    //resize(driver, "1366x768");//browser resize

    driver.get("http://www.programmableweb.com/");
    checkLayout(driver, "specs/main.gspec", ["ipadair"]);
    //dumpPage(driver, "Home page", "specs/main.gspec", "dumpsn/windows10ie11136x768", 2048, 1536);
    //dumpPage(driver, "Home page", "specs/homepage.spec", "dumps/homepage", 200, 200);
    driver.quit();

});


// caps.setCapability("browserName", "iPhone");
// caps.setCapability("platform", "MAC");
// caps.setCapability("device", "iPhone 5");