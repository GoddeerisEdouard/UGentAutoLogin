console.log("Waiting for Microsoft login button to appear...");

// observe / wait for the login button to appear
const observer = new MutationObserver(() => {
  const loginButton = document.querySelectorAll(
    "#tilesHolder > div.tile-container > div > div.table"
  );
  loginButton.forEach((element) => {
    if (
      element &&
      element.getAttribute("data-test-id").includes("@ugent.be")
    ) {
      console.log(
        `Microsoft login button with UGent email (${element.getAttribute(
          "data-test-id"
        )}) found, clicking...`
      );
      element.click();
      // stop observing after click
      observer.disconnect();
    }
  })
});

// start observing the body for added nodes (children)
observer.observe(document.body, { childList: true, subtree: true });

// check for password input field
const passwordObserver = new MutationObserver(() => {
  const passwordInput = document.querySelector('input[name="passwd"]');
  if (passwordInput && passwordInput.value) {
    console.log(
      "Password input detected and filled, simulating Enter key press..."
    );
    passwordInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    // stop observing
    passwordObserver.disconnect();
  }
});

// start observing the body for added nodes to detect password input field
passwordObserver.observe(document.body, { childList: true, subtree: true });

// check for 2FA input field
const otpInput = document.querySelector('input[name="otc"]');
if (otpInput) {
  console.log("2FA prompt detected. Please enter the authentication code.");

  // monitor for code verification by observing changes in the 2FA input field
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (otpInput.disabled || otpInput.hidden || otpInput.value.length === 6) {
        console.log("2FA code verified. Proceeding with login...");
        const loginButton = document.querySelector(
          "div.tile:nth-child(1) > div:nth-child(1)"
        );
        if (loginButton) {
          loginButton.click();
        }
        // stop observing after verification
        observer.disconnect();
      }
    });
  });

  // start observing for changes in the 2FA input field
  observer.observe(otpInput, {
    attributes: true,
    childList: true,
    subtree: true,
  });
}
