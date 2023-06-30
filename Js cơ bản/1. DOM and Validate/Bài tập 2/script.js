function isValidEmail(account) {
  const accountPattern = /^[a-z0-9_]{6,}$/;
  return accountPattern.test(account);
}

const validAccounts = ["123abc_", "_abc123", "______", "123456", "abcdefg"];
const invalidAccounts = [".@", "12345", "1234_", "abcde"];

console.log("Valid account:");
validAccounts.forEach((account) => {
  if (isValidEmail(account)) {
    console.log(account);
  }
});

console.log("Invalid account:");
invalidAccounts.forEach((account) => {
  if (!isValidEmail(account)) {
    console.log(account);
  }
});
