import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/login.page"

test("user can log in with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLoginPage()
  await loginPage.login("qa.test@yopmail.com", "Password123!")
  await expect(page.getByText("Welcome back!")).toBeVisible()
})
