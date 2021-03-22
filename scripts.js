// interactive burger menu 
// when clicked toggle to show menu. 

const navElement = document.querySelector(`nav`)

navElement.addEventListener(`click`, function(event) {
    if(event.target.tagName === `I`){
        showBurgerNav(event.target);
    }
})

function showBurgerNav(nav) {
    nav.parentElement.classList.toggle(`burgerNavShow`)
}


//Comment section
// grab value from form on submit
// dynamically create new article sections for comment
// take value from form and append to comment section


// Get date/month and translate from number to string
const today = new Date();
const dayOfWeek = new Array(7);
dayOfWeek[0] = `Sunday`;
dayOfWeek[1] = `Monday`;
dayOfWeek[2] = `Tuesday`;
dayOfWeek[3] = `Wednesday`;
dayOfWeek[4] = `Thursday`;
dayOfWeek[5] = `Friday`;
dayOfWeek[6] = `Saturday`;
const day = dayOfWeek[today.getDay()];

const monthOfYear = new Array(12);
monthOfYear[0] = `January`;
monthOfYear[1] = `February`;
monthOfYear[2] = `March`;
monthOfYear[3] = `April`;
monthOfYear[4] = `May`;
monthOfYear[5] = `June`;
monthOfYear[6] = `July`;
monthOfYear[7] = `August`;
monthOfYear[8] = `September`;
monthOfYear[9] = `October`;
monthOfYear[10] = `November`;
monthOfYear[11] = `December`;
const month = monthOfYear[today.getMonth()];

const date = today.getDate();
// Figure out how to use if conditional to get st/nd/rd/th to show up after cretain dates

const year = today.getFullYear();



const commentForm = document.querySelector(`.blogComment`)

commentForm.addEventListener(`submit`, function(event) {
    event.preventDefault();
    const name = document.querySelector(`input[name=name]`).value;
    const comments = document.querySelector(`textarea`).value;
    if (name && comments) {
        const articleElement = document.createElement(`article`)
        articleElement.innerHTML = `
        <div class="profilePic">
            <img src="./assets/blank-person.png" alt="blank picture of a person">
        </div>
        <div class="comment">
            <p>${day} ${month} ${date}, ${year} by ${name}</p>
            <p>${comments}</p>
        </div>`
        const commentElement = document.querySelector(`.commentSection`)
        commentElement.appendChild(articleElement)
        commentForm.reset();
    } else if (!name && comments) {
        const articleElement = document.createElement(`article`)
        articleElement.innerHTML = `
        <div class="profilePic">
            <img src="./assets/blank-person.png" alt="blank picture of a person">
        </div>
        <div class="comment">
            <p>${day} ${month} ${date}, ${year} by Anonymous</p>
            <p>${comments}</p>
        </div>`
        const commentElement = document.querySelector(`.commentSection`)
        commentElement.appendChild(articleElement)
        commentForm.reset();
    } else {
        alert(`Please enter a comment`)
    }
})