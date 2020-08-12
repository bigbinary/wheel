$(document).ready(function() {
  $("[data-behavior~=alert-close]").on("click", function() {
    $("[data-behavior~=alert-close]")
      .closest("[data-behavior~=alert-container]")
      .addClass("hidden");
  });
});
