const Page = require("../../driver");
const { fail } = require("../../utils/locator");
const data = require("./data");

class CaculationTest extends Page {
  constructor(url) {
    super(url);
  }
  async searchButton() {
    this.oneBtn = await this.findById(data.idButton.one);
    this.twoBtn = await this.findById(data.idButton.two);
    this.threeBtn = await this.findById(data.idButton.three);
    this.fourBtn = await this.findById(data.idButton.four);
    this.fiveBtn = await this.findById(data.idButton.five);
    this.sixBtn = await this.findById(data.idButton.six);
    this.sevenBtn = await this.findById(data.idButton.seven);
    this.eightBtn = await this.findById(data.idButton.eight);
    this.nineBtn = await this.findById(data.idButton.nine);
    this.zeroBtn = await this.findById(data.idButton.zero);
    this.addBtn = await this.findById(data.idButton.add);
    this.minusBtn = await this.findById(data.idButton.minus);
    this.divisionBtn = await this.findById(data.idButton.division);
    this.multiplyBtn = await this.findById(data.idButton.mutiply);
    this.equalBtn = await this.findById(data.idButton.equal);
  }
  getButtonValue(value) {
    switch (value) {
      case 1:
        return this.oneBtn;
      case 2:
        return this.twoBtn;
      case 3:
        return this.threeBtn;
      case 4:
        return this.fourBtn;
      case 5:
        return this.fiveBtn;
      case 6:
        return this.sixBtn;
      case 7:
        return this.sevenBtn;
      case 8:
        return this.eightBtn;
      case 9:
        return this.nineBtn;
      case 0:
        return this.zeroBtn;
    }
  }
  async addNumber(a, b) {
    try {
      let btnA = this.getButtonValue(a);
      let btnB = this.getButtonValue(b);
      await btnA.click();
      await this.addBtn.click();
      await btnB.click();
      await this.equalBtn.click();

      let result = await this.driver.wait(async () => {
        let resultBox = await this.findById(data.idButton.resultBox);
        if (resultBox) {
          let res = await resultBox.getText();
          return Number(res);
        }
        return fail;
      }, 5000);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async multiply(a, b) {
    try {
      let btnA = this.getButtonValue(a);
      let btnB = this.getButtonValue(b);
      await btnA.click();
      await this.multiplyBtn.click();
      await btnB.click();
      await this.equalBtn.click();

      let result = await this.driver.wait(async () => {
        let resultBox = await this.findById(data.idButton.resultBox);
        if (resultBox) {
          let res = await resultBox.getText();
          return Number(res);
        }
        return fail;
      }, 5000);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async minus(a, b) {
    try {
      let btnA = this.getButtonValue(a);
      let btnB = this.getButtonValue(b);
      await btnA.click();
      await this.minusBtn.click();
      await btnB.click();
      await this.equalBtn.click();

      let result = await this.driver.wait(async () => {
        let resultBox = await this.findById(data.idButton.resultBox);
        if (resultBox) {
          let res = await resultBox.getText();
          return Number(res);
        }
        return fail;
      }, 5000);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async division(a, b) {
    try {
      let btnA = this.getButtonValue(a);
      let btnB = this.getButtonValue(b);
      await btnA.click();
      await this.divisionBtn.click();
      await btnB.click();
      await this.equalBtn.click();

      let result = await this.driver.wait(async () => {
        let resultBox = await this.findById(data.idButton.resultBox);
        if (resultBox) {
          let res = await resultBox.getText();
          return Number(res);
        }
        return fail;
      }, 5000);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
module.exports = CaculationTest;
