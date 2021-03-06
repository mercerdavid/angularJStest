/**
 * Created by adrianjackson on 29/12/14.
 */
(function(){
    var app = angular.module('product',[]);
    app.directive('productReview', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-review.html',
            controller: function(){
                this.review = {};

                this.addReview = function(product) {
                    product.reviews.push(this.review);
                    this.review = {};
                }
            },
            controllerAs: 'reviewCtrl'
        };
    });
})();