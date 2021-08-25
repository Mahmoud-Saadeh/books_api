# Book API

Explore and find any book you want easily and check if it is to your liking by reading the description

## Introduction

In this app I have two pages:

1. Home page: there is a banner and a nice button to go to the search page and a book sample
1. Search page: you will first see a collection of Harry Potter books to keep the search result full
   - you can search for any book you want by filling in the text input
   - you can click on any book to see a popup modal for more information
   - after the result appear you can sort them by the author or the title by choosing one of the radio buttons
   - in the footer you will see my contact info.

## Libraries

### Dependencies

material-ui: for styling
axios: to send requests to the API
bootstrap: for the popup modal
framer-motion: to animate the search result
node-sass: to use SASS
react-redux & redux: for state management
react-router-dom: for routing
react-slick & slick-carousel: create a carousal
redux-thunk: to work with asynchronous actions in redux

### devDependencies for testing

@wojtekmaj/enzyme-adapter-react-17
enzyme
jest-enzyme
redux-mock-store
