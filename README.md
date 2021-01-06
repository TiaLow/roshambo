# roshambo
**Description**: Simple single player Rock-Paper-Scissors game

## Author
[Tia Low](https://tialow.com/) - [LinkedIn](https://www.linkedin.com/in/tia-low/)

## Version
0.0.1

## How To Play

- Download the source code to your local machine
- Change directory into the root level
- Touch a .env file, add your PORT
  - see .envSamples for an example
- While still in root folder, **node .** to start the server
  - can also use the command **nodemon** if installed
- On a browser window, navigate to `http://localhost:<PORT>` with the same port number you used
- You'll be playing against the app, and you'll make the plays directly through the uri using your name and your play. Use the below as an example:
  - `http://localhost:<PORT>/shoot?player_name=<your_name>&play=<your_play>`
  - **play** should be either 'rock', 'paper', or 'scissors'
- The app chooses it's play at random, and then you'll see the result of the round in the response to the page
- If you're curious about the score standing, you can navigate to `http://localhost:<PORT>/leaderboard` to see your and the app's score, sorted by descending order

## Tests
- In the root folder, run **npm test**
- Can also run **npm test \<file_name\>** to test specific files


## API Reference


## Technologies and Tools Used
- **Express** for basic server structure
- **Dotenv** to store environment variables like PORT
- **Jest** for testing framework
- **Supertest** for testing HTTP requests

## License
MIT &copy; TiaLow

