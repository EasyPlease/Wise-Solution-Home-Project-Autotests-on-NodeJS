

    it("should show click command", async () => {
        await browser.url(`https://github.com/`);

        let PricingButton = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[4]/a')
        await browser.pause(2000)
        await PricingButton.click()
        await browser.pause(2000)
    });

    it("should show if an element is displayed", async () => {
        await browser.url('https://github.com/pricing');

        const Header = await $('/html/body/div[1]/div[4]/main/div[1]/h1')
        let displayed = await Header.isDisplayed()
        console.log("Is displayed: " + displayed) // outputs: true
    });

    it("should show movement to element action", async () => {
        await browser.url('https://github.com/pricing');

        const CompareAllFeatures = await $('/html/body/div[1]/div[4]/main/div[2]/div[2]/div[3]/a')
        await browser.pause(2000)
        await CompareAllFeatures.scrollIntoView()
        await browser.pause(2000)

        await browser.pause(2000)
        await CompareAllFeatures.click()
        await browser.pause(2000)
    });

    it("should show if an element is displayed", async () => {
        await browser.url('https://github.com/pricing');

        const ComparefeaturesHeader = await $('/html/body/div[1]/div[4]/main/div[4]/h1')
        let displayed = await ComparefeaturesHeader.isDisplayed()
        console.log("Is displayed: " + displayed) // outputs: true
    });

    
















