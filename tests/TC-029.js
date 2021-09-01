module.exports = {
    tags:['bikroy.com'],
    "Browse items from homepage":function(browser){
       
       let webpage = browser.page.bikroy();
       
       webpage.maximizeWindow().navigate().assert.title('Bikroy.com - Electronics, Cars, Property and Jobs in Bangladesh')
       .assert.elementPresent('@browseItemDiv')
       .click('@mobileItem').pause(3*1000)
       .assert.visible('@mobileTitle')
       .pause(3*1000)
       .end()
            
        
    }
}