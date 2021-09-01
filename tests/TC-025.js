module.exports = {
    "logout":function(browser){
        const oldPassword = "xyz@123"
        
        let logout = browser.page.bikroy()
        logout
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
                .click('@accountSettingLink')
                .getLocationInView('@logoutButton', function(result){                   
                    
                    })
                .assert.visible('@logoutButton')
                .assert.containsText('@logoutButton',"Log out")
                .pause(2*2000)
                .click('@logoutButton')
                .pause(1*1000)
                .assert.visible('@loginLink')
                .pause(1*1000)
                .end()
                
            
        
    }
}