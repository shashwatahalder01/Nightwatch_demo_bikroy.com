module.exports = {
    "Open url from About us":function(browser){
        let about = browser.page.bikroy();
        about
            .maximizeWindow()
            .navigate()
            .pause(2 * 1000)
            .click('@aboutLink')
            .assert.containsText('@aboutPageTitle',"What is Bikroy.com?")
            .pause(3*1000)
            .end()      
                
        
    }
}