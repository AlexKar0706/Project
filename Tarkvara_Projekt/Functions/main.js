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

    setTimeout (() => {
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
    })
});

function createMainMenu() {
    const $content = $('#content');
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
    function createApp (appName) {
        const app = $('<div></div>').attr({class: 'app', id: appName});
        const appIconWrap = $("<p></p>").css("text-align", "center");
        const appIcon = $('<img>').attr('src', 'message.jpg');
        const appText = $('<p></p>').text(appName); 
        appBlock.append(app);
        app.append(appIcon, appText);
        appIcon.wrap(appIconWrap);
    }
    createApp('Snake');
    createApp('Message');
    message();
    createApp('Options');
    createApp('Calculator');
    /*const questionHTML = $("<p></p>").attr('id', 'question');
    const choicesHTML = $("<div></div>").attr('id', 'choices');
    $content.append(questionHTML, choicesHTML);
    startGame();*/
}