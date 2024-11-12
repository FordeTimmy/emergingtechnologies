// Dictionary to make responses more conversational by swapping pronouns taken from notes
const reflections = {
    "I": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am"
};

// Function to reflect pronouns taken from notes
function reflect(text) {
    return text.toLowerCase().split(" ").map(word => reflections[word] || word).join(" ");
}

// Dictionary of responses taken from notes
const responses = {
    "hello|hi|hey": [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?"
    ],
    "you remind me of (.*)": [
        "Why do you think I remind you of {0}?",
        "What makes you think of {0} when talking to me?",
        "Is it a good feeling to be reminded of {0}?"
    ],
    "(.*) mother|father|family|parent(.*)": [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    "(.*) I need (.*)": [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?"
    ],
    "(.*) I am (.*)": [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    "(.*) I feel (.*)": [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
    ],
    "(.*) (sorry|apologize)(.*)": [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way."
    ],
    "bye|goodbye|exit": [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I’m here if you need to talk again."
    ],
    "(.*)": [
        "Can you tell me more?",
        "Why do you say that?",
        "How does that make you feel?",
        "What do you mean by that?",
        "Interesting... go on."
    ]
};

// Function to process user input and return a response taken from notes
function respond(userInput) {
    for (const pattern in responses) {
        const regex = new RegExp(pattern, "i");
        const match = userInput.match(regex);

        if (match) {
            const responseOptions = responses[pattern];
            let response = responseOptions[Math.floor(Math.random() * responseOptions.length)];

            // Reflect any captured groups to make the response more natural
            const reflectedGroups = match.slice(1).map(reflect);
            reflectedGroups.forEach((group, index) => {
                response = response.replace(`{${index}}`, group);
            });

            return response;
        }
    }
    //default response
    return "I'm not sure I understand. Can you elaborate?";
}

// Handle user input 
function processInput() {
    const userInput = document.getElementById("user-input").value;
    const chatHistory = document.getElementById("chat-history");

    if (userInput.trim()) {
        // Display the user's input
        chatHistory.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        document.getElementById("user-input").value = ""; // Clear the input field

        // Add typing indicator
        chatHistory.innerHTML += `<p id="typing-indicator"><em>ELIZA is typing...</em></p>`;
        chatHistory.scrollTop = chatHistory.scrollHeight; 

        // add delay for ELIZA's response
        setTimeout(() => {
            // Remove typing indicator
            document.getElementById("typing-indicator").remove();

           //Display ELIZA's response
            const response = respond(userInput);
            chatHistory.innerHTML += `<p><strong>ELIZA:</strong> ${response}</p>`;

            
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }, 1000); // 1-second delay for typing effect
    }
}

