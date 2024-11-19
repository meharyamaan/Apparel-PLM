const { remote } = require("webdriverio");

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  try {
    await browser.url("http://localhost:3000/SignUp"); // Adjust the URL to the actual sign-up page URL

    // Fill out the sign-up form
    const usernameInput = await browser.$("#Username");
    await usernameInput.setValue("john.doe");

    const emailInput = await browser.$("#Email");
    await emailInput.setValue("john.doe@example.com");

    const passwordInput = await browser.$("#Password");
    await passwordInput.setValue("your_password");

    const confirmPasswordInput = await browser.$("#Confirmpassword");
    await confirmPasswordInput.setValue("your_password");

    const countryCodeSelect = await browser.$("select");
    await countryCodeSelect.selectByVisibleText("+1");

    const phoneNumberInput = await browser.$("#PhoneNumber");
    await phoneNumberInput.setValue("1234567890");

    // Submit the sign-up form
    const signUpButton = await browser.$('button[type="submit"]');
    await signUpButton.click();

    // Wait for the success toast or redirection
    await browser.waitUntil(
      async () => {
        const url = await browser.getUrl();
        return url.includes("/success"); // Adjust based on the actual success URL or criteria
      },
      { timeout: 5000, timeoutMsg: "Sign-up did not complete within 5 seconds" }
    );

    console.log("Sign-up successful!");
  } catch (error) {
    console.error("Sign-up failed:", error);
  } finally {
    await browser.deleteSession();
  }
})();
