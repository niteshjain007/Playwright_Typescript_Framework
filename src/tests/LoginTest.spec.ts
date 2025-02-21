import { test } from "@playwright/test";

test("LoginWithInvalidCredential", async({page}) => {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(3000);
    await page.goto("https://test.techlift.in/");
    await delay(3000);

    await page.getByText("Login").click();
    await delay(3000);

    await page.locator("//input[@id ='login_email']").fill("testology.qa.learning@gmail.com");
    await delay(3000);

    await page.locator("//input[@id ='login_password']").fill("Testology@123");
    await delay(3000);

    await page.locator("button[type='submit'][class *= 'btn-login']").click();

    await delay(3000);

    await page.locator("a[href *= 'modules/Selling'][class='module-box-link']").click();
    await delay(3000);

    await page.locator("a[href *= 'Sales Invoice'][class= 'link-content']").click();
    await delay(3000);

    await page.getByPlaceholder("Customer").fill('niteshjain');
    await page.getByPlaceholder("Customer").press('Enter');
    await delay(3000);


});

