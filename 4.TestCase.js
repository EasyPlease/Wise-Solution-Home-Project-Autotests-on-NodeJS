

    it("should show click command", async () => {
        await browser.url(`https://github.com/`);

        let SearchButton = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button')
        await browser.pause(2000)
        await SearchButton.click()
        await browser.pause(2000)

        let InputSearch = await $("#query-builder-test")
        await InputSearch.addValue("Cat")
        await browser.pause(2000)
        await browser.keys(['Enter'])
        await browser.pause(4000)
    });

    it("should show text on the page", async () => {
        await browser.url('https://github.com/search?q=Cat&type=repositories')

        const elem = await $('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/main/div[2]/div')
        await expect(elem).toHaveTextContaining('Cat')
    }); 
















