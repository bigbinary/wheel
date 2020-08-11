$(document).ready(function() {
  $("[data-behavior~=alert-close]").on("click", function() {
    const alertContainer = $("[data-behavior~=alert-close]").closest(
      "[data-behavior~=alert-container]"
    );

    alertContainer.addClass("hidden");
  });
});
