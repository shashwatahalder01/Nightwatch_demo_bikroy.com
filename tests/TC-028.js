module.exports = {
    tags:['bikroy.com'],
    "Show Phone Number":function(browser){
       
       let webpage = browser.page.bikroy();
       webpage.maximizeWindow().navigate().assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')
              .setValue('@searchBarName','dell laptop').click('@searchButton')
              .click('@topAdd1')
              .assert.elementPresent('@productDiscription')
              .pause(2*1000).click('@phoneNumber')
              .pause(2*1000).click('@addFavButton').click('@selectOptionForLogin')
              .setValue('@inputEmail',"mahabub.qups@gmail.com")
              .setValue('@inputPassword',"xyz@123").click('@loginButton')
              .pause(3*1000).click('@addFavButton')
              .pause(3*1000).click('@addFavButton').pause(3*1000)
                
        
            
        
    }
}