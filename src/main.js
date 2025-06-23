// import { add } from "./tools";
// import './style/style.css';
// import './style/style.scss'

// import img from "./images/20230803093424.jpg"

// console.log(add(1, 2));


// const el = document.createElement("div");
// el.className = "title";
// el.innerHTML = "Miku";
// document.body.appendChild(el)

// const image = document.createElement("img");
// image.src = img;
// document.body.appendChild(image)

import App from "./App.vue";

import { createApp } from "vue";

const app = createApp(App);
app.mount("#app")