var criteriaDisplayCommands = {
    getNumberOfItems: function(callback) {
        var self = this;
        console.log(this);
        return this.api.elements('@myList', 'xpath', 'li', function(result) {
            callback.call(self, result);
        });
    }
};
module.exports ={
    url : "https://bikroy.com/en/",
    elements:{
        loginLink:{
            selector: "//div[@class='only-desktop--2pxYG']//span[contains(text(), 'Login')]",
            locateStrategy: 'xpath'
        },
        selectOptionForLogin:{
            selector: "//span[@class = 'email-text--FbASN']",
            locateStrategy:'xpath'
        },
        inputEmail:{
            selector:"//input[@id='input_email']",
            locateStrategy:'xpath'
        },
        inputPassword:{
            selector:"//input[@id='input_password']",
            locateStrategy:'xpath'
        },
        loginButton:{
            selector:"//button[@class='btn--1gFez secondary--Os-e9 background--2lR9B small--1MQ15 gtm-email-login']",
            locateStrategy:'xpath'
        },
        myAccountLink:{
            selector:"//div[@class='only-desktop--2pxYG']//span[contains(text(),'My account')]",
            locateStrategy:'xpath'
        },
        loginErrorMessage:{
            selector:"//div[@class='error-msg--2buvb']//span[contains(text(),'The email or password you entered did not match our records. Please double-check and try again.')]",
            locateStrategy:'xpath'
        },
        loginTitleInLoginPage:{
            selector:"//h1[@class='heading--2eONR undefined block--3v-Ow']",
            locateStrategy:'xpath'
        },
        allAdsLinkButton:{
            selector:"//div[@class='only-desktop--2pxYG']//a[@class='all-ads-button--1c5U5 header-link--woAbP']",
            locateStrategy:'xpath'
        },
        allAdsTitle:{
            selector:"//div[@class='last-link--qlz8S link-text--1Tj-x']",
            locateStrategy:'xpath'
        },
        bikroyLogo:{
            selector:"//div[@class='only-desktop--2pxYG']//a[@title='Bikroy.com - the largest marketplace in Bangladesh']",
            locateStrategy:'xpath'
        },
        urgentCheckBox:{
            selector:"//label[@for='checkbox_id_0']",
            locateStrategy:'xpath'
        },
        mobilecategory:{
            selector:"//button[@class='list-item--2dM7Z']//span[contains(text(),'Mobiles')]",
            locateStrategy:'xpath'
        },
        mobileHeader:{
            selector:"//div[@class='page-details--lofhT']//h1[@class='heading--2eONR undefined ad-list-header--3g7Pb block--3v-Ow']",
            locateStrategy:'xpath'
        },
        location:{
            selector:"//div[@class='link--15vLF item--4DkSa']//span[text()='Dhaka']",
            locateStrategy:'xpath'
        },
        dhakaPageHeader:{
            selector:"//h1[@class='heading--2eONR undefined ad-list-header--3g7Pb block--3v-Ow']",
            locateStrategy:'xpath'
        },
        searchBar:{
            selector:"//input[@class='search-input--PtfH8']",
            locateStrategy:'xpath'
        },
        searchResult:{
            selector:"//h1[@class='heading--2eONR undefined ad-list-header--3g7Pb block--3v-Ow']",
            locateStrategy:'xpath'
        },
        allLocation:{
            selector:"//button[@class='btn--1gFez default--T8kE3 small--1MQ15 location-picker-btn--p3-uX']",
            locateStrategy:'xpath'
        },
        dhakaCity:{
            selector:"//button[@class='list-item--2dM7Z item--OZFrC']//div[text()='Dhaka']",
            locateStrategy:'xpath'
        },
        AllOfDhaka:{
            selector:"//div[text()='All of Dhaka']",
            locateStrategy:'xpath'
        },
        ctgCity:{
            selector:"//div[text()='Chattogram']",
            locateStrategy:'xpath'
        },
        allOfCtg:{
            selector:"//div[text()='All of Chattogram']",
            locateStrategy:'xpath'
        },
        sylhetCity:{
            selector:"//div[text()='Sylhet']" ,
            locateStrategy:'xpath'
        },
        allOfSylhet:{
            selector:"//div[text()='All of Sylhet']",
            locateStrategy:'xpath'
        },
        khulnaCity:{
            selector:"//div[text()='Khulna']",
            locateStrategy:'xpath'
        },
        allOfKhulna:{
            selector:"//div[text()='All of Khulna']",
            locateStrategy:'xpath'
        },
        barishalCity:{
            selector:"//div[text()='Barishal']" ,
            locateStrategy:'xpath'
        },
        allOfBarishal:{
            selector:"//div[text()='All of Barishal']",
            locateStrategy:'xpath'
        },
        rajshahiCity:{
            selector:"//div[text()='Rajshahi']" ,
            locateStrategy:'xpath'
        },
        allOfRajshahi:{
            selector:"//div[text()='All of Rajshahi']",
            locateStrategy:'xpath'
        },
        rangpurCity:{
            selector:"//div[text()='Rangpur']" ,
            locateStrategy:'xpath'
        },
        allOfRangpur:{
            selector:"//div[text()='All of Rangpur']",
            locateStrategy:'xpath'
        },
        chatLinkButton:{
            selector:"//div[@class='only-desktop--2pxYG']//span[text()='Chat']",
            locateStrategy:'xpath'
            
        },
        chatHeader:{
            selector:"//h1[@class='heading--2eONR undefined block--3v-Ow']" ,
            locateStrategy:'xpath'
        },
        chatHistory:{
            selector:"//div[@class='main-heading--1CD1C']",
            locateStrategy:'xpath'
        },
        post:{
            selector:"//div[@class='only-desktop--2pxYG']//button[@class='btn--1gFez primary--21tbu medium--51K9p post-ad-button--2bUqH gtm-postall']",
            locateStrategy:'xpath'
        },
        faqLink:{
            selector:"//div[@class='only-desktop--2pxYG']//span[text()='FAQ']",
            locateStrategy:'xpath'
        },
        faqTitle:{
            selector:"//h1[@class='h2']",
            locateStrategy:'xpath'
        },
        staySafeLink:{
            selector:"//a[contains(text(),'Stay safe')]",
            locateStrategy:'xpath'
        },
        stayTitle:{
            selector:"//h1[@class='h2']",
            locateStrategy:'xpath'
        },
        contactPage:{
            selector:"//a[contains(text(),'Contact us')]",
            locateStrategy:'xpath'
        },
        socialLink:{
            selector:"//div[@class='only-desktop--2pxYG']//div[@class='social-icon--4DQqo']//span[@class='fb-text--2xAHy']",
            locateStrategy:'xpath'
        },
        aboutLink:{
            selector:"//div[@class='only-desktop--2pxYG']//span[text()='About Us']",
            locateStrategy:'xpath'
        },
        aboutPageTitle:{
            selector:"//h1[@class='h2']",
            locateStrategy:'xpath'
        },
        copyright:{
            selector:"//div[@class='only-desktop--2pxYG']//div[text()='Copyright © Saltside Technologies']",
            locateStrategy:'xpath'
        },
        contactPageHome:{
            selector:"//div[@class='only-desktop--2pxYG']//span[text()='Contact Us']",
            locateStrategy:'xpath'
        },
        contactUsTitle:{
            selector:"//h1[@class='h2']",
            locateStrategy:'xpath'
        },
        language:{
            selector:"//div[@class='only-desktop--2pxYG']//button[@class='gtm-hamburger-locale']",
            locateStrategy:'xpath'
        },
        dropDownButton:{
            selector:"//div[@class='sort-dropdown-wrapper--2QKDJ']//button[@id='dd-button']",
            locateStrategy:'xpath'
        },
        sortByOldest:{
            selector:"//li[text()='Date: Oldest on top']",
            locateStrategy:'xpath'
        },
        postItems:{
            selector:"//div[@class='no-items-content']",
            locateStrategy:'xpath'
        },
        alertText:{
            selector:"//div[@class='ui-alert-content']",
            locateStrategy:'xpath'
        },
        accountSettingLink:{
            selector:"//a[@href='/en/my/settings']",
            locateStrategy:'xpath'
        },
        oldPassword:{
            selector:"//input[@id='old']",
            locateStrategy:'xpath'
        },
        newPassword:{
            selector:"//input[@id='password']",
            locateStrategy:'xpath'
        },
        confirmPassword:{
            selector:"//input[@id='confirm']",
            locateStrategy:'xpath'
        },
        favPage:{
            selector:"//li[@class='ui-nav-item']//a[@href='/en/my/favorite-ads']",
            locateStrategy:'xpath'
        },
        favTitle:{
            selector:"//h2[@class='is-main']",
            locateStrategy:'xpath'
        },
        emialShowlable:{
            selector:"//dl[@class='profile-email']",
            locateStrategy:'xpath'
        },
        logoutButton:{
            selector:"//a[@class='ui-btn is-critical']",
            locateStrategy:'xpath'
        },
        searchBarName:{
            selector:"//input[@name='query']",
            locateStrategy:'xpath'
        },
        topAdd1:{
            selector:"(//li[@class='top-ads-container--1Jeoq gtm-top-ad'])[1]",
            locateStrategy:'xpath'
        },
        searchButton:{
            selector:"//button[@class='btn--1gFez default--T8kE3 small--1MQ15 search-button--1_VmY']",
            locateStrategy:'xpath'
        },        
        productDiscription:{
            selector:"//div[@class='description-section--oR57b']",
            locateStrategy:'xpath'
        },
        phoneNumber:{
            selector:"//div[@class='call-text--30D-J']",
            locateStrategy:'xpath'
        },
        addFavButton:{
            selector:"//button[@class='btn--1gFez default--T8kE3 small--1MQ15 button-section--2bl40 share-favorite-button--1WveK gtm-add-favorite']",
            locateStrategy:'xpath'
        },
        
        browseItemDiv:{
            selector:"//div[@class='section-pad--2lCeo category-header--2jje7']",
            locateStrategy:'xpath'
        },        
        mobileItem:{
            selector:"//a[@class='link--1t8hM']//div[@class='info--uF0qH']//p[text()='Mobiles']",
            locateStrategy:'xpath'
        },        
        electronicsItem:{
            selector:"//a[@class='link--1t8hM']//div[@class='info--uF0qH']//p[text()='Electronics']",
            locateStrategy:'xpath'
        },
        quickLink:{
            selector:"//div[@class='section-pad--2lCeo']",
            locateStrategy:'xpath'
        },        
        mobileTitle:{
            selector:"//div[@class='page-details--lofhT']//h1[@class='heading--2eONR undefined ad-list-header--3g7Pb block--3v-Ow']",
            locateStrategy:'xpath'
        },
    }
}