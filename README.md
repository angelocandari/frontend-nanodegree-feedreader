# Feadreader Testing
## I. Object
To test if Feedreader app is working properly by conducting a series of tests
through [Jasmine framework](https://jasmine.github.io).

## II. Getting Started
To successfully run the spec feedreader, download all files from repository and
open index.html. You can also save the files on a localhost and launch the
application locally.


## III. Testing
**RSS Feeds**
This test checks if allFeeds array exists and makes sure that it is not empty.
It also checks if URLs and Names of each of allFeeds variables are defined and
are not empty.

**The Menu**
This test checks if the menu is functioning properly. It first tests if the at
the initial state, the menu sidebar is hidden by default as you open the app.
It then checks if menu icon is clicked, the menu toggles hide/show the menu.

**Initial Entries**
This checks if feed loads at least 1 entry when async has loaded completely.

**New Feed Selection**
Thus test checks if content feed changes when a new feed is loaded. It does this
by simulating loading the default feed and then loading a new feed and compares
both feed. It is important to point out that these feed will only initialize
only when the resources from an ajax requests has loaded successfully asynchonously.
