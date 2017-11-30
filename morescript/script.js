import {findName}from './testNames.js';
import {ismynamejared}from './morescript.js';
import {testFunction} from "./test.js";
$(document).ready(function () {
    $('#nameInput').keyup(function () {
        findName();
    });
});