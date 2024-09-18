
var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var frameNumber = 0; // Keep track of the animation frame
var opacity = 0; // Opacity for the text

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
    var lineHeight = 40;

    // Set the font and alignment
    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    // Split the message into smaller parts
    var messages = [
        "Hello mam it's 11 11 and time to make a wish...vaise kaisa lug raha hai 😂😂😂...",
        "bola toh tha ki nahi aaunga online...but jaane doo kya kar sakta hu aapke bina raha bhi toh nahi jata mujhse 😅...",
        "you know na i love you too much very much ultra much 💜....yrr aapse baat karne ki na ek excitement raheti hai hamesha...",
        "haa voh alag baat ki khud he ignore karta hu ... kyunki ji pyar me agar tadpaya nahi toh kya kiya 😅....",
        "pahele aapne bhi toh kafi tadpay hai ...aab mujhe mauka mila hai toh kyu na tadpau aapko ...",
        "vaise sorry jo aapko ignore kar raha hu ...chalo koi nah .. ignore karke bhi aapko he soch raha hu ...ya kahu toh sodh raha tha ...",
        "kyuki jub aapko yeh message milega tab tak toh mera present past ho chuka hoga ...",
        "but koi na i know my girlfriend is very smart...my cute little butterfly 🦋....my teddy 🧸🤗...",
        "pata hai mujhe na sacha vala pyar ho gaya hai 🤭🤭...mai apne dosto se bhi yeh chiz puchte raheta hu baar baar ki bhai mujhe pyar ho gaya hai kya...",
        "and answer bhi yes he aata hai ....huhhh...pata nahi yeh text me haste kaise hai but i smiled 😄...",
        "haa pata hai kal exam hai but kya karu dimag se aap jaate he nahi padhai ka khayal aata he nahi...",
        "kitna khudko roku ...kitna iss dil ko samjhau ki ruk jaa... thoda aab sabar kar voh apni he hai ...fir bhi nahi manta yeh dil kaheta hai kaha apni hai...",
        "apni hoti toh abhi saath hoti na ...jo akele baithe ho ..tumhare saath hoti na ...😂...fir dimag kaheta hai ...",
        "haa baat toh sahi hai ...voh saath hai bus pass nahi hai ...voh shayad abhi tujhse ruthi baithi hai ...",
        "koi nah ...yeh bhej k usko mana lena ...gussa kaisa bhi kyu na ho last me i love you bol usse apna  apna bana lena ....",
        "oye yrr bus...aab nahi ho raha.... message kar raha hu yahi khatam...you know na dil ki baat hamesha adhuri he rakhta hu ...",
        "aapko Dil k pass or baki ladkiyon se duri rakhta hu ...",
        "love you bacha ... love you soo much teddy 🐥🧸"
    ];

    // Determine which part of the message to show based on the frameNumber
    var index = Math.floor(frameNumber / 600); // Show each message part for 600 frames
    if (index < messages.length) {
        // Fade in
        if (frameNumber % 600 < 300) { // Fade in for 300 frames
            context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            context.fillText(messages[index], canvas.width / 2, canvas.height / 2);
            opacity += 0.01;
        }
        // Fade out
        if (frameNumber % 600 >= 300) { // Fade out for 300 frames
            context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            context.fillText(messages[index], canvas.width / 2, canvas.height / 2);
            opacity -= 0.01;
        }
    }
}

function draw() {
    // Clear the canvas for the new frame
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawText(); // Call the drawText function to display the text

    // Keep increasing the frameNumber to control the animation flow
    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

// Start the animation
window.requestAnimationFrame(draw);

// Handle resizing of the window
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
