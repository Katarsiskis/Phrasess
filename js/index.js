const words = [
    ["Amor caecus"],
    ["Si vis amari, ama"],
    ["Post coitum omne animal triste est"]
    ["Qui non nobiscum, adversus nos est"],
    ["Species decipit"],
    ["Vita somnium breve"],
    ["Qui desiderat pacem, praeparet bellum"],
    ["Homo homini lupus est"],
    ["Velle non discitur "],
    ["Vitae sal — amicitia"],
    ["Fortuna caeca es"],
    ["Audentes fortuna juvat"],
    ["Faber est suae quisque fortunae"]
];

document.getElementById("gen").addEventListener("click", function () {
    const gen = words[Math.floor(Math.random() * words.length)];
    const text = document.querySelector("#text");
    text.innerHTML = gen[0];
});

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById('text').innerHTML = "";
});

let colors = ['darkgray', 'black', 'grey', 'dimgray', 'silver','lightgrey','gainsboro','whitesmoke','snow',];
document.getElementById("gen").addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    let main = document.getElementById('main');
    main.style.backgroundColor = randomColor;
});