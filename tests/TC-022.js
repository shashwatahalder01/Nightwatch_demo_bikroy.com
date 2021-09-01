module.exports = {
    "Favourite Ads":function(browser){
             
        const oldPassword = "xyz@123"
        let fav = browser.page.bikroy();
        fav
            .maximizeWindow()
            .navigate()
            .pause(2 * 1000)
            .click('@loginLink')
            .click('@selectOptionForLogin')
            .setValue('@inputEmail',"mahabub.qups@gmail.com")
            .setValue('@inputPassword',oldPassword)
            .pause(2*1000)
            .click('@loginButton')
            .pause(2*1000)
            .click('@myAccountLink')
            .pause(2*1000)
            .click('@favPage')
            .assert.containsText('@favTitle',"Favorites")
            .end()
            
        
    }
}