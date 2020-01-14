if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("college.js", function () {
    // FIXME:
    //  describe("college_name()", function () {
    //      it("returns a random college_name", function () {
    //          sinon.stub(faker.college,'college_name').returns('JNTU');
    //          var college = faker.college.college_name();
  
    //          assert.equal(college_name, 'JNTU');
    //          faker.college.college_name.restore();
    //      });
    //  });
  
    describe("branch()", function () {
        it("returns random branch specilization", function () {
            sinon.stub(faker.college, 'branch').returns('CSE');
            var branch = faker.college.branch();
  
            assert.equal(branch, 'CSE');
            faker.college.branch.restore();
        });
    });
  
    describe("gender()", function () {
      it("returns random gender", function () {
        sinon.stub(faker.college, 'gender').returns('Womens');
            var gender = faker.college.gender();
  
            assert.equal(gender, 'Womens');
            faker.college.gender.restore();
        });
    });
  
    describe("college_address()", function () {
        it("returns a random college_address", function () {
            sinon.stub(faker.college, 'college_address').returns('Hyderbad');
            var college_address = faker.college.college_address();
  
            assert.equal(college_address, 'Hyderbad');
            faker.college.college_address.restore();
        });
    });

  });
