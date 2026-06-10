# Products API Project

## Description
This project fetches product data from the DummyJSON API and displays it as product cards.

## Features
- Fetch API used to get product data
- Displays image, title, price, rating, brand and category
- Loading message while data is fetched
- Error handling using catch()
- Responsive card layout using CSS Grid

## API Used
https://dummyjson.com/products

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
1. Fetches data from the API.
2. Converts response to JSON.
3. Loops through products using forEach().
4. Creates cards dynamically using createElement().
5. Displays cards on the webpage using appendChild().