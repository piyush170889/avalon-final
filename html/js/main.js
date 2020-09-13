//Global Constants
var baseUrl = 'http://ptdevenv.co.in/avalon_realty_dev_env/';
var imageBaseUrl = baseUrl + 'public';

// Property API Endpoints
var singlePropertyApiEndpoint = baseUrl + 'singleProp?id=';

// Interiors API Endpoints
var interiorsP1ApiEndpoint = baseUrl + 'allinte?prop_id=';
var interiorsP2ApiEndpoint = baseUrl + 'allintefeat?prop_id=';

// Technology API Enpoints
var technologyApiEndpoint = baseUrl + 'alltechfeat?prop_id=';

// Amenities API Enpoints
var amenitiesApiEndpoint = baseUrl + 'allamefeat?prop_id=';

//Plans Api Emdpoints
var allPlanApiEndpoint = baseUrl + 'allplan?prop_id=';
var planViewApiEndpoint = baseUrl + 'allplanview?prop_id=';

//Gallery Api Endpoints
var galleryApiEndpoints = baseUrl + 'allgallery?prop_id=';

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {

	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}

	$('.read__more').each(function () {

		console.log(`this.href before = ${this.href}`);

		this.href = this.href.split('?')[0] + '?id=' + vars['id'];
		console.log(`this.href after = ${this.href}`);
	})

	$('.read__more_1').each(function () {
		console.log(`this.href before = ${this.href}`);
		this.href = this.href.split('?')[0] + '?id=' + vars['id'];
		console.log(`this.href after = ${this.href}`);
	})

	return vars;
}

//Comparer Function to sort collection    
function getSortedList(prop) {
	return function (a, b) {
		if (a[prop] > b[prop]) {
			return 1;
		} else if (a[prop] < b[prop]) {
			return -1;
		}
		return 0;
	}
}
