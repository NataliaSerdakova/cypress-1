const {defineConfig} = require("cypress");

module.exports = defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000/',
		setupNodeEvents(on, config) {
			let viewportDevice = config.env.VIEWPORT_DEVICE || 'desktop';

			switch (viewportDevice) {
				case 'mobile':
					return Object.assign(config, {
						viewportWidth: 375,
						viewportHeight: 667
					});
				default:
					return Object.assign(config, {
						viewportWidth: 1366,
						viewportHeight: 768
					});
			}
		}
	}
});