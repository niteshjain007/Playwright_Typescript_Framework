import { test as base, expect as defaultExpect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AllProductPage from "../pages/AllProductPage";

type UIPages = {
    allProductPageObj: AllProductPage;
};
export const expect = defaultExpect;
// Define a custom fixture with page
export const test = base.extend<UIPages>({
    allProductPageObj: async ({ page }, use) => {

 const homePageObj = new HomePage(page);
    await homePageObj.NavigateToHomePage();
    await page.waitForTimeout(2000);
    await homePageObj.clickOnSignIn();
    await page.waitForTimeout(2000);

  const loginPageObj = new LoginPage(page);
   await loginPageObj.fillEmailValue();
   await  loginPageObj.fillPAsswordValue();
   const allProductPageObj =await loginPageObj.clickOnLoginBtn();
   await page.waitForTimeout(2000);

    await use(allProductPageObj);
  },
});