module.exports = {
    tags:['bikroy.com'],
    "Show Phone Number":function(browser){
       
       let webpage = browser.page.bikroy();
       webpage.maximizeWindow().navigate().assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')
              .setValue('@searchBarName','dell laptop').click('@searchButton')
              .click('@topAdd1')
              .assert.elementPresent('@productDiscription')
              .pause(2*1000).click("//div[@class='call-text--30D-J']")
              .pause(2*1000)
                
        
            
        
    }
}