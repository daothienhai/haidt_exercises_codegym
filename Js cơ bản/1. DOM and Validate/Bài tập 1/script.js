function isValidEmail(email) {
  const emailPattern =
    /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
  return emailPattern.test(email);
}

const validEmails = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
const invalidEmails = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

console.log("Valid emails:");
validEmails.forEach((email) => {
  if (isValidEmail(email)) {
    console.log(email);
  }
});

console.log("Invalid emails:");
invalidEmails.forEach((email) => {
  if (!isValidEmail(email)) {
    console.log(email);
  }
});
