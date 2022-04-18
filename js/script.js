/* Created by: Venika Sem
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function calculates the pay and government tax of user.
 */
function pay () {
  // input
  const numberOfHoursWorked = parseInt(document.getElementById('number-of-hours-worked').value)
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value)

   // process
  const takeHomeSalary = numberOfHoursWorked * hourlyRate * 0.82
  const governmentTax = numberOfHoursWorked * hourlyRate *  0.18

  // output
  document.getElementById('take-home-salary').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
  document.getElementById('government-tax').innerHTML = 'The government will take: $' + governmentTax.toFixed(2)
}