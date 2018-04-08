function makeGreeting(language){
    return function(firstname,lastname){
        

        if(language === 'en'){
            console.log(`Hello ${firstname} ${lastname} with ${language} language`);
        }
        
        if(language === 'es'){
            console.log(`Holla ${firstname} ${lastname} with ${language} language`);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');


greetEnglish('vlado','voev');
greetSpanish('vlado','voev');