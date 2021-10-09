const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
 class resultspage extends Page {

    /**
     * define selectors using getter methods
     */
     get header () { return $('h3=Results') }
     get resultmessage () {return $('#result-message')}
     get btnemailmyrslt () {return $('button[data-target="#calc-email-modal"]')} 
     async verifyconfirmation () {
        await this.header.waitForExist({ timeout: 5000 });
        //await expect(this.resultmessage).toHaveTextContaining('Results')
        await expect (this.btnemailmyrslt).toBeExisting ();
 }


}
module.exports = new resultspage();
 