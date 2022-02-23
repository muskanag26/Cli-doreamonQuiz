var readlineSync= require('readline-sync');
var chalk= require('chalk');

var userName=readlineSync.question('Hi! May I know your name? ');

console.log("Welcome "+ userName+ " Let's check if you know Doraemon ");

console.log('Choose the correct option ');
var score=0;

var Ques=[
  {
    question:`Doraemon is of which color? 
    a) Red 
    b) Blue
  `,
    answer:'b',
  },
  {
    question:`With whom doraemon lives? 
    a) Nobita 
    b) Giyan 
  `,
    answer:`a`,
  }
  ]

function play(question,answer)
{
    var userAns=readlineSync.question(question);
    if(userAns===answer){
      console.log(chalk.green('You are right! '));
      score=score+1;
    }
    else{
      console.log(chalk.red('You are wrong! '));

    }
    console.log('-------')
}

for(var i=0;i<Ques.length;i++){
  play(Ques[i].question,Ques[i].answer);
}

console.log('Yayyy!! Your final score is '+ score);