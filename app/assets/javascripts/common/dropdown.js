$(document).ready(function() {
  $("[data-behavior~=dropdown-toggle]").on("click", function() {
    const dropdownMenu = $("[data-behavior~=dropdown-toggle]").siblings(
      "[data-behavior~=dropdown-menu]"
    );

    if (dropdownMenu.hasClass("hidden")) {
      dropdownMenu.removeClass("hidden");
    } else {
      dropdownMenu.addClass("hidden");
    }
  });
});
