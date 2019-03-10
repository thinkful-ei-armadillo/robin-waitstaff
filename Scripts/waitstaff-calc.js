/* eslint-disable no-unused-vars */
/* global $, model */
'use strict';
const waitstaffCalc = (function(){

  $.fn.extend({
    serializeJson: function () {
      const formData = new FormData(this[0]);
      const o = {};
      formData.forEach((val, name) => o[name] = val);
      return JSON.stringify(o);
    }
  });

  function render(){
    $('#root').html(`
      ${generateWaitstaffCalc()}
      ${generateEarningInfo()}
      ${generateCustomserCharges()}
      ${generateWaitstaffReset()}
    `);
  }
  
  function generateWaitstaffCalc (){
    return `
    <form class="meal-form-js">
        <h2>Enter the Meal Details</h2>
        <label for="meal-price">Base Meal Price: $ </label>
        <input type="text" id="meal-price" name="mealPrice" placeholder="0.00"></br>
        <label for="tax-rate">Tax Rate: % </label>
        <input type="text" id="tax-rate" name="taxRate"></br>
        <label for="tip">Tip Percentage: % </label>
        <input type="text" id="tip" name="tip"></br>
        <input type="submit" name="submit" id="submit-btn" value="Submit">
        <input type="button" name="cancel-btn" id="cancel-btn" value="Cancel">
    </form>
    `;
  }

  function generateCustomserCharges(){
    return`
    <div class="customer-charges-container">
      <h2>Customer Charges</h2>
      <p>Subtotal <span>${model.subtotal}</span></p>
      <p>Tip <span>${model.customerTip}</span></p>
      <p>Total <span>${model.customerTotal}</span></p>
    </div>`;
  }

  function generateEarningInfo(){
    return `
    <div class="earnings-info">
      <h2>My Earnings Info</h2>
      <p>Tip Total  <span>${model.tipTotal}</span></p>
      <p>Meal Count  <span>${model.mealCount}</span></p>
      <p>Average Tip Per Meal  <span>${model.averageTip}</span></p>
    </div>`;
  }

  function generateWaitstaffReset(){
    return `
    <input type="button" name="Reset" id="reset-btn" value="Reset">`;
  }

  function handleMealSubmit(){
    $('#root').on('submit', '.meal-form-js', function(e){
      e.preventDefault();
      const meal = $(this).serializeJson();
      $(this).closest('form').find('input#meal-price').val('');
      $(this).closest('form').find('input#tax-rate').val('');
      $(this).closest('form').find('input#tip').val('');
      model.addMeal(JSON.parse(meal));
      render();
    });
  }

  function handleResetButton(){
    $('#root').on('click', '#reset-btn', function(e){
      e.preventDefault();
      $(this).closest('form').find('input#meal-price').val('');
      $(this).closest('form').find('input#tax-rate').val('');
      $(this).closest('form').find('input#tip').val('');
      model.resetCalc();
      render();
    });
  }

  function handleMealCancel(){
    $('#root').on('click', '#cancel-btn', function(e){
      e.preventDefault();
      $(this).closest('form').find('input#meal-price').val('');
      $(this).closest('form').find('input#tax-rate').val('');
      $(this).closest('form').find('input#tip').val('');
    });
  }

  function bindEventListeners() {
    handleMealSubmit();
    handleResetButton();
    handleMealCancel();
  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };
}());