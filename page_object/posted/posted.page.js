// login.page.js
const Page = require("../page")
const { waiter } = require("../common")

class PostedPage extends Page {

	get expirationTime() { return $(`div.expire`) }
	get titelPostArea() { return $(`div.info-top>h1`) }
	get syntax() { return $(`//div[@class="top-buttons"]//a[1]`) }
	get postedTextsArray() { return $$('div.source li.li1') }

	async isLoad() {
		try {
			await waiter("div.post-view", 5000)
		} catch (error) {
			console.log("🚀 ~ error:", error)
		}
	}

	async getTitlePost() {
		return this.titelPostArea.getText();
	}

	async getText() {
		const text = await this.postedTextsArray.map((li) => li.getText()).join(`
`)
		return text;
	}
	async getSyntax() {
		return this.syntax.getText()
	}

	async getexpirationTime() {
		return this.expirationTime.getText()
	}

}

module.exports = new PostedPage()