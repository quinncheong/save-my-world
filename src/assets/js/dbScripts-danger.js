// Dangerous file do not touch
const dbScript = async () => {
    let file = require('@/assets/data/quiz.json')
    console.log(file)
    var main = []
    let { Quiz1, Quiz2, Quiz3 } = file;
    
  
    for (let quizName in Quiz1) {
      let final = {
        id: 1,
        ...Quiz1[quizName]
      };
      main.push(final)
  
    }
  
    for (let quizName in Quiz2) {
      let final = {
        id: 2,
        ...Quiz1[quizName]
      };
      main.push(final)
    }
  
    for (let quizName in Quiz3) {
      let final = {
        id: 3,
        ...Quiz1[quizName]
      };
      main.push(final)
    }
  
    // for (let item of main) {
    //   const docRef = await addDoc(collection(db, "quizzes"), item);
    // }
    // console.log(main)
  }
  
  // dbScript();