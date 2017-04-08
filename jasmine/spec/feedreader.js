/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe("RSS Feeds", function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it("are defined", function() {
      expect(allFeeds).toBeDefined(); //Checks if allFeeds exits.
      expect(allFeeds.length).not.toBe(0); //Checks if allFeeds is not empty.
    });

    it("URLs are defined", function() {
      for (var i = 0; i < allFeeds.length; i++) { //Loops through allFeeds.
        expect(allFeeds[i].url).toBeDefined(); //Checks if URL exists.
        expect(allFeeds[i].url).not.toBe(""); //Checks if URL is not empty.
      }
    });

    it("Names are defined", function() {
      for (var i = 0; i < allFeeds.length; i++) { //loops through allFeeds.
        expect(allFeeds[i].name).toBeDefined(); //Checks if name exists.
        expect(allFeeds[i].name).not.toBe(''); //Checks if name is not empty.
      }
    });
  });

  describe("The menu", function() {
    var body;
    var menuIcon;

    beforeEach(function() {
      body = $("body");
      menuIcon = $(".menu-icon-link");
    });

    //Tests if menu is hidden by default.
    it("should be hidden by default by having menu-hidden class on body", function() {
      expect(body.hasClass("menu-hidden")).toBe(true); //menu-hidden on body should be true.
    });

    //Tests if menu icon toggles hide/show of menu by checking if body has
    //menu-hidden class on body.
    it("should toggle hide/show when menu icon is clicked", function() {
      menuIcon.click(); //Simulates first click on menu icon.
      expect(body.hasClass("menu-hidden")).toBe(false); //menu-hidden on body should be false.
      menuIcon.click(); //Simulates second click on menu icon.
      expect(body.hasClass("menu-hidden")).toBe(true); //menu-hidden on body should be true.
    });
  });

  describe("Initial Entries", function() {
    var numEntries;

    //Simulates loading of the first feed.
    beforeEach(function(done) {//Passes done for async test.
      loadFeed(0, function() { //Loads first feed.
        done(); //Signals spec that async is done.
      });
    });

    //Tests if feed has loaded a feed.
    it("should load at least 1 entry", function(done) { //Initiates when async is done.
      numEntries = $(".feed .entry").length; //Stores the quantity of entries that were loaded.
      expect(numEntries).toBeGreaterThan(0); //Checks if entries are more than 1.
      done();
    });
  });

  describe("New Feed Selection", function() {
    var initFeed;
    var newFeed;

    //Simulates loading of Initial and New feed.
    beforeEach(function(done) { //Passes done for async test.
      loadFeed(0, function() { //Loads the default feed.
        initFeed = $(".feed").html(); //Stores the feed initFeed.
        loadFeed(1, function() { //Loads the new Feed.
          done(); //Signals spec that async is done.
        });
      });
    });

    //Tests if feed has changed content.
    it("should change content with newly loaded feeds", function(done) {
      expect(initFeed).toBeDefined(); //Checks if initFeed exists.
      newFeed  = $(".feed").html(); //Stores the new feed to NewFeed.
      expect(newFeed).toBeDefined(); //Checks if newFeed exists.
      expect(initFeed).not.toEqual(newFeed); //Compares InitFeed with InitFeed.
      done();
    });

  });
}());
