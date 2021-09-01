module.exports = {
    tags:['bikroy.com'],
    "Open Bikroy Site in Browser":function(browser){
       
       let webpage = browser.page.website();
       webpage.maximizeWindow().navigate().assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')
       
        // browser
        // .maximizeWindow()
        // .url("https://bikroy.com/en")
        // .pause(2 * 1000)
        // .assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')      
            
        
    }
}