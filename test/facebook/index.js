const { describe, it, after, before } = require("mocha");

const chai = require("chai");
const expect = chai.expect;

const chaiAsPromised = require("chai-as-promised");
const FacebookTesting = require("./define");

const { url, testCase } = require("./data");

chai.use(chaiAsPromised);
require("chromedriver");

module.exports.facebook = () => {
  try {
    describe("Facebook Test", async function () {
      this.timeout(50000);
      let driver, page;

      beforeEach(async () => {
        page = new FacebookTesting(url);
      });

      afterEach(async () => {
        await page.quit();
      });

      it("Login Facebook", async () => {
        const result = await page.login(
          testCase.loginSuccess.input.username,
          testCase.loginSuccess.input.password
        );
        expect(result == '').to.equal(true);
        return;
      });
      it("Login Facebook", async () => {
        const result = await page.login(
          testCase.loginFail.input.username,
          testCase.loginFail.input.password
        );
        expect(result != '').to.equal(true);
        return;
      });
      it("Search Facebook", async () => {
        let result = await page.search('Kien Duy');
        expect(result.length >= 6).to.equal(true);
        return;
      });
    });
  } catch (e) {
    console.log(new Error(e.message));
  }
};
