/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function(){
    var memory = 0;
    var total = 0;

    return {
      load : _load,
      getTotal : _getTotal,
      add : _add,
      subtract : _subtract,
      multiply : _multiply,
      divide : _divide,
      recallMemory : _recallMemory,
      saveMemory : _saveMemory,
      clearMemory : _clearMemory
    }


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function _load(memory){
    if(typeof memory != 'number'){
      return "need a number";
    }else{
      memory
      total = memory;
      return total;
    }
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
    if(typeof memory != 'number'){
      return "need a number";
    }else{
      total += memory;
    }
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract(memory){
    if(typeof memory != 'number'){
      return "need a number";
    }else{
      total -= memory;
    }
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(memory){
    if(typeof memory != 'number'){
      return "need a number";
    }else{
      total *= memory;
    }
   };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(memory){
    if(typeof memory != 'number'){
      return "need a number";
    }else{
      total /= memory;
    }
   };


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

};