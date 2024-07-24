const { waiter } = require("./common");

class Page {
	constructor() {
		this.title = 'My Page'
	}
	get agreeButton() { return $('//button/span[text()="AGREE"]') }


	async open(path) {
		await browser.url(path)
	}

	async agree() {
		try {
			await waiter('//button/span[text()="AGREE"]', 5000);
			await this.agreeButton.click();
		} catch (error) {
			console.log("🚀 ~ error:", error)

		}
	}
}

module.exports = Page