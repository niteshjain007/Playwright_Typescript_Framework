import { test } from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AllProductPage from "../pages/AllProductPage";
import CheckoutPage from "../pages/CheckoutPage";

test.skip("add to cart and fill shipping address", async({page}) => {

  const homePageObj = new HomePage(page);
    await homePageObj.NavigateToHomePage();
page.waitForTimeout(2000);
    await homePageObj.clickOnSignIn();
    page.waitForTimeout(2000);
    const loginPageObj = new LoginPage(page);
   await loginPageObj.fillEmailValue();
   await  loginPageObj.fillPAsswordValue();
     await   loginPageObj.clickOnLoginBtn();
     page.waitForTimeout(2000);
    const allProductPageObj = new AllProductPage(page);
    await allProductPageObj.usernameProfileISPresent("demouser");
    page.waitForTimeout(2000);
   await allProductPageObj.addTOCart("iPhone 12 Pro Max");
   await allProductPageObj.addTOCart("iPhone XS");
   await allProductPageObj.clickOnCheckout();
   page.waitForTimeout(2000);
    const checkoutPageObj= new CheckoutPage(page);
    await checkoutPageObj.fillShippingAddress();
    await checkoutPageObj.clickOnSubmitBtn();
    page.waitForTimeout(2000);
    await checkoutPageObj.verifyOrdersummaryPresent();
});


test("add to cart and fill shipping address from faker data", async({page}) => {

  const homePageObj = new HomePage(page);
    await homePageObj.NavigateToHomePage();
await page.waitForTimeout(2000);
    await homePageObj.clickOnSignIn();
    await page.waitForTimeout(2000);
    const loginPageObj = new LoginPage(page);
   await loginPageObj.fillEmailValue();
   await  loginPageObj.fillPAsswordValue();
     await   loginPageObj.clickOnLoginBtn();
     await page.waitForTimeout(2000);
    const allProductPageObj = new AllProductPage(page);
    await allProductPageObj.usernameProfileISPresent("demouser");
    await page.waitForTimeout(2000);
   await allProductPageObj.addTOCart("iPhone 12 Pro Max");
   await allProductPageObj.addTOCart("iPhone XS");
   await allProductPageObj.clickOnCheckout();
    const checkoutPageObj= new CheckoutPage(page);
    await checkoutPageObj.fillShippingAddressFromFakerData();
    await checkoutPageObj.clickOnSubmitBtn();
   await  page.waitForTimeout(2000);
    await checkoutPageObj.verifyOrdersummaryPresent();


});