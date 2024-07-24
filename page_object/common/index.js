async function waiter(selector, time = 5000, errorMessage = "Notfound") {
	await browser.waitUntil(async () => {
		return (await browser.execute(() => document.readyState)) === 'complete';
	}, {
		timeout: time,
		timeoutMsg: 'Страница не загрузилась полностью'
	});
	
	await browser.$(selector).waitForDisplayed({ timeout: time, reverse: true, interval: 10, timeoutMsg: errorMessage })
}
module.exports = { waiter }