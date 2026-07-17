import { Page, Locator } from "@playwright/test"

export type SauceLoginPageOptions = {
  baseUrl: string
  usernameLocator?: string
  passwordLocator?: string
  loginButtonLocator?: string
  loginButtonName?: string
}
export class SauceLoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly baseUrl: string

  constructor(page: Page, options: SauceLoginPageOptions) {
    this.page = page
    this.baseUrl = options.baseUrl
    this.usernameInput = options.usernameLocator
      ? page.locator(options.usernameLocator)
      : page.getByTestId("username")
    this.passwordInput = options.passwordLocator
      ? page.locator(options.passwordLocator)
      : page.getByTestId("password")
    this.loginButton = options.loginButtonLocator
      ? page.locator(options.loginButtonLocator)
      : page.getByRole("button", { name: options.loginButtonName ?? "Login" })
  }

  async gotoLoginPage() {
    await this.page.goto(this.baseUrl)
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}
