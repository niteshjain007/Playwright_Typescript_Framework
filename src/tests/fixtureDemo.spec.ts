import {test} from "../fixtures/LoginFixture";
import AllProductPage from "../pages/AllProductPage";

test("login through fixture ",async({allProductPageObj})=>{

    allProductPageObj.veifyLogoutLinkPresent();
    // further steps will come here 
});