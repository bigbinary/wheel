$(document).ready(function() {
  $("[data-behavior~=alert-close]").on("click", function() {
    let alertContainer = $("[data-behavior~=alert-close]").closest(
      "[data-behavior~=alert-container]"
    );

    alertContainer.addClass("hidden");
  });
});
