
    it("should show movement to element action", async () => {  // Third Test Case
        await browser.url('https://github.com/');

        const Subscribelink = await $('/html/body/div[1]/footer/div[1]/div/div[1]/div/a')
        await browser.pause(2000)
        await Subscribelink.scrollIntoView()
        await browser.pause(2000)

        let displayed = await Subscribelink.isDisplayed()
        console.log("Is displayed: " + displayed) // outputs: true

        let clickable = await Subscribelink.isClickable()
        console.log("Is clickable: " + clickable) // outputs: true

        await browser.pause(2000)
        await Subscribelink.click()
        await browser.pause(2000)
    });
    
    it("should have correct title", async ()  => {
        await browser.url(`https://resources.github.com/newsletter/`);

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('GitHub - Newsletter Sign-up | GitHub Resources - GitHub Resources')

        const SubscribeTitle = await $('#hero-section-brand-heading') 
        let displayedInViewport = await SubscribeTitle.isDisplayedInViewport()
        console.log("Is Subscribe title displayed in viewport: " + displayedInViewport) // outputs: true
    });

    it("should show movement to element action", async () => {
        await browser.url('https://resources.github.com/newsletter/');

        const WorkEmailField = await $('//*[@id="FormControl--:R8d7m:"]/label')
        await browser.pause(2000)
        await WorkEmailField.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(2000)


        await browser.pause(2000)
        await WorkEmailField.click()
        await browser.pause(2000)

        let inputWorkEmailField = await $('//*[@id=":R8d7m:"]')
        await inputWorkEmailField.addValue("TestEmail9992@gmail.com")
        await browser.pause(2000)

        let CountryButton = await $('//*[@id="country"]')
        await browser.pause(2000)
        await CountryButton.click()
        await browser.pause(2000)

        let DropDownList = await $('//*[@id="country"]/option[225]')
        await browser.pause(2000)
        await DropDownList.click()
        await browser.pause(2000)

        let CheckBox = await $('//*[@id="gated-agree-marketingEmailOptin1"]')
        await browser.pause(2000)
        await CheckBox.click()
        await browser.pause(2000)

        let SubscribeButton = await $('//*[@id="form"]/form/div/button')
        await browser.pause(2000)
        await SubscribeButton.click()
        await browser.pause(2000)
    });

    it("should show if an element is displayed", async () => {
        await browser.url('https://resources.github.com/confirmation/');

        const Header = await $('//*[@id="hero-section-brand-heading"]')
        let displayed = await Header.isDisplayed()
        console.log("Is displayed: " + displayed) // outputs: true
    });

















