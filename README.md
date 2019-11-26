# _Doctor API_

#### _A web application that helps you find a local doctor, 11/22/2019_

#### By _**Judah Barton**_

## Description

_This website uses Better Doctor API which allows a user to either enter the symptoms they are experiencing or a specific doctors name to find a doctor in the Portland Area. It will give them a list of doctors in that specific field including their address, phone number, website(if any), and whether or not they are receiving new patients._

## Specifications

|  Behavior | Input  | Output  |
|---|---|---|
| User should be able to enter symptoms and get a doctor that specializes in that. | "sore throat" | "Alan Newman" |
| User Should be able to enter a specific Doctor and get him | "Alan Newman" | "Alan Newman" |
| If no doctor is found a message to the user should appear | "" | "No doctors found" |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is | "bad API call" | "Your error was ..." |



## Setup/Installation Requirements
* _Click the clone or download button and copy the link_
* _open your terminal and type "git clone (link)"_
* _If needed download Node.js from the official Node.js web site: (https://nodejs.org)_
* _go to (https://developer.betterdoctor.com/) to create an account and get an API key_
* _create a .env folder in your project_
* _in the .env write API_KEY = YOUR API KEY GOES HERE
OTHER_API_KEY = OTHER UNIQUE API KEY GOES HERE_
* _run: npm install in the terminal_
* _run: npm run build. this will create distribution folder. It also creates the index.html file within the distribution folder. When making edits to the code, edit the index.html, and all other files within the SRC folder_
* _run: npm run start to begin the live developer session_
* _if making edits to the lint or any other configuration, you will need to run another build AND another start for them to apply_
* _when npm run start is running, it will live update. If you input other commands in the terminal it will not do anything. Control C will stop the run so you can access the terminal again_

* _This version includes Jest and Babel pre-loaded_
* _To run a unit test, run: 'npm test' in command line_


## Known Bugs

_No known bugs_

## Support and contact details

_Please contact Judah Barton, at example@example.com if support is needed_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _NPM_
* _Jest_


### License

*This software is licensed under the MIT license agreement*

Copyright (c) 2019 **_Judah Barton_**
