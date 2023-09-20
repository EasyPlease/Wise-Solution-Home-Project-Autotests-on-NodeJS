

    it("should show movement to element action", async () => { // Second Test Case
        await browser.url('https://github.com/');

        const Header = await $('/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div')
        await browser.pause(2000)
        await Header.scrollIntoView()
        await browser.pause(2000)

        let isDisplayed = await Header.isDisplayed();
        console.log(isDisplayed); // outputs: false  
    });

    it("should show if an element is visible", async () => {
        await browser.url('https://github.com/');

        const StartButton = await $('/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div/div/div/a[2]') 
        let displayedInViewport = await StartButton.isDisplayedInViewport()
        console.log("Is blog button displayed in viewport: " + displayedInViewport) // outputs: true

        await browser.pause(2000)
        await StartButton.click()
        await browser.pause(2000)
    });

    it("should show if an element is visible", async () => {
        await browser.url('https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F');

        const Header = await $('/html/body/div[1]/div[4]/main/div/div[1]/h1') 
        let displayedInViewport = await Header.isDisplayedInViewport()
        console.log("Is blog button displayed in viewport: " + displayedInViewport) // outputs: true
    });

    it("should show click command", async () => {
        await browser.url(`https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F`);

        let EnterpriseCloudButton = await $('/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a/div/p')
        await browser.pause(2000)
        await EnterpriseCloudButton.click()
        await browser.pause(2000)
    });
    















