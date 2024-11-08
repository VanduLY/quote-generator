const quotes = [
    "The best way to predict the future is to create it.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Whether you think you can or you think you can’t, you’re right.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Do something today that your future self will thank you for."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}
