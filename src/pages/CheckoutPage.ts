import {Page, expect} from "@playwright/test";
import shipData from '../testData/shippingAdressData.json'
import { faker } from '@faker-js/faker';


export default class CheckoutPage{

    constructor(private page : Page){}
    private readonly firstNameTxtBox = "#firstNameInput";
    private readonly lastNameTxtBox = "#lastNameInput";
    private readonly addressTxtBox = "//input[@id='addressLine1Input']";

    private readonly provinceTxtBox = "#provinceInput";
    private readonly postCodeTxtBox = "#postCodeInput";

    private readonly submitShippingAddressBtn= "//button[@id='checkout-shipping-continue']";
    private readonly orderSummryLabel= "//h3[normalize-space()='Order Summary']";


    async fillShippingAddress()
    {
        
        await this.page.locator(this.firstNameTxtBox).fill(shipData.firstName);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.lastNameTxtBox).fill(shipData.lastName);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.addressTxtBox).fill(shipData.Adrress);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.provinceTxtBox).fill(shipData.state);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.postCodeTxtBox).fill(shipData.pincoce);
        await this.page.waitForTimeout(1000);
    }

    async clickOnSubmitBtn()
    {
        await this.page.locator(this.submitShippingAddressBtn).click();
       // await this.page.waitForTimeout(10000);
    }

    async verifyOrdersummaryPresent()
    {
        await this.page.locator(this.orderSummryLabel).isVisible();
        await this.page.waitForTimeout(5000);
    }


    async fillShippingAddressFromFakerData()
    {
        
        await this.page.locator(this.firstNameTxtBox).fill(faker.person.firstName());
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.lastNameTxtBox).fill(faker.person.lastName());
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.addressTxtBox).fill(faker.company.catchPhrase());
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.provinceTxtBox).fill(faker.location.county());
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.postCodeTxtBox).fill(faker.location.zipCode());
        await this.page.waitForTimeout(1000);
    }

    
}