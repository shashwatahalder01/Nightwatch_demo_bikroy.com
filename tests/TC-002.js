module.exports={
    'Login':function(browser){  
        
        let lg = browser.page.bikroy();
        lg
            .maximizeWindow()
            .navigate()
            .click('@loginLink')
            .click('@selectOptionForLogin')
            .setValue('@inputEmail','mahabub.qups@gmail.com')
            .setValue('@inputPassword','xyz@123')
            .click('@loginButton')

            .end()
        // const login = "//div[@class='only-desktop--2pxYG']//span[contains(text(), 'Login')]"
        // const continueWithMail = "//span[@class = 'email-text--FbASN']"
        // const inputEmail = "//input[@id='input_email']"
        // const inputPassword = "//input[@id='input_password']"
        // const loginButton = "//button[@class='btn--1gFez secondary--Os-e9 background--2lR9B small--1MQ15 gtm-email-login']"
        // const myAccount = "//div[@class='only-desktop--2pxYG']//span[contains(text(),'My account')]"
        // browser
        //         .maximizeWindow()
        //         .url("https://bikroy.com/en/")
        //         .pause(3 * 1000)
        //         // .click("//div[@class='only-desktop--2pxYG']//a[contains(text(), 'All ads')]")
        //         // .useXpath()
        //         .click(login)
        //         .pause(2*1000)
        //         .click(continueWithMail)
        //         .pause( 2*1000)
        //         .setValue(inputEmail,"mahabub.qups@gmail.com")
        //         .setValue(inputPassword,"xyz@123")
        //         .pause(3*1000)
        //         .click(loginButton)
        //         .pause(3*1000)
        //         .assert.containsText(myAccount,"My account")
        //         .pause(5*1000)
        //         .end()
    }
}

