angular.
  module('calculatorApp').
  component('calculator', {
    templateUrl: 'calculator.template.html',
    controller: function CalculatorController($scope) {
      var that = this;
      this.person = 2;
      this.serviceCharge = 0;

      this.expenses = [
        {
          name: '',
          costStr: '0',
          total: (function() { return math.eval(this.costStr);}),
          paid: (function() {
                  if(that.shares.total() === 0) return this.total();
                  else return this.total() + (that.shares.total() / that.person);
                  //return 0;
                }),
        }, {
          name: '',
          costStr: '0',
          total: (function() { return math.eval(this.costStr);}),
          paid: (function() {
                  if(that.shares.total() === 0) return this.total();
                  else return this.total() + (that.shares.total() / that.person);
                  //return 0;
                }),
        }
      ];

      this.shares =
        {
          costStr: '0',
          total: (function() {  return math.eval(this.costStr);})
        };

      this.netTotal = (function(){
                      var value = 0 ;
                      that.expenses.forEach(function(element) {
                        value += element.total(element.costStr);
                      });
                      value += that.shares.total();
                      return value;
                  });
       $scope.$watch('$ctrl.person', function(newValue, oldValue) {
               if ( (newValue !== oldValue) && newValue != null) {
                 var objects = [];
                 for (var x = 0; x < newValue; x++) {
                   objects[x] = {  name: '',
                                   costStr: '0',
                                   total: (function() { return math.eval(this.costStr);}),
                                   paid: (function() {
                                           if(that.shares.total() === 0) return this.total();
                                           else return this.total() + (that.shares.total() / that.person);
                                           //return 0;
                                         })}
                 }
                 that.expenses = objects;
                 that.shares =         {
                           costStr: '0',
                           total: (function() {  return math.eval(this.costStr);})
                         };

               }

              }, true);

    }
  });
