# Mymizu-hackathon

![Project Image](https://images.squarespace-cdn.com/content/v1/5d2bebc1fc9ee70001122846/1567547621193-KK74EFXBP74QLC2M200V/Screen+Shot+2019-09-04+at+7.05.42.png)

## Overview

This hackathon collaborating with mymizu team is one of the challenges at Code Chrysalis coding Bootcamp.

### Table of contents

- [Features](#Features)
- [How to run](#How-to-run)
- [.env keys](#.env-keys)
- [Contributors](#Features)

## Features

![Project Image](pic.png)

The initial screen is the login page where the user will have to fill in their email and password.

When logged in as the business user, on the right side the user will be able see the business information - business name, email and the amount of taps they have.

On the left side is the map and when clicking on one of the taps, the map will be able to show the location of that specific tap
and all the information related to the tap - Name, address, photos, comments like opening hours and how to refill your
water and finally the business user will be able to see a counter on how many refills they have done and how much
they are contributing to saving the environment.

## .env keys

- CLIENT=pg
- DATABASE=mymizu
- HOST=localhost
- PGPORT=5432
- PGUSERNAME=your pg username
- PASSWORD=your pg password
- REACT_APP_AUTH0_DOMAIN=your auth0 domain
- REACT_APP_AUTH0_CLIENT_ID=your auth0 client_id
- REACT_APP_API_KEY=your google maps api_key

You will also need these environment variables and to get these contact, please, mymizu team - https://www.mymizu.co

- MMHOST=mymizu host
- MMPORT=mymizu port
- MMUSER=mymizu user
- MMPASSWORD=mymizu password
- MMDATABASEmymizu database
- REACT_APP_MYMIZU_API_KEY=your mymizu api_key

## How to run

- **To install dependencies:** npm i
- **To run the server:** npm run dev
- **To migrate the database:** knex migrate:latest
- **To seed the database:** knex seed:run
- **At login screen - username: test@gmail.com, password: Test@123**

## Dev Dependencies

- PostgreSQL
- Knex.js
- Express
- Axios
- Auth0
- React
- Heroku

## Contributors

- Mymizu team!
- https://github.com/jamesbalcombe83
- https://github.com/SumitVermakgp
- https://github.com/valch1992
