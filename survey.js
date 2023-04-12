const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('Which is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Hi, I'm ${answer1}! I love to listen to ${answer3} when I'm ${answer2}, go out for ${answer4} on the weekends to eat ${answer5}, play an intense game of ${answer6} with my buddies, and I have a natural talent for ${answer7}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});