const routingSamples = document.querySelectorAll(".routing-sample");
const routingBranches = document.querySelectorAll(".routing-branch");

const routingSignal = document.querySelector("#routing-signal");
const routingResult = document.querySelector("#routing-result");
const routingExplanation = document.querySelector("#routing-explanation");

const routingStates = {
    NOX: {
        result: "INTERVENTION",
        explanation: "La sollicitation est adressée directement à N.O.X."
    },

    ABOUT: {
        result: "CONTEXTE",
        explanation: "L'information concerne N.O.X. sans nécessiter automatiquement une réponse."
    },

    AMBIENT: {
        result: "SILENCE",
        explanation: "L'information peut enrichir le contexte ambiant sans déclencher d'intervention."
    }
};

routingSamples.forEach((button) => {

    button.addEventListener("click", () => {

        const route = button.dataset.route;
        const state = routingStates[route];

        routingSamples.forEach((sample) => {
            sample.classList.remove("active");
        });

        routingBranches.forEach((branch) => {
            branch.classList.remove("active");
        });

        button.classList.add("active");

        const activeBranch =
            document.querySelector(`[data-branch="${route}"]`);

        activeBranch.classList.add("active");

        routingSignal.textContent = button.textContent.trim();
        routingResult.textContent = state.result;
        routingExplanation.textContent = state.explanation;

    });

});

const memorySamples = document.querySelectorAll(".memory-sample");
const memoryLayers = document.querySelectorAll(".memory-layer");

const memoryInput = document.querySelector("#memory-input");
const memoryDestination = document.querySelector("#memory-destination");
const memoryEffect = document.querySelector("#memory-effect");
const memoryExplanation = document.querySelector("#memory-explanation");

const memoryStates = {
    WORK: {
        destination: "MÉMOIRE DE TRAVAIL",
        effect: "RÉFÉRENCE IMMÉDIATE",
        explanation:
            "Une information du contexte immédiat permet de résoudre une référence ou de comprendre l'échange en cours, sans nécessiter une conservation durable."
    },
    RELATION: {
        destination: "MÉMOIRE RELATIONNELLE",
        effect: "REPÈRE DURABLE",
        explanation:
            "Une préférence d'adressage peut devenir un repère durable réutilisable dans de futures interactions."
    },

    SESSION: {
        destination: "MÉMOIRE DE SESSION",
        effect: "CONTEXTE RÉCENT",
        explanation:
            "Une information ambiante peut rester disponible temporairement sans avoir déclenché de prise de parole."
    },

    LIBRARY: {
        destination: "BIBLIOTHÈQUE DOCUMENTAIRE",
        effect: "RÉCUPÉRATION CIBLÉE",
        explanation:
            "Une question sur le projet peut déclencher la récupération des documents pertinents plutôt que le chargement de toute l'archive."
    }
};

memorySamples.forEach((button) => {

    button.addEventListener("click", () => {

        const target = button.dataset.memoryTarget;
        const state = memoryStates[target];

        memorySamples.forEach((sample) => {
            sample.classList.remove("active");
        });

        memoryLayers.forEach((layer) => {
            layer.classList.remove("memory-active");
        });

        button.classList.add("active");

        const activeLayer =
            document.querySelector(`[data-memory="${target}"]`);

        activeLayer.classList.add("memory-active");

        memoryInput.textContent = button.textContent.trim();
        memoryDestination.textContent = state.destination;
        memoryEffect.textContent = state.effect;
        memoryExplanation.textContent = state.explanation;

    });

});