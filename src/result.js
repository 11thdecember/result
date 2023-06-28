function getResult(){
    let science = document.getElementById('science').value;
    let english = document.getElementById('english').value;
    let computer = document.getElementById('computer').value;
    let maths = document.getElementById('maths').value;
    let totalMarks = document.getElementById('totalMarks');
    let totalPer = document.getElementById('totalPer')
    let grade = document.getElementById('grade')
    let mainDiv = document.getElementById('mainDiv')

    if(science == "" || english == "" || computer == "" || maths == ""){
        alert("please fill the all input")

        return false;
    }

    if(science < 0 || science > 100 || english < 0 || english > 100 || computer < 0 || computer > 100 || maths < 0 || maths > 100){
        alert("marks should be between 0 to 100")

        return false;
    }

    // Calculating total marks

    let totalCalcuateMarks = parseInt(science) + parseInt(english) + parseInt(maths) + parseInt(computer);

    totalMarks.innerHTML = totalCalcuateMarks;

    // total percentage 

    let totalCaluatePer = totalCalcuateMarks / 4;
    totalPer.innerHTML = `${totalCaluatePer} %`

    // 33 less then fail 
    // 33 to 60 second class
    // 60 to 75 first class 
    // 75 destinction

    // Grade calculate

    if(totalCaluatePer < 33){
        grade.innerHTML = "Fail"
        mainDiv.style.backgroundColor = "red"
        mainDiv.style.color = "white"
        mainDiv.classList.add('animate')
    }

    else if(totalCaluatePer <= 60){
        grade.innerHTML = "Second class"
        mainDiv.style.backgroundColor = "orange"
    }

    else if(totalCaluatePer <= 75){
        grade.innerHTML = "First Class"
        mainDiv.style.backgroundColor = "lightpink"

    }

    else if(totalCaluatePer <= 100){
        grade.innerHTML = "Destenction"
        mainDiv.style.backgroundColor = "lightgreen"
    }
}

// age = "18";

// if(age === "18"){
//     console.log("Yes u r selected")
// }
// else{
//     console.log("Not")
// }

function add(a,b){
    return a + b;
}

console.log(add(22,44))