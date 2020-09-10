let title = "Name:";
let myName = "lucas domit";
console.log(title, myName.toUpperCase());

let myCareer = "Aspiring WebDev & Audio Enginer";
console.log(myCareer);

let myBio = "Description: BACON IS KING";
console.log(myBio);

console.log(" ")

let myInterest = ['Interests:', '* music', '* food', '* games']
console.log(myInterest[0])
console.log(myInterest[1])
console.log(myInterest[2])
console.log(myInterest[3])

console.log(" ")

console.log("My Previous Experience")

function displayPosition(companyName, jobTitle, description) {
    return companyName + " " + jobTitle + " " + description;
}
let position1 = displayPosition("* ae", "sales", "soldStuff")
console.log(position1)

let position2 = displayPosition("* SSA","maintenance", "fixed stuff")
console.log(position2)

let position3 = displayPosition("* self","audio god","make things sound good")
console.log(position3)

console.log(" ")

console.log("MADDD SKillZZZZZZZZZ")

//my brain is stopping - how to make coolFactor boolean for BAM

//function displaySkill(skillName, coolFactor) {
//    if (skillName.length > 7);
//    return coolFactor + skillName
//}  !!!!couldnt get conditional BAM - too late

function displaySkill(skillName){
    return skillName
}

let skill1 = displaySkill("music")
console.log(skill1)
let skill2 = displaySkill("cooking")
console.log(skill2)
let skill3 = displaySkill("BAM: photographing pandas")
console.log(skill3)