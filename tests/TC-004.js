module.exports ={
    'Show all ads': function(browser){
        let allAds = browser.page.bikroy();

        allAds
            .maximizeWindow()
            .navigate()
            .pause(2*1000)
            .assert.elementPresent('@bikroyLogo')
            .click('@allAdsLinkButton')
            .pause(2*1000)
            .assert.containsText('@allAdsTitle',"All ads in Bangladesh")
            .pause(2*1000)
            .end()      
        
    }
}

