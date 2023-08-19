const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for your API
app.get('/api/steam-market', (req, res) => {
  const data = {
    message: 'Hello, this is your API!'
  };
  res.json(data);
});

async function fetchSteamPrice() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://store.steampowered.com/app/728880/Overcooked_2');
  
  // Wait for the price element to load
  await page.waitForSelector('.game_purchase_price');
  
  const price = await page.$eval('.game_purchase_price', element => element.textContent);
  
  await browser.close();
  
  return price.trim();
}

fetchSteamPrice().then(price => {
  console.log('Price:', price);
});