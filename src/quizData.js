// src/quizData.js

export const quizData = {
  Math: {
    timeLimit: 300, // 5 minutes
    questions: [
      {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        explanation: "5 + 7 equals 12.",
      },
      {
        question: "What is the square root of 16?",
        options: ["2", "3", "4", "5"],
        answer: "4",
        explanation: "The square root of 16 is 4.",
      },
      {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        explanation: "5 + 7 equals 12.",
      },
    ],
  },
  Science: {
    timeLimit: 600, // 10 minutes
    questions: [
      {
        question: "What is H2O commonly known as?",
        options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
        answer: "Water",
        explanation: "H2O is the chemical formula for water.",
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        explanation:
          "Mars is often called the Red Planet due to its reddish appearance.",
      },
    ],
  },
  History: {
    timeLimit: 450, // 7.5 minutes
    questions: [
      {
        question: "Who was the first president of the USA?",
        options: [
          "George Washington",
          "Abraham Lincoln",
          "Thomas Jefferson",
          "John Adams",
        ],
        answer: "George Washington",
        explanation:
          "George Washington was the first president of the United States.",
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1944", "1950"],
        answer: "1945",
        explanation: "World War II ended in 1945.",
      },
    ],
  },

  Java: {
    timeLimit: 600, // 10 minutes
    questions: [
      {
        question:
          "In Java, which memory area is responsible for storing instances of classes?",
        options: ["Heap", "Cache", "Stack", "Register"],
        answer: "Heap",
        explanation:
          "In Java, instances of classes are stored in the heap memory area. The heap is used for dynamic memory allocation, and objects persist in the heap until they are no longer referenced and become eligible for garbage collection.",
      },
      {
        question:
          "The process of converting a larger data type into a smaller one in Java is known as ______.",
        options: ["Widening", "Casting", "Narrowing", "Transforming"],
        answer: "Narrowing",
        explanation:
          "The process of converting a larger data type into a smaller one in Java is known as narrowing. It involves reducing the size of the data type to fit into a smaller space.",
      },
      {
        question:
          "The ______ block in Java is used to execute important code such as closing resources, regardless of whether an exception was thrown or not.",
        options: ["throw", "catch", "try", "finally"],
        answer: "finally",
        explanation:
          "In Java, the finally block is used to execute important code such as closing resources, regardless of whether an exception was thrown or not. It ensures that certain code is executed, no matter what happens in the preceding try and catch blocks.",
      },
      {
        question:
          "A ______ loop in Java is used when the number of iterations is not determined prior to the start of the loop.",
        options: ["do-while", "enhanced for", "while", "for"],
        answer: "do-while",
        explanation:
          "In Java, the do-while loop is used when the number of iterations is not known before the loop starts. It ensures that the loop body is executed at least once, and then the condition is checked for further iterations.",
      },
      {
        question:
          "An array of strings in Java can be declared and initialized using String[] array = ______.",
        options: [
          'new Array("str1", "str2")',
          'Array("str1", "str2")',
          'new String[] {"str1", "str2"}',
          '{"str1", "str2"}',
        ],
        answer: '{"str1", "str2"}',
        explanation:
          'In Java, an array of strings can be declared and initialized using the syntax String[] array = {"str1", "str2"}. This creates a string array with two elements "str1" and "str2". Domain',
      },
      {
        question:
          "The ______ principle in OOP suggests that modules should be open for extension but closed for modification.",
        options: [
          "Liskov Substitution",
          "Dependency Inversion",
          "Open-Closed",
          "Single Responsibility",
        ],
        answer: "Open-Closed",
        explanation:
          "The Open-Closed principle in Object-Oriented Programming (OOP) suggests that a class should be open for extension (you can add new functionality) but closed for modification (you don't need to alter existing code).",
      },
      {
        question:
          "A Java program requires a method to efficiently concatenate several strings. Which class or method should be used to optimize performance?",
        options: [
          "StringBuffer",
          "String.join()",
          "StringBuilder",
          "String.concat()",
        ],
        answer: "StringBuilder",
        explanation:
          "To efficiently concatenate several strings in Java, the StringBuilder class should be used. It is mutable and provides better performance compared to StringBuffer due to its lack of synchronization.",
      },
    ],
  },
};
