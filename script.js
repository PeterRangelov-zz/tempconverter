var tempconverter = angular.module('tempconverter', []);

tempconverter.controller('main_ctr', function($scope) {

    $scope.input_temperature;
    $scope.input_units = "kelvin";
    $scope.output_units = "rankine";
    $scope.evaluation;

    $scope.evaluate = function() {
    	$scope.evaluation  = Math.round(window[$scope.input_units + "_to_" + $scope.output_units]($scope.input_temperature));
    };

});

// RANKINE
var rankine_to_kelvin = function  (r) {
	return r * 9/5;
}

var rankine_to_fahrenheit = function  (r) {
	return r - 459.67;
}

var rankine_to_celsius = function  (r) {
	return (r - 491.67) * 5/9;
}

// KELVIN
var kelvin_to_rankine = function  (k) {
	return k * 5/9;
}

var kelvin_to_fahrenheit = function  (k) {
	return (k - 273.15) * 1.8 + 32;
}

var kelvin_to_celsius = function  (k) {
	return k - 273.15;
}

// FAHRENHEIT
var fahrenheit_to_rankine = function  (f) {
	return f + 459.67;
}

var fahrenheit_to_kelvin = function  (f) {
	return (f + 459.67)* 5/9;
}

var fahrenheit_to_celsius = function  (f) {
	return (f - 32) * 5/9;
}

// CELSIUS
var celsius_to_rankine = function  (c) {
	return (c * 273.15) * 9/5;
}

var celsius_to_kelvin = function  (c) {
	return c + 273.15;
}

var celsius_to_fahrenheit = function  (c) {
	return c * 9/5 + 32;
}