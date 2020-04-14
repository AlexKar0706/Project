const quest = [{
    id: 1,
    question: "Choose your programming language",
    options: [{
        text: "C++",
        nextQuestId: 2
    }, {
        text: "Java",
        nextQuestId: 2
    }, {
        text: "C",
        setState: { approvedViies: true },
        nextQuestId: 2
    }, {
        text: "Javascript",
        nextQuestId: 2
    }, {
        text: "Python",
        nextQuestId: 2
    }, {
        text: "HTML",
        setState: { idiot: true },
        nextQuestId: 4
    }]
}, {
    id: 2,
    question: "Choose your compiler",
    options: [{
        text: "Visual Studio",
        setState: { approvedLepikson: true },
        nextQuestId: 3
    },{
        text: "Sublime text",
        nextQuestId: 3
    },{
        text: "Geany",
        setState: { idiot: true },
        nextQuestId: 4
    },{
        text: "Atom",
        nextQuestId: 3
    },]
}, {
    id: 3,
    question: "Choose your hero",
    options: [{
        text: "Vladimer Viies",
        requiredState: (currentState) => currentState.approvedViies,
        setState: { hero: true },
        nextQuestId: 4
    }, {
        text: "Viktor Lepikson",
        requiredState: (currentState) => currentState.approvedLepikson,
        setState: { hero: true },
        nextQuestId: 4
    }, {
        text: "Viktor Kuues",
        requiredState: (currentState) => currentState.approvedViies && currentState.approvedLepikson,
        setState: { superHero: true },
        nextQuestId: 4
    }, {
        text: "Mihail Seitsmes",
        nextQuestId: 4
    }, {
        text: "Eduard Kaheksas",
        nextQuestId: 4
    }]
}, {
    id: 4,
    question: "Are you idiot?",
    options: [{
        text: "No",
        requiredState: (currentState) => !currentState.idiot && (currentState.approvedLepikson || currentState.approvedViies),
        setState: { idiot: false },
        nextQuestId: 5
    }, {
        text: "Yes",
        setState: { idiot: true },
        nextQuestId: 5
    }]
}, {
    id: 5,
    question: "Do you want to get grade 5 for Tarkvara Project?",
    options: [{
        text: "Viktor Kuues will guide me",
        requiredState: (currentState) => currentState.superHero && !(currentState.idiot),
        setState: { grade: 5 },
        nextQuestId: 6
    }, {
        text: "Ofcourse",
        requiredState: (currentState) => (currentState.hero || currentState.superHero) && !(currentState.idiot),
        setState: { grade: 4 },
        nextQuestId: 6
    }, {
        text: "Maybe",
        requiredState: (currentState) => !(currentState.idiot) && (currentState.approvedLepikson || currentState.approvedViies),
        setState: { grade: 3 },
        nextQuestId: 6
    }, {
        text: "No",
        requiredState: (currentState) => !(currentState.idiot),
        setState: { grade: 2 },
        nextQuestId: 6
    }, {
        text: "I am idiot!",
        requiredState: (currentState) => currentState.idiot,
        setState: { grade: "idiot" },
        nextQuestId: 6
    }]
}];