module.exports ={
    'Show ads by location': function(browser){
        
        const buyInDhaka = "Buy and Sell Anything in Dhaka"

    let location = browser.page.bikroy();
        location
                .maximizeWindow()
                .navigate()
                .pause(2*1000)
                .assert.elementPresent('@bikroyLogo')
                .click('@allAdsLinkButton')
                .pause(2*1000)
                .assert.containsText('@allAdsTitle',"All ads in Bangladesh")
                .pause(2*1000)
                .click('@location')
                .pause(3*1000)
                .assert.containsText('@dhakaPageHeader',buyInDhaka)
                .pause(3*1000)
                .end()

    }
}



