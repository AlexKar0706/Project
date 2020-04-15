$(document).ready(() => {
    const $content = $('#content');
    const $name = $('#name');
    const $startButton = $('#start');
    const divCss = {
        width: windowWidth,
        height: windowHeight,
        background: "black",
        "border-radius": "5%"
    };

    /*setTimeout (() => {
        $name.fadeIn("slow", () => {
            $startButton.fadeIn("slow")
        });
    }, 1000)

    $startButton.on('click', () => {
        $name.fadeOut("slow");
        $startButton.fadeOut("slow", () => {
            $name.remove();
            $startButton.remove();
            const customDiv = $("<div></div>").attr('id','customDiv').css(divCss);
            $content.wrap(customDiv);
            $content.hide(1000);
            $content.animate({width: "show"}, 1000, createMainMenu);
        });
    })*/
    $name.remove();
    $startButton.remove();
    const customDiv = $("<div></div>").attr('id','customDiv').css(divCss);
    $content.wrap(customDiv);
    createMainMenu();
});

function createMainMenu(fromApp) {
    const $content = $('#content');
    if(!fromApp) {
    $('#customDiv').css({height: `${windowHeight + 30}`, "border-radius": "0% 0% 5% 5%"});
    $content.css({"background-image": 'url("GreenBackground.jpg")', "background-color": "unset"});
    if ($('#topPanel').length == 0) {
    const topPanel = $('<div></div>').attr('id', 'topPanel');
    $content.before(topPanel);
    const topPanelText = $('<p></p>').attr('id', 'topPanelText').text('Tele 2');
    topPanel.append(topPanelText);
    }
    const appBlock = $('<div></div>').attr('id', 'appBlock').css({width: windowWidth, height: windowHeight});
    $content.append(appBlock);
    }
    const $appBlock = $('#appBlock');
    createApp('Snake');
    createApp('Message');
    const $message = $('#Message');
    $message.on('click', () => {
        $appBlock.children().empty();
        $message.css({
            "overflow-y": "hidden",
            "background": "white",
            "opacity": "0.5"
        });
        const $messegeTopBlock = $("<div></div>").attr("id", "messegeTopBlock");
        $message.append($messegeTopBlock);
        const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
            "vertical-align": "super",
            "padding-left": "1.5px",
            "font-size": "5px",
            "cursor": "pointer"
        });
        $messegeTopBlock.append($arrow);
        const $text = $('<h1></h1>').attr('id', 'messageText').css({"margin-top": "0",
        "padding-top": "1px",
        "vertical-align": "super",
        "font-size": "5px",
        "padding-left": "1.5px",
        "display": "inline-block"}).text("Messages");
        $messegeTopBlock.append($text);
        let senderName = 'Leha';
        const $block = $('<div></div>').attr({
            'class': 'senderBlock',
            'id': senderName
        });
        $message.append($block);
        const $sender = $('<h3></h3>').attr('class', 'sender').text(senderName).css({"font-size": "5px", "margin": "1px 0 0.5px 0"});
        const $unreadedMesseges = $('<p></p>').attr('class', 'unreadedMesseges')
        const $senderText = $('<p></p>').attr('class', 'senderText').text('...').css({"font-size": "5px", "margin": "0 0 0.5px 0"});
        $block.append($sender);
        $block.append($unreadedMesseges);
        $block.append($senderText);
        $(function () {
            $message.animate({
                width: windowWidth,
                height: windowHeight,
                opacity: "1"
            }, {
                duration: 200,
                progress: function(animation, progress, msRemaining) {
                    if($message.width() >= 300) {
                        $appBlock.children('div:not(#Message)').remove();
                        $message.css({
                            'margin-top': '0',
                            'border-radius': '5%'
                        });
                        $message.unwrap('#appBlock');
                    }
                },
                complete: function() {
                    $content.css({"background-image": "unset", "background-color": "white"});
                    $message.children().unwrap($message);
                    messageWindow(true);
                }
            })
            $('.sender').animate({
                "font-size": "1.17em",
                "margin": "10px 0 5px 0"
            }, 200)
            $('.senderText').animate({
                "font-size": "1em",
                "margin": "0 0 5px 0"
            }, 200)
            $('.fa-arrow-left').animate({
                "padding-left": "15px",
                "font-size": "1em",
            }, 200)
            $('#messageText').animate({
                "padding-top": "10px",
                "font-size": "2em",
                "padding-left": "15px",
            }, 200, function () {$(this).css("vertical-align", "unset")});
        });
    });
    createApp('Options');
    createApp('Calculator');
}

function messageWindow (fromLobby) {
    game();
    const $content = $('#content');
    if (!fromLobby) {
    $content.css({"background-image": "unset", "background-color": "white"});
    const $messegeTopBlock = $("<div></div>").attr("id", "messegeTopBlock");
    $content.append($messegeTopBlock);
    const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
        "vertical-align": "super",
        "padding-left": "15px",
        "cursor": "pointer"
    });
    $messegeTopBlock.append($arrow);
    const $text = $('<h1></h1>').attr('id', 'messageText').css({"margin-top": 0,
    "padding-top": "10px",
    "padding-left": "15px",
    "display": "inline-block"}).text("Messages");
    $messegeTopBlock.append($text);
    createSender('Leha');
    }
    $('.fa-arrow-left').on("click", () => {
        const appBlock = $('<div></div>').attr('id', 'appBlock').css({width: windowWidth, height: windowHeight});
        $content.children().wrapAll(appBlock);
        const app = $('<div></div>').attr({class: "app", id: "MessageS"}).css({
            width: windowWidth,
            height: windowHeight,
            'margin-top': '0',
            'border-radius': '5%',
            "overflow-y": "hidden",
            "background": "white",
            "position": 'absolute',
            'z-index': '10'
        })
        $('#appBlock').children().wrapAll(app);
        $content.css({"background-image": 'url("GreenBackground.jpg")', "background-color": "unset"});
        const $message = $('#MessageS');
        createApp('Snake');
        createApp('Message');
        createApp('Options');
        createApp('Calculator');
        $(function() {
            $message.animate({
                width: '70px',
                height: '50px',
                'margin-top': '40px',
                opacity: '0'
            }, {
                duration: 200,
                complete: function() {
                    $message.remove();
                    createMainMenu(true);
                }
            })
        })
    });
    let stateLastElement = state.level1.length-1;
    if(state.level1[stateLastElement].playerAnswer) {
        $('#Leha').children('.senderText').css('display', 'block').text(state.level1[stateLastElement].playerAnswer);
    } else {
        if (state.level1[stateLastElement].sender) {
            let senderArrLastElement = state.level1[stateLastElement].sender.length-1
            $('#Leha').children('.senderText').css('display', 'block').text(state.level1[stateLastElement].sender[senderArrLastElement]);
        } else  $('#Leha').children('.senderText').css('display', 'none');
    }
    var unreadedMessegesTimer = setInterval(() => {
        let len = 0;
        for(let i = 0; i<state.level1.length; i++) len += state.level1[i].sender.length;
        if (len > readedMesseges) $('#Leha').children('.unreadedMesseges').css('display', 'block').text(len-readedMesseges);
        else $('#Leha').children('.unreadedMesseges').css('display', 'none');
        let stateLastElement = state.level1.length-1;
        if(state.level1[stateLastElement].playerAnswer) {
            $('#Leha').children('.senderText').css('display', 'block').text(state.level1[stateLastElement].playerAnswer);
        } else {
            if (state.level1[stateLastElement].sender) {
                let senderArrLastElement = state.level1[stateLastElement].sender.length-1
                $('#Leha').children('.senderText').css('display', 'block').text(state.level1[stateLastElement].sender[senderArrLastElement]);
            } else  $('#Leha').children('.senderText').css('display', 'none');
        }
    }, 500)
    $content.children("div").on('click', e => {
        clearInterval(unreadedMessegesTimer);
        if (e.currentTarget.id === "messegeTopBlock") return;
        const senderId = e.currentTarget.id;
        $content.children().remove();
        const $messegeTopBlock = $("<div></div>").attr("id", "messegeTopBlock");
        $content.append($messegeTopBlock);
        const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
            "vertical-align": "super",
            "padding-left": "15px",
            "cursor": "pointer"
        });
        $arrow.on("click", () => {
            $content.children().remove();
            messageWindow();
        });
        $messegeTopBlock.append($arrow);
        const $text = $('<h1></h1>').attr('id', 'messageText').css({"margin-top": 0,
        "padding-top": "10px",
        "padding-left": "15px",
        "display": "inline-block"}).text(senderId);
        $messegeTopBlock.append($text);
        const $messegeMainBlock = $('<div></div>').attr('id', 'messegeMainBlock').css({"overflow-y": "auto",
        "height": `${windowHeight-$messegeTopBlock.height()-200}px`});
        $content.append($messegeMainBlock);
        const $messegeBottomBlock = $('<div></div>').attr('id', 'messegeBottomBlock').css({
            'height': `${windowHeight-$messegeTopBlock.height()-$messegeMainBlock.height()}px`,
            'border-top': '1px solid grey'
        });
        $content.append($messegeBottomBlock);
        const tempState = state.level1;
        readedMesseges = 0;
        tempState.forEach((obj, index) => {
            if(obj) {
                obj.sender.forEach(str => {
                    createSenderMesseges(str);
                    readedMesseges += 1;
                });
                if(obj.playerAnswer) createSenderMesseges(obj.playerAnswer, false, obj.id);
                else {
                    if (obj.answers) for(let i = 0; i<obj.answers.length; i++) 
                        createAnswer(obj.answers[i], index, obj.nextQuestId[i], 'level1');
                    
                }
            }
        });
        var objDiv = document.getElementById('messegeMainBlock');
        objDiv.scrollTop = objDiv.scrollHeight;
        let i = state.level1.length-1;
        var timer = setInterval(() => {
            if(state.level1[i].sender[0]) {
                if (i==0) {
                    for (let j = 0; j<state.level1[i].sender.length; j++) {
                        if (!$('.messegesBlock')[j]) {
                            createSenderMesseges(state.level1[i].sender[j]);
                            readedMesseges += 1;
                            objDiv.scrollTop = objDiv.scrollHeight;
                        }
                    }
                } else {
                    for (let j = 0; j<state.level1[i].sender.length; j++) {
                        if (!$(`.notSender[id=${state.level1[i-1].id}]~.messegesBlock`)[j]) {
                            createSenderMesseges(state.level1[i].sender[j]);
                            readedMesseges += 1
                            objDiv.scrollTop = objDiv.scrollHeight;
                        }
                    }
                }
                let gameObjSenderArr = gameObject.find(obj => {
                    if(obj.id == state.level1[i].id) return obj;
                });
                if(compare(gameObjSenderArr.senderArr, state.level1[i].sender)) {
                    if (state.level1[i].playerAnswer && state.level1[i].answers.length == 0) {
                        console.log('Game over');
                        clearInterval(timer);
                    }
                    if(state.level1[i].playerAnswer) {
                        if(!$(`.notSender[id=${state.level1[i].id}]`).length) {
                            createSenderMesseges(state.level1[i].playerAnswer, false, state.level1[i].id);
                            objDiv.scrollTop = objDiv.scrollHeight;
                            i++;
                        }
                    }
                    else {
                        if($('.answerBlock').length < 1) {
                                if (state.level1[i].answers.length > 0) for(let k = 0; k<state.level1[i].answers.length; k++) 
                                    createAnswer(state.level1[i].answers[k], i, state.level1[i].nextQuestId[k], 'level1');
                        }
                    }
                }
            }
        }, 250);
        $('.fa-arrow-left').on('click', () => clearInterval(timer));
    });
};


function compare(arr1, arr2) {
    let isItEqual = true;
    for (let i = 0; i<arr1.length; i++) {
        if (arr1[i] !== arr2[i]) { 
            isItEqual = false;
            break
        }
    }
    if (isItEqual) return true;
    else return false;
}

const gameObject = [{//Start Game
    id: 0,
    senderArr: ['Hei', 'Someone is here?', 'Help me', 'Plz', 'I dnt know', 'Where i am'],
    delayArr: [],
    answersArr: ['Who are you?', 'Describe what you see'],
    nextQuestId: [1, 2],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Who are you?
    id: 1,
    senderArr: ['Halp! I dont remember', 'Please help', 'Im scared'],
    delayArr: [],
    answersArr: ['Describe what you see'],
    nextQuestId: [2],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Describe what you see
    id: 2,
    senderArr: ['So dark', 'I cannot see', 'Wait', 'Here is window', 'I think itss night', 'I see table', 'Cupboard', 'Door...'],
    delayArr: [],
    answersArr: ['Search the table', 'Search the cupboard', 'Open the door'],
    nextQuestId: [3, 5, 4],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the table
    id: 3,
    senderArr: ['I see something', 'Its a medical record', 'Wait', 'Its mine', 'Why?'],
    delayArr: [],
    answersArr: ['Search the cupboard', 'Open the door'],
    nextQuestId: [5, 4],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Open the door
    id: 4,
    senderArr: ['OK, ill try', 'I guess, its hospital', 'Its all white', 'But i cannot see anyone',
                'Its empty', 'I try to find exit', 'Right or left?'],
    delayArr: [10000, 1000, 1000, 1000, 1000, 1000, 1000],
    answersArr: ['Right', 'Left'],
    nextQuestId: [98, 99],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the cupboard
    id: 5,
    senderArr: ['Oh', 'I see', 'Here is mop'],
    delayArr: [],
    answersArr: ['Take it', 'Open the door'],
    nextQuestId: [6, 4],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take it
    id: 6,
    senderArr: ['Ill try open the door', 'I guess, its hospital', 'Its all white', 'But i cannot see anyone',
                'Its empty', 'I try to find exit', 'Right or left?'],
    delayArr: [],
    answersArr: ['Right', 'Left'],
    nextQuestId: [98, 97],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
},{//Use the mop
    id: 7,
    senderArr: ['Ill try', 'Wow', 'It worked', 'I guess shes out',
                'I go further', 'Hei', 'Are you still here'],
    delayArr: [1000, 1000, 1000, 1000, 10000, 1000, 1000],
    answersArr: ['Yes'],
    nextQuestId: [8],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Yes
    id: 8,
    senderArr: ['I found kitchen'],
    delayArr: [],
    answersArr: ['What you see?', 'Don’t waste time, go further'],
    nextQuestId: [9, 96],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//What you see?
    id: 9,
    senderArr: ['I see table', 'Fridge', 'I see knives', 'A lot'],
    delayArr: [],
    answersArr: ['Take the knife', 'Search the fridge', 'Search the table'],
    nextQuestId: [95, 11, 10],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the table
    id: 10,
    senderArr: ['Its empty'],
    delayArr: [],
    answersArr: ['Take the knife', 'Search the fridge'],
    nextQuestId: [95, 11],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the fridge
    id: 11,
    senderArr: ['Well', 'I see', 'Eggs', 'Milk', 'Meat', 'Lemons', 'Damn i want to eat'],
    delayArr: [],
    answersArr: ['Drink milk', 'Take meat', 'Go further'],
    nextQuestId: [12, 13, 96],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Drink milk
    id: 12,
    senderArr: ['Thanks', 'Yeak', 'Its bad', 'I think its expired'],
    delayArr: [],
    answersArr: ['Take meat'],
    nextQuestId: [13],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take meat
    id: 13,
    senderArr: ['Ok, but why?', 'Fine', 'i ll take it', 'Oh', 'I see the door', 'I think its exit', 'Its opened!',
                'Wait', 'I hear some noize', 'Fuuuck', 'Dogs'],
    delayArr: [10000],
    answersArr: ['Use meat', 'Run'],
    nextQuestId: [14, 103],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Use meat
    id: 14,
    senderArr: ['Oh', 'Ok', 'I throw it ', 'Dogs are distracted', 'Oh, they ran away', 'I see the forest'],
    delayArr: [],
    answersArr: ['Go back', 'Run into forest'],
    requiredId: function () {
        for (let i = 0; i<state.level1.length; i++) 
            if (state.level1[i].id == 12) return 106;
        return 15;
    }, 
    nextQuestId: [105],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Run into forest
    id: 15,
    senderArr: ['Ok', 'Shit', 'I see lights', 'They coming for me', 'Oh', 'I see the road', 'I hear cars',
                'I hope', 'They help me', 'I catched the car', 'Im safe now', 'Thank you'],
    delayArr: [10000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 10000],
    answersArr: [], 
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take the knife
    id: 95,
    senderArr: ['Ok', 'OK, i see the exit', 'Wait...', 'I hear some noize', 'Fuuuck', 'Dogs'],
    delayArr: [1000, 10000, 1000, 1000, 1000, 1000],
    answersArr: ['Use the knife', 'Run'],
    nextQuestId: [104, 103],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Don’t waste time, go further
    id: 96,
    senderArr: ['Ok', 'Oh', 'I see the door', 'Its opened!', 'Wait...', 'I hear some noize', 'Fuuuck', 'Dogs'],
    delayArr: [],
    answersArr: ['Use the mop', 'run'],
    nextQuestId: [102, 103],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Left with the mop
    id: 97,
    senderArr: ['Oh i see door', 'Ill check it', 'Wow', 'Its open', 'Oh fuck', 'DOGS', 'Ill try use the mop',
                'Fuck', 'Too many', 'I cant'],
    delayArr: [],
    answersArr: ['Run'],
    nextQuestId: [100],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Right
    id: 98,
    senderArr: ['Oh i see someone', 'It s nurse', 'Oh fuck', 'She wants to grab me', 'She has something in her arms'],
    delayArr: [],
    requiredState: function () {
                            for (let i = 0; i<state.level1.length; i++) 
                                if (state.level1[i].id == 6) return 'Use the mop';
                            return;
                        }, 
    answersArr: ['Run'],
    nextQuestId: [101, 7],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Left
    id: 99,
    senderArr: ['Oh i see door', 'Ill check it', 'Wow', 'Its open', 'Oh fuck', 'DOGS'],
    delayArr: [],
    answersArr: ['Run'],
    nextQuestId: [100],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 100,
    senderArr: ['Sht', 'damn', 'ffck', 'Aaaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 101,
    senderArr: ['Ill try', 'Oh fuck', 'mozherfucker', 'I tripped over the chair', 'My leg', 'Hurts', 'Aaaaaaaaaaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 102,
    senderArr: ['I lost it', 'Fuck', 'Shit'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 103,
    senderArr: ['They comming', 'AaAAAAA', 'It bite me', 'It hurts', 'They bite me agai', 'AAAAaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Use the knife
    id: 104,
    senderArr: ['Yey, i got one ', 'I try to kill another', 'Fuck', 'Shit', 'Too many dogs', 'I cant', 'aaaaaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Go back
    id: 105,
    senderArr: ['SHIT', 'Nurse is alive', 'She has a mop', 'Fuck'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Run into forest
    id: 106,
    senderArr: ['Ok', 'Shit', 'I see lights', 'They coming for me', 'Oh', 'I see the road', 'Fuck',
                'My stomac hurts', 'So bad', 'Its milk', 'I cant', 'Run'],
    delayArr: [10000],
    answersArr: [], 
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}];

let state = {
    level1: []
};

let readedMesseges = 0;

function game () {
    if (!state.level1[0]) {
        console.log('Game Started');
        gameObject[0].func('level1');
    }
}

function createApp (appName) {
    if($(`#${appName}`).length) return;
    const $appBlock = $('#appBlock');
    const app = $('<div></div>').attr({class: 'app', id: appName});
    const appIconWrap = $("<p></p>").css("text-align", "center");
    const appIcon = $('<img>').attr('src', 'message.jpg');
    const appText = $('<p></p>').text(appName); 
    $appBlock.append(app);
    app.append(appIcon, appText);
    appIcon.wrap(appIconWrap);
}

function createSender (senderName) {
    const $content = $('#content');
    const $block = $('<div></div>').attr({
        'class': 'senderBlock',
        'id': senderName
    });
    $content.append($block);
    const $sender = $('<h3></h3>').attr('class', 'sender').text(senderName);
    const $unreadedMesseges = $('<p></p>').attr('class', 'unreadedMesseges')
    const $senderText = $('<p></p>').attr('class', 'senderText').text('...');
    $block.append($sender);
    $block.append($unreadedMesseges);
    $block.append($senderText);
}

function createSenderMesseges (string, isItSender, answerId) {
    if(isItSender === undefined) isItSender = true;
    const $messegeMainBlock = $('#messegeMainBlock');
    let messageWidth = Math.ceil((string.length + 10)*1.2);
    if (messageWidth > 57) messageWidth = 57;
    if (isItSender) {
        const $messegesBlock = $("<div></div>").attr("class", "messegesBlock").css({
            "width": `${messageWidth}%`,
            "margin": "10px auto 0 30px",
            "background": "lightgrey",
            "border-radius": "20px",
            "padding": "1px"
        });
        $messegeMainBlock.append($messegesBlock);
        const $messegeText = $("<p></p>").text(string).css({
            "color": "black",
            "margin-left": "10px",
            "margin-right": "10px"
        });
        $messegesBlock.append($messegeText);
    } else {
        const $messegesBlock = $("<div></div>").attr({
            class: "messegesBlock notSender",
            id: answerId
        }).css({
            "width": `${messageWidth}%`,
            "margin": "10px 30px 0 auto",
            "background": "darkseagreen",
            "border-radius": "20px",
            "padding": "1px"
        });
        $messegeMainBlock.append($messegesBlock);
        const $messegeText = $("<p></p>").text(string).css({
            "color": "darkslategray",
            "margin-left": "10px",
            "margin-right": "10px"
        });
        $messegesBlock.append($messegeText);
    }
}

function createAnswer (string, index, nextQuestId, prop) {
    const $messegeBottomBlock = $('#messegeBottomBlock');
    const $answerBlock = $('<div></div>').attr('class', "answerBlock").css({
        'width': `${windowWidth-20}px`,
        'margin': '0 auto',
        'background': 'grey'
    });
    $answerBlock.on('click', () => {
        state[prop][index].playerAnswer = string;
        gameObject.map(obj => {
            if (obj.id === nextQuestId) obj.func(prop);
        });
        $messegeBottomBlock.empty();
    });
    $messegeBottomBlock.append($answerBlock);
    const $answerText = $('<p></p>').attr('class', 'answerText').text(string).css('cursor', 'pointer');
    $answerBlock.append($answerText);
}

async function createTransition (id, senderArr, delayArr, answersArr , nextQuestId, prop) {
    let i = state[prop].length;
    state[prop][i] = {id: id, sender: [], answers: [], playerAnswer: '', nextQuestId: []};
    await sleep(1000);
    for (let j = 0; j<senderArr.length; j++) {
        state[prop][i].sender[j] = senderArr[j];
        if (!delayArr[j]) delayArr[j] = 1000;
        await sleep(delayArr[j]);
        if (!senderArr[j+1]) break;
    }
    const specialAnswer = gameObject.find(obj => {
        if(obj.id == id && obj.requiredState) return obj; 
    });
    if (specialAnswer) answersArr.push(specialAnswer.requiredState());
    state[prop][i].answers = answersArr;
    const specialId = gameObject.find(obj => {
        if(obj.id == id && obj.requiredId) return obj; 
    });
    if (specialId) nextQuestId.push(specialId.requiredId());
    state[prop][i].nextQuestId = nextQuestId;
    if (id >= 100) state[prop][i].playerAnswer = 'Game over';
    else if (id == 15) state[prop][i].playerAnswer = 'Victory'
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    });
}
