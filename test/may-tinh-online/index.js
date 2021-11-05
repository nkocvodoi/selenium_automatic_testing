const { describe, it, after, before } = require("mocha");

const chai = require("chai");
const expect = chai.expect;

const chaiAsPromised = require("chai-as-promised");
const { url, testCase } = require("./data");
const CacultaionTest = require("./define");

chai.use(chaiAsPromised);
require("chromedriver");

module.exports.caculationTesting = () => {
  try {
    describe("Caculation Testing", async function () {
      this.timeout(50000);
      let driver, page;
      beforeEach(async () => {
        page = new CacultaionTest(url);
        await page.searchButton();
      });

      afterEach(async () => {
        await page.quit();
      });
      it("Test numberA add number B", async () => {
        let result = await page.addNumber(
          testCase.addTest.input.a,
          testCase.addTest.input.b
        );
        expect(result).to.equal(testCase.addTest.expected);
        return;
      });
      it("Test numberA minus number B", async () => {
        let result = await page.minus(
          testCase.minusTest.input.a,
          testCase.minusTest.input.b
        );
        expect(result).to.equal(testCase.minusTest.expected);
        return;
      });
      it("Test numberA mutiply number B", async () => {
        let result = await page.multiply(
          testCase.multiplyTest.input.a,
          testCase.multiplyTest.input.b
        );
        expect(result).to.equal(testCase.multiplyTest.expected);
        return;
      });
      it("Test numberA division number B", async () => {
        let result = await page.division(
          testCase.divisionTest.input.a,
          testCase.divisionTest.input.b
        );
        expect(result).to.equal(testCase.divisionTest.expected);
        return;
      });
    });
  } catch (e) {
    console.log(new Error(e.message));
  }
};
