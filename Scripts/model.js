/* global */
'use strict';
// eslint-disable-next-line no-unused-vars
const model = (function () {
  const addMeal = function (meal) {
    const taxRateToDecimal = .01 * Number(meal.taxRate);
    const mealTipToDecimal = .01 * Number(meal.tip);

    this.subtotal = Number(meal.mealPrice);
    this.customerTip = (((1 + taxRateToDecimal) * this.subtotal) * mealTipToDecimal).toFixed(2);
    this.customerTotal = parseFloat(((1 + taxRateToDecimal) * this.subtotal) + this.customerTip).toFixed(2); 
    this.tipTotal = parseFloat(this.tipTotal + this.customerTip).toFixed(2);
    this.mealCount++;
    this.averageTip = parseFloat(this.tipTotal/this.mealCount).toFixed(2);

    
  };
  const resetCalc = function(){
    this.subtotal= 0;
    this.customerTip= 0;
    this.tipTotal= 0;
    this.mealCount= 0;
    this.averageTip= 0;
    this.customerTotal= 0;
  };
  
  return {
    subtotal: 0,
    customerTip: 0,
    tipTotal: 0,
    mealCount: 0,
    averageTip: 0,
    customerTotal: 0,

    addMeal,
    resetCalc
  };
}());