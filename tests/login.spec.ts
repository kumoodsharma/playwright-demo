import { test, expect } from '@playwright/test';
import { config } from 'dotenv';
config(); // loads variables from .env
import { LoginPage } from '../pages/LoginPage';

config(); // loads variables from .env

test('Login to Carma using POM with env variables', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openMenu();
  await loginPage.enterEmail(process.env.EMAIL!);
  await loginPage.clickContinue();
  await loginPage.enterPassword(process.env.PASSWORD!);
  await loginPage.clickLogin();

  await loginPage.openMenu();
  await expect(await loginPage.getUserDataLocator()).toContainText('Hi Kumood');




});
