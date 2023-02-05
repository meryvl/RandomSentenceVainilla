/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("Hello Rigo from the console!");

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = [" eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function randomSentence(arr1, arr2, arr3) {
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] = arr1[i][0].toUpperCase() + arr1[i].substr(1);
    }
    const number = Math.floor(Math.random() * arr1.length);
    const number2 = Math.floor(Math.random() * arr2.length);
    const number3 = Math.floor(Math.random() * arr3.length);
    const sentence = arr1[number] + " " + arr2[number2] + " " + arr3[number3];
    return sentence;
  }
  const excuseReturn = (document.querySelector(
    "#excuse"
  ).innerHTML = randomSentence(who, what, when));
});
