module.exports = {
    "Browse Invalid Url":function(browser){
        browser
        .maximizeWindow()
        .url("http://bokri.com/")
        .pause(2 * 1000)
        .assert.not.urlContains('https://')
        .assert.not.urlContains('bikroy.com')
        .end()     
            
        
    }
}