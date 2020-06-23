// process.stdout.write("Hello "); //more control over the string instead of console.log()
// process.stdout.write("World \n\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?",
];

const ask = (i=0) => { // this is a new way to declare functions
    process.stdout.write(`\n\n\n ${questions[i]}`); //using ` to use placeholders {}
    process.stdout.write(`>`);
};

ask();

const answers = [];

process.stdin.on('data', data => {

    answers.push(data.toString().trim());

    if (answers.length < questions.length){ //iterate through 
        ask(answers.length);
    } else {
        process.exit();
    };
});

process.on('exit',() => {
    const [name,activity, lang] = answers;
    console.log(`

    Thank you for your answers.

    Go ${activity} ${name} you can write ${lang} code later!!!

    `);

});

