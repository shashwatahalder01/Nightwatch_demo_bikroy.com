module.exports = {
    "Invalid Email":function(browser){
        let email = browser.page.bikroy()
        email
            .maximizeWindow()
            .navigate()
            .pause(2 * 1000)
            .assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')   
            .click('@loginLink')
            .click('@selectOptionForLogin')
            .setValue('@inputEmail',"blackhorse@gmail.com")
            .setValue('@inputPassword',"hunnybunny")   
            .pause(2*1000)
            .click('@loginButton')
            .assert.containsText('@loginErrorMessage',"The email or password you entered did not match our records. Please double-check and try again.")
            .pause(3*1000)
            .end()
                
        
    }
}