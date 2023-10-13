const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["Whats your name? Nicknames are also acceptable :)", "What's an activity you like doing?", "What do you listen to while doing that?", "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?", "Which sport is your absolute favourite?", "What is your superpower? In a few words, tell us what you are amazing at!"]
let profile = Array(questions.length);

rl.question(questions[0], (answer) => {
  profile[0] = answer;
  console.log(`Thank you for your valuable feedback: ${profile[0]}`);
  rl.question(questions[1], (answer) => {
    profile[1] = answer;
    console.log(`Thank you for your valuable feedback: ${profile[0]}`);
    rl.question(questions[2], (answer) => {
      profile[2] = answer;
      console.log(`Thank you for your valuable feedback: ${profile[0]}`);
      rl.question(questions[3], (answer) => {
        profile[3] = answer;
        console.log(`Thank you for your valuable feedback: ${profile[0]}`);
        rl.question(questions[4], (answer) => {
          profile[4] = answer;
          console.log(`Thank you for your valuable feedback: ${profile[0]}`);
          rl.question(questions[5], (answer) => {
            profile[5] = answer;
            console.log(`Thank you for your valuable feedback: ${profile[0]}`);
            rl.question(questions[6], (answer) => {
              profile[6] = answer;
              console.log(`Thank you for your valuable feedback: ${profile[0]}`);
              rl.close();
              console.log(`Hi, my name is ${profile[0]} and i like ${profile[1]} while listening to ${profile[2]}. \nMy favourite type of meal is ${profile[3]} and ${profile[4]} is the most scrumptious. Love playing ${profile[5]}. And ${profile[6]} is my superpower!`)
            });
          });
        });
      });
    });
  });
});
