import { html, render } from "lit";

const disabled = false;
const label = "my label";
const myClass = "my-class";
const value = "my value";
const element = html` <input
  @click=${() => console.log("click")}
  @input=${(e) => console.log(e.target.value)}
/>`;

render(element, document.getElementById("root"));
