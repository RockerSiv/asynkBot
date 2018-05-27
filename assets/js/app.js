'use strict';
let isNewMessage = false;
let botName = 'Ivan';
let userName = 'NeIvan';
let userMsg = '';

let counter = 0;
let subBut = document.getElementById('subBut');
subBut.addEventListener('click', ()=> {
    if (userMsgContainer.value) {


        userMsg = userMsgContainer.value;
        userMsgContainer.innerHTML = '';
        isNewMessage = true;
        if (counter === 14) {
            chatArea.innerHTML = '';
        }
        if(isBotReady) {
            counter++;
            chat(botName, userName, userMsg);
        }else{
            console.log('Bot is not ready')
        }


    }
});

