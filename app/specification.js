/**
 * Created by adrianjackson on 29/12/14.
 */
(function(){
    var app = angular.module('specification',[]).config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
    app.directive('specificationList', ['$http', function() {
        return {
            restrict: 'E',
            templateUrl: 'specification-list.html',
            controller: function ( $http, $scope) {
                console.log('in our controller');
                $scope.specification = [];
                $http.get('http://192.168.1.2:8083/get').success(function (data) {
                    $scope.specification = data
                }).error(function () {
                    alert("error");
                    //let the function caller know the erro;
                    return error()
                });

                this.addSpecification = function() {

                    console.log('in add specification >> ' + this.namer);
                    console.log('in add specification >> ' + this.valuer);
                    console.log('in add specification >> ' + this.activer);


                    var req = {
                        method: 'POST',
                        url: 'http://192.168.1.2:8083/post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            "name" : this.namer,
                            "Value": this.valuer,
                            "Active": this.activer
                        }
                    }

                    $http(req).success(function(data, status, headers, config) {

                        console.log('in success status>>' + status)
                        console.log('in success headers>>' + headers)

                        $scope.message = data;
                    }).error(function(data, status, headers, config) {
                        console.log('in error status>>' + status)
                        console.log('in error headers>>' + headers)
                        alert( "failure message: " + JSON.stringify({data: data}));
                    });
                    // Making the fields empty
                    //
                    $scope.name='';
                    $scope.employees='';
                    $scope.headoffice='';

            }
            },
            controllerAs: 'specificationCtrl'
        }
    }]);
})();