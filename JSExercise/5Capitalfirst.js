function capitalFirstLetterSentence(str) { 
    let ch = str[0].toUpperCase();
    for (let i=1; i<str.length; i++) {
           ch+=str[i]
            if(str[i] == ' ' )
            {
                ch=ch+str[i+1].toUpperCase();
                // ch=ch+str[i+1]
                i++;
            }
        }
        return ch

    }

console.log(capitalFirstLetterSentence("hai hello you are the first person. test Hello world"));