const validate = (v) => {
  const re_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const re_text = /^[^{}<>^$]+$/;
  const errorObj = {
    name: null,
    email: null,
    subject: null,
    text: null,
    tokenR: null,
  };
  if (v.name.length < 2) {
    errorObj.name = "The name must be 2 characters or longer!";
  }
  if (!v.email.match(re_email)) {
    errorObj.email = "Please enter a valid email address!";
  }
  if (v.subject == null || v.subject === "") {
    errorObj.subject = "Subject is empty please add a subject!";
  } else if (!v.subject.match(re_text)) {
    errorObj.subject = "Special Characters Are not Allowed ";
  }
  if (v.text == null || v.text === "") {
    errorObj.text = "Your Message is empty please add a Message!";
  } else if (!v.text.match(re_text)) {
    errorObj.text = "Special Characters Are not Allowed";
  }

  if (v.tokenR === "") {
    errorObj.tokenR = "ReCaptcha must be checked!";
  }
  const i = Object.values(errorObj).findIndex((item) => item !== null);
  if (i < 0) {
    return null;
  } else {
    return errorObj;
  }
};

export default validate;
