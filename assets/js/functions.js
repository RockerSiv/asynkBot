'use strict';
let chatArea = document.getElementById('chat-area');
let userMsgContainer = document.getElementById('user-message');
let isBotReady = true;
let isOnline = true;
let isOffline = false;





let timeout = (msg, time = 0)=> {
    return new Promise(done => {
        setTimeout(()=>done(msg), time * 1000)
    });
};
let rand = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

