# Picwell Frontend Work Sample

## Introduction

We tried to design this problem to take a few hours at most, _but_ it's possible that we wildly miscalculated, especially if you're not familiar with the toolset. We've done our best to set you up for success, but we have likely missed some things. Submit whatever progress you make in a reasonable amount of time, and please contact us if you get really stuck. Happy coding!


## Problem

Using our designs, adapt and implement a simple single-page web application using React to retrieve and display basic financial data for the user's requested ticker.

The designs can be accessed [here](https://www.figma.com/file/EyV3tnyUtT9R1KHzNEE8Ol/Picwell-Work-Sample?node-id=0%3A1). You may need to create an account to access the style variables.


### Objectives

* Fetch the financial data for the user's ticker using a GET request
* Store data in the reducer state using the provided reducer
* Apply transformations to the data to be displayed
* Adapt the designs into React components to display the information


## Finance Data

The IEX Cloud API for the data we want to display is publically accessible at [this endpoint](https://sandbox.iexapis.com/stable/stock/aapl/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17). The associated documentation for the endpoint is available [here](https://iexcloud.io/docs/api/#quote).

The stock ticker `aapl` in the URL can be changed to a different ticker to get results for a different company.


## Getting Started

We have provided a skeleton application set up with [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), and [styled-components](https://styled-components.com/docs/api) to get you started. 

### Install dependencies

```
$ cd work-sample/
$ npm install
```

### Running the application

```
$ npm start
```

### Storing Data

A simple reducer is set up with their necessary actions in the `actions.ts` and `reducer.ts` files. Please use this to store any data retrieved from the API. 

### Styling Components

We have set up a `styled.tsx` file to place all CSS and styles as styled components. This will allow you to write CSS without the need to manage class names and style sheets for JSX elements. 

