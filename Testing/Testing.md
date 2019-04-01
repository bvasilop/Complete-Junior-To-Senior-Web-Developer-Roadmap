# Testing

## Testing Overview

* **Testing** is a method in software development where individual units of source code, assets or programs are tested to see whether they work properly.
* A **test** is simply another file in your project.
  * This file never runs in production or on a product website. Instead it runs in development.
* It's a file that you run to make sure everything works before you release it to production. That way you just have code written that works as intended.
* **TDD** or **Test Driven Development** is the idea of writing tests even before you actually write your application code so that you start writing code based on the tests that you provide.

## Unit Tests

* Tests individual functions or classes.
* They are the cheapest to implement, the easiest to implement and 90 percent of your time you're going to be working on writing unit tests.

## Integration Tests

* Testing how different pieces of code work together.
* It can be testing of whether the database works with, for example, the Express App that's requesting some data from the database, or it could be testing how a function works with another function and how this connection between them, functions.

## Automation Tests

* **Automation tests** or **UI tests** usually involve testing real life scenarios on the browser by controlling the browser and making
sure that the expected behavior on the web is correct.
* You can have humans doing this where they go through and click through everything on your Web site and make sure everything works, or you can programmatically have robots or code that you write that runs through these tests for you.
* As we go down into this order, (Unit Tests, Integration Tests, Automation Tests), they become more and more expensive to implement.

## Testing Libraries

![testing-libraries](/Testing/testing-libraries.PNG)

* The scaffolding giving us the ability to use some function calls and some new methods for us to actually write our tests.
  * Think of this as scaffolding or building this structure around our tests.
* The top three libraries for testing is **Jasmine**, **Jest** and **Mocha**.
* These are just **NPM** installed libraries so they're available on **NPM** and you can add them to build your scaffolding.

### Assertion Libraries

* **Jasmine** and **Jest** are examples that come with their own assertion library.
* **Chai** usually gets paired with **Mocha** in order to have an assertion library.
* An assertion library provides functions that are assertion functions.
  * It's essentially a tool to allow you to test that the variables contain the expected value.
* **Chai** uses **BDD** or behavioral driven development. **[Chai Assertion Library](https://www.chaijs.com/api/bdd)**

### Test Runner

* A **test runner** is a program that allows us to run our tests `npm run test`.
* **Jasmine**, **Jest**, **Mocha** and **Karma** all have their own test runners.
* **Karma** allows you to run tests in the browser.
* a **test runner** can run tests in different environments.
* Running our tests in the browser can be inefficient because it takes a lot of time.
  * We have to run every single test through the browser using the browser API.
* Other options exist such as **Puppeteer** by **Google** which is what we call a **headless browser**.
  * It's a node library which provides a high level API to control the headless version of their browser.
  * Think of it as a stripped down browser that makes your tests a little bit faster.
  * It can also be configured to do things such as generate screenshots PDSA of pages.
  * It can automate form submissions.
  * You can do UI testing with it.
  * You can monitor keyboard input.
* **jsdom** is a JavaScript implementation of the **DOM**.
  * It's not the real **DOM** but a pseudo javascript version of it.
  * We can have a **DOM**-like API that works without actually needing the browser.

### Mocks

* **Jasmine**, **Jest** and **Sinon.js** all use them.
* Is kind of like faking a function or a behavior to test different parts of a process.
  * So this might be really really good for integration tests.
  * **[Sinon JS](https://sinonjs.org/)**

### Spies

* Provide information about functions.
  * How many times they were called in what cases and by who.

### Stubs

* **Stubbing** replaces selected functions with a function to ensure that the expected behavior happens.
* **[Sinon JS](https://sinonjs.org/)** can be used to fake a server during our tests.

### Code Coverage

* **Code Coverage** is provided by libraries like **Istanbul**.
  * **Jest** has code coverage already included but actually has **Istanbul** running underneath the hood.
  * Commands for testing coverage `npm test --coverage`
   **![test coverage](./test-coverage.PNG)**

## Popularity

* **Jest** has overtaken **Jasmine** as the most popular because it has all of the components of the testing tools built in.
* **Mocha** combined with **Chai** and **Sinon.js** also very popular and used frequently.
* Most of these libraries follow the idea of **behavioral driven development** which is, we describe what a function does and what behavior we expect out of them.
* Luckily if it wasn't for **createReact** app we'd have to **NPM** install all of the dependencies manually, set them up and add them to our **NPM** scripts to run all these tests and test coverages.
  * With **createReact** app up we have everything configured right out of the box.
  * **Jest** tools that are used in **createReact**.
    * **Enzyme** created by **Air BnB** and helps us write tests better for **React** components.
    * **Snapshot testing**
    * these are implemented on most **React** projects that are encountered and are pretty much become the standard in the **React** ecosystem to use these libraries.
* If you just want to get started and are looking for a fast framework that can handle everything and has everything in one, use **Jest**.
* If you want a very flexible extendable configuration where you can plug in some things then use **Mocha**.
  * **Mocha** is a little harder to set up because of all the things that we need to add on but it's more flexible and open to extensions.

### Other Testing Libraries

* **Ava**, which  does parallelism really well. (it can run tests  really fast.)
* **Tape** is a really low-level, simple, light library.
