module.exports = {
    tags:['bikroy.com'],
    "Have quick links in homepage":function(browser){
       
       let webpage = browser.page.bikroy();
       webpage.maximizeWindow().navigate().assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')
       .getLocationInView('@quickLink', function(result){       
        
        })
        .pause(3*1000)
        .assert.elementPresent('@quickLink')
        .end()
       
        // browser
        // .maximizeWindow()
        // .url("https://bikroy.com/en")
        // .pause(2 * 1000)
        // .assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')      
            
        
    }
}