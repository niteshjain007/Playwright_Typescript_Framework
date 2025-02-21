import {Page, expect} from "@playwright/test";
import logger from "../utility/LoggerUtil";
import AllProductPage from "./AllProductPage";

export default class LoginPage{

    private readonly userNameDropdown = "#username";
    private readonly userFromDropDown= "//div[text()='demouser']";
    private readonly passwordDropdown = "#password";
    private readonly passwordFromDropDown= "//div[text()='testingisfun99']";
    private readonly loginBtn= "button#login-btn";

     constructor(private page:Page){

    }

    async fillEmailValue(){
        await this.page.locator(this.userNameDropdown).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.userFromDropDown).click();
        await this.page.waitForTimeout(2000);
    }

    
    async fillPAsswordValue(){
        await this.page.locator(this.passwordDropdown).click();
        await this.page.locator(this.passwordFromDropDown).click();
    }

    async clickOnLoginBtn()
    {
        await this.page.locator(this.loginBtn)
        .click()
        .catch((error)=>{
                console.log(`error on login button: ${error}`);
                logger.error(`error on login button: ${error}`);
                throw error;
        }).then(()=>{
                logger.info("lgin button clicked")
        });
               
        const allProductPageObj = new AllProductPage(this.page);
        return allProductPageObj;
    }
}