module.exports = {
    "Open Contact us page":function(browser){
        let contact = browser.page.bikroy();
        contact
                .maximizeWindow()
                .navigate()
                .pause(2 * 1000)
                .getLocationInView('@contactPageHome', function(result){
                    // this.assert.visible('@contactPageHome')
                    
                    })
                .pause(3*1000)
                .click('@contactPageHome')
                .getLocationInView('@contactUsTitle', function(result){
                
                        })
                .pause(2*1000)
                .assert.containsText('@contactUsTitle',"Contact us")
        
            
        
    }
}