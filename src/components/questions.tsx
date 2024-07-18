import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Question: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {

    const initialQuestions = [
      {
        question: 'What is the capital of France?',
        answers: ['Paris', 'Berlin', 'London', 'Rome'],
        correctAnswer: 'Paris',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
      },
      {
        question: 'What is the largest ocean on Earth?',
        answers: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
        correctAnswer: 'Pacific',
      },
      {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: ['Harper Lee', 'Jane Austen', 'Mark Twain', 'J.K. Rowling'],
        correctAnswer: 'Harper Lee',
      },
      {
        question: 'What is the chemical symbol for gold?',
        answers: ['Au', 'Ag', 'Pb', 'Fe'],
        correctAnswer: 'Au',
      },
      {
        question: 'What is the tallest mountain in the world?',
        answers: ['K2', 'Kangchenjunga', 'Lhotse', 'Mount Everest'],
        correctAnswer: 'Mount Everest',
      },
      {
        question: 'Which element has the atomic number 1?',
        answers: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
        correctAnswer: 'Hydrogen',
      },
      {
        question: 'In what year did the Titanic sink?',
        answers: ['1912', '1914', '1916', '1918'],
        correctAnswer: '1912',
      },
      {
        question: 'What is the square root of 64?',
        answers: ['6', '7', '8', '9'],
        correctAnswer: '8',
      },
      {
        question: 'Who painted the Mona Lisa?',
        answers: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Leonardo da Vinci'],
        correctAnswer: 'Leonardo da Vinci',
      },
      {
        question: 'What is the smallest country in the world?',
        answers: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
        correctAnswer: 'Vatican City',
      },
      {
        question: 'What is the largest planet in our solar system?',
        answers: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
        correctAnswer: 'Jupiter',
      },
      {
        question: 'Who is known as the father of computers?',
        answers: ['Alan Turing', 'Charles Babbage', 'John von Neumann', 'Blaise Pascal'],
        correctAnswer: 'Charles Babbage',
      },
      {
        question: 'What is the hardest natural substance on Earth?',
        answers: ['Gold', 'Iron', 'Diamond', 'Platinum'],
        correctAnswer: 'Diamond',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: ['China', 'Japan', 'South Korea', 'Thailand'],
        correctAnswer: 'Japan',
      },
      {
        question: 'What is the most widely spoken language in the world?',
        answers: ['English', 'Spanish', 'Chinese', 'Hindi'],
        correctAnswer: 'Chinese',
      },
      {
        question: 'What is the longest river in the world?',
        answers: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        correctAnswer: 'Nile',
      },
      {
        question: 'What is the capital city of Australia?',
        answers: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
        correctAnswer: 'Canberra',
      },
      {
        question: 'Which organ is responsible for pumping blood throughout the body?',
        answers: ['Liver', 'Lungs', 'Heart', 'Kidneys'],
        correctAnswer: 'Heart',
      },
      {
        question: 'What is the fastest land animal?',
        answers: ['Lion', 'Tiger', 'Cheetah', 'Leopard'],
        correctAnswer: 'Cheetah',
      },
    ];

    const randomizedQuestions = shuffleArray(initialQuestions);
    setQuestions(randomizedQuestions);
  }, []);

  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question</Text>
      {questions.map((q, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{q.question}</Text>
          {q.answers.map((answer: string, ansIndex: number) => (
            <TouchableOpacity key={ansIndex} style={styles.answerButton}>
              <Text>{answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerButton: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});

export default Question;
