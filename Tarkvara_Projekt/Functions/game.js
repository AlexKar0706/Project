let $question = $('#question');
let $choices = $('#choices');
let state = {};

function startGame () {
    state = {};
    $question = $('#question');
    $choices = $('#choices');
    questImplementation(1);
}

function questImplementation (questId) {
    const questObject = quest.find(arr => arr.id === questId);
    $choices.empty();
    $question.empty();
    questObject.options.forEach(element => {
        if(allowedOptions(element)) {
            const buttonHTML = $("<button></button>").text(element.text);
            buttonHTML.on('click', () => selectOptions(element));
            $choices.append(buttonHTML);
        }
    });
    createQuestion(questObject.question);
}

function allowedOptions (option) {
    return option.requiredState == null || option.requiredState(state);
}

function createQuestion (text) {
    $question.append(text);
}

function selectOptions (option) {
    state = Object.assign(state, option.setState);
    console.log (state);
    if (option.nextQuestId !== 6) questImplementation(option.nextQuestId);
    else finishGame();
}

function finishGame () {
    $choices.empty();
    $question.empty();
    const buttonHTML = $("<button></button>").text('Start again');
    const secretButtonHTML = $("<button></button>").text("Turn on/off secret backgorund");
    secretButtonHTML.on('click', () => {
        if (!$('#content').hasClass('viies')) $('#content').addClass('viies')
        else $('#content').removeClass('viies')
    })
    buttonHTML.on('click', () => startGame());
    if (state.grade === 5) {
        createQuestion("Horow. Pjaterku tebe")
        $choices.append(secretButtonHTML);
    } else if (state.grade === 4) {
        createQuestion("4 tebe za Tarkvara project. Podumaj ewe raz");
    } else if (state.grade === 3) {
        createQuestion("Tebe tolko 3 za Tarkvara project. Nu a chego ti hotel? Dumaew, v skazku popal?");
    } else if (state.grade === 2) {
        createQuestion("Parawu tebe za Tarkvara project");
    } else if (state.grade === 'idiot') {
        createQuestion("V nature idiot");
    }
    $choices.append(buttonHTML);
}