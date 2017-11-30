import {testName, returnNumber}from './testNames.js';
import {testFunction} from "./test.js";
$(document).ready(function () {
    let nameInput = $('#nameInput');
    nameInput.keyup(function (event) {
        if(event.which === 13) {
            console.log(returnNumber(nameInput.val()));
        }
    });
});