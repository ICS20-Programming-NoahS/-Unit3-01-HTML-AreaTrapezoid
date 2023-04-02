// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: March 2023
// This file contains the JS functions for index.html

/**
 * This function calculates the area of a trapezoid.
 */
function calculatetrapezoid() {
  // calculations of the area of the trapezoid
  let bigBase = parseFloat(document.getElementById("big-base-of-trapezoid").value);
  let smallBase = parseFloat(document.getElementById("small-base-of-trapezoid").value);
   let height = parseFloat(document.getElementById("height-of-trapezoid").value);
  // calculating the area of the trapezoid
  let area = (bigBase + smallBase)/2 * height;

  // display of the area of the trapezoid
  document.getElementById("area").innerHTML = 'The area is: ' + area + " cm²"
}