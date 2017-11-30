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
export {findName, testName};