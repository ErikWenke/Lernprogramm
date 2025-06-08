#!/bin/bash

# WARN: don't do this !!!
post_question() {
  curl --user "erik@gmail.com:erik_1234" -X POST \
    -H "Content-Type: application/json" \
    -d "$1" https://idefix.informatik.htw-dresden.de:8888/api/quizzes -v
}

# send questions
post_question '{
  "title": "philo",
  "text": "Who said \"I think, therefore I am\"?",
  "options": ["Immanuel Kant", "René Descartes", "Aristotle", "Socrates"],
  "correctAnswers": [1]
}'

post_question '{
  "title": "philo",
  "text": "Which philosopher is most associated with the concept of the categorical imperative?",
  "options": ["David Hume", "Jean-Paul Sartre", "Immanuel Kant", "John Stuart Mill"],
  "correctAnswers": [2]
}'

post_question '{
  "title": "philo",
  "text": "What is Plato’s allegory of the cave primarily about?",
  "options": ["The value of physical strength", "The origin of government", "The nature of reality and knowledge", "The immortality of the soul"],
  "correctAnswers": [2]
}'

post_question '{
  "title": "philo",
  "text": "Which philosopher wrote Being and Time?",
  "options": ["Martin Heidegger", "Friedrich Nietzsche", "Ludwig Wittgenstein", "Bertrand Russell"],
  "correctAnswers": [0]
}'

post_question '{
  "title": "philo",
  "text": "What ethical theory is John Stuart Mill most associated with?",
  "options": ["Virtue ethics", "Deontology", "Utilitarianism", "Nihilism"],
  "correctAnswers": [2]
}'

post_question '{
  "title": "philo",
  "text": "Which ancient philosopher tutored Alexander the Great?",
  "options": ["Socrates", "Aristotle", "Epicurus", "Plato"],
  "correctAnswers": [1]
}'

post_question '{
  "title": "philo",
  "text": "What is the main idea behind Nietzsche’s concept of the Übermensch?",
  "options": ["The belief in a democratic society", "The idea of achieving moral perfection through religion", "A being who creates his own values and overcomes societal norms", "A commitment to utilitarian ethics"],
  "correctAnswers": [2]
}'

post_question '{
  "title": "philo",
  "text": "What is the philosophical study of knowledge called?",
  "options": ["Ontology", "Aesthetics", "Epistemology", "Ethics"],
  "correctAnswers": [2]
}'

post_question '{
  "title": "philo",
  "text": "Who is considered the founder of modern existentialism?",
  "options": ["Søren Kierkegaard", "Karl Marx", "Thomas Hobbes", "John Locke"],
  "correctAnswers": [0]
}'

post_question '{
  "title": "philo",
  "text": "Which philosopher argued that \"man is condemned to be free\"?",
  "options": ["Michel Foucault", "Jean-Paul Sartre", "Albert Camus", "G.W.F. Hegel"],
  "correctAnswers": [1]
}'

