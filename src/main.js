import { add } from "./tools";
import './style/style.css';
import './style/style.scss'

console.log(add(1, 2));


const el = document.createElement("div");
el.className = "title";
el.innerHTML = "Miku";
document.body.appendChild(el)