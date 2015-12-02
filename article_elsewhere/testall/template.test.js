// Template file to test on multiple devices

// Specify the full path of the page to test.

var path = "http://www.programmableweb.com/news/next-big-thing-small/elsewhere-web/2014/04/24";

// Desktop Tests

grouped(["desktop"], function () {



    grouped(["windows10IE11"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 10 IE11 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "IE",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '10',
                    browser: 'IE',
                    browser_version: '11.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows10IE11"]);
            driver.quit();

        });

    });

    grouped(["windows10chrome42"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 10 Chrome 42 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Chrome",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '10',
                    browser: 'Chrome',
                    browser_version: '42.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows10chrome42"]);
            driver.quit();

        });

    });

    grouped(["windows10ff37"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 10 Firefox 37 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Firefox",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '10',
                    browser: 'Firefox',
                    browser_version: '37.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows10ff37"]);
            driver.quit();

        });

    });

    grouped(["windows8.1IE11"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 8.1 IE11 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "IE",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '8.1',
                    browser: 'IE',
                    browser_version: '11.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows8.1IE11"]);
            driver.quit();

        });

    });

    grouped(["windows8.1chrome42"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 8.1 Chrome 42 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Chrome",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '8.1',
                    browser: 'Chrome',
                    browser_version: '42.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows8.1chrome42"]);
            driver.quit();

        });

    });

    grouped(["windows8.1ff37"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 8.1 Firefox 37 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Firefox",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '8.1',
                    browser: 'Firefox',
                    browser_version: '37.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows8.1ff37"]);
            driver.quit();

        });

    });

    grouped(["windows7IE11"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 7 IE11 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "IE",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '7',
                    browser: 'IE',
                    browser_version: '11.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows7IE11"]);
            driver.quit();

        });

    });

    grouped(["windows7ie10"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 7 IE 10 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "IE",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '7',
                    browser: 'IE',
                    browser_version: '10.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows7ie10"]);
            driver.quit();

        });

    });

    grouped(["windows7IE9"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 7 IE9 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "IE",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '7',
                    browser: 'IE',
                    browser_version: '9.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows7IE9"]);
            driver.quit();

        });

    });

    grouped(["windows7chrome42"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 7 Chrome 42 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Chrome",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '7',
                    browser: 'Chrome',
                    browser_version: '42.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows7chrome42"]);
            driver.quit();

        });


    });

    grouped(["windows7ff37"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) windows 7 Firefox 37 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Firefox",
                desiredCapabilities: {
                    os: 'Windows',
                    os_version: '7',
                    browser: 'Firefox',
                    browser_version: '37.0',
                    resolution: '2048x1536'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["windows7ff37"]);
            driver.quit();

        });

    });

    grouped(["appleOSXYosemitesafari8"], function () {

        test("Browserstack test For Article (Elsewhere on the Web) Apple OS X Yosemite  Safari  8 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Safari",
                desiredCapabilities: {
                    os: 'OS X',
                    os_version: 'Yosemite',
                    browser: 'Safari',
                    browser_version: '8.0',
                    resolution: '1920 x 1080'//resoultion is desktop’s screen resolution

                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["appleOSXYosemitesafari8"]);
            driver.quit();

        });


    });

    grouped(["appleOSXYosemitechrome46"], function () {

        test("Browserstack test For Article (Elsewhere on the Web)  Apple OS X Yosemite Chrome 46 1366x768", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browser: "Chrome",
                desiredCapabilities: {
                    os: 'OS X',
                    os_version: 'Yosemite',
                    browser: 'Chrome',
                    browser_version: '46.0',
                    resolution: '1920 x 1080'//resoultion is desktop’s screen resolution
                }
            });
            // Resizing the window to 1366 X 768
            resize(driver, "1366x768");//browser resize

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["appleOSXYosemitechrome46"]);
            driver.quit();

        });

    });

});


// Tablet Tests

grouped(["tablet"], function () {

    grouped(["AppleiPadAir8.3"], function () {

        test("Browserstack test For Article (Elsewhere on the Web)  Apple iPad Air 8.3  ", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browserName: "iPad",
                desiredCapabilities: {
                    platform: 'MAC',
                    device: 'iPad Air',
                    browserName: 'iPad'


                }
            });

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["AppleiPadAir8.3"]);
            driver.quit();

        });
    });

    grouped(["AndroidGoogleNexus7"], function () {

        test("Browserstack test For Article (Elsewhere on the Web)  Android Google Nexus 7  ", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browserName: "android",
                desiredCapabilities: {
                    platform: 'ANDROID',
                    device: 'Google Nexus 7',
                    browserName: 'android'


                }
            });

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["AndroidGoogleNexus7"]);
            driver.quit();

        });

    });
});



// Mobile Tests

grouped(["mobile"], function () {

    grouped(["AndroidGalaxys5"], function () {

        test("Browserstack test For Article (Elsewhere on the Web)  Android Samsung Galaxy s5", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browserName: "android",
                desiredCapabilities: {
                    platform: 'ANDROID',
                    device: 'Samsung Galaxy S5',
                    browserName: 'android'


                }
            });

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["AndroidGalaxys5"]);
            driver.quit();

        });

    });

    grouped(["Iphone5"], function () {

        test("Browserstack test For Article (Elsewhere on the Web)  Apple iPhone 5", function () {

            var driver = createGridDriver("http://taher9:Gafe4n66LWkfXrJfLFcv@hub.browserstack.com/wd/hub", {
                browserName: "iPhone",
                desiredCapabilities: {
                    platform: 'MAC',
                    device: 'iPhone 5',
                    browserName: 'iPhone'


                }
            });

            driver.get(path);
            checkLayout(driver, "specs/main.gspec", ["Iphone5"]);
            driver.quit();

        });

    });
});

