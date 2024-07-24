const { waiter } = require("../page_object/common");
const mainPage = require("../page_object/main/main.page");
const postedPage = require("../page_object/posted/posted.page");
const url = "https://pastebin.com/"
const toPost = {
	message: `git config --global user.name "New Sheriff in Town"
git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
git push origin master --force`,
	title: "how to gain dominance among developers",
	syntax: "Bash",
	time: "10 min"
}
describe("Page object", () => {
	it("Second test", async () => {
		await mainPage.open(url)

		await mainPage.agree();

		await mainPage.setTextPost(toPost.message)
		await mainPage.selectTime()
		await mainPage.selectSyntax()
		await mainPage.setTitlePost(toPost.title)
		await mainPage.submit()

		await postedPage.isLoad();

		const title = await postedPage.getTitlePost()
		expect(title).toEqual(toPost.title)

		const text = await postedPage.getText()
		expect(text).toEqual(toPost.message)

		const syntax = await postedPage.getSyntax()
		expect(syntax.toLowerCase()).toEqual((toPost.syntax).toLowerCase())

		const time = await postedPage.getexpirationTime()
		expect(time.toLowerCase()).toEqual(toPost.time.toLowerCase())
	})
})