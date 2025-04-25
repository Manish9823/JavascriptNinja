
function Ninja() {
    var feints = 0;
    this.getFeints = function () {
        return feints;
    };
    this.feints = function () {
        feints++;
    };
}

var ninja1 = new Ninja();

ninja1.feints();

console.log(ninja1.feints === undefined, " And the private data is inaccessible to us.");

console.log(ninja1.getFeints() === 1, " We're able to access the internal feint count.");