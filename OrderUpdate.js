const { remote } = require("webdriverio");
const path = require("path");

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  try {
    await browser.url("http://localhost:3000/OrderUpdate"); // Adjust the URL to the actual order update page URL

    // Wait for the orders to be loaded and select an order
    const orderSelect = await browser.$("#orderSelect");
    await browser.waitUntil(async () => await orderSelect.isDisplayed(), {
      timeout: 5000,
      timeoutMsg: "Order select dropdown not displayed",
    });

    await orderSelect.selectByIndex(1); // Select the second order (adjust as needed)

    // Wait for the order details to be displayed
    const orderDetails = await browser.$(".mt-4");
    await browser.waitUntil(async () => await orderDetails.isDisplayed(), {
      timeout: 5000,
      timeoutMsg: "Order details not displayed",
    });

    // Upload the file
    const fileInput = await browser.$("#excelFile");
    const filePath = path.join(__dirname, "path/to/your/file.xlsx"); // Adjust the file path as needed
    await fileInput.setValue(filePath);

    // Submit the form
    const updateButton = await browser.$('button[type="button"]');
    await updateButton.click();

    // Wait for the success toast message
    await browser.waitUntil(
      async () => {
        const toast = await browser.$(".Toastify__toast--success");
        return await toast.isDisplayed();
      },
      {
        timeout: 5000,
        timeoutMsg: "Order update did not complete within 5 seconds",
      }
    );

    console.log("Order update successful!");
  } catch (error) {
    console.error("Order update failed:", error);
  } finally {
    await browser.deleteSession();
  }
})();
