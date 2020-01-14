/**
 *
 * @namespace faker.College
 */
var College  = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * college
     *
     * @method faker.college.college
     */
    self.college = function () {
      return fake('{{college.college_name}} {{college.branch}}');
    };
  
    self.college.schema = {
      "description": "Generates a random college name.",
      "sampleResults": ["JBIT", "JNTU", "VMTW"]
    };
  
    /**
     * college_name
     *
     * @method faker.college.college_name
     */
    self.college_name = function () {
      return faker.random.arrayElement(faker.definitions.college.college_name);
    };
  
    self.college_name.schema = {
      "description": "Generates a college name.",
      "sampleResults": ["JBIT", "HITS", "VBIT"]
    };
  
  
    /**
     * branch
     *
     * @method faker.college.branch
     */
    self.branch = function () {
      return faker.random.arrayElement(faker.definitions.college.branch);
    };
  
    self.branch.schema = {
      "description": "Generates a branch specialization.",
      "sampleResults": ["ECE", "EEE", "CIVIL"]
    };
  
    /**
     * gender
     *
     * @method faker.College.gender
     */
    self.gender = function () {
      return faker.random.arrayElement(faker.definitions.college.gender);
    };
  
    self.gender.schema = {
      "description": "Generates a gender.",
      "sampleResults": ["Womens", "Mens", "Co-ed"]
    };
  
    /**
     * college_address
     *
     * @method faker.college.college_address
     */
    self.college_address = function () {
      return faker.random.arrayElement(faker.definitions.college.college_address);
    };
  
    self.college_address.schema = {
      "description": "Generates a college address.",
      "sampleResults": ["Jagtial", "Kamareddy", "Suryapet"]
    };
  
    
}
module["exports"] = College;