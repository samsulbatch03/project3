//1.
function kilometerToMeter(dgit) {
    if (digit < 0) {
      return 'positive number';

    } else if (digit >= 0) {
      var meter = digit * 1000;
      return meter;
    } else {
      return 'valid number';
    }
  }




  //2.
  function budgetCalculator(clock, phn, laptop) {
    if (clock < 0 || phn < 0 || laptop < 0) {
      return 'plese give me a positive value';
    } else if (clock >= 0 ||phn >= 0 || laptop >= 0) {
      var watchPrice = clock * 50;
      var mobilephone = phn * 100;
      var computePrice = laptop * 500;
      var totalPrice = clockPrice + phnPrice + laptopPrice;
      return totalPrice;
    } else {
      return 'plese give me a number value';
    }
  }


  

  //4.
  function megaFriend(largestDigit) {
    var element = 0;
    var largeNum;
    for (var i = 0; i < largestDigit.length; i++) {
      if (largestDigit[i].length > element) {
        var element = largestDigit[i].length;
        largeNum = largestDigit[i];
      }
    }
    return largeNum; 
  }
