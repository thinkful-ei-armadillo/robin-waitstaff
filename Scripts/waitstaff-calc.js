'use strict';
const waitstaffCalc = (function(){

  function render(){
    $('#root').html(`
      ${generateEarningInfo()}
      ${generateCustomserCharges()}
      ${generateWaitstaffCalc()}
      ${generateWaitstaffReset()}
      `);
  }
  function generateWaitstaffCalc (){
    return `
    <form>
        <label for="meal-price"></label>
        <input type="text" id="meal-price">
        <label for="meal-price"></label>
        <input type="text" id="meal-price">
        <label for="meal-price"></label>
        <input type="text" id="meal-price">
        <input type="submit" name="submit" id="submit-btn" value="Submit">
        <input type="button" name="cancel-btn" id="cancel-btn" value="Cancel">
    </form>
    `;
  }
  function generateCustomserCharges(){
    return`
    <div class="customer-charges-container">
      <h2>Customer Charges</h2>
      <p>Subtotal <span>0.00</span></p>
      <p>Tip <span>0.00</span></p>
      <p>Total <span>0.00</span></p>
    </div>`;
  }
  function generateEarningInfo(){
    return `
    <div class="earnings-info">
      <h2>My Earnings Info</h2>
      <p>Tip Total  <span>0.00</span></p>
      <p>Meal Count  <span>0.00</span></p>
      <p>Average Tip Per Meal  <span>0.00</span></p>
    </div>`;
  }
  function generateWaitstaffReset(){
    return `
    <input type="button" name="Reset" id="reset-btn" value="Reset">`;
  }
  function bindEventListeners() {
   
  }



  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };
}());