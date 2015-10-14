angular.module('TheDonutsApp', [])
  .controller('DonutsController', DonutsController);

DonutsController.$inject = ['$http'];

function DonutsController($http){

  var self = this;

  self.all = []

  function getDonuts(){
    $http.get('http://api.doughnuts.ga/doughnuts')
      .then(function(response){
        console.log(response);
        self.all = response.data
      })
  }

  getDonuts()
  console.log(self.all)

  self.addDonut = addDonut;
  self.newDonut = {};

  function addDonut(){
    $http.post('http://api.doughnuts.ga/doughnuts', self.newDonut)
      .then(function(response){
        self.all.push(response.data) //this runs the other function again
      })
      self.newDonut = {} //this resets the object
  }



  function deleteDonut(){
    $http.delete('http://api.doughnuts.ga/doughnuts/:id', self)
  }
}