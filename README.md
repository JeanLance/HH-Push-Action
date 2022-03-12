# Pull Request 2
Now that you learned how to perform git commands and pull-request, we will now do another practice.

In this assignment, you will be required to have only 1 GitHub user account.

Observe the differences of each branches, especially the feature branches. Your task is to make the 2 feature branches reflect to the develop branch using pull-request. Here are the guidelines you can follow:

1. In GitHub, open a pull-request from feature/git_add_all to develop.
1. Approve your own pull-request.
1. Do the same above steps for feature/git_add_asterisk.

All of these steps should be done only inside your created central repository. At the end of the day, make sure the codes are successfully combined to the central destination branch. 

## Pre-requisites:

In your working directory, download the contents from https://github.com/hh-kigcasan/git-commands-v2.git. 
Make sure you create master, develop, feature/git_add_all, feature/git_add_wildcard local repository branches.
Make all branches reflect to newly-created central repository.
Set up branch restrictions for master and develop of central repository.
Run local unit testing to check failed test cases.
Requirements:

One user should introduce code changes to "feature/git_add_all" . Work in the add(“.”) feature.
Another user should introduce code changes to "feature/git_add_wildcard". Work in the add(“*”) feature.
Once unit tests passed, open merge requests with destination central "develop" branch.
Once there are two open merge requests, approve them. 

## Tips:

Use git config to set author before committing
Use git log to check commit author.
Always do local unit testing before introducing to central repository.
If you find problem combining the codes in central, always recall past lesson. At the end of the day, make sure that the new codes from two different features reflect to central "develop" branch.


Note: Naming convention is so important, not only in codes, but also in naming branches. This makes our branch history very beautiful, yet meaningful. In this case, we want to tell that “Hey! I made a new feature!” -- in indirect way. So, from now on, whenever you’re making new feature, do also the same format in naming a branch: feature/<feature name or id given by your team>.

Good luck! Don't forget to upload necessary screenshots related to each requirement.
