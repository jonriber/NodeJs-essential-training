const collectAnswers = require("./lib/collectAnswers"); //importing module

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with NodeJs?",
];

//executing

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer =>console.log(`question answered: ${answer}`));
answerEvents.on("complete", answers => {
    console.log("thank you for your answers.")
    console.log(answers);
});
answerEvents.on("complete",() => process.exit());