import { makeQuiz, normalizeText } from "./assets/js/core.js";
const vocab=[
{id:"demo1",tagalog:"Kumusta",english:"Hello",practice:true},
{id:"demo2",tagalog:"Salamat",english:"Thank you",practice:true},
{id:"demo3",tagalog:"Oo",english:"Yes",practice:true},
{id:"demo4",tagalog:"Hindi",english:"No",practice:true}
];
const questions=makeQuiz(vocab,4,Math.random);
let qi=0;
const q=document.getElementById("quiz-question"),choices=document.getElementById("quiz-choices"),feedback=document.getElementById("quiz-feedback");
function draw(){const item=questions[qi];q.textContent=(qi+1)+" / "+questions.length+" · "+item.prompt;choices.replaceChildren();feedback.textContent="";
item.choices.forEach((choice,i)=>{const b=document.createElement("button");b.type="button";b.className="action secondary";b.textContent=choice;b.addEventListener("click",()=>{feedback.textContent=i===item.answer?"Correct · "+item.explanation:"Review · "+item.explanation;choices.querySelectorAll("button").forEach(button=>button.disabled=true)});choices.append(b)})}
document.getElementById("quiz-next").addEventListener("click",()=>{qi=(qi+1)%questions.length;draw()});
const field=document.getElementById("quiz-normalize"),result=document.getElementById("quiz-normalized");field.addEventListener("input",()=>result.textContent=normalizeText(field.value));draw();
