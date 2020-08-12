$(document).ready(function() {
  $("[data-behavior~=dropdown-toggle]").on("click", function() {
    if (
      $("[data-behavior~=dropdown-toggle]")
        .siblings("[data-behavior~=dropdown-menu]")
        .hasClass("hidden")
    ) {
      $("[data-behavior~=dropdown-toggle]")
        .siblings("[data-behavior~=dropdown-menu]")
        .removeClass("hidden");
    } else {
      $("[data-behavior~=dropdown-toggle]")
        .siblings("[data-behavior~=dropdown-menu]")
        .addClass("hidden");
    }
  });
});
