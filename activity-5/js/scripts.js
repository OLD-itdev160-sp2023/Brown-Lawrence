/**
 * wrap everything in IIFE
 */

(function() {
    // package data array
    var data = [{
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2534,
        price: 10.50
        selector: 'p1'
    },
    {
     name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2534,
        price: 10.50
        selector: 'p1'
    }
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads=data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();        
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };

    var getTodaysDate = function() {
        var date = new Date();
        return getTodaysDate.toLocaleString();
    }

    var getEl = function (id) {
        return document.getElementById(id);

    var writePackageInfo = function(package) {
        var selector = packafe.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + 'downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();    
    }


}

var dateEl = getEl('date');
dateEl.text = getTodaysDate();

var emmet = new Package(date[0]);
dateEl.text = getTodaysDate();

});