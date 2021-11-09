# How to create a Node bot that sends happy emails throughout the year

This is a tutorial I created to teach others how to work with Nodemailer and Node cron.
[Link to article](https://dev.to/codergirl1991/how-to-create-a-node-bot-that-sends-happy-emails-throughout-the-year-25nj)

## How to run the bot locally
1. In your terminal, run `git clone https://github.com/jdwilkin4/Nodemailer-bot-tutorial.git`
2. In your terminal, under the project directory, run `npm install` to add the `node_modules` folder
3. In your terminal, under the project directory, run `touch .env`. Store these variables inside the file with your own email address, password and your friend's email address.

```
PORT = 3000
PERSONAL_EMAIL = your email goes here
EMAIL_PASSWORD = your password goes here
FRIEND_EMAIL = friend's email goes here 
```
4. In your terminal, under the project directory, run `npm start` 
