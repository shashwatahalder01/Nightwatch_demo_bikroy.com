module.exports ={
    'Display ads by Category': function(browser){
        

    let category = browser.page.bikroy();
        category
                .maximizeWindow()
                .navigate()
                .pause(2*1000)
                .assert.elementPresent('@bikroyLogo')
                .click('@allAdsLinkButton')
                .pause(2*1000)
                .assert.containsText('@allAdsTitle',"All ads in Bangladesh")
                .pause(2*1000)
                .click('@mobilecategory')
                .pause(7*1000)
                .assert.containsText('@mobileHeader',"Mobiles Phones and Accessories for Sale in Bangladesh")
                .end()
    }
}