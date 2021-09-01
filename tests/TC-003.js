module.exports={
    'Invalid password': function(browser){

        let invalid = browser.page.bikroy();
        invalid.maximizeWindow()
               .navigate()
               .pause(3*1000)
               .click('@loginLink')
               .pause(2*1000)
               .click('@selectOptionForLogin')
               .pause(2*1000)
               .assert.visible('@loginTitleInLoginPage')
               .assert.containsText('@loginTitleInLoginPage','Log in to Bikroy')
               .setValue('@inputEmail','mahabub.qups@gmail.com')
               .setValue('@inputPassword','xyz@12')
               .pause(3*1000)
               .click('@loginButton')
               .pause(3*1000)
               .assert.containsText('@loginErrorMessage','The email or password you entered did not match our records. Please double-check and try again.')
               .pause(2*1000)
               .end()
               
               
        // browser
        //     .maximizeWindow()
        //     .url("https://bikroy.com/en/")
        //     .pause(3 * 1000)
        //     .click(login)
        //     .pause(2*1000)
        //     .click(continueWithMail)
        //     .pause(2*1000)
        //     .assert.visible(loginHeader)
        //     .assert.containsText(loginHeader,"Log in to Bikroy")
        //     .setValue(inputEmail,"mahabub.qups@gmail.com")
        //     .setValue(inputPassword,"asdwe001")
        //     .pause(2*1000)
        //     .click(loginButton)
        //     .pause(3*1000)
        //     .assert.containsText(errorMessage,"The email or password you entered did not match our records. Please double-check and try again.")
        //     .pause(2*1000)
        //     .end()

    }
}