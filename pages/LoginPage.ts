import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private menuButton: Locator;
  private emailField: Locator;
  private continueButton: Locator;
  private passwordField: Locator;
  private loginButton: Locator;
  private userData: Locator;
  readonly logoutButton: Locator;

 


  constructor(page: Page) {
    this.page = page;
    this.menuButton = page.getByTestId('HeaderMenu-menu-button');
    this.emailField = page.locator('input[type="email"]');
    this.continueButton = page.locator('button:has-text("Continue")');
    this.passwordField = page.locator('input[type="password"]');
    this.loginButton = page.locator('button:has-text("Login")');
    this.userData = page.getByTestId('Menu_userData');
    this.logoutButton = page.getByTestId('menu-popper-signout-section');
  }

  async goto() {
    await this.page.goto('https://carma.com.au/');
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async enterEmail(email: string) {
    await this.emailField.click();
    await this.emailField.fill(email);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getUserDataLocator() {
    return this.userData;
  }
  
  async logout() {
    
    await this.logoutButton.click();
    
   
   
  }
  
}
