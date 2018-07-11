# Creating the app

This is where I log what I did to create the app and the issues I may have
had and what I did to get around them.

## First steps

### Use Node 8.9 or later

[nvm-windows](https://github.com/coreybutler/nvm-windows) lets you use
different node versions on your computer (one at a time) without reinstalling
node.

Basically you should be able to type these commands:

    nvm install 8.11.3
    nvm use 8.11.3

And you *should* be setup to use Node 8.11.3. 

**NOTE** 

*@angular/cli requires version 8.9 or greater of node, and nvm had a problem
with it!*

I had to manually download Node 8.11.3 and unpack it into the folder
`C:\Users\Jason\AppData\Roaming\nvm\v8.11.3`.  Then I think nvm picked up
that I had the version available and I could use `nvm use 8.11.3`.  This
is weird because `nvm list avaialble` shows those versions, but none of
the 8.9 or later versions would install for me.  I just get an error like this:

    $ nvm install 8.11.2
    Node.js v8.11.2 is not yet released or available.

### Install @angular/cli globally

[@angular/cli](https://github.com/angular/angular-cli) gives you the commands
to create and run your angular projects.  To install it globally in the
version of node you are using:

    npm install -g @angular/cli

This installed Angular CLI 6.0.8 for me, with angular version 6.0.7.

### CLI configuration

I like using [yarn](https://yarnpkg.com/lang/en/) for a package manager,
so I installed yarn and configured the CLI to use it.

    npm install -g yarn
    ng config -g cli.packageManager yarn

### Created the project

Then to create my project I typed:

    ng new google-font-picker --style=scss

The option `--style=scss` will make the global stylesheet and components
generated for the project use sass with the file extension scss instead
of plain css.

>**NOTE**
>
>*If you omit this and need to change it later, you'll have to change all of
your `.css` files to `.scss`, change the urls in your components, change
`angular.json` in two places to use the root `styles.scss` you renamed, and
run this command:*
>
>`ng config schematics.@schematics/angular:component.styleext scss`

I waited a few minutes for it to complete, then changed to the directory,
ran visual studio code to open that directory, and started the dev server
on port 4200:

    cd google-font-picker
    code .
    npm start

Now I could go to http://localhost:4200 in my browser and see it running.

### Running tests

The cli creates basic tests for us, so I ran `ng test`.  It takes a minute
to build and opens up a browser window with Karma displayed.  It looks like
the CLI gave us a failed test to start with!

![Failed Test](Creating_FailedTest.png)

It looks like the app component has the default title of 'app' and one of
the tests expects the field to have that value, but another test expects
the h1 tag to render the titale we gave it.  I fixed the first test to
expect the title field to be google-font-picker as well and got 2 failures
as expected.  Then I changed the title to be that and got green lights.

I created the second commit and created this repository on github: [git@github.com:JasonGoemaat/google-font-picker.git](git@github.com:JasonGoemaat/google-font-picker.git)

I added the MIT `LICENSE` file and am about to commit and push...

