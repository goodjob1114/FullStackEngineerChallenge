# Full Stack Developer Challenge
This is a fullstack developer challenge from [here](https://github.com/Pay-Baymax/FullStackEngineerChallenge).

## To start the demo

1. Make sure you have [yarn](https://yarnpkg.com/lang/en/docs/install/) and [docker](https://docs.docker.com/install/) installed on your machine.
2. Clone this repo and install dependencies:
  
      ```sh
      git clone https://github.com/wuct/FullStackEngineerChallenge.git
      cd ./FullStackEngineerChallenge
      yarn 
      ```

3. Build the server and the client:

      ```sh
      yarn run build
      ```

    > Note: there is a TypeScript version warning because TypeScript 3.5 is not officially supported by typescript-estree currently. However, this will not affect our build.

4. Seed the database with mock data:

      ```sh
      docker-compose up db
      yarn workspace @wuct/server seed
      docker-compose down 
      ```

    > Note: a folder `./pgdata` will be created on the host to keep the data in the database accross container lifecycles.

5. Start all services:

      ```sh
      docker-compose up 
      # or `docker-compose -d up` to run in the background
      ```

    Then go to:

    - Performance review dashboard: [http://localhost:8080/]() 
    - API document (GraphQL Playgroud): [http://localhost:4000/]() 

    After finishing playing with the demo, run:

    ```sh
    docker-compose down 
    ```

    to turn down the services. Repeat this step when you want to see the demo again.

## Requirements
Design a web application that allows employees to submit feedback toward each other's performance review.

*Partial solutions are acceptable.*  It is not necessary to submit a complete solution that implements every requirement.

### Admin view
* Add/remove/update/view employees
* Add/update/view performance reviews
* Assign employees to participate in another employee's performance review

### Employee view
* List of performance reviews requiring feedback
* Submit feedback

## Challenge Scope
* High level description of design and technologies used
* Server side API (using a programming language and/or framework of your choice)
  * Implementation of at least 3 API calls
  * Most full stack web developers at PayPay currently use Java, Ruby on Rails, or Node.js on the server(with MySQL for the database), but feel free to use other tech if you prefer
* Web app
  * Implementation of 2-5 web pages using a modern web framework (e.g. React or Angular) that talks to server side
    * This should integrate with your API, but it's fine to use static responses for some of it 
* Document all assumptions made
* Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge
* Fork this repo in github
* Complete the design and code as defined to the best of your abilities
* Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the PayPay interview team
* Complete your work in your own github repo and send the results to us and/or present them during your interview

## What are we looking for? What does this prove?
* Assumptions you make given limited requirements
* Technology and design choices
* Identify areas of your strengths
* This is not a pass or fail test, this will serve as a common ground that we can deep dive together into specific issues
