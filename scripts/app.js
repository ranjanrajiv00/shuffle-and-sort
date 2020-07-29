(function (app) {
	'use strict';

	function App() {
		this.modal = new app.Modal();
		this.view = new app.View();
		this.controller = new app.Controller(this.modal, this.view);
	}

	var app = new App();
})(window.app);