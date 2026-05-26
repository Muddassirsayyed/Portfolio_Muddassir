import { chromium } from 'playwright';

async function run() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Registering console listeners...');
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE ${msg.type().toUpperCase()}]:`, msg.text());
  });

  page.on('pageerror', err => {
    console.error('[BROWSER RUNTIME ERROR]:', err.message);
    if (err.stack) {
      console.error(err.stack);
    }
  });

  page.on('requestfailed', req => {
    console.log(`[REQUEST FAILED]: ${req.url()} - ${req.failure()?.errorText}`);
  });

  console.log('Navigating to live portfolio...');
  try {
    await page.goto('https://muddassir-portfolio.vercel.app', { waitUntil: 'load', timeout: 30000 });
    console.log('Page loaded. Waiting 5 seconds for React runtime errors to fire...');
    await page.waitForTimeout(5000);
  } catch (err) {
    console.error('Navigation error:', err.message);
  }

  await browser.close();
  console.log('Browser closed.');
}

run().catch(err => {
  console.error('Test script runner error:', err);
});
