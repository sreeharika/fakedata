// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;

console.log(faker.college.college_name());
console.log(faker.college.branch());
console.log(faker.college.college_address());
console.log(faker.college.gender());