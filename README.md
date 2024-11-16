# emergingtechnologies

Trigram Text Generator
Overview
This project shows how to create a trigram-based text generator using texts from Project Gutenberg. The model analyzes character sequences in the input text to generate a new string of text, evaluates the quality of the generated text, and exports the results. It explores the basics of trigrams, evaluates the generated text against English words.

Features
Build a trigram model from literary texts.
Generate a 10,000-character string using the trigram model.
Evaluate the generated text for valid English words.
Export the trigram model in JSON format.

Follow these steps to set up and run the project on your local machine:

Clone the Repository:
git clone https://github.com/FordeTimmy/emergingtechnologies/blob/main/trigrams.ipynb

Navigate to the project directory:
cd trigrams.ipynb

Install Dependencies:
pip install -r requirements.txt

Usage
Run the Notebook: Open the Jupyter notebook (trigrams.ipynb) and follow the tasks in order:

Task 1: Build the trigram model.
Task 2: Generate random text.
Task 3: Evaluate the generated text.
Task 4: Export the model to JSON.

View Results:
Generated text will be saved in generatedtext.txt.
Trigram counts will be saved in trigram.txt.
Trigram model in JSON format will be saved in trigrams.json.

Customize Inputs:
Replace file_paths in the code with paths to your own text files.
Adjust parameters such as the length of the generated text (length=10000).

Dependencies

The following Python libraries are required for this project:
re: For text cleaning using regular expressions.
random: For generating random text based on trigram weights.
collections.defaultdict: To count trigrams efficiently.
json: For exporting the trigram model to a JSON file.

References

Project Gutenberg – Source for input texts.
OpenAI ChatGPT – Help with generating project ideas and examples.
What is the Difference Between Bigram and Unigram Text Features Extraction - Stack Overflow – Explanation of unigram, bigram, and text feature extraction.
TF-IDF for Bigrams and Trigrams - GeeksforGeeks – Insight into working with bigrams and trigrams.
Python Textbook: Bigrams - Python for the Humanities – Explanation and examples of bigrams in Python.