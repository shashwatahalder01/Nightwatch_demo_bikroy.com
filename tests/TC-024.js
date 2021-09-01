module.exports = {
    "Show email in account":function(browser){       
        const oldPassword = "xyz@123"

        let showEmail = browser.page.bikroy();
        showEmail
                .maximizeWindow()
                .navigate()
                .pause(2 * 1000)
                .click('@loginLink')
                .click('@selectOptionForLogin')
                .setValue('@inputEmail',"mahabub.qups@gmail.com")
                .setValue('@inputPassword',oldPassword)
                .pause(2*1000)
                .click('@loginButton')
                .pause(5*1000)
                .click('@myAccountLink')
                .pause(2*1000)
                .click('@accountSettingLink')
                .assert.visible('@emialShowlable')
                .pause(2*1000)
                .end()
                    
        
    }
}