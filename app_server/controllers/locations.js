/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Dominos Pizza',
            address: '301 N 23rd St, Canyon, TX',
            rating: 4.6,
            facilities: ['Food', 'Premium wifi'],
            distance: '0.3m'
        }, {
            name: 'La Bella Pizza Canyon',
            address: '700 23rd St, Canyon, TX',
            rating: 4.3,
            facilities: ['Food', 'Premium wifi'],
            distance: '0.9m'
        }, {
            name: 'Pizza Hut',
            address: '110 23rd St, Canyon, TX',
            rating: 2.1,
            facilities: ['Food', 'Premium wifi'],
            distance: '0.3m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Dominos Pizza',
        pageHeader: {
            title: 'Dominos Pizza'
        },
        sidebar: {
            context: 'is on Loc8r because it has great pizza and space to sit down with your friends to eat.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Dominos Pizza',
            address: '301 N 23rd St, Canyon, TX',
            rating: 4.6,
            facilities: [ 'Pizza', 'Pasta', 'Desserts'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Sunday - Thursday',
                opening: '10:30am',
                closing: '12:00pm',
                closed: false
            }, {
                days: 'Friday',
                opening: '10:30am',
                closing: '1:00am',
                closed: false
            }, {
                days: 'Saturday',
                opening: '10:30am',
                closing: '1:00am',
                closed: false
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Pizza wasn\'t great.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};