module.exports = {
    "Assert Copyright":function(browser){
       let copyright = browser.page.bikroy();
       copyright
                .maximizeWindow()
                .navigate()
                .pause(2 * 1000)
                .getLocationInView('@copyright', function(result){                   
                    
                    })
                .pause(3*1000)
                .assert.visible('@copyright')
                .end()
                    
        
    }
}