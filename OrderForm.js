const { remote } = require("webdriverio");
const path = require("path");

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  try {
    await browser.url("http://localhost:3000/OrderForm"); // Adjust the URL to the actual order form page URL

    // Fill out the order form
    const titleInput = await browser.$("#title");
    await titleInput.setValue("Sample Order Title");

    const emailInput = await browser.$("#email");
    await emailInput.setValue("example@example.com");

    const endDateInput = await browser.$("#endDate");
    await endDateInput.setValue("2024-05-20"); // Adjust the date as needed

    const descriptionInput = await browser.$("#description");
    await descriptionInput.setValue("Sample order description");

    const fileInput = await browser.$("#excelFile");
    const filePath = path.join(__dirname, "path/to/your/file.xlsx"); // Adjust the file path as needed
    await fileInput.setValue(filePath);

    // Submit the form
    const createOrderButton = await browser.$('button[type="submit"]');
    await createOrderButton.click();

    // Wait for the success toast message
    await browser.waitUntil(
      async () => {
        const toast = await browser.$(".Toastify__toast--success");
        return await toast.isDisplayed();
      },
      {
        timeout: 5000,
        timeoutMsg: "Order creation did not complete within 5 seconds",
      }
    );

    console.log("Order created successfully!");
  } catch (error) {
    console.error("Order creation failed:", error);
  } finally {
    await browser.deleteSession();
  }
})();
