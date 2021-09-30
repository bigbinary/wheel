import faker from "faker";

// eslint-disable-next-line
export let fake = {};

function firstName() {
  return faker.name.firstName();
}
function lastName() {
  return faker.name.lastName();
}
function companyName() {
  return faker.company.companyName();
}
function email() {
  return (firstName() + "." + randomString() + "@example.com").toLowerCase();
}
function streetAddress() {
  return faker.address.streetAddress();
}
function streetName() {
  return faker.address.streetName();
}
function city() {
  return faker.address.city();
}
function zipCode() {
  return faker.address.zipCode();
}
function country() {
  return faker.address.country();
}
function sentence() {
  return faker.lorem.sentence();
}
function number() {
  return faker.random.number({ min: 3, max: 9 });
}
function amount() {
  return faker.random.number({ min: 1, max: 5 });
}
function projectName() {
  return faker.commerce.productName();
}
function department() {
  return faker.commerce.department();
}
function word() {
  return faker.lorem.word();
}
function words() {
  return faker.lorem.words();
}
function randomString() {
  return faker.random.alphaNumeric(10);
}
function state() {
  return faker.address.state();
}
function quantity() {
  return faker.random.number({ min: 1, max: 3 });
}
function randomDay() {
  return faker.random.number({ min: 1, max: 27 });
}
function percentage() {
  return faker.random.number({ min: 1, max: 2 });
}
function uniqueName() {
  return faker.name.firstName() + faker.random.number({ min: 1, max: 100 });
}

Object.defineProperty(fake, "firstName", { get: firstName });
Object.defineProperty(fake, "lastName", { get: lastName });
Object.defineProperty(fake, "companyName", { get: companyName });
Object.defineProperty(fake, "email", { get: email });
Object.defineProperty(fake, "streetAddress", { get: streetAddress });
Object.defineProperty(fake, "streetName", { get: streetName });
Object.defineProperty(fake, "city", { get: city });
Object.defineProperty(fake, "zipCode", { get: zipCode });
Object.defineProperty(fake, "country", { get: country });
Object.defineProperty(fake, "sentence", { get: sentence });
Object.defineProperty(fake, "number", { get: number });
Object.defineProperty(fake, "amount", { get: amount });
Object.defineProperty(fake, "projectName", { get: projectName });
Object.defineProperty(fake, "department", { get: department });
Object.defineProperty(fake, "word", { get: word });
Object.defineProperty(fake, "words", { get: words });
Object.defineProperty(fake, "randomString", { get: randomString });
Object.defineProperty(fake, "state", { get: state });
Object.defineProperty(fake, "quantity", { get: quantity });
Object.defineProperty(fake, "randomDay", { get: randomDay });
Object.defineProperty(fake, "percentage", { get: percentage });
Object.defineProperty(fake, "uniqueName", { get: uniqueName });
