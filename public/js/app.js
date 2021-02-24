const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const text = document.querySelector("#message");
const errorMsg = document.querySelector("#error_msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const DataObj = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    text: text.value,
  };

  axios
    .post("/", DataObj)
    .then((response) => {
      errorMsg.innerHTML = response.data;
      console.log(response);
    })

    .catch((err) => console.log(err));
});
