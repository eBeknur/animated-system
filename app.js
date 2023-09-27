var questions = [
  {
    question: "HTML nimani anglatadi?",
    answer: "a",
    options: {
      a: "Hyper Text Markup Language",
      b: "Hyperlinks and Text Markup Language",
      c: "Home Tool Markup Language",
      d: "None of the above",
    },
  },
  {
    question: "Qaysi teg tashqi CSS faylini aniqlash uchun ishlatiladi?",
    answer: "b",
    options: {
      a: "<style>",
      b: "<link>",
      c: "<script>",
      d: "<img>",
    },
  },
  {
    question: "divni chegarasini korsatadigan teg aniqlang?",
    answer: "c",
    options: {
      a: "dotted",
      b: "double",
      c: "solid",
    },
  },
  {
    question: "CSS so'zining ma'nosi?",
    answer: "a",
    options: {
      a: "Cascading Style Sheets",
      b: "high-level, class-based, object-oriented programming language",
      c: "3D Dizayn",
    },
  },
  {
    question: "3X3=?",
    answer: "a",
    options: {
      a: "9",
      b: "12",
      c: "3",
      d: "30",
    },
  },
  {
    question: "12X10=?",
    answer: "b",
    options: {
      a: "120",
      b: "108",
      c: "106",
      d: "122",
    },
  },
  {
    question: "BU TEST QAYSI TILDA TUILGAN?",
    answer: "a",
    options: {
      a: "JS",
      b: "JAVA",
      c: "CSS",
      d: "PHYTON",
    },
  },
  {
    question: "1970 YILDA QANDAY HODISA BOLGAN </>?",
    answer: "b",
    options: {
      a: "DAVR VAQTI BOSHLANGAN",
      b: "DAVRON BORONI",
      c: "BUYUK SHOIR VAFOT E'TGAN",
    },
  },
  {
    question: "NASA ?",
    answer: "b",
    options: {
      a: "COSMOS",
      b: "MASHINA",
      c: "TARAQQIYOT",
      d: "KOLEKSIYA",
    },
  },
];

var score = 0;

for (var i = 0; i < questions.length; i++) {
  var userAnswer = prompt(
    questions[i].question +
      "\na) " +
      questions[i].options.a +
      "\nb) " +
      questions[i].options.b +
      "\nc) " +
      questions[i].options.c +
      "\nd) " +
      questions[i].options.d
  );

  if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
    score++;
    alert("Tog'ri!");
  } else {
    alert("Xato!");
  }
}

alert("Sizning balingiz" + score + " Tashqarida " + questions.length);
