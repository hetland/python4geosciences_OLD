# python4geosciences

This respository contains the materials for the Texas A&M Python for Geoscientists class, OCNG 489/689.

Course materials, including the iPython notebooks from the lectures are found in the `materials` directory, homework will be due roughly every week, and can be found in the `homework` directory. Dates of the lectures and due dates for homework assignments is in this [Google calendar](link to calendar).

## Announcements

### 3/24/16

* As discussed previously in class, `basemap` hasn't been working with Python3 on Windows machines. For people using Windows, you'll want to follow the directions on [this page](http://conda.pydata.org/docs/py2or3.html#create-python-2-or-3-environments) to create a Python2.7 environment to use when you want to use `basemap`. Then, you can active that environment with `activate py27` in a terminal window to then start your Jupyter notebook in Python2.
* Don't forget that the way you can install packages is with `conda install [packagename]`. For mapping-related packages, we've been using the special IOOS channel with the following: `conda install --channel IOOS netcdf4`, for example.

### 3/8/16

* Grad students: email us your project idea, packages and datasets you intend to use, people you will work with, and a brief description (about a paragraph) by Friday March 11th.

### 2/11/16

* Please use the Google Group forum; it is an excellent way to discuss the homework. You may need to go into the group and change your email settings so that you receive emails when there is forum activity.
* Notes about homework questions by early: please do so! Ask early, and be specific in your question.
* We added a couple of usage examples to hw03 Question 17 (grad question), so go check it out for a little more guidance.
* hw03 has been pushed back to next Thursday

#### hw02:
* Grades and solutions are posted now!
* We will email out graded homework notebooks
* Extra help session for people who earned the equivalent of about 60% or less on hw02. We'll email about this. The people we email can earn points on their hw02 grade.
* Have finished going through hw02. Overall notes:
 - Put your name at the top and be clear which question a solution is addressing.
 - Go through solutions in detail; can also see assertions there. Make sure you understand solutions!
 - We tried to give points in the spirit of the question, given your approach, as much as possible.
 - Start on homework earlier
 - Work together, but do your own work — it’s really clear who is working together from solutions. The danger, of course, is that you are just copying and not learning.
 - Ask questions (early!)
 - Look at what the computer is doing. You can do this with well-placed `print` statements.
 - Read the question and check your work.
 - Your code needs to run.
* A few specific notes on problems
 - Remember: typically a function will return something. This means a formal `return` statement. In some cases, people either printed `True` or `False` to the screen but returned nothing. Or, returned the string `True` instead of the boolean True.
 - The point of writing functions is to be able to use their functionality — the homeworks are no exception to this. You can use functions written in earlier problems; the function cell just needs to have been run. No need to copy them repeatedly.
 - There were a few indentation problems, which results in red text.
 - Some people caught exceptions or border cases nicely, or explored further when their solution seemed too complicated.

### 2/9/16

* Remember to commit and push your work to GitHub as you go so that you are taking full advantage of version control. This way your work is saved no matter what happens to your computer!
* Close to being finished with grading hw02. Will post solutions when finished.
* We will have an extra help session for people who are new to programming to have extra one on one help.

### 2/4/16

* Don't use words that are special in Python for variable names. Examples include `dict`, `list`, `string`. While you can overload words like that, it is confusing for reading your code and your definitions of the variables can easily get overwritten without you realizing it.

### 2/2/16

* Homeworks are due by midnight on their due date. So, your final version of hw02 should be pushed to your github homework repo by midnight Thursday night.
* A note on Stack Overflow: Our goal is to learn as much as possible while we're in this class. In real life, you use the internet to figure out how to move forward in your work, but you can't actually google the answer to your work problem. You use it to find pieces of your answer which you then put together, not your entire research project. Do the same thing on the homework problems. Work on the problem yourself and when you need to figure out how to implement a part of the problem, google to learn more. This is how you will learn the most.

### 1/28/16

* Don't use numpy for hw02 since we haven't gotten to that point yet. We want you to learn the core language first.
* hw02 is now due Thursday February 4th instead of Tuesday February 2nd.

### 1/26/16

* Meeting in 602 from now on. This is to enable group work especially — we encourage you to work with your neighbor on exercises during class.
* Don't forget to regularly `git pull` in your terminal window or `Sync` in GitHub Desktop in the course repository to get the latest materials. Note that if you have changed any of the files locally (for example, because you were following along in class and changed the code) and want to just discard those changes, you can use `git checkout -- [file_that_changed]` to reset the file.
* Remember: hw02 is due Tuesday Feb. 2nd. Please join the [google group](https://groups.google.com/forum/#!forum/python4geosciences2016) and the associated calendar to stay up to date on the course timing.
* We've set up a course in eCampus for sharing grades.
