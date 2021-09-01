module.exports = {
    "Change website language":function(browser){
        let language = browser.page.bikroy();
        language
                .maximizeWindow()
                .navigate()
                .pause(2 * 1000)
                .click('@language')
                .pause(3*1000)
                .assert.containsText('@language',"English")
                .end()
                    
        
    }
}