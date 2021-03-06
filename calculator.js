/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function(){
    var memory = 0;
    var total = 0;

    return {
      load : _validate(_load),
      getTotal : _getTotal,
      add : _validate(_add),
      subtract : _validate(_subtract),
      multiply : _validate(_multiply),
      divide : _validate(_divide),
      recallMemory : _recallMemory,
      saveMemory : _saveMemory,
      clearMemory : _clearMemory
    };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function _load(memory){
    total = memory;
    return total;

  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function _getTotal(){
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function _add(memory){
    total += memory;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract(memory){
    total -= memory;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(memory){
    total *= memory;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(memory){
    total /= memory;
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function _recallMemory(){
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
   function _saveMemory(){
    memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */
   function _clearMemory(){
    memory = 0;
    //memory =undefined;
   }
  /**
   * Validation
   */
   function _validate(calculatorModule){
    return function(memory){
      if (typeof memory != 'number'){
        return "Error! I need to be a number";
      }else{
        return calculatorModule(memory);
      }
    };
   }

})();

/*
//constantine
var o1 = document.getElementById('operator1');//done
var o2 = document.getElementById('operator2');//done

var calculate = function(a, b, method3){
  calculatorModule.load(a);
  method3(b);
  return calculatorModule.getTotal();
};

var method2;
console.log(document.getElementById('operation').value);

document.getElementById('calculate').addEventListener('click', function(){
          switch(document.getElementById('operation').value){
          case 'add' : method2 = calculatorModule.add;
            break;
          case 'subtract' : method2 = calculatorModule.subtract;
            break;
          case 'multiply' : method2 = calculatorModule.multiply;
            break;
          case 'divide' : method2 = calculatorModule.divide;
            break;
        };

  var result = calculate(Number(o1.value), Number(o2.value),method2);
  document.getElementById('result').innerHTML(result);
  console.log("jhgkhg");
});

/*
/*
//Judah Code



*/