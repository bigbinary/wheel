$(document).ready(function() {
  $("[data-behavior~=alert-close]").on("click", function() {
    $("[data-behavior~=alert-close]")
      .closest("[data-behavior~=alert-container]")
      .addClass("hidden");
  });

  $("[data-behavior~=alert-info]").addClass("animate");
  setTimeout(function() {
    $("[data-behavior~=alert-info]").removeClass("animate");
    $("[data-behavior~=alert-info]")
      .closest("[data-behavior~=alert-container]")
      .addClass("hidden");
  }, 4000);
});
