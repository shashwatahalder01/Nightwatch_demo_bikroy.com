module.exports = {
    "Password Change":function(browser){
       
        const changePassword = "Your password was changed successfully."
        const oldPassword = "xyz@123"
        const newPassword = "asdfgh@123"


        let changePass = browser.page.bikroy();
        changePass
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
                .pause(2*1000)
                .setValue('@oldPassword',oldPassword)
                .setValue('@newPassword',newPassword)
                .setValue('@confirmPassword',newPassword)
                .pause(2*1000)
                .click("//button[@class='ui-btn is-standard has-busy is-auto']")
                .pause(3*1000)
                .assert.containsText('@alertText',changePassword)
                .pause(2*1000)
                .setValue('@oldPassword',newPassword)
                .setValue('@newPassword',oldPassword)
                .pause(2*1000)
                .setValue('@confirmPassword',oldPassword)
                .pause(2*1000)
                .click("//button[@class='ui-btn is-standard has-busy is-auto']")
                .end()            
        
    }
}