# Contributing to Guess The Quote

:+1::tada: First off, thanks for taking the time to contribute! :+1::tada:

The following is a set of guidelines for contributing to Guess The Quote Project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

# How Can I Contribute?

* [Feature Development](feature-development)
* [Reporting Bugs](#reporting-bugs)
* [Pull Request](#pull-request)
* [Suggesting Enhancements](#suggesting-enhancements)
* [Your First Code Contribution](your-first-code-contribution)

## Feature Development
First verify if you have added a upstream<br />
`$>git remote -v`<br />
`origin  https://github.com/your-username/guess-quote.git (fetch)`<br />
`origin  https://github.com/your-username/guess-quote.git (push)`<br />
`upstream https://github.com/UdacityMobileWebScholarship/guess-quote.git (fetch)`<br />
`upstream https://github.com/UdacityMobileWebScholarship/guess-quote.git (push)`<br />

#### Steps to Follow:    
1. Start with an updated local development branch -- by checking out the develop branch and pulling changes:    
`git checkout develop`  
`git pull upstream develop`  

2. Create and checkout a feature branch:   
`git checkout -b initials/new-feature-branch-name`  
*Note: LP convention: Your branch name should start with your initials and then a description of your feature (as above).*  

3. Do work in your feature branch, committing early and often:    
`git commit -m "Comment about the commit"`  

4. Rebase frequently to incorporate upstream changes:  
`git fetch upstream`  
`git rebase upstream/develop`          

5. Once you have reviewed your changes, and verified formatting and intention, you can push the changes to your fork:   
`git push -u origin initials/new-feature-branch-name`  

You are now ready to create a Pull Request.
Once you're pull request is successfully accepted make sure to delete the branch on your local filesystem
`$>git branch -d new-feature-branch-name`

## Reporting Bugs
This section guides you on how to submit an effective bug report for Guess The Quote. Following these guidelines will help maintainers and the community understand your report :pencil: and reproduce the behavior :computer: :computer:. When you create a bug report, please include as many details as possible.

**Before submitting a bug report**
* Perform a cursory search to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

**How Do I Submit A (Good) Bug Report?**
* **Give a clear and descriptive title** to identify the problem.
* **Explain what behavior you expected to see instead and why**.
* **Steps to reproduce the unintended behaviour**.

## Pull Request
Now here's an important thing that you should do while committing your code for review. <br />

**7 simple rules to great git commit message**
 * Limit the subject line to 50 characters
 * Capitalize the subject line
 * Do not include issue numbers in the PR title
 * Include screenshots and animated GIFs in your pull request whenever possible
 * Separate subject from body with a blank line
 * Wrap the body at 72 characters
 * Use the body to explain what and why vs. how

 ## Suggesting Enhancements
 This section guides you on how to submit an enhancement suggestion for Guess The Quote, including completely new features and minor improvements to existing functionality. Following these guidelines will help maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

**How Do I Submit A (Good) Enhancement Suggestion?**

* **Use a clear and descriptive title** to identify the suggestion.
* **Include screenshots and animated GIFs**
* **Explain why this enhancement would be useful**

## Your First Code Contribution
Unsure where to begin contributing to the project? You can start by looking through these beginner and help-wanted issues:

* **Beginner issues** - issues which should only require a few lines of code, and a test or two.
* **Help wanted issues** - issues which should be a bit more involved than beginner issues.
