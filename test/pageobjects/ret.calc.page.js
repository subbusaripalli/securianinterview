const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class retirementCalculator extends Page {
    /**
     * define selectors using getter methods
     */
    get inputCurrAge () { return $('#current-age') }
    get inputRetirementage () { return $('#retirement-age') }
    get inputCurrentincome () { return $('#current-income') }
    get inputSpouseincome () { return $('#spouse-income') }
    get inputCurrenttotalsavings () { return $('#current-total-savings') }
    get inputCurrentannualsavings () { return $('#current-annual-savings') }
    get inputsavingsincreaserate () { return $('#savings-increase-rate') }
    get btnSubmit () { return $('button[data-tag-id="submit"]') }
    get labelNoSSN () { return $('label[for="no-social-benefits"]') }
    get labelYesSSN () { return $('label[for="yes-social-benefits"]') }
    get labelSingle () { return $('label[for="single"]') }
    get labelMarried () { return $('label[for="married"]') }
    get socialsecurityoverride () { return $('#social-security-override') }
    get adjustdefaultvalue () {return $('a[data-target="#default-values-modal"]')}
    get reqflderror () {return $('#calculator-input-alert-desc')}



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async enterInput (currAge, retAge, currincm, spincm, currtotsave, currannsave, saveincrate, ssnoption, maritalstatus, ssnoverrideamount) {
        
        await this.inputCurrAge.setValue(currAge);
        await this.inputRetirementage.setValue(retAge);
        await this.inputCurrentincome.click();
        await browser.keys("\uE05A")
        await this.inputCurrentincome.setValue(currincm);
        await this.inputSpouseincome.click ();
        await browser.keys("\uE05A")
        await this.inputSpouseincome.setValue(spincm);
        await this.inputCurrenttotalsavings.click();
        await browser.keys("\uE05A")
        await this.inputCurrenttotalsavings.setValue(currtotsave);
        
        if(currannsave) {
            await this.inputCurrentannualsavings.setValue(currannsave);
        }
        if(saveincrate){
            await this.inputsavingsincreaserate.setValue(saveincrate);
        }
                
		if(ssnoption == 'Y'){
			await this.labelYesSSN.click();
		}
		else{
			await this.labelNoSSN.click();
		}
        if(maritalstatus){
            if(maritalstatus == 'S') {
              await this.labelSingle.click();
            }
           else {
            await this.labelMarried.click();
           }
          }
          
        if(ssnoverrideamount > 0){
            await this.socialsecurityoverride.click();
        await browser.keys("\uE05A")
        await this.socialsecurityoverride.setValue(ssnoverrideamount);
        }
        
        

    }

    async calculate () {
        await this.btnSubmit.click();
    }
    
    async openadjustdefaultvalues () {
        await this.adjustdefaultvalue.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new retirementCalculator();
