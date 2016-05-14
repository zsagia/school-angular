(function() {
	var gems = [
		{
			name: 'Azurite',
			price: 2.95,
			images: [
				image1.png,
				image2.png
			]
		},
		{
			name: 'Bloodstone',
			price: 5.95,
			images: [
				image1.png,
				image2.png
			]
		},
		{
			name: 'Zircon',
			price: 3.95,
			images: [
				image1.png,
				image2.png
			]
		}
	];

	var app = angular.module('gemStore', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(value) {
			this.tab = value;
		};

		this.isSet = function(value) {
			return this.tab === value;
		};
	});
})();