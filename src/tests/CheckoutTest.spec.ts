import { test } from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AllProductPage from "../pages/AllProductPage";
import CheckoutPage from "../pages/CheckoutPage";


test("add to cart and fill shipping address", async({page}) => {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(3000);   
    const homePageObj = new HomePage(page);
    await homePageObj.NavigateToHomePage();
    await delay(3000);
    await homePageObj.clickOnSignIn();
    await delay(3000);
    const loginPageObj = new LoginPage(page);
   await loginPageObj.fillEmailValue();
   await  loginPageObj.fillPAsswordValue();
     await   loginPageObj.clickOnLoginBtn();

    const allProductPageObj = new AllProductPage(page);
    await allProductPageObj.usernameProfileISPresent("demouser");

   await allProductPageObj.addTOCart("iPhone 12 Pro Max");
   await allProductPageObj.addTOCart("iPhone XS");
   await allProductPageObj.clickOnCheckout();

    const checkoutPageObj= new CheckoutPage(page);
    await checkoutPageObj.fillShippingAddress();
    await checkoutPageObj.clickOnSubmitBtn();
    await checkoutPageObj.verifyOrdersummaryPresent();


});