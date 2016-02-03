(function () {
    var app;
    app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;

    });

    app.controller("PanelController", function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller("ReviewController", function(){
        this.review = {};
        this.addReview = function(product) {
            product.review.push(this.review);
        };
    });

    var gems =[
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .',
            images: [
                full: 'dodecahedron-01-full.jpg',
            thumb: 'dodecahedron-01-thumb.jpg'
        ],
        review : [
            {
                stars: 5,
                body: "I love this"}
    ]
        },

            canPurchase: true,
            soldOut:false
        }
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: '...',
            canPurchase: false
        }  
    ]
})();
