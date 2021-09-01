module.exports = {

    "Open chat":function(browser){

        let chat = browser.page.bikroy();
                chat
                    .maximizeWindow()
                    .navigate()
                    .pause(2 * 1000)
                    .assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh') 
                    .click('@chatLinkButton')
                    .assert.elementPresent('@chatHeader')
                    .pause(2*1000)
                    .click('@selectOptionForLogin')
                    .setValue('@inputEmail',"mahabub.qups@gmail.com")
                    .setValue('@inputPassword',"xyz@123")
                    .pause(2*1000)
                    .click('@loginButton')
                    .pause(2*1000)
                    .assert.containsText('@chatHistory',"No conversations yet!")
                    .pause(2*1000)
                    .end()    
            
        
    }
}