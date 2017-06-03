(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;

  buy.BoughtItems = ShoppingListCheckOffService.BoughtItems;
  buy.getBuyItems = ShoppingListCheckOffService.getBuyItems;

  }

  //Already bought
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
   var bought = this;
   bought.getBoughtItems = ShoppingListCheckOffService.getBoughtItems;
 }

  function ShoppingListCheckOffService(){
    var service = this;

      var shopList = [
        {
          name: "cookies",
          quantity: 10
        },
        {
          name: "cake",
          quantity: 10
        },
        {
          name: "cookies",
          quantity: 10
        },
        {
          name: "cake",
          quantity: 10
        },
        {
          name: "cookies",
          quantity: 10
        }];

        var boughtItems = [];

          service.BoughtItems = function(itemIndex){
          var item = shopList.splice(itemIndex,1)[0];// removes item from tbuy list
          boughtItems.push(item);
        };
       service.getBuyItems = function (){
         return shopList;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };
  }


}) ();
