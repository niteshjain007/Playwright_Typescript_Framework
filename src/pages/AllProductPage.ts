import {Page, expect} from "@playwright/test";

export default class AllProductPage{

    constructor(private page : Page){}

    private readonly usernameProfile = "span[class='username']";
    private readonly checkoutBtn = "//div[@class='buy-btn' and text()='Checkout']";
    private modulesLabel = "//div[text()='Modules']";
    private logoutLink = "//span[@role='link' and text()='Logout']";

    async veifyLogoutLinkPresent()
    {
        await expect(this.page.locator(this.logoutLink)).toBeVisible();
    }

    async usernameProfileISPresent(uname:string){
        await expect(this.page.locator(this.usernameProfile)).toContainText(uname);
    }

    
    async addTOCart(productName:string)
    {
        await this.page.locator("//p[contains(text(),'"+productName+"')]/ancestor::div[@class='shelf-item']//*[@class='shelf-item__buy-btn']")
        .first().click();
    }

    async clickOnCheckout()
    {
        await this.page.locator(this.checkoutBtn).click();
    }
}