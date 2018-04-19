<p align="center"> <img height="100" src="https://raw.githubusercontent.com/twishasaraiya/GuessTheQuote/master/design-assets/icon.png"></p>
<h1 align="center">GUESS THE QUOTE</h1>

It is a fun quiz game which is a  progressive web app(PWA). Built during Collaborative Projects in Google Udacity Mobile Web Specialist Scholarship.This project is built to dive further deep into PWA and learn about caching music and animations using service worker.

## Table Of Contents

  1. [Features Wishlist](#features-wishlist)
  2. [Design Specs](#design-specs)
  3. [Requirements for Development](#requirements-for-development)
  4. [Setup for Development](#setup-for-development)
  5. [Technology Stack](#technology-stack)
  6. [Contributing Guidelines](#contributing-guidelines)

## Features Wishlist

- [ ] Login/SignUp
- [ ] A complete PWA for both web and mobile users
- [ ] GUI Animations(Using Greensock)
- [ ] TextToSpeech while reading the quote
- [ ] Share your score on Social Media (like Facebook for now)

## Design Specs

  * [UI Designs](https://github.com/VarunDevPro/gtq-designs)
  * Font: [Gotham](https://www.wfonts.com/font/gotham)
  * Colors: Random for every question/session.

## Requirements for Development

 - [Node](https://nodejs.org/en/) — Preferred 8.11.1 LTS
 - [npm](https://www.npmjs.com/get-npm) — Preferred 5.8.0
 - [Git](https://git-scm.com/)

## Setup for Development

 Refer [this link](https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940) for setup illustration with examples and images
 - Fork the repository by clicking on the fork button on the top of the page. This will create a copy of this repository in your account.
 - Click on clone or download and copy the url from your forked repo
 - Open a terminal(CLI) and run the following commands:

 ```bash
    git clone https://github.com/<your-github-username>/guess-quote.git
    cd guess-quote
    npm run setup
    npm start
 ```
  - Open any browser and goto http://localhost:3000  
    **(The server is running on http://localhost:3001)**

<details>
<summary><strong> [OPTIONAL] Setup Upstreams</strong></summary>

**Note**: An upstream repository is the original UdacityMobileWebScholarship repository.

Once you have forked as directed in the previous section, you would not be following changes made here, in the original repository.

**What you can do is:**
 - cd to the directory of the forked repo you cloned above.
 - Run a command to add upstreams
 ```bash
  git remote add upstream https://github.com/UdacityMobileWebScholarship/guess-quote.git

  git fetch upstream
  git checkout -b upstream/master
  git pull upstream master

 ```
 **To return to your branch on your fork**
  - Run
   ```bash
   git checkout master
   ```

#### Next steps

You are all good to start contributing. You might however want to
make sure you periodically update the `origin/master` branch which is from your fork, with the content from `upstream/master` which is this repository's dev branch.

**Why?**
Because, Just before you submit Pull requests, or before you even change a feature, you **Need** to ensure you have all the latest changes from upstream.

This is a healthy habit to inculcate, and would ease out headaches later.

Also, Before you do the above , and begin coding something new, or modifying existing stuff, make sure you have **merged**.

the simplest is a fast forward merge

` git merge upstream/master`
But merges are complicated. Please do read official documentation on merge. Understand how they work. And then proceed to a PR.

</details>

## Discussion

 - Join our Slack team at [#cp_quote_app](https://mobilewebindiascholar.slack.com/messages/CA7486673/)

## Technology Stack

- [React](https://reactjs.org/)
- [GreenSock](https://greensock.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Contributing Guidelines

Contributions are always welcome.
For more details regarding contributing refer [CONTRIBUTING.md](https://github.com/twishasaraiya/GuessTheQuote/blob/master/CONTRIBUTING.md)
