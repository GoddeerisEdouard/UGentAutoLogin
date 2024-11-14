const uGentAccountObserver = new MutationObserver(() => {
  const uGentAccountElem = document.querySelector(
    '#tilesHolder > div.tile-container > div > div.table[data-test-id*="@ugent.be"]'
  );
  if (!uGentAccountElem) return;

  uGentAccountElem.click();
  // stop observing after click
  uGentAccountObserver.disconnect();

  // observe next webElement which appears after the first UGent account is clicked
  const passwordObserver = new MutationObserver(() => {
    const passwordInput = document.querySelector('input[name="passwd"]');
    // if passwordInput is autocompleted (value attribute isn't null)
    if (passwordInput && passwordInput.value) {
      passwordInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter" })
      );
      // stop observing
      passwordObserver.disconnect();

      // after the passwordInput has been filled in and Enter has been pressed, it's still possible 2FA is required afterwards, this can't be automated...
    }
  });

  // start observing the body for added nodes to detect password input field
  passwordObserver.observe(document.body, { childList: true, subtree: true });
});

// start observing the body for added nodes (children)
uGentAccountObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
