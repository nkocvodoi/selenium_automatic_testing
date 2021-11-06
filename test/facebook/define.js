const { Key, WebElement, By } = require("selenium-webdriver");
const Page = require("../../driver");
const { success, fail } = require("../../utils/locator");
const { testCase } = require("./data");

class FacebookTesting extends Page {
  constructor(url) {
    super(url);
  }
  async login(username, password) {
    try {
      const userNameInput = await this.findById("email")
      const passwordInput = await this.findById("pass")
      const loginButton = await this.findByName("login")
      await this.write(userNameInput, username);
      await this.write(passwordInput, password || "")
      await loginButton.click()
      let result = await this.driver.wait(async () => {
        const reemail = await this.findAnyById("email")
        return reemail
      }, 5000)

      return result
    } catch (e) {
      console.log(e)
      return fail
    }
  }

  async search(text) {
    try {
      this.login('njktherapper@gmail.com','kien1234')
      const searchInput = await this.findByClass("oajrlxb2 rq0escxv f1sip0of hidtqoto e70eycc3 lzcic4wl hzawbc8m ijkhr0an aaoq3grb sgqwj88q b3i9ofy5 oo9gr5id b1f16np4 hdh3q7d8 dwo3fsh8 qu0x051f esr5mh6w e9989ue4 r7d6kgcz br7hx15l h2jyy9rg n3ddgdk9 owxd89k7 ihxqhq3m jq4qci2q k4urcfbm iu8raji3 qypqp5cg l60d2q6s hv4rvrfc hwnh5xvq ez2duhqw rmlgq0sb dzqu5etb aj8hi1zk r4fl40cc kd8v7px7 m07ooulj mzan44vs");
      await this.write(searchInput, text + Key.ENTER + Key.ENTER)
      let result = await this.driver.wait(async () => {
        const resultElements = await this.findAnyByClass("sjgh65i0")
        return resultElements
      }, 15000)
      return result
    } catch (e) {
      console.log(e)
      return fail
    }
  }
  
  async likePost() {
    try {
      await this.login('njktherapper@gmail.com','kien1234')
      await this.driver.navigate().to("https://www.facebook.com/kien.duy.9659/");
      const likeButton = await this.findByXpath('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div/div[4]/div[2]/div/div[2]/div[3]/div[1]/div/div/div/div/div/div/div/div/div/div/div[2]/div/div[4]/div/div/div[1]/div/div[2]/div/div[1]/div[1]')
      likeButton.click()
      let result = await this.driver.wait(async () => {
        return true
      }, 5000)
      return result
    } catch (e) {
      console.log(e)
      return fail
    }
  } 
}
module.exports = FacebookTesting;
