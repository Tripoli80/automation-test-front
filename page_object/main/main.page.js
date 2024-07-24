const { waiter } = require("../common")
const Page = require("../page")

class MainPage extends Page {
	get newPostArea() { return $('#postform-text') }
	get syntaxUL() { return $("#select2-postform-format-container") }
	get syntaxLI() { return $('//li[text()="Bash"]') }

	get expirationUL() { return $('.field-postform-expiration span[role="combobox"]') }
	get expirationLI10M() { return $(`li[id$="10M"]`) }
	get titelPostArea() { return $("input[id='postform-name']") }
	get submitPostBtn() { return $('//button[text()="Create New Paste"]') }
	get agreeButton() { return $('//button/span[text()="AGREE"]') }
	async setTitlePost(text) {
		await this.titelPostArea.setValue(text);
	}


	async setTextPost(text) {
		await this.newPostArea.setValue(text);
	}

	async selectSyntax() {
		await this.syntaxUL.click();
		await this.syntaxLI.click();
	}
	async selectTime() {
		await this.expirationUL.click();
		await this.expirationLI10M.click();
	}

	async submit() {
		await this.submitPostBtn.click()
	}

}

module.exports = new MainPage()