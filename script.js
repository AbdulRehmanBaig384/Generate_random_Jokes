const joke_generator=document.getElementById('theory');
const button=document.getElementById('btn');
const url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
let get_joke=()=>{
    joke_generator.classList.remove("fade");
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        console.log(item.joke);
        joke_generator.textContent=`${item.joke}`;
        joke_generator.classList.add("fade");
    })
}
button.addEventListener('click',get_joke)
get_joke();
// const joke_generator = document.getElementById('theory');
// const button = document.getElementById('btn');
// const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

// // Function to fetch a joke
// let get_joke = () => {
//     fetch(url)
//         .then((data) => data.json())
//         .then((item) => {
//             // Update the text content and add the fade effect
//             joke_generator.textContent = item.joke || "Couldn't fetch a joke. Try again!";
//             joke_generator.classList.add("fade");
//         });
// };

// // Add click event listener to the button
// button.addEventListener('click', () => {
//     joke_generator.classList.remove("fade"); // Remove the class to restart fade effect
//     void joke_generator.offsetWidth; // Trigger reflow to reapply animation
//     get_joke();
// });

// // Fetch a joke when the page loads
// get_joke();
