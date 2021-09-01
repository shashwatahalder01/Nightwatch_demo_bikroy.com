module.exports = {
    "Assert post your AD":function(browser){
       
        const assertValue = 'POST YOUR AD'
        let post = browser.page.bikroy();
        post
            .maximizeWindow()
            .navigate()
            .pause(2 * 1000)
            .assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh') 
            .getText('@post',function(result){
                this.assert.equal(result.value,assertValue)
            })
            .assert.visible('@post')
            .end()     
                
        
    }
}