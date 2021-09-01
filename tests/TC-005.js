module.exports ={
    'Show all urgent ads': function(browser){
        
        let urgentAds = browser.page.bikroy();
        urgentAds
                .maximizeWindow()
                .navigate()
                .pause(2*1000)
                .assert.elementPresent('@bikroyLogo')
                .click('@allAdsLinkButton')                        
                .assert.visible('@urgentCheckBox')
                .click('@urgentCheckBox')
                .pause(3*1000)
                .assert.containsText('@allAdsTitle',"All ads in Bangladesh")
                .pause(2*1000)
                .end()
    }
}