let questions = [
    {question:"what is the 20% of 400", option1: 50, option2: 70, option3: 80, option4: "All of the above", answer:"80", selected:''},
    {question:"solve this equation: 2x + 24 -5x = 3", option1: 12, option2: 24, option3: 7, option4: "7x", answer:7},
    // {question:"2x+x-1, find x", option1: "3x+1", option2: "3x-1", option3: "2x", option4: "none of the above", answer:"3x+1"},
    // {question:"what is the formular of a diameter", option1: "2R", option2: "R+R", option3: "d", option4: "r * R", answer:"2R"},
    // {question:"which is not a polygon", option1: "circle", option2: "Rhombus", option3: "Square", option4: "hexagon", answer:"circle"},
    // {question:"what is the sum of angle of a octagon", option1: 720, option2: 1080, option3: 860, option4: "none of the above", answer:"1080"},
    // {question:"divide 10805 by 5", option1: 261, option2: 84, option3: 205, option4: 2161, answer:2161},
    // {question:"A man bought 10 cars, he gave two to his brother and gave two also to his company, how many does he have if the police had seize four of his cars", option1: 4, option2: 2, option3: 6, option4: "i don't know", answer:6},
    // {question: "what is the shape of a human face", option1: "oval", option2: "sphere", option3: "no shape", option4: "square", answer:"oval"},
    // {question:"solve 2(x-1)(4x-2)", option1: "2-2x", option2: "2(1-x)", option3: "2x", option4: "4x", answer:"2(1-x)"}

]
let wholeQuestionContainer = document.getElementById("wholeContainer")
let questionCont = document.getElementById("questionContainer")
let optionCont = document.getElementById("optionContainer")
let btnCont = document.getElementById("btnContainer")
let finishResult = document.getElementById("finish")
let finalBg = document.getElementById("final")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("previous")
let resetbtn = document.getElementById("reset")
let submitBtn = document.getElementById("submit")
let answerDisplay = document.getElementById("answers")
let questionposit = 0
let score = 0
let count = 300

let interval = setInterval(function(){
    document.getElementById("count").innerHTML = `${count} seconds` ;
    count--;
    if(count === 0){
        clearInterval(interval);
        document.getElementById("count").innerHTML = "Done"
        wholeQuestionContainer.style.display = "none"
        finishResult.innerHTML = `Your Score is ${score}%`
        resetbtn.style.display = "block"
        finalBg.style.display = "block"
    }
}, 1000)

resetbtn.style.display = "none"
finalBg.style.display = "none"
submitBtn.style.display = "none"
submitPara.style.display = "none"

function loadQuestions(qnum){

    questionCont.innerHTML = ` <h4>Q${qnum+1}. ${questions[qnum].question}</h4>`;
    optionCont.innerHTML = `
    <input type ="radio" name = "option" value= ${questions[qnum].option1}>${questions[qnum].option1} <br>
    <input type ="radio" name = "option" value = ${questions[qnum].option2}>${questions[qnum].option2}<br>
    <input type ="radio" name = "option" value = ${questions[qnum].option3}>${questions[qnum].option3}<br>
    <input type ="radio" name = "option" value = ${questions[qnum].option4} >${questions[qnum].option4}`

}

nextBtn.addEventListener("click", function(){
    let aBtnclick = document.querySelector('input[type = "radio"]:checked')
    let selectedValue = ""
    if(!aBtnclick){
        alert("please select an answer")
    }if(aBtnclick){
        selectedValue = aBtnclick.value
        questions[questionposit].selected = selectedValue
        if(selectedValue == questions[questionposit].answer){
            score+=10
        }if(questionposit == questions.length-1){
            submitBtn.style.display = "block"
            submitBtn.style.position = "relative"
            submitBtn.style.bottom = '40px'
            submitPara.style.display = "bsubmitBtn.style.bottom = '40px'lock"
            nextBtn.style.display = "none"
            prevBtn.style.display = "block"
        }
        questionposit++
        loadQuestions(questionposit)
        
    }
    
})


prevBtn.addEventListener("click", function(){
    submitBtn.style.display = "none"
    submitPara.style.display = "none"
    nextBtn.style.display = "block" 
    nextBtn.style.position = "relative"
    nextBtn.style.bottom = '5px'
  
        questionposit--
        loadQuestions(questionposit) 
            
})

submitBtn.addEventListener("click", function(){
    
    wholeQuestionContainer.style.display = "none"
    finishResult.innerHTML = (score < 40) ? `Your Score is ${score}% <p>😖😖😖 you can do more</p> ` : `Your Score is ${score}% <p> Congratulations</p>`
    resetbtn.style.display = "block"
    finalBg.style.display = "block"

    
})

resetbtn.addEventListener("click", function(num){
    // if(num.target.matches("button")){
    //     questionposit = 0;
    //     score = 0;
    //     // window.location.href="index.html"
    //     location.reload()
    // }
    window.location.href="../../index.html"
})

loadQuestions(questionposit)

