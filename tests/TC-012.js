module.exports = {
    "Open url from Help & Support":function(browser){
        let helpAndSupport = browser.page.bikroy();
        helpAndSupport
                    .maximizeWindow()
                    .navigate()
                    .pause(2 * 1000)
                    .click('@faqLink')
                    .getText('@faqTitle',function(result){
                        this.assert.equal(result.value,"FAQ")
                    })
                    .click('@staySafeLink')
                    .getText('@stayTitle',function(result){
                        this.assert.equal(result.value,"Stay safe on Bikroy.com")
                    })
                    .pause(2*1000)
                    .click('@contactPage')
                    .getText('@faqTitle',function(result){
                        this.assert.equal(result.value,"Contact us")
                    })
                    .pause(2*1000)
                    .end()
            
        
    }
}