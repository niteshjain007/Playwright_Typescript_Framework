import {Page, expect} from "@playwright/test";
import logger from "../utility/LoggerUtil";

export default class HomePage{

   private readonly signInLink = "//span[@id='signin' and @role='link']";
    constructor(private page:Page){

    }

    async NavigateToHomePage(){
        await this.page.goto("/");
        logger.info("navigate to home page");
    }

    async clickOnSignIn()
    {
        await this.page.locator(this.signInLink).click();
        logger.info("sign button clicked, navigating to product page");
    }
}