const quizDB=[
    {question: "Full form of HTML?",
    a:" Hyper Transfer Markup Language",
    b:" Human text Markup Language",
    c:" Hyper text Markup Language",
    d:" Hyper text Marquee Language",
    ans:" Hyper text Markup Language"

},
{question:"what is CSS?",
a:"Cascade Sheet Style",
b:"Colgate Style Sheet",
c:"Cascade Style Sheet",
d:"Collection Style Sheet",
ans:"Cascade Style Sheet"
},

{
    question:"HTML tag to for creating links?",
    a:"anchor tag",
    b:"br tag",
    c:"hr tag",
    d:"marquee tag",
    ans:"anchor tag"
},
{
    question:"In how many we can declare a variable in javascript?",
    a:"one way",
    b:"Two way",
    c:"Three-way",
    d:"infinitely many ways",
    ans:"Three-way"
},

{
    question:"WWW Stands for?",
    a:"World Wide Web",
    b:"Wide Web World",
    c:"World Web wide",
    d:"Wide World Web",
    ans:"World Wide Web"
},

{
    question:"who is known as father of Programming?",
    a:"Pranit M. Yawalkar",
    b:"Adarsh S. Thakur",
    c:"Karan K. Pund",
    d:"Samyak M. Vaidya",
    ans:"Pranit M. Yawalkar"
},

{
    question:"Who is the choclate boy of KBT family?",
    a:"SAMYAK M. VAIDYA",
    b:"Pranit M. Yawalkar",
    c:"Shubham K. Patil",
    d:"Harsh S. Shinde",
    ans:"SAMYAK M. VAIDYA"
}
];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const ans1=document.querySelector("#ans1");
const ans2=document.querySelector("#ans2");
const ans3=document.querySelector("#ans3");
const ans4=document.querySelector("#ans4");
const submit=document.querySelector("#submit-button");
const answers= document.querySelectorAll(".answer");
const scoreobj= document.querySelector("#show-score");


let questionCount=0;
let score=0;
const loadQuestion=()=>{
    let questions=quizDB[questionCount];
    question.innerHTML=questions.question;
    option1.innerHTML=questions.a;
    option2.innerHTML=questions.b;
    option3.innerHTML=questions.c;
    option4.innerHTML=questions.d;
    
    ans1.value=questions.a;
    ans2.value=questions.b;
    ans3.value=questions.c;
    ans4.value=questions.d;
}

loadQuestion();
const SelectedAnswer=()=>{
    let answer;
    answers.forEach((currentEle)=>{
        if(currentEle.checked){
            answer=currentEle.value;
        }
       
    })
    return answer;
}

submit.addEventListener("click",()=>{
    const checkedAnswer= SelectedAnswer();
    console.log( checkedAnswer);
    console.log(quizDB[questionCount].ans);
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };
    console.log(score);
    questionCount++;
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        scoreobj.innerHTML=`
        <h2>Your score is ${score}/${quizDB.length}</h2>
        `
    }
});




