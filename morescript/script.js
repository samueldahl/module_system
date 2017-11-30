import {testName}from './testNames.js';
import {testFunction} from "./test.js";
$(document).ready(function () {
    $('#nameInput').keyup(function () {
        console.log(testName());
    });
});