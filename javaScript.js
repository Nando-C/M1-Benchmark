// =========================  JS EXERCISES  ===========================

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = 'John'
let y = "Doe"
console.log(`"${x} <> ${y}"`)

// 22) Create an object with properties such name, surname, email
let object = {
    names: 'Pepito',
    surname: 'Perez',
    email: 'pepito.perez@email.com'
}
// console.log(object)

// 23) Delete Email from the previously created object
delete object.email
// console.log(object)

// 24) Create an array with 10 strings in it
let arr = ['number0','number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9']

// 25) Print in the console every string in the previous array
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// 26) Create an array with 100 random numbers in it
let randArr =[]
for(let i=0; i<100; i++){
    randArr[i] = Math.floor(Math.random() * 100)
}
// console.log(randArr)

// 27) Wrote a function to get the MAX and the MIN from the previously created array
let maxMin = function(arr) {
    let eval = {
        min: 1000,
        max: 0
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] < eval.min) {
            eval.min = arr[i]
        }
        if(arr[i] > eval.max) {
            eval.max = arr[i]
        }
    }
    return eval
}
console.log(maxMin(randArr))

// 28) Create an array of arrays, in which every array has 10 random numbers
let bigArr =[]
for(let i=0; i<10; i++) {
    let smallArr = []
    for(let j=0; j<10; j++){
        smallArr[j] = Math.floor(Math.random() * 10)
    }
    bigArr[i] = smallArr
}
console.log(bigArr)

// 29) Create a function that gets 2 arrays and returns the longest one
const longest = function(arr1, arr2) {
    return (arr1.length > arr2.length ? arr1 : arr1.length < arr2.length ? arr2 : 'Both arrays have the same lenght')
}

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

const innerSum = function(arr) {    // this is a function that receives an array and returns the sum of its values
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
const higher = function(arr1, arr2) {
    let sum1 = innerSum(arr1)
    let sum2 = innerSum(arr2)
    return (sum1 > sum2 ? arr1 : sum2 > sum1 ? arr2 : 'Both arrays have the same sum of its values')
}

// =========================  DOM EXERCISES  ===========================

// 31) Get element with ID "container" from the page
let divElement = document.getElementById('container')
// console.log(divElement)

// 32) Get every "td" from the page
let tdArray = document.getElementsByTagName('td')
// console.log (tdArray)

// 33) Create a cycle that prints the text inside every td of the page
for(let i=0; i<tdArray.length; i++) {
    console.log(tdArray[i].innerText)
}

// 34) Write a function to change the heading of the page
const changeHeading = function(newTitle){
    let title = document.getElementById('title')
    title.innerText = newTitle
}

// 35) Write a function to add an extra row to the table
const addRow = function(){
    let table = document.getElementById('table')
    let newRow = document.createElement('tr')
    table.appendChild(newRow)
}

// 36) Write a function to add the class "test" to each row in the table
const addClassTest = function(){
    let rows = document.getElementsByTagName('tr')
    for(let i=0; i<rows.length; i++){
        rows[i].classList.add('test')
    }
}

// 37) Write a function to add a red background to every link in the page
const addRedBkgnd = function(){
    let links = document.getElementsByTagName('a')
    for(let i=0; i<links.length; i++){
        links[i].style.backgroundColor = "red"
    }
}

// 38) Console log "Page loaded" when the page is correctly loaded
window.onload =function() {
    console.log('Page loaded')
}

// 39) Write a function to add new items to a UL
const addNewItemsToUl = function(task){
    let ul = document.getElementsByTagName('ul')[0]
    let newItem = document.createElement('li')
    newItem.innerText = task
    ul.appendChild(newItem)
}

// 40) Write a function to empty a list
const emptyList = function(selector){   //this function receives the selector of the desired list and empties it
    let list = document.querySelector(selector)
    list.innerHTML = ''
}


// =========================  EXTRA  ===========================

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL

const showURL = function(event){
    alert(event.target.href)
}
let link = document.getElementsByTagName('a')
for(let i=0; i<link.length; i++){
    link[i].addEventListener('mouseenter', showURL)
}

// // 42) Add a button to hide every image on the page
const hideImages = function(event){
    let img = document.getElementsByTagName('img')

    for(let i=0; i<img.length; i++){
        img[i].classList.toggle('hide')
    }
}

let div = document.getElementById('container')
let hideImgButton = document.createElement('button')
hideImgButton.innerText = 'Hide/Show Images'
hideImgButton.addEventListener('click', hideImages)
console.log(hideImgButton)
div.appendChild(hideImgButton)

// 43) Add a button to hide and show the table from the page
const hideTable = function(){
    let table = document.getElementsByTagName('table')[0]
    table.classList.toggle('hide')
}
let hideTableButton = document.createElement('button')
hideTableButton.innerText = 'Hide / Show Table'
hideTableButton.addEventListener('click', hideTable)
div.appendChild(hideTableButton)

// 44) Write a function to sum every number inside the TD (if the content is numeric)
const sumTableTd = function(){
    let tdArray = document.getElementsByTagName('td')
    let sum = 0
    let numArr = []
    for(let i=0; i<tdArray.length; i++){
        let num = parseInt(tdArray[i].innerText)
        if(isNaN(num) === false) {
            sum += num
        } 
    }
    // console.log(sum)
    return sum
}

// 45) Delete the last letter from the title each time the user clicks on it
const delLast = function(event){
    let str = event.target.innerText
    str = str.substring(0, str.length - 1)
    title.innerText = str
}

let title = document.getElementById('title')
title.addEventListener('click', delLast)

// 46) Change a single TD background color when the user clicks on it
const changeBkgnd = function(event) {
    let tdSelected = event.target
    tdSelected.style.backgroundColor = 'red'
}
 let tdArr = document.getElementsByTagName('td')
 for(let i=0; i<tdArr.length; i++){
     tdArr[i].addEventListener('click', changeBkgnd)
 }

//  47) Add a button DELETE, on click it should delete a random TD from the page
const deleteRandTd = function(){
    let rand = Math.floor(Math.random() * tdArr.length)
    tdArr[rand].classList.add('hide')
}

let delTdButton = document.createElement('button')
delTdButton.innerText = 'Delete Random cell'
delTdButton.onclick = deleteRandTd
div.appendChild(delTdButton)

// 48) Add a pink border to a cell when the mouse is over it
const pinkBorder = function(event){
    let selected = event.target
    selected.classList.toggle('pinkBorder')
}
// let tdArr = document.getElementsByTagName('td')
for(let i=0; i<tdArr.length; i++){
    tdArr[i].addEventListener('mouseover', pinkBorder)
}

// 49) Write a function to add a table with 4 rows and 3 columns programmatically
const addTable = function(){
    let newTable = document.createElement('table')
    console.log(newTable)
    // let rows = []
    for(let r=0; r<4; r++){
        let newRow = document.createElement('tr')
        for(let c=0; c<3; c++){
            let newTd = document.createElement('td')
            newTd.innerText = 'row: ' + [r+1] + ' column: ' + [c+1]
            newRow.appendChild(newTd)
        }
        newTable.appendChild(newRow)
    }
    div.appendChild(newTable)
}

// 50) Write a function to remove the table from the page
const deleteTable = function(){
    let table = document.getElementById('table')
    table.innerHTML = ""
}