
const retCalcPage = require('../pageobjects/ret.calc.page');
const resultspage = require('../pageobjects/results.page');
const adjdefvalpage = require('../pageobjects/adjdefval.page');


describe('My Securian application', () => {
    it('User should be able to submit form with all  fields filled', async () => {
        await retCalcPage.open();
        await browser.maximizeWindow();
        await retCalcPage.enterInput(40, 45, 75000, 50000, 24000, 10, 2, '', '', '');
        await retCalcPage.calculate();
        await resultspage.verifyconfirmation();
        

    });
    
    it('Additional Social Security fields should display/hide based on Social Security benefits toggle', async () => {
        await retCalcPage.open();
        await browser.maximizeWindow();
        await retCalcPage.enterInput(45, 55, 100000, 70000, 50000, 10, 2, 'Y', 'S', 80000);
        await retCalcPage.calculate();
        await resultspage.verifyconfirmation();
                
        });

    it('submit form with required fields only', async () => {
        await retCalcPage.open();
        await browser.maximizeWindow();
        await retCalcPage.enterInput(40, 45, 75000, '', 24000, 10, 2, '', '', '');
        await retCalcPage.calculate();
        await resultspage.verifyconfirmation();    
                
        });
        
        it('Missing required Feild Error', async () => {
            await retCalcPage.open();
            await browser.maximizeWindow();
            await retCalcPage.enterInput(40, 45, 75000, '', '', 10, 2, '', '', '');
            await retCalcPage.calculate();
            await expect(retCalcPage.reqflderror).toHaveTextContaining('Please fill out all required fields')
              
                    
            });
    it('update default calculator values', async () => {
        await retCalcPage.open();
        await browser.maximizeWindow();
        await retCalcPage.enterInput(45, 55, 100000, 70000, 50000, 10, 2, 'Y', 'S', 80000);
        await retCalcPage.openadjustdefaultvalues();
        await adjdefvalpage.enterInput(50000, 25, 'Y', 2, 4, 3, 5);
        await adjdefvalpage.savechanges();
        await retCalcPage.calculate();
        await resultspage.verifyconfirmation(); 
                
        });    
});
