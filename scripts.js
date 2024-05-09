const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (!dividend || !divider) {
      result.innerText ="Division not performed. Both values are required in inputs. Try again"
    ;
  } else if (isNaN(parseFloat(dividend)) || isNaN(parseFloat(divider))) {
    console.trace("Error: Entry is not a number");
    document.body.innerHTML = `<h1 style="text-align: center;"> Something critical went wrong. Please reload the page! </h1>`;
  } else if (divider == 0) {
    console.trace("Error: Cant divide by zero");
    result.innerText ="Division not performed. Invalid number provided. Try again";
  } else {
    result.innerText = Math.trunc(dividend / divider);
  }
});

