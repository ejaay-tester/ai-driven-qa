import { test, expect } from "@playwright/test"
import { SauceLoginPage } from "../pages/sauce.login.page"

test("user can log in with valid credentials", async ({ page }) => {
  const login = new SauceLoginPage(page, {
    baseUrl: "https://www.saucedemo.com/",
    usernameLocator: "#user-name",
    passwordLocator: "#password",
    loginButtonLocator: "input#login-button",
  })

  await login.gotoLoginPage()
  await login.login("standard_user", "secret_sauce")
  await expect(page.locator(".title")).toHaveText("Products")
})
