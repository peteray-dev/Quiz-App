let loginDetails = [
    {username: "Ayomide", password: "ayomide"}, 
    {username: "Raymond", password: "raymond"}, 
    {username: "Seun", password: "seun"}, 
    {username: "Tope", password: "tope"}, 
    {username: "Marvelous", password: "marvelous"}
]


let header = document.getElementById('cover')
let mainSection = document.getElementById("main-section")
let greeting = document.getElementById('greetings')


let userEmail = document.getElementById("emailLog")
let userPass = document.getElementById("passLog")
    
    
let submitBtn = document.getElementById("submit")

// header.style.display = "none"
mainSection.style.display = "none"
    
submitBtn.addEventListener("click", function(event){
    event.preventDefault()
    loginDetails.map(items=>{

        if(!userEmail.value){
            userEmail.nextElementSibling.innerHTML = "Please provide a Username!";
            userEmail.nextElementSibling.style.color = "red";
            userEmail.nextElementSibling.style.fontSize = "14px";
        }
        if(!userPass.value){
            userPass.nextElementSibling.innerHTML = "Please provide a password!";
            userPass.nextElementSibling.style.color = "red";
            userPass.nextElementSibling.style.fontSize = "14px";
        }
        //if the provided user Email and Passwrod
        if(userEmail.value && userPass.value){
            if(userEmail.value !== items.username || userPass.value !== items.password){
                userEmail.previousElementSibling.innerHTML = "User data does not match";
                userEmail.previousElementSibling.style.color = "red";
                userEmail.previousElementSibling.style.fontSize = "14px";

                userPass.nextElementSibling.innerHTML = "";
                userEmail.nextElementSibling.innerHTML = "";
            }else{
                header.style.display = "none"
                mainSection.style.display = "block"
               
                const date = new Date()
                const hour = date.getHours
                if(hour < 12){
                    greeting.innerHTML = `Good Morning ${items.username}`
                }if(hour <= 16){
                    greeting.innerHTML = `Good Afternoon ${items.username}`
                }else{
                    greeting.innerHTML = `Good Evening ${items.username}`
                }
                
                // window.location.href="./resources/files/index2.html"
            }
        }
    })
    
    // let greet = ()=>{
    //                 const date = new Date()
    //                 const hour = date.getHours
    //                 if(hour < 12){
    //                     return `Good morning`
    //                 }if(hour <= 16){
    //                     return `Good morning`
    //                 }else{
    //                     return `Good morning`
    //                 }
    //             }

   

    let userSubjects = document.getElementsByTagName("select")
    let selectedOption = ""
    for(select of userSubjects){
        // console.log(select[0].value);
        if(select.value == "none"){
            alert("please enter a subject")
        }else{
            selectedOption = select.value
        }
    }
    // console.log(select.value);

    // 




   

    
})

// if(userEmail.value == "" || userEmail.value == null){
    //     userEmail.nextElementSibling.innerHTML = "Please input your username!";
    //     userEmail.nextElementSibling.style.color = "red";
    //     userEmail.nextElementSibling.style.fontSize = "14px";
    // } if(userPass.value == "" || userPass.value == null){
    //     userPass.nextElementSibling.innerHTML = "Please input your password!";
    //     userPass.nextElementSibling.style.color = "red";
    //     userPass.nextElementSibling.style.fontSize = "14px";
    // }
    

 //Try find method
    // function verify(){
    //     for(names of loginDetails){
    //         console.log(names);
    //     }
    // } 
    // verify(2)

    // for(names of loginDetails[num].userNames){
    //         if(userEmail.value !== names){
    //             userEmail.nextElementSibling.innerHTML = "incorrect username!"
    //             userEmail.nextElementSibling.style.color = "red"
    //             userEmail.nextElementSibling.style.fontSize = "14px"
    //         }
    //     }
    // for(pass of loginDetails.password){
    //         if(userPass.value !== pass){
    //             userPass.nextElementSibling.innerHTML = "incorrect password"
    //             userPass.nextElementSibling.style.color = "red"
    //             userPass.nextElementSibling.style.fontSize = "14px"
    //         }   
    //     }

