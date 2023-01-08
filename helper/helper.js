const randomString = require('random-string')
let x = randomString();
let y = randomString({
    length: 7,
    numeric: true,
    letters: false,
    special: false,
});

class Helper {
    get randomEmail(){
        return x+'@'+x+'.com'
    }
    get randomString1() {
        return x
    }
    get randomPhone() {
        return y
    }

}
module.exports = new Helper();