module.exports = {
    tags:['bikroy.com'],
    "Assert product discription":function(browser){
       
       let webpage = browser.page.bikroy();
       webpage.maximizeWindow().navigate().assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')
              .setValue('@searchBarName','dell laptop').click('@searchButton')
              .click('@topAdd1')
              .assert.elementPresent('@productDiscription')
              .pause(2*1000)
              .end()  
        
            
        
    }
}