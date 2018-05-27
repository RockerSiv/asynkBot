'use strict';
let botMessage = async()=> {
    let isFinish = false;
    let msg = [
        'How are you?',
        'Are you vegan?',
        'Rly, dude?',
        'Right behind you! Oh, just kidding.',
        'Good haircut',
        'Nah, bored',
        'Is this real?'
    ][rand(0, 6)];
    let botPhrases = rand(1, 10);
    if (botPhrases === 10 || botPhrases === 9) {
        isOnline = false;
    }
    return msg;

};


let outputMsg = (sender, msg, typeOfSender)=> {
    let spanClass;
    switch (typeOfSender) {
        case 'Bot':
        case 'bot':
            spanClass = 'botName';
            break;
        case 'User':
        case 'user':
            isBotReady = false;
            spanClass = 'userName';
            break;
    }
    chatArea.innerHTML += `<span class=${spanClass}>${sender}</span>: ${msg}<br>`;
};

let chat = async (botName = 'Bot', userName = 'User', userMsg = '') => {
    let botFinalMsg = "";

    if (isNewMessage) {
        await timeout(outputMsg(userName, userMsg, 'user'), rand(1, 10));
        isNewMessage = false;
        userMsg = userMsg.toLowerCase();
        switch (userMsg) {
            case 'my watch has ended':
                isOnline = false;
                break;
        }
        if (!isOnline) {
            timeout(outputMsg(botName, 'Bye.', 'bot'), rand(1, 10));
            isOffline = true;
        }
        if (!isOffline) {
            botFinalMsg = await botMessage();
            timeout(outputMsg(botName, botFinalMsg, 'bot'), rand(1, 10));
            isBotReady = true;
        }

    }


};
