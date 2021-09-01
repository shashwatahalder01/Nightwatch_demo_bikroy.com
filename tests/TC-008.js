module.exports ={
    'Ads Search': function(browser){
        let search = browser.page.bikroy();
        search
              .maximizeWindow()
              .navigate()
              .pause(2*1000)
              .assert.elementPresent('@bikroyLogo')
              .setValue('@searchBar',"dell laptop")
              .pause(2*1000)
              .click('@searchButton')
              .pause(2*1000)
              .assert.containsText('@searchResult',"Dell laptop in Bangladesh")
              .pause(2*1000)              
              .end()

    }
}