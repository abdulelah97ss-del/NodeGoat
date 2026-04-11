 // Tells JavaScript to run in strict mode — catches common coding mistakes. NodeGoat uses it everywhere so we match the same style
  var assert = require("assert");
                                                                                                            
  describe("Sample Unit Test", function() {                                                               

      it("should confirm true is true", function() {                                                        
          assert.equal(true, true);
      });                                                                                                   
                                                                                                          
      it("should add two numbers correctly", function() {
          assert.equal(2 + 3, 5);
      });                                                                                                   
   
  }); 
