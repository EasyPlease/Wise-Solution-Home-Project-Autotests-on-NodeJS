
    it("should show click command", async () => {    // First test case
        await browser.url(`https://github.com/`);

        let SignUpButton = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/a')
        await browser.pause(2000)
        await SignUpButton.click()
    });


    it('should detect when element is clickable', async () => {
        const elem = await $('#email')
        await elem.waitForClickable({ timeout: 5000 });
        await elem.click()
        await browser.pause(2000)
    }); 

    it('should detect if an element is displayed', async () => {
        let elem = await $('/html/body/div[1]/div[4]/main/div[2]/text-suggester/div[1]/typing-effect/span[1]');
        let isDisplayed = await elem.isDisplayed();
        console.log(isDisplayed); // outputs: true
    });
        
    it("should show click command", async () => {
        let EmailButton = await $('#email')
        await browser.pause(2000)
        await EmailButton.click()
        await browser.pause(2000)

        let inputEmail = await $("#email")
        await inputEmail.addValue("TestEmail999@gmail.com")
        await browser.pause(2000)

        let ContinueButton = await $('#email-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')
        await browser.pause(2000)
        await ContinueButton.click()
        await browser.pause(2000)

        let PasswordButton = await $('#password')
        await browser.pause(2000)
        await PasswordButton.click()
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.addValue("SuperSecretPassword9992")
        await browser.pause(2000)

        let Continue2Button = await $('#password-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')
        await browser.pause(2000)
        await Continue2Button.click()
        await browser.pause(2000)

        let UsernameButton = await $('#login')
        await browser.pause(2000)
        await UsernameButton.click()
        await browser.pause(2000)

        let inputUsername = await $("#login")
        await inputUsername.addValue("NewUserName9992")
        await browser.pause(2000)

        let Continue3Button = await $('#username-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')
        await browser.pause(2000)
        await Continue3Button.click()
        await browser.pause(2000)

        let finalButton = await $('#opt_in')
        await browser.pause(2000)
        await finalButton.click()
        await browser.pause(2000)

        let inputWord = await $("#opt_in")
        await inputWord.addValue("y")
        await browser.pause(2000)

        let Continue4Button = await $('#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')
        await browser.pause(2000)
        await Continue4Button.click()
        await browser.pause(2000)
    })

















