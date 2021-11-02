// Dangerous file do not touch
const dbScript1 = async () => {
  let file = require("@/assets/data/quiz.json");
  console.log(file);
  var main = [];
  let { Quiz1, Quiz2, Quiz3 } = file;

  for (let quizName in Quiz1) {
    let final = {
      quizId: 1,
      ...Quiz1[quizName],
    };
    main.push(final);
  }

  for (let quizName in Quiz2) {
    let final = {
      quizId: 2,
      ...Quiz2[quizName],
    };
    main.push(final);
  }

  for (let quizName in Quiz3) {
    let final = {
      quizId: 3,
      ...Quiz3[quizName],
    };
    main.push(final);
  }

  for (let item of main) {
    const docRef = await addDoc(collection(db, "quizzes"), item);
  }
  console.log(main);
};

// dbScript1();