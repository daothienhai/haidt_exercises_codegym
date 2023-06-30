function is_usZipCode(str) {
  var regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (regexp.test(str)) {
    return true;
  }
  return false;
}

var zipcode = "03201-2150";
console.log(is_usZipCode(zipcode));
zipcode = "7892";
console.log(is_usZipCode(zipcode));
