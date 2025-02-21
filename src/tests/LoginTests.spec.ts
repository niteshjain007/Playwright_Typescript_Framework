import { test } from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


test("LoginWithValidCridential", async({page}) => {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(3000);   
    const homePageObj = new HomePage(page);
    await homePageObj.NavigateToHomePage();
    await delay(3000);
    await homePageObj.clickOnSignIn();
    await delay(3000);
    const loginPageObj = new LoginPage(page);
    loginPageObj.fillEmailValue();
    loginPageObj.fillPAsswordValue();
    loginPageObj.clickOnLoginBtn();

    await delay(3000);

});

