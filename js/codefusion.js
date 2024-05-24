const toggleLanguageButton = $(".language-switcher");
const rtlStylesheet = "css/main-RTL.css";
const ltrStylesheet = "css/main-LTR.css";

toggleLanguageButton.on("click", function () {
  const stylesheetLink = $("link.language-form");

  const currentStylesheet = stylesheetLink.attr("href");
  const newStylesheet =
    currentStylesheet === rtlStylesheet ? ltrStylesheet : rtlStylesheet;

  stylesheetLink.attr("href", newStylesheet);
});
