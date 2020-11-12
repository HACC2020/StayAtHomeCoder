# Ku Ka'awale

## Table of Contents
* [Overview](#overview)
* [User Guide](#user-guide)
* [Developer Guide](#developer-guide)
* [Development History](#development-history)
* [Developers](#developers)
* [Functional Design Video](https://youtu.be/HfnLT0Au9QU)

## Overview

Ku Ka'awale (to stand apart) is a web application designed to visualize campus occupancy. In light of the COVID-19 pandemic, as well as for the eventual transition 
back into in-person learning, the application is designed to identify patterns of use in buildings across campus through the sampling of the WiFi management and 
obtaining anonymized data. This project hopes to recognize patterns of campus activities scheduled and unscheduled, to improve future scheduling, reduce the spread 
of COVID-19 on campus, and increase the efficiency of campus scheduling procedures and operations.

The application is built using:
- [Meteor-application-template-react](https://github.com/ics-software-engineering/meteor-application-template-react) for component-based UI implementation and 
routing.
- [GeoJSON](https://geojson.io/#map=2/20.0/0.0) for the map

## User Guide
This section provides a walkthrough of our interface and its current capabilities. The screenshots show the current state of the project. 


### Landing Page

Coming Soon...

## Developer Guide
1. Download a copy of Ku Ka'awale. You can download either using Github Desktop (recommended) or by extracting the .zip. As the repo is currently private, please 
contact one of the developers to get the download.

2. Install Meteor, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

``$ meteor npm install``

3. Once the libraries are installed, you can run the application by invoking the “start” script in the package.json file:

``$ meteor npm run start``

If it all goes well, the application will appear at http://localhost:3000.

### Quality Assurance - ESLint

The application includes a .eslintrc file to define the coding style adhered to in this application. You can invoke ESLint from the command line as follows:

``$ meteor npm run lint``

ESLint should run without generating any errors.

It’s significantly easier to do development with ESLint integrated directly into your IDE (such as IntelliJ).

## Development History

Mockups: [Figma](https://www.figma.com/file/jqSCTOCo7MpTyWXJH9Uu4h/MapMock?node-id=0%3A1)

Devpost Entry: [Ku Ka'awale](https://devpost.com/software/ku-ka-awale)

## Developers
Here are the people who worked on this project:

- Eric Rivera: Find his Github <a href = "https://github.com/eric5rivera">here.</a>
- Patima Poochai: Find his Github <a href = "https://github.com/patimapoochai">here.</a>
- Pauline Wu: Find her Github <a href = "https://github.com/Pauline-Peihan-Wu">here.</a>
- Sophia Cruz: Find her Github <a href = "https://github.com/sophiaelizecruz">here.</a>
- Victor Jodar: Find her Github <a href = "https://github.com/vjodar">here.</a>

## What's next for Ku Ka'awale
For our next steps, we plan to do the following:

- Adding admin function, like edit/modify events 
- Enhance the heat map function
- Possibly develop into a mobile application that can be used by UHM students and visitors
