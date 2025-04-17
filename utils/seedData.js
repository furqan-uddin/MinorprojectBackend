import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';

export const seedQuizzesIfNeeded = async () => {
  const quizCount = await Quiz.countDocuments();
  if (quizCount === 0) {
    const quizzes = [
      { category: "tech", description: "Explore quizzes on programming, web dev, and more." },
      { category: "aptitude", description: "Test your logical, verbal, and numerical reasoning." },
      { category: "cs-fundamentals", description: "Quizzes on DBMS, OS, CN, DSA, and core CS concepts." },
      { category: "interview-prep", description: "Practice HR and technical questions for placements." }
    ];
    await Quiz.insertMany(quizzes);
    console.log("✅ Quiz categories seeded.");
  }

  const questionCount = await Question.countDocuments();
  if (questionCount === 0) {
    const questions = [
      // 🔹 TECH
      { category: "tech", difficulty: "easy", question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
      { category: "tech", difficulty: "medium", question: "Which HTML tag is used to define an internal style sheet?", options: ["<script>", "<style>", "<css>", "<link>"], answer: "<style>" },
      { category: "tech", difficulty: "hard", question: "Which protocol does HTTPS use for secure communication?", options: ["SSL", "TLS", "HTTP/2", "SSH"], answer: "TLS" },

      // 🔹 APTITUDE
      { category: "aptitude", difficulty: "easy", question: "What is 12 + 15?", options: ["25", "26", "27", "28"], answer: "27" },
      { category: "aptitude", difficulty: "medium", question: "If x = 2, y = 3, find x² + y².", options: ["12", "13", "10", "11"], answer: "13" },
      { category: "aptitude", difficulty: "hard", question: "A train 150 m long runs at 60 km/h. Time to cross a pole?", options: ["7 sec", "8 sec", "9 sec", "10 sec"], answer: "9 sec" },

      // 🔹 CS FUNDAMENTALS
      { category: "cs-fundamentals", difficulty: "easy", question: "What does RAM stand for?", options: ["Random Access Memory", "Run Access Memory", "Read All Memory", "Real Access Memory"], answer: "Random Access Memory" },
      { category: "cs-fundamentals", difficulty: "medium", question: "Which data structure is used for BFS?", options: ["Stack", "Queue", "Heap", "Tree"], answer: "Queue" },
      { category: "cs-fundamentals", difficulty: "hard", question: "Time complexity of binary search in worst case?", options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"], answer: "O(log n)" },

      // 🔹 INTERVIEW PREP
      { category: "interview-prep", difficulty: "easy", question: "Where is 'Tell me about yourself' asked?", options: ["HR round", "Technical round", "Coding test", "None"], answer: "HR round" },
      { category: "interview-prep", difficulty: "medium", question: "Purpose of a foreign key?", options: ["Link tables", "Speed up queries", "Delete data", "Create views"], answer: "Link tables" },
      { category: "interview-prep", difficulty: "hard", question: "What’s the difference between process and thread?", options: ["Threads share memory", "Processes share memory", "Threads are heavier", "None"], answer: "Threads share memory" }
    ];

    await Question.insertMany(questions);
    console.log("✅ Questions seeded.");
  }
};
