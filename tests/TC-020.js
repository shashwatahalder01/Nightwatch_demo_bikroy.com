module.exports = {
    "Total Post Ads":function(browser){
        let totalPost = browser.page.bikroy();
        totalPost
                .maximizeWindow()
                .navigate()
                .pause(2 * 1000)
                .click('@loginLink')
                .click('@selectOptionForLogin')
                .setValue('@inputEmail',"mahabub.qups@gmail.com")
                .setValue('@inputPassword',"xyz@123")
                .pause(2*1000)
                .click('@loginButton')
                .pause(2*1000)
                .click('@myAccountLink')
                .pause(3*1000) 
                .assert.visible('@postItems')
                .pause(2*1000)
                    
        
    }
}