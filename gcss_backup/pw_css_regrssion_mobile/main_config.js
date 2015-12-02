//driver1 to set capabilites iPhone 5 landscape
test("browserstack test for homepage on iPhone 5 landscape", function () {
    var driver1 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "iPhone",
        desiredCapabilities: {
          browserName: 'iPhone',
          platform: 'MAC',
          device:'iPhone 5',
          emulator: 'true',
          "deviceOrientation":"landscape",                   
        }
    });
    
    
    driver1.get("http://qa2.programmableweb.com/");
    checkLayout(driver1, "main.spec", ["iphone5landscape"]);
    driver1.quit();
});
//driver2 to set capabilites iPhone 5 portrait 
test("browserstack test for homepage on iPhone 5 portrait ", function () {
    var driver2 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "iPhone",
        desiredCapabilities: {
          browserName: 'iPhone',
          platform: 'MAC',
          device:'iPhone 5',
          emulator: 'true',
          "deviceOrientation":"portrait ",                   
        }
    });
    
    
    driver2.get("http://qa2.programmableweb.com/");
    checkLayout(driver2, "main.spec", ["iphone5portrait"]);
    driver2.quit();
});

//driver3 to set capabilites android 5 portrait 
test("browserstack test for homepage on android Samsung Galaxy S5 ", function () {
    var driver3 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "android",
        desiredCapabilities: {
          browserName: 'android',
          platform: 'ANDROID',
          device:'Samsung Galaxy S5',
          emulator: 'true',
          "deviceOrientation":"portrait",                   
        }
    });
    
    
    driver3.get("http://qa2.programmableweb.com/");
    checkLayout(driver3, "main.spec", ["samsunganroid44portrait"]);
    driver3.quit();
});

//driver4 to set capabilites android 5 portrait 
test("browserstack test for homepage on android Samsung Galaxy S5 ", function () {
    var driver3 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "android",
        desiredCapabilities: {
          browserName: 'android',
          platform: 'ANDROID',
          device:'Samsung Galaxy S5',
          emulator: 'true',
          "deviceOrientation":"landscape",                   
        }
    });
    
    
    driver3.get("http://qa2.programmableweb.com/");
    checkLayout(driver3, "main.spec", ["samsunganroid44landscape"]);
    driver3.quit();
});

//driver5 to set capabilites android 5 portrait 
test("browserstack test for homepage on android Samsung Galaxy S5 ", function () {
    var driver5 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "android",
        desiredCapabilities: {
          browserName: 'android',
          platform: 'ANDROID',
          device:'Google Nexus 5',
          emulator: 'true',
          "deviceOrientation":"portrait",                   
        }
    });
    
    
    driver5.get("http://qa2.programmableweb.com/");
    checkLayout(driver5, "main.spec", ["googlenexus5portrait"]);
    driver5.quit();
});

//driver6 to set capabilites android 5 portrait 
test("browserstack test for homepage on android Samsung Galaxy S5 ", function () {
    var driver6 = createGridDriver("http://neeravmehta:7WpxqAEQzJ82dcwb5x5q@hub.browserstack.com/wd/hub", {
        browser: "android",
        desiredCapabilities: {
          browserName: 'android',
          platform: 'ANDROID',
          device:'Google Nexus 5',
          emulator: 'true',
          "deviceOrientation":"landscape",                   
        }
    });
    
    
    driver6.get("http://qa2.programmableweb.com/");
    checkLayout(driver6, "main.spec", ["googlenexus5landscape"]);
    driver6.quit();
});


