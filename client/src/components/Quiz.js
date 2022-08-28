import React,{useState} from 'react'

function Quiz() {

    const questions=[
        {
            questionText:' What is the full form of CSS?',
            answerOption:[
                { answerText:'Cascading Style Sheets', isCorrect: true},
                { answerText:'Cascading Style Sheeps', isCorrect: false},
                { answerText:'Cartoons Style Sheets', isCorrect: false},
                { answerText:'Cascading Super Sheets', isCorrect: false},
            ],
        },
        {
            questionText:' What is the full form of HTML?',
            answerOption:[
                { answerText:'HyperText Markup Language', isCorrect: true},
                { answerText:'HyperText Markep Language', isCorrect: false},
                { answerText:'Hypertoy Markup Language', isCorrect: false},
                { answerText:'HyperText Markup Lesson', isCorrect: false},
            ],
        },
        {
            questionText:' What is the full form of JS?",',
            answerOption:[
                { answerText:'JavaSuper', isCorrect: false},
                { answerText:'JavaScript', isCorrect: true},
                { answerText:'JustScript', isCorrect: false},
                { answerText:'JordenShoes', isCorrect: false},
            ],
        },
        {
            questionText:' The product of two number is 120 and the sum of their squares is 289.The sum of the number is ?",',
            answerOption:[
                { answerText:'124', isCorrect: false},
                { answerText:'23', isCorrect: true},
                { answerText:'169', isCorrect: false},
                { answerText:'None', isCorrect: false},
            ],
        },

    ];

    const[currentQuestion,setCurrentQuestion] = useState(0);

    const [showScore,setShowScore] = useState(false);

    const [score,setScore] = useState(0);

    const handleAnswerButton = (isCorrect)=>{

        if(isCorrect===true){
           setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
       
    }

    return (
        <div className="body">
        <div className="app">
          {showScore ?(
              <div className="Score-section"> You Score {score} out of {questions.length}</div>
          ) : (
              <>
                  <div className="question-section">
                      <div className="question-count">
                          <span>Question {currentQuestion + 1}</span>/{questions.length}
                      </div>
                      <div className="question-text">{questions[currentQuestion].questionText}</div>
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestion].answerOption.map((answerOption)=><button onClick={()=>handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                
                  </div>
                  </>
          )}
        </div>
        </div>
    )
}
export default Quiz;


