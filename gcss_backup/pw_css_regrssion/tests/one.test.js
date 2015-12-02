load("main_config.js");

testOne("browserstack test for homepage on Windows 8.1 1176x2500 IE 11", function (driver, device) {
    checkLayout(driver, "specs/welcomePage.spec", device.tags);
});