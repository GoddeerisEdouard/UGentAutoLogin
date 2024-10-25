const loginButton = document.querySelector('a[href*="sso/saml2_student"]');
if (loginButton) {
  console.log("TimeEdit login button found, clicking...");
  loginButton.click();
} else {
  console.log("TimeEdit login button not found.");
}
