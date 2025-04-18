//utils/seedData
import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';

export const seedQuizzesIfNeeded = async () => {
  const quizCount = await Quiz.countDocuments();
  if (quizCount === 0) {
    const quizzes = [
      { category: "tech", description: "Explore quizzes on programming, web dev, and more." },
      { category: "aptitude", description: "Test your logical, verbal, and numerical reasoning." },
      { category: "cs-fundamentals", description: "Quizzes on DBMS, OS, CN, DSA, and core CS concepts." },
      { category: "interview-prep", description: "Practice HR and technical questions for placements." },
      { category: "gk", description: "Stay updated with current affairs and world knowledge." },
      { category: "science", description: "Dive into physics, chemistry, biology quizzes." }
    ];
    await Quiz.insertMany(quizzes);
    console.log("✅ Quiz categories seeded.");
  }

  const questionCount = await Question.countDocuments();
  if (questionCount === 0) {
    const questions = [
      // Tech - Easy
      { category: "tech", difficulty: "easy", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Trainer Marking Language"], answer: "Hyper Text Markup Language" },
      { category: "tech", difficulty: "easy", question: "Which HTML tag is used to define an image?", options: ["<pic>", "<img>", "<src>", "<image>"], answer: "<img>" },
      { category: "tech", difficulty: "easy", question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
      { category: "tech", difficulty: "easy", question: "Which language is used for styling web pages?", options: ["HTML", "JQuery", "CSS", "XML"], answer: "CSS" },
      { category: "tech", difficulty: "easy", question: "JavaScript is a ___ language?", options: ["Compiled", "Programming", "Scripting", "Markup"], answer: "Scripting" },

      // Tech - Medium
      { category: "tech", difficulty: "medium", question: "Which HTML tag is used for an internal style sheet?", options: ["<script>", "<style>", "<css>", "<link>"], answer: "<style>" },
      { category: "tech", difficulty: "medium", question: "What does React use to manage UI rendering?", options: ["DOM", "Virtual DOM", "Shadow DOM", "None"], answer: "Virtual DOM" },
      { category: "tech", difficulty: "medium", question: "Which tool is used for version control?", options: ["VS Code", "Node", "Git", "Webpack"], answer: "Git" },
      { category: "tech", difficulty: "medium", question: "What is the default port of a React dev server?", options: ["3000", "5000", "8080", "4200"], answer: "3000" },
      { category: "tech", difficulty: "medium", question: "Which of these is a JavaScript framework?", options: ["React", "Laravel", "Django", "Spring"], answer: "React" },

      // Tech - Hard
      { category: "tech", difficulty: "hard", question: "Which protocol is used for secure web communication?", options: ["HTTP", "HTTPS", "FTP", "TLS"], answer: "TLS" },
      { category: "tech", difficulty: "hard", question: "Command to create a React app?", options: ["npx create-react-app", "npm new react-app", "npm create react", "npx react-app"], answer: "npx create-react-app" },
      { category: "tech", difficulty: "hard", question: "What is JSX?", options: ["JS syntax", "HTML extension", "JavaScript XML", "None"], answer: "JavaScript XML" },
      { category: "tech", difficulty: "hard", question: "React state can be updated using?", options: ["updateState()", "setState()", "changeState()", "this.state"], answer: "setState()" },
      { category: "tech", difficulty: "hard", question: "Which is not a JavaScript data type?", options: ["Boolean", "Undefined", "Float", "Number"], answer: "Float" },

    
      // Aptitude - Easy
      { category: "aptitude", difficulty: "easy", question: "What is 12 + 15?", options: ["25", "26", "27", "28"], answer: "27" },
      { category: "aptitude", difficulty: "easy", question: "If A = 1, what is Z?", options: ["24", "25", "26", "27"], answer: "26" },
      { category: "aptitude", difficulty: "easy", question: "10% of 100 is?", options: ["5", "10", "15", "20"], answer: "10" },
      { category: "aptitude", difficulty: "easy", question: "Which number is even?", options: ["3", "5", "8", "7"], answer: "8" },
      { category: "aptitude", difficulty: "easy", question: "Which is a prime number?", options: ["4", "6", "9", "7"], answer: "7" },

      // Aptitude - Medium
      { category: "aptitude", difficulty: "medium", question: "What is the next number in 2, 4, 8, ?", options: ["16", "12", "10", "14"], answer: "16" },
      { category: "aptitude", difficulty: "medium", question: "Solve: 2x + 3 = 9", options: ["1", "2", "3", "4"], answer: "3" },
      { category: "aptitude", difficulty: "medium", question: "Square of 15?", options: ["225", "215", "235", "240"], answer: "225" },
      { category: "aptitude", difficulty: "medium", question: "Which number is divisible by 3?", options: ["10", "12", "14", "16"], answer: "12" },
      { category: "aptitude", difficulty: "medium", question: "If x=3, what is x² + 2x?", options: ["15", "11", "9", "18"], answer: "15" },

      // Aptitude - Hard
      { category: "aptitude", difficulty: "hard", question: "Train 120m long at 60km/h. Time to cross a pole?", options: ["6 sec", "7 sec", "8 sec", "9 sec"], answer: "7 sec" },
      { category: "aptitude", difficulty: "hard", question: "If 5x - 3 = 2x + 6, find x.", options: ["3", "2", "4", "5"], answer: "3" },
      { category: "aptitude", difficulty: "hard", question: "What is √144?", options: ["10", "12", "14", "16"], answer: "12" },
      { category: "aptitude", difficulty: "hard", question: "LCM of 12 and 18?", options: ["36", "24", "18", "72"], answer: "36" },
      { category: "aptitude", difficulty: "hard", question: "If a:b = 2:3 and b:c = 3:4, find a:c.", options: ["2:4", "1:2", "2:5", "1:3"], answer: "1:2" },

      // CS-Fundamentals - Easy
      { category: "cs-fundamentals", difficulty: "easy", question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Power Unit", "Central Process Unit", "Control Processing Unit"], answer: "Central Processing Unit" },
      { category: "cs-fundamentals", difficulty: "easy", question: "What does RAM stand for?", options: ["Random Access Memory", "Run All Memory", "Real Access Memory", "Rapid Access Memory"], answer: "Random Access Memory" },
      { category: "cs-fundamentals", difficulty: "easy", question: "What is 1 byte equal to?", options: ["4 bits", "8 bits", "16 bits", "2 bits"], answer: "8 bits" },
      { category: "cs-fundamentals", difficulty: "easy", question: "Which is a type of loop?", options: ["if", "switch", "for", "case"], answer: "for" },
      { category: "cs-fundamentals", difficulty: "easy", question: "Which is not a data type?", options: ["int", "string", "boolean", "loop"], answer: "loop" },

      // CS-Fundamentals - Medium
      { category: "cs-fundamentals", difficulty: "medium", question: "Which uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], answer: "Queue" },
      { category: "cs-fundamentals", difficulty: "medium", question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(log n)" },
      { category: "cs-fundamentals", difficulty: "medium", question: "Full form of OOP?", options: ["Object Oriented Programming", "Object Optimized Processing", "Operator Oriented Programming", "Object Over Process"], answer: "Object Oriented Programming" },
      { category: "cs-fundamentals", difficulty: "medium", question: "Which language is low-level?", options: ["Python", "Assembly", "Java", "Ruby"], answer: "Assembly" },
      { category: "cs-fundamentals", difficulty: "medium", question: "Which is NOT a sorting algorithm?", options: ["Quick sort", "Merge sort", "Bubble sort", "Hash sort"], answer: "Hash sort" },

      // CS-Fundamentals - Hard
      { category: "cs-fundamentals", difficulty: "hard", question: "What does DBMS stand for?", options: ["Database Management System", "Data Business Model Structure", "Digital Base Main System", "None"], answer: "Database Management System" },
      { category: "cs-fundamentals", difficulty: "hard", question: "Which algorithm is used in Dijkstra's?", options: ["Greedy", "Dynamic", "Backtracking", "Brute Force"], answer: "Greedy" },
      { category: "cs-fundamentals", difficulty: "hard", question: "What is the default TCP port for HTTP?", options: ["80", "443", "21", "8080"], answer: "80" },
      { category: "cs-fundamentals", difficulty: "hard", question: "Heap is mainly used for?", options: ["Priority Queue", "Stack", "Tree", "Sorting"], answer: "Priority Queue" },
      { category: "cs-fundamentals", difficulty: "hard", question: "Which of these is ACID property?", options: ["Atomicity", "Connectivity", "Isolation", "Durability"], answer: "Connectivity" },

    
      // Interview Prep - Easy
      { category: "interview-prep", difficulty: "easy", question: "What is GitHub?", options: ["A code hosting platform", "A database", "A server", "A text editor"], answer: "A code hosting platform" },
      { category: "interview-prep", difficulty: "easy", question: "What is the most common HR interview question?", options: ["Tell me about yourself", "Why Java?", "Explain TCP/IP", "None"], answer: "Tell me about yourself" },
      { category: "interview-prep", difficulty: "easy", question: "What is SQL used for?", options: ["Database querying", "Web design", "App development", "AI"], answer: "Database querying" },
      { category: "interview-prep", difficulty: "easy", question: "What is a resume?", options: ["Job document", "Cover letter", "Profile", "Portfolio"], answer: "Job document" },
      { category: "interview-prep", difficulty: "easy", question: "Which is a soft skill?", options: ["Communication", "Java", "HTML", "SQL"], answer: "Communication" },

      // Interview Prep - Medium
      { category: "interview-prep", difficulty: "medium", question: "What is an API?", options: ["Application Programming Interface", "App Process Info", "Application Protocol Index", "None"], answer: "Application Programming Interface" },
      { category: "interview-prep", difficulty: "medium", question: "OOP concept that allows code reuse?", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], answer: "Inheritance" },
      { category: "interview-prep", difficulty: "medium", question: "Purpose of normalization in DB?", options: ["Reduce redundancy", "Improve UI", "Improve performance", "Reduce security"], answer: "Reduce redundancy" },
      { category: "interview-prep", difficulty: "medium", question: "Which is a behavioral question?", options: ["Tell me about a challenge you overcame", "What is a pointer?", "Write a binary search", "None"], answer: "Tell me about a challenge you overcame" },
      { category: "interview-prep", difficulty: "medium", question: "What is the STAR method?", options: ["Situation, Task, Action, Result", "Strategy Test Answer Result", "Systematic Task Assessment Routine", "None"], answer: "Situation, Task, Action, Result" },

      // Interview Prep - Hard
      { category: "interview-prep", difficulty: "hard", question: "What is SQL injection?", options: ["Code vulnerability", "HTML bug", "DB Indexing", "None"], answer: "Code vulnerability" },
      { category: "interview-prep", difficulty: "hard", question: "Difference between threads and processes?", options: ["Threads share memory", "Processes share memory", "Threads are isolated", "None"], answer: "Threads share memory" },
      { category: "interview-prep", difficulty: "hard", question: "SOLID principle for single functionality?", options: ["Single Responsibility", "Open Closed", "Liskov", "Dependency Inversion"], answer: "Single Responsibility" },
      { category: "interview-prep", difficulty: "hard", question: "What is a deadlock?", options: ["Two processes waiting on each other", "Network loop", "Memory overflow", "All of above"], answer: "Two processes waiting on each other" },
      { category: "interview-prep", difficulty: "hard", question: "Describe RESTful API?", options: ["Stateless client-server", "Stateful server", "Client-based protocol", "UI dependent"], answer: "Stateless client-server" },

      // GK - Easy
      { category: "gk", difficulty: "easy", question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: "Delhi" },
      { category: "gk", difficulty: "easy", question: "Which continent is Egypt in?", options: ["Asia", "Europe", "Africa", "Australia"], answer: "Africa" },
      { category: "gk", difficulty: "easy", question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
      { category: "gk", difficulty: "easy", question: "Who wrote the Indian national anthem?", options: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"], answer: "Rabindranath Tagore" },
      { category: "gk", difficulty: "easy", question: "How many states are there in India?", options: ["28", "29", "30", "31"], answer: "28" },

      // GK - Medium
      { category: "gk", difficulty: "medium", question: "Who is the current president of India (as of 2023)?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Narendra Modi", "Amit Shah"], answer: "Droupadi Murmu" },
      { category: "gk", difficulty: "medium", question: "What does RBI stand for?", options: ["Reserve Bank of India", "Rural Bank of India", "Regional Bank of India", "Regulated Bank of India"], answer: "Reserve Bank of India" },
      { category: "gk", difficulty: "medium", question: "Which state is known as the 'Land of Rising Sun'?", options: ["Arunachal Pradesh", "Assam", "Mizoram", "Nagaland"], answer: "Arunachal Pradesh" },
      { category: "gk", difficulty: "medium", question: "In which year did India gain independence?", options: ["1945", "1947", "1950", "1942"], answer: "1947" },
      { category: "gk", difficulty: "medium", question: "What is the national animal of India?", options: ["Tiger", "Lion", "Elephant", "Peacock"], answer: "Tiger" },

      // GK - Hard
      { category: "gk", difficulty: "hard", question: "Who was the first female Prime Minister of India?", options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"], answer: "Indira Gandhi" },
      { category: "gk", difficulty: "hard", question: "Which city is also known as the Silicon Valley of India?", options: ["Bangalore", "Hyderabad", "Pune", "Chennai"], answer: "Bangalore" },
      { category: "gk", difficulty: "hard", question: "When was the Indian Constitution adopted?", options: ["26th January 1950", "15th August 1947", "2nd October 1950", "26th November 1949"], answer: "26th January 1950" },
      { category: "gk", difficulty: "hard", question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Dr. APJ Abdul Kalam", "Sarvepalli Radhakrishnan", "Lal Bahadur Shastri"], answer: "Dr. Rajendra Prasad" },
      { category: "gk", difficulty: "hard", question: "Which Indian state has the longest coastline?", options: ["Gujarat", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"], answer: "Gujarat" },

      // Science - Easy
      { category: "science", difficulty: "easy", question: "Water boils at what temperature?", options: ["90°C", "95°C", "100°C", "110°C"], answer: "100°C" },
      { category: "science", difficulty: "easy", question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
      { category: "science", difficulty: "easy", question: "What part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },
      { category: "science", difficulty: "easy", question: "What planet is closest to the sun?", options: ["Venus", "Mars", "Mercury", "Jupiter"], answer: "Mercury" },
      { category: "science", difficulty: "easy", question: "Which is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin" },

      // Science - Medium
      { category: "science", difficulty: "medium", question: "Which vitamin is produced when sunlight hits the skin?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
      { category: "science", difficulty: "medium", question: "What is the chemical symbol for Sodium?", options: ["S", "So", "Na", "N"], answer: "Na" },
      { category: "science", difficulty: "medium", question: "What part of the cell contains genetic material?", options: ["Cytoplasm", "Ribosome", "Nucleus", "Mitochondria"], answer: "Nucleus" },
      { category: "science", difficulty: "medium", question: "Speed of light in vacuum?", options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^10 m/s", "None"], answer: "3x10^8 m/s" },
      { category: "science", difficulty: "medium", question: "What is Newton’s third law?", options: ["Inertia", "F=ma", "Equal & opposite reaction", "None"], answer: "Equal & opposite reaction" },

      // Science - Hard
      { category: "science", difficulty: "hard", question: "What is the powerhouse of the cell?", options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"], answer: "Mitochondria" },
      { category: "science", difficulty: "hard", question: "Which particle has no electric charge?", options: ["Proton", "Neutron", "Electron", "Positron"], answer: "Neutron" },
      { category: "science", difficulty: "hard", question: "Einstein's mass-energy equation?", options: ["E=mc^2", "F=ma", "a^2 + b^2 = c^2", "P=mv"], answer: "E=mc^2" },
      { category: "science", difficulty: "hard", question: "What is the SI unit of force?", options: ["Pascal", "Newton", "Joule", "Watt"], answer: "Newton" },
      { category: "science", difficulty: "hard", question: "What is the pH of neutral water?", options: ["5", "6", "7", "8"], answer: "7" },

    ];
    await Question.insertMany(questions);
    console.log("✅ Questions seeded.");
  }
};
