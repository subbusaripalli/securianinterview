const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
 class adjustdefaultvalues extends Page {
    /**
     * define selectors using getter methods
     */
    get incduringret () { return $('#additional-income') }
    get dependretinc () { return $('#retirement-duration') }
    get labelYesinflation () { return $('label[for="include-inflation"]') }
    get labelNoinflation () { return $('label[for="exclude-inflation"]') }
    get expecinflrate () { return $('#expected-inflation-rate') }
    get retannualincome () { return $('#retirement-annual-income') }
    get preretirementroi () { return $('#pre-retirement-roi') }
    get postretirementroi () { return $('#post-retirement-roi') }
    get formDefValues () {return $('#default-values-form')}
    get btnSaveChanges () {return this.formDefValues.$('input[type="button"]')}

    



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async enterInput (incdurret, deponret, postretincinf, expecinflrate, postretinc, preretroi, postretroi) {

        if(incdurret){
            await this.incduringret.click();
            await browser.keys("\uE05A")
            await this.incduringret.setValue(incdurret);
        }
        
        await this.dependretinc.setValue(deponret);
        
        if(postretincinf == "Y"){
			await this.labelYesinflation.click();
		}
		else{
			await this.labelNoinflation.click();
		}
        if(expecinflrate){
            await this.expecinflrate.setValue(expecinflrate);
        }
        
        await this.retannualincome.setValue(postretinc);
        await this.preretirementroi.setValue(preretroi);
        await this.postretirementroi.setValue(postretroi);

        
 }
         async savechanges () {
         await this.btnSaveChanges.click();
        }
 }

 module.exports = new adjustdefaultvalues();