const benchmarkTests = [
    {
        signal: "« Nox, tu en penses quoi ? »",
        route: "NOX",
        decision: "INTERVENTION"
    },
    {
        signal: "« Nox parle mieux qu'avant. »",
        route: "ABOUT",
        decision: "CONTEXTUALISÉ"
    },
    {
        signal: "« Il fait un peu froid ici. »",
        route: "AMBIENT",
        decision: "SILENCE"
    }
];

let currentTest = 0;
let benchmarkTimer;

const signalElement = document.querySelector("#benchmark-signal");
const routeElement = document.querySelector("#benchmark-route");
const decisionElement = document.querySelector("#benchmark-decision");
const contentElement = document.querySelector("#benchmark-content");
const dots = document.querySelectorAll(".benchmark-dot");

function showBenchmark(index) {

    currentTest = index;

    contentElement.classList.add("changing");

    setTimeout(() => {

        const test = benchmarkTests[currentTest];

        signalElement.textContent = test.signal;
        routeElement.textContent = test.route;
        decisionElement.textContent = test.decision;

        decisionElement.classList.toggle(
            "silence",
            test.decision === "SILENCE"
        );

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle(
                "active",
                dotIndex === currentTest
            );
        });

        contentElement.classList.remove("changing");

    }, 400);
}

function nextBenchmark() {

    const nextTest =
        (currentTest + 1) % benchmarkTests.length;

    showBenchmark(nextTest);
}

function restartBenchmarkTimer() {

    clearInterval(benchmarkTimer);

    benchmarkTimer = setInterval(
        nextBenchmark,
        10000
    );
}

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showBenchmark(index);
        restartBenchmarkTimer();

    });

});

restartBenchmarkTimer();