function findName(){
    return $('#nameInput').val();
}
function testName() {
    switch (findName()) {
        case "Jared":
            return 1;
            break;
        case "Sam":
            return 2;
            break;
        default:
            return 0;
    }
}
let names = ['Jared', 'Sam'];
function returnNumber(name, namesArray) {
    if(namesArray === undefined) {
        namesArray = names;
    }
    let returnValue = -1;
    namesArray.forEach(function (val, index) {
        if(val === name) {
            returnValue = index;
        }
    });
    return returnValue;
}
export {findName, testName, returnNumber};