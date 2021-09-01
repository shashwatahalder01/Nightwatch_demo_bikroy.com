module.exports = {
    "Open url from Social":function(browser){
        let social = browser.page.bikroy();
        social
            .maximizeWindow()
            .navigate()
            .pause(2 * 1000)
            .click('@socialLink')
            .assert.urlContains('bikroy')
            .pause(5*1000)
            .closeWindow()
                
            
        
    }
}



