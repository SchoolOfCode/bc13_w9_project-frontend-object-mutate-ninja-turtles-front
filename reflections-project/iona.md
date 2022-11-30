# Reflections-app

This app is designed to enhance the remote experience of a bootcamper. We have specifically focused our app on the weekly reflections that bootcampers are expected to submit.

This is a simple 3 page app with a landing page, a self assessment tool and a summary.

### Homepage 
User reads instructions.

### Self assessment tool

User inputs topics to be added to their list and provides a score between 1 and 10 based on how they feel they are doing in each topic.

### Summary
User is provided with a summary of current and previous self assessed scores. 

## Demo 

![Demo GIF:](reflectifyDemo.mov)


## Documentation 

## Front-end

[Component tree](https://github.com/SchoolOfCode/bc13_w9_project-frontend-object-mutate-ninja-turtles-front/tree/main/reflections-project/Images
)


### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#006d77](https://via.placeholder.com/10/006d77?text=+) #006d77 |
| Secondary Color | ![#FAEBD7](https://via.placeholder.com/10/FAEBD7?text=+) #FAEBD7 |


## Back-end

![Entity Relationship Diagram (database tables):]()

To run the app locally you need to create a `.env` file and add it to your `.gitignore` file. The `.env` file must contain your PORT number and your DATABASE_URL.

The following commands run the scripts to set up the database:
`npm db-create` creates the database tables
`npm db-drop` drops the tables
`npm db-seed` adds seed data into the database
`npm db-reset` will drop, then create, then seed all tables in the database

To start the server run `npm start`.

## Testing

When running in development ...
Cypress E2E tests are run using `npx cypress open` in the React app.
For these to run you will also need to have the server running on both the front and back end and the database set up. 

Supertest unit tests are run in the Node app using `npm test`.

## Authors

- [@Hicham B](https://www.github.com/HBE17)
- [@Iona M](https://www.github.com/ionajosephine)
- [@Matthew D](https://www.github.com/matt190589)
- [@Andrew R](https://www.github.com/AndyRoo0)

## Limitations / Future Features

### Saving multiple scores to the database
The app currently only supports one user input to be saved at a time. In future we aim for the full array of inputs to be saved in one fetch (POST) request.

### Gamification on the Summary Page
Users earn badges based on the frequency of their reflections, whether they submitted them on time and the progress they've made (calculated using their own scores and how they change over time)

