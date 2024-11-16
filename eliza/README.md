ELIZA Chatbot

Overview
The ELIZA Chatbot is a simple, therapist-style chatbot inspired by the original ELIZA program. It uses basic pattern matching and reflection techniques to simulate a human-like conversation. This project is built with HTML, CSS, and JavaScript, showcasing how interactive chatbots can be created for educational and experimental purposes.

Features
Reflects user inputs to create a conversational experience by swapping pronouns.
Provides multiple response variations for each input pattern to make interactions feel more natural.
Includes a "typing" indicator to simulate human-like responses.
Offers a responsive and visually appealing user interface with custom chat bubbles for the user and chatbot.

Installation
Clone the Repository: Clone the repository to your local machine:

git clone https://github.com/FordeTimmy/emergingtechnologies/tree/main/eliza
Navigate to the project directory:

cd eliza
Open in Browser: Open the index.html file in your browser to run the chatbot.

Usage
Start the Chat:

Open the chatbot in a browser.
Type a message in the input field and click the "Send" button or press Enter to begin the conversation.

Interact with ELIZA:
The chatbot will respond to your input based on pre-defined patterns and use reflection to personalize responses.

Example interaction:
User: "I feel sad."
ELIZA: "Why do you feel sad?"
End the Chat:

Type "bye" or "exit" to end the session, and ELIZA will respond with a farewell message.

Key Features in Code

Reflections
The chatbot uses a dictionary to reflect pronouns for more natural responses:


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

Responses
Responses are pre-defined using regular expressions to match input patterns:

const responses = {
    "hello|hi|hey": [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?"
    ],
    "(.*) I feel (.*)": [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
    ],
    "bye|goodbye|exit": [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I’m here if you need to talk again."
    ]
};

Styling
The chatbot interface uses CSS for a clean and responsive design:

Chat Bubbles: Styled for both user and chatbot messages.
Scrollbar: Custom scrollbar styling.
Responsive Layout: Optimized for different screen sizes.

Example:
.chat-bubble {
    max-width: 80%;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 15px;
    font-size: 14px;
    line-height: 1.4;
}


Here's an updated References section for your README.md file with the two new references included:

References
ELIZA - NJIT – Background on the original ELIZA chatbot and its design.
The History of ELIZA - Mental Floss – An overview of the history and significance of ELIZA.
MDN Web Docs – Reference for JavaScript, HTML, and CSS.
OpenAI ChatGPT – Inspiration for conversational modeling.

https://developer.mozilla.org/en-US/docs/Learn/CSS
https://www.mentalfloss.com/posts/eliza-chatbot-history
https://web.njit.edu/~ronkowit/eliza.html
