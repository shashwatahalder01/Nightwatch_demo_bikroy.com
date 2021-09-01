module.exports = {
    "Sort by Oldest ads":function(browser){
        let sort = browser.page.bikroy();
        sort
            .maximizeWindow()
            .navigate()
            .pause(2 * 1000)
            .click('@loginLink')
            .click('@selectOptionForLogin')
            .setValue('@inputEmail',"mahabub.qups@gmail.com")
            .setValue('@inputPassword',"xyz@123")
            .pause(2*1000)
            .click('@loginButton')
            .click('@allAdsLinkButton')
            .pause(2*1000)
            .click('@dropDownButton')
            .pause(5*1000)
            .assert.visible('@sortByOldest')
            .click('@sortByOldest')            
            .pause(3*1000)
            .end()

            
        
    }
}