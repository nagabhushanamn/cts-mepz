
var trainer = {
    name:'Nag',
    doTeach() {
        console.log(this.name+' teaching .js');
        var askQues = () => { console.log(this.name + " answering ques") };
        return askQues;   // ES6
    }
}


module.exports = trainer;