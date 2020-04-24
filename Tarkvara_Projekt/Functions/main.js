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
    const $calculator = $('#Calculator');
    $calculator.on('click', () => {
        $whiteBlock = $('<div></div>').attr('class', 'white-block')
        $appBlock.append($whiteBlock);
        $whiteBlock.animate({
            'margin-top': '0',
            width: windowWidth,
            height: windowHeight
        }, 200, calculatorWindow);
    });
}

function calculatorWindow () {
    var calcNum = '';
    var numArr = [''];
    var i = 0;
    var Num;
    function createButtonDesign (str, className) {
        const $button = $('<button></button>').css({width: "unset"}).text(str);
        $button.attr('class', `grid-item ${className}`);
        return $button;
    }
    function createButton (str, className) {
        const $button = createButtonDesign(str, className);
        $button.on('click', e => numArr[i] += e.currentTarget.innerText);
        $gridContent.append($button);
    }
    function createOperation (str, className) {
        const $button = createButtonDesign(str, className);
        $button.on('click', () => {
            if (numArr.length > 1 && !Num) return;
            else {
                if (!Num) {
                i++;
                numArr[i] = '';
                numArr[i] += str;
                } else {
                    numArr = [Num];
                    i=1;
                    numArr[i] = '';
                    numArr[i] += str;
                }
            }
        });
        $gridContent.append($button);
    }         
    const $content = $('#content');
    const $appBlock = $('#appBlock');
    $content.css({"background-image": "unset", "background-color": "white"});
    $appBlock.remove();
    $content.empty();
    const $arrow = $("<i></i>").attr("class", "fa fa-arrow-left").css({
        "padding-top": "15px",
        "padding-left": "15px",
        "cursor": "pointer"
    });
    $content.append($arrow);
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
    $numBlock = $('<div></div>').attr('class', 'num-content');
    $content.append($numBlock);
    $numLine = $('<p></p>').attr('class', 'num-line line1');
    $numBlock.append($numLine);
    $numLine = $('<p></p>').attr('class', 'num-line line2');
    $numBlock.append($numLine);
    $gridContent = $('<div></div>').attr('class', 'grid-content');
    $content.append($gridContent);
    let $button = $('<button></button>').css({width: "unset"}).text('C');
    $button.attr('class', 'grid-item item2');
    $button.on('click', () => {
        numArr = [''];
        i = 0
    });
    $gridContent.append($button);
    createOperation('/', 'item2');
    createOperation('*', 'item2');
    $button = createButtonDesign('<-', 'item2');
    $button.on('click', () => {
        numArr[i] = numArr[i].substring(0, numArr[i].length-1);
        if(numArr[i] == '' && i>0) {
            numArr.pop();
            i--;
        }
    });
    $gridContent.append($button);
    createButton('7', 'item1');
    createButton('8', 'item1');
    createButton('9', 'item1');
    createOperation('-', 'item2');
    createButton('4', 'item1');
    createButton('5', 'item1');
    createButton('6', 'item1');
    createOperation('+', 'item2');
    createButton('1', 'item1');
    createButton('2', 'item1');
    createButton('3', 'item1');
    $button = createButtonDesign('=', 'equal-button');
    $button.on('click', () => {
        calcNum = '';
        numArr.forEach(str => calcNum += str);
        calcNum = eval(calcNum).toString();
        i = 0;
        numArr = [''];
        numArr[i] = calcNum;
        $('.line1').text(calcNum);
        Num = '';
        $('.line2').text('');
        console.log(numArr);
    });
    $gridContent.append($button);
    $button = createButtonDesign('%', 'item1');
    $button.on('click', () => {
        if (numArr.length > 1 && !Num) return;
            else {
                if (!Num) {
                i++;
                numArr[i] = '';
                numArr[i] += '/100';
                } else {
                    numArr = [Num];
                    i=1;
                    numArr[i] = '';
                    numArr[i] += '/100';
                }
            }
    });
    $gridContent.append($button);
    createButton('0', 'item1');
    $button = createButtonDesign('.', 'item1');
    $button.on('click', () => {
        if(!numArr[i].includes('.')) numArr[i] += '.';
        else return;
    });
    $gridContent.append($button);
    $('.grid-item:not(.equal-button)').on('click', () => {
        calcNum = '';
        console.log(numArr);
        numArr.forEach(str => calcNum += str);
        $('.line1').text(calcNum);
        try {
            Num = eval(calcNum).toString();
            $('.line2').text(Num);
        } catch (err) {
            $('.line2').text('');
        }
    });
    $('.grid-item').on('mousedown', e => {
        $(e.currentTarget).addClass('pressedButton');
        $(e.currentTarget).on('mouseup mouseleave', e => $(e.currentTarget).removeClass('pressedButton'));
    });
    $progCalc = $('<button></button>').attr('class', 'progCalc').text('Switch to programmer calculator');
    $progCalc.on('click', () => {
        calcNum = '', numArr = [''], i = 0, Num = '0';
        $gridContent.empty();
        $('.line1').text('');
        $('.line2').text('');
        $progCalc.text('Switch to usual calculator');
        $progCalc.on('click', calculatorWindow);
        $gridContent.addClass('grid-prog');
        let currentMode = 4;
        let formatArr = [], negArr = [];
        let $progFormat, visualStr = '';
        function createProgButton (str, className) {
            const $button = createButtonDesign(str, className);
            $button.on('click', e => {
                if (formatArr.length === 0) numArr[i] += e.currentTarget.innerText;
                else {
                    if (formatArr[3].length < 8) numArr[i] += e.currentTarget.innerText;
                }
            });
            $gridContent.append($button);
        }
        function createProgOperation (str, className) {
            const $button = createButtonDesign(str, className);
            $button.on('click', () => {
                if (numArr.length === 2 && !Num) return;
                else {
                    if (!Num) {
                    i++;
                    numArr[i] = '';
                    numArr[i] += str;
                    } else {
                        numArr = [formatArr[currentMode-1]];
                        i=1;
                        numArr[i] = '';
                        numArr[i] += str;
                    }
                }
            });
            $gridContent.append($button);
        };
        function printData () {
            if (numArr.length < 2) {
                calcNum = '';
                console.log(numArr);
                numArr.forEach(str => calcNum += str);
                console.log(calcNum);
                if(calcNum === '' || calcNum === '0') formatArr = ['0','0','0','0'];
                else formatArr = convertNum(toBinary(calcNum, currentMode));
                $('.line1').text(calcNum);
                $('.line2').text('');
                $('.HEX').text('HEX: ' + formatArr[3]);
                $('.DEC').text('DEC: ' + formatArr[2]);
                $('.OCT').text('OCT: ' + formatArr[1]);
                $('.BIN').text('BIN: ' + formatArr[0]);
            } else {
                calcNum = '', visualStr = '', negArr = null;
                console.log(numArr);
                numArr.forEach(str => visualStr += str);
                for(let i = 0; i<numArr.length; i++) {
                    if(numArr[i].includes('*') || numArr[i].includes('/') || numArr[i].includes('%')) {
                        if(toDecimal(numArr[0], currentMode) >= 2147483648 && toDecimal(numArr[0], currentMode) < 4294967295) {
                            negArr = [];
                            negArr[0] = '-' + convertNum(toBinary((toDecimal('FFFFFFFF', 4) - toDecimal(numArr[0], currentMode)+1),3))[currentMode-1];
                            for (let j = 1; i<numArr.length; i++) negArr[j] = numArr[j];
                        }
                    }
                }
                if (negArr === null) calcNum = createExpression(numArr, currentMode);
                else calcNum = createExpression(negArr, currentMode);
                $('.line1').text(visualStr);
                try {
                    Num = eval(calcNum).toString();
                    if (Num > 4294967295) Num='1';
                    formatArr = convertNum(toBinary(Num, 3));
                    $('.line2').text(formatArr[currentMode-1]);
                } catch (err) {
                    formatArr = ['0','0','0','0'];
                    $('.line2').text('');
                }
                $('.HEX').text('HEX: ' + formatArr[3]);
                $('.DEC').text('DEC: ' + formatArr[2]);
                $('.OCT').text('OCT: ' + formatArr[1]);
                $('.BIN').text('BIN: ' + formatArr[0]);
            }
        }
        function ActivateButton (str) {
            $(str).off('click');
            $(str).on('click', e => {
                if (formatArr.length === 0) numArr[i] += e.currentTarget.innerText;
                else {
                    if (formatArr[3].length < 8) numArr[i] += e.currentTarget.innerText;
                }
            })
            $(str).removeClass('inactive');
            $(str).on('click', printData);
        };
        formatArr = ['0','0','0','0'];
        $progFormat = $('<p></p>').attr('class', 'prog-format HEX selected-format').text('HEX: 0');
        $progFormat.on('click', e => {
            $('.selected-format').removeClass('selected-format');
            $(e.currentTarget).addClass('selected-format');
            ActivateButton('.2, .3, .4, .5, .6, .7, .8, .9, .A, .B, .C, .D, .E, .F');
            if (formatArr[3] !== '0') numArr = [formatArr[3]];
            else numArr = [''];
            i=0
            calcNum = '';
            console.log(numArr);
            numArr.forEach(str => calcNum += str);
            $('.line1').text(calcNum);
            $('.line2').text('');
            currentMode = 4;
        });
        $numBlock.append($progFormat);
        $progFormat = $('<p></p>').attr('class', 'prog-format DEC').text('DEC: 0');
        $progFormat.on('click', e => {
            $('.selected-format').removeClass('selected-format');
            $(e.currentTarget).addClass('selected-format');
            $('.A, .B, .C, .D, .E, .F').addClass('inactive').off('click');
            ActivateButton('.2, .3, .4, .5, .6, .7, .8, .9');
            
            if (formatArr[2] !== '0') numArr = [formatArr[2]];
            else numArr = [''];
            i=0
            calcNum = '';
            console.log(numArr);
            numArr.forEach(str => calcNum += str);
            $('.line1').text(calcNum);
            $('.line2').text('');
            currentMode = 3;
        });
        $numBlock.append($progFormat);
        $progFormat = $('<p></p>').attr('class', 'prog-format OCT').text('OCT: 0');
        $progFormat.on('click', e => {
            $('.selected-format').removeClass('selected-format');
            $(e.currentTarget).addClass('selected-format');
            $('.8, .9, .A, .B, .C, .D, .E, .F').addClass('inactive').off('click');
            ActivateButton('.2, .3, .4, .5, .6, .7');
            if (formatArr[1] !== '0') numArr = [formatArr[1]];
            else numArr = [''];
            i=0
            calcNum = '';
            console.log(numArr);
            numArr.forEach(str => calcNum += str);
            $('.line1').text(calcNum);
            $('.line2').text('');
            currentMode = 2;
        });
        $numBlock.append($progFormat);
        $progFormat = $('<p></p>').attr('class', 'prog-format BIN').text('BIN: 0');
        $progFormat.on('click', e => {
            $('.selected-format').removeClass('selected-format');
            $(e.currentTarget).addClass('selected-format');
            $('.2, .3, .4, .5, .6, .7, .8, .9, .A, .B, .C, .D, .E, .F').addClass('inactive').off('click');
            if (formatArr[0] !== '0') numArr = [formatArr[0]];
            else numArr = [''];
            i=0
            calcNum = '';
            console.log(numArr);
            numArr.forEach(str => calcNum += str);
            $('.line1').text(calcNum);
            $('.line2').text('');
            currentMode = 1;
        });
        $numBlock.append($progFormat);
        $('.prog-format').on('mouseenter', e => {
            $(e.currentTarget).addClass('on-format');
            $(e.currentTarget).on('mouseleave', e => $(e.currentTarget).removeClass('on-format'));
        });
        $('.line2').addClass('prog-line');
        createButton('A', 'item1 A');
        createProgOperation('<<', 'item2');
        createProgOperation('>>', 'item2');
        $button = createButtonDesign('CE', 'item2');
        $button.on('click', () => {
            numArr = [''];
            i = 0
        });
        $gridContent.append($button);
        $button = createButtonDesign('<-', 'item2');
        $button.on('click', () => {
            var condition = (numArr.length === 2 && ((numArr[1].length == 2 || (numArr[1].includes('<<') || numArr[1].includes('>>'))) || (numArr[1].length === 3 && numArr[1].includes('>>>'))));
            if(condition) {
                numArr.pop();
                 i--;
            } else {
                numArr[i] = numArr[i].substring(0, numArr[i].length-1);
                if(numArr[i] == '' && i>0) {
                    numArr.pop();
                    i--;
                }
            }
        });
        $gridContent.append($button);
        createProgButton('B', 'item1 B');
        $button = createButtonDesign('', 'item2');
        $gridContent.append($button);
        createProgOperation('>>>', 'item2');
        createProgOperation('%', 'item2');
        createProgOperation('/', 'item2');
        createProgButton('C', 'item1 C');
        createProgButton('7', 'item1 7');
        createProgButton('8', 'item1 8');
        createProgButton('9', 'item1 9');
        createProgOperation('*', 'item2');
        createProgButton('D', 'item1 D');
        createProgButton('4', 'item1 4');
        createProgButton('5', 'item1 5');
        createProgButton('6', 'item1 6');
        createProgOperation('-', 'item2');
        createProgButton('E', 'item1 E');
        createProgButton('1', 'item1 1');
        createProgButton('2', 'item1 2');
        createProgButton('3', 'item1 3');
        createProgOperation('+', 'item2');
        createProgButton('F', 'item1 F');
        $button = createButtonDesign('+/-', 'item1');
        $button.on('click', () => {
            if(numArr.length === 1 && numArr[0].length > 0 && currentMode === 3) {
                if(!numArr[0].includes('-')) {
                    numArr[0] = '-' + numArr[0];
                } else if (numArr[0].includes('-')) {
                    numArr[0] = numArr[0].substring(1, numArr[0].length);
                }
            }
        });
        $gridContent.append($button);
        $button = createButtonDesign('0', 'item1 0');
        $button.on('click', e => {
            for (let i = 0; i<numArr.length; i++) {
                if (numArr[i].length === 0) return;
            }
            if (formatArr.length === 0) numArr[i] += e.currentTarget.innerText;
            else {
                if (formatArr[3].length < 8) numArr[i] += e.currentTarget.innerText;
            }
        });
        $gridContent.append($button);
        $button = createButtonDesign('=', 'item2 equal-button-prog');
        $button.on('click', () => {
            if (Num) {
                numArr = [formatArr[currentMode-1]];
                i = 0
            }
            else return;
        });
        $gridContent.append($button);
        $('.grid-item').on('click', printData);
    });
    $content.append($progCalc);
}

function createExpression (arr, currentMode) {
    let newStr = '', tempStr = '', isItNumber, isNextCharNumber, tempArr = [];
    for(let i =0; i<arr.length; i++) {
        for(let j = 0; j<arr[i].length; j++) {
            isItNumber = (arr[i].charCodeAt(j) > 47 && arr[i].charCodeAt(j) < 58) || (arr[i].charCodeAt(j) > 64 && arr[i].charCodeAt(j) < 71);
            isNextCharNumber = (arr[i].charCodeAt(j+1) > 47 && arr[i].charCodeAt(j+1) < 58) || (arr[i].charCodeAt(j+1) > 64 && arr[i].charCodeAt(j+1) < 71);
            if(!isItNumber) newStr += arr[i][j];
            else {
                tempStr += arr[i][j];
                if(!isNextCharNumber) newStr += toDecimal(tempStr, currentMode);
            }
        }
        tempArr[i] = newStr;
        newStr = '', tempStr = '';
    }
    return tempArr.join('');
}

function convertNum (num) {
    let numArr = [];
    num = num.toString();
    for(let i = 0; i<num.length; i++) {
        numArr[i] = num[i];
    }
    //vosmerichnaja
    let octModulo = numArr.length%3;
    let octArr = [];
    let str='';
    if(octModulo == 1) {
        str = '001';
        octArr[0] = str;
        numArr.shift();
    } else if (octModulo == 2) {
        str = '0';
        str += numArr.shift();
        str += numArr.shift();
        octArr[0] = str;
    }
    for (let k = 0; k<numArr.length/3; k++) {
        str = numArr[0+3*k] + numArr[1+3*k] + numArr[2+3*k];
        octArr[octArr.length] = str;
    }
    for (let i = 0; i<octArr.length; i++) {
        str = (octArr[i][0] * 2**2 +  octArr[i][1] * 2**1 + octArr[i][2] * 2**0).toString();
        octArr[i] = str;
    }
    //desjatirichnaja
    let decNum = 0;
    for(let i = 0; i<num.length; i++) {
        numArr[i] = num[i];
    }
    if (numArr.length === 32) {
        numArr = numArr.map(str => str === '1' ? '0' : '1');
        while (numArr) {
            if(numArr[0] === '0') numArr.shift();
            else break;
        }
        decNum = '-' + (Number(toDecimal(numArr.join(''), 1))+1)
    }else for (let i = num.length-1, j=0; i>=0; i--, j++) decNum += num[j] * 2 ** i;
    //Shesdnatsatirichnaja
    numArr = [];
    for(let i = 0; i<num.length; i++) {
        numArr[i] = num[i];
    }
    let hexModulo = numArr.length%4;
    let hexArr = [];
    str='';
    if(hexModulo == 1) {
        str = '0001';
        hexArr[0] = str;
        numArr.shift();
    } else if (hexModulo == 2) {
        str = '00';
        str += numArr.shift();
        str += numArr.shift();
        hexArr[0] = str;
    } else if (hexModulo == 3) {
        str = '0';
        str += numArr.shift();
        str += numArr.shift();
        str += numArr.shift();
        hexArr[0] = str;
    }
    for (let k = 0; k<numArr.length/4; k++) {
        str = numArr[0+4*k] + numArr[1+4*k] + numArr[2+4*k] + numArr[3+4*k];
        hexArr[hexArr.length] = str;
    }
    for (let i = 0; i<hexArr.length; i++) {
        str = (hexArr[i][0] * 2**3 +  hexArr[i][1] * 2**2 + hexArr[i][2] * 2**1 + hexArr[i][3] * 2**0);
        if (str < 10) str.toString();
        else {
            switch (str) {
                case 10:
                    str = 'A';
                    break;
                case 11:
                    str = 'B';
                    break;
                case 12:
                    str = 'C';
                    break;
                case 13:
                    str = 'D';
                    break;
                case 14:
                    str = 'E';
                    break;
                case 15:
                    str = 'F';
                    break;
            }
        }
        hexArr[i] = str;
    }
    return [num, octArr.join(''), decNum.toString(), hexArr.join('')];
}

function toBinary (num, currentMode) {
    var negStr;
    if(num[0] == '-') {
        negStr = num.substring(1, num.length);
        if(currentMode === 2) return toBinary(toDecimal('FFFFFFFF', 4) - toDecimal(negStr, currentMode)+1,3);
        else if (currentMode ===3) return toBinary(toDecimal('FFFFFFFF', 4) - toDecimal(negStr, currentMode)+1,3);
        else if(currentMode === 4) return toBinary(toDecimal('FFFFFFFF', 4) - toDecimal(negStr, currentMode),3);
    }
    //vosmerichnaja
    if (currentMode === 1) return num;
    else if (currentMode === 2) {
        var tempNum = num.toString(), octNum, tempArr = [], octModulo, octArr = [];
        for (let i = 0; i<tempNum.length; i++) {
            octNum = Number(tempNum[i]);
            while (octNum) {
                octModulo = octNum%2;
                if (octModulo) tempArr.unshift(1);
                else tempArr.unshift(0);
                octNum = Math.floor(octNum/2);
            }
            if (i>0) {
                if (tempArr.length == 2) tempArr.unshift(0);
                else if (tempArr.length == 1) {
                    tempArr.unshift(0);
                    tempArr.unshift(0);
                } else if (tempArr.length == 0) tempArr = ['0', '0', '0'];
            }
            octArr.push(tempArr.join(''));
            tempArr = [];
        }
        return octArr.join('');
    } else if (currentMode === 3) { //desjatirichnaja
        var tempNum = num, decModulo, decArr = []; 
        while (tempNum) {
            decModulo = tempNum%2;
            if (decModulo) decArr.unshift(1);
            else decArr.unshift(0);
            tempNum = Math.floor(tempNum/2);
        }
        return decArr.join('');
    } else if (currentMode === 4) {//shesdnatsjatirichnaja
        var tempNum = num.toString(), tempArr = [], hexNum, hexModulo, hexArr = [];
        for (let i = 0; i<tempNum.length; i++) {
            if (tempNum[i] < 10) hexNum = Number(tempNum[i]);
            else {
                switch (tempNum[i]) {
                    case 'A':
                        hexNum = 10;
                        break;
                    case 'B':
                        hexNum = 11;
                        break;
                    case 'C':
                        hexNum = 12;
                        break;
                    case 'D':
                        hexNum = 13;
                        break;
                    case 'E':
                        hexNum = 14;
                        break;
                    case 'F':
                        hexNum = 15;
                        break;
                }
            }
            while (hexNum) {
                hexModulo = hexNum%2;
                if (hexModulo) tempArr.unshift(1);
                else tempArr.unshift(0);
                hexNum = Math.floor(hexNum/2);
            }
            if (i>0) {
                if (tempArr.length == 3) tempArr.unshift(0);
                else if (tempArr.length == 2) {
                    tempArr.unshift(0);
                    tempArr.unshift(0);
                } else if (tempArr.length == 1) {
                    tempArr.unshift(0);
                    tempArr.unshift(0);
                    tempArr.unshift(0);
                }else if (tempArr.length == 0) tempArr = ['0', '0', '0', '0'];
            }
            hexArr.push(tempArr.join(''));
            tempArr = [];
        }
        return hexArr.join('');
    }
}

function toDecimal(num, currentMode) {
    if (currentMode === 1){//dvoichnaja
        let decNum = 0;
        for (let i = num.length-1, j=0; i>=0; i--, j++) decNum += num[j] * 2 ** i;
        return decNum.toString();
    } else if (currentMode === 2) {//vosmerichanja
        let decNum = 0;
        for (let i = num.length-1, j=0; i>=0; i--, j++) decNum += num[j] * 8 ** i;
        return decNum.toString();
    } else if (currentMode === 3) return num;
    else if (currentMode === 4) {//shesdnatsjatirichnaja
        let decNum = 0, tempNum;
        for (let i = num.length-1, j=0; i>=0; i--, j++) {
            if (!(num[j] < 10)) {
                switch (num[j]) {
                    case 'A':
                        tempNum = 10;
                        break;
                    case 'B':
                        tempNum = 11;
                        break;
                    case 'C':
                        tempNum = 12;
                        break;
                    case 'D':
                        tempNum = 13;
                        break;
                    case 'E':
                        tempNum = 14;
                        break;
                    case 'F':
                        tempNum = 15;
                        break;
                }
            } else tempNum = Number(num[j]);
            decNum += tempNum * 16 ** i;
        }
        return decNum.toString();
    }
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
                    if (state.level1[i].playerAnswer === 'Game over' || state.level1[i].playerAnswer === 'Victory') {
                        createAnswer('Start again?', 0,0, 'level1');
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
    delayArr: [30000],
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
    delayArr: [3000, 3000, 3000, 3000, 30000],
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
    delayArr: [30000],
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
    delayArr: [30000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: [], 
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take the knife
    id: 95,
    senderArr: ['Ok', 'OK, i see the exit', 'Wait...', 'I hear some noize', 'Fuuuck', 'Dogs'],
    delayArr: [3000, 30000],
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
    var appIcon;
    if (appName === 'Calculator') appIcon = $('<i></i>').attr('class', 'fa fa-calculator').css('font-size', '2.21em');
    else appIcon = $('<img>').attr('src', 'message.jpg');
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
        if (string === 'Start again?') {
            state = {};
            state[prop] = [];
            $('#content').children().remove();
            messageWindow();
        } else {
            state[prop][index].playerAnswer = string;
            gameObject.map(obj => {
                if (obj.id === nextQuestId) obj.func(prop);
            });
            $messegeBottomBlock.empty();
        }
    });
    $messegeBottomBlock.append($answerBlock);
    const $answerText = $('<p></p>').attr('class', 'answerText').text(string).css('cursor', 'pointer');
    $answerBlock.append($answerText);
}

async function createTransition (id, senderArr, delayArr, answersArr , nextQuestId, prop) {
    let i = state[prop].length;
    state[prop][i] = {id: id, sender: [], answers: [], playerAnswer: '', nextQuestId: []};
    await sleep(Math.round(Math.random()*2000)+3000);
    for (let j = 0; j<senderArr.length; j++) {
        state[prop][i].sender[j] = senderArr[j];
        if (!delayArr[j]) delayArr[j] = Math.round(Math.random()*2000)+3000;
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
