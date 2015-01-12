if ( Modal !== undefined ) {
    alert('Modal is already defined');
}

var Modal = (function() {

    var modalContentSelector = "[data-behavior ~= modal-content]",
        modalContainerSelector = "[data-behavior ~= modal-container]";

    function _displayModal(link) {
        var $modalContainer = _findOrCreateModalContainer(),
            url = link.data('url');

        $modalContainer.load(url, function() {
            var $element = $(this).find(modalContentSelector);
            $element.show();
            $element.find('[data-focus~=true]').focus();
        });
    }

    function _findOrCreateModalContainer() {
        var element;

        if ($(modalContainerSelector).length) {
            element = $(modalContainerSelector);
        } else {
            element = $('<div data-behavior="modal-container"></div>');
            $('body').append(element);
        }

        return element
    };

    function _formSubmissionResponseHandler(data) {
        var modalContainer = _findOrCreateModalContainer();

        if (data.modal_content) {
            modalContainer.html(data.modal_content)
            modalContainer.find(modalContentSelector).show();

        } else if (data.redirect_to) {
            window.location.href = data.redirect_to;

        } else {
            modalContainer.find(modalContentSelector).hide();
        };
    }

    function displayInModal(event) {
        event.preventDefault();
        _displayModal($(this));
    };

    function hide(event) {
        event.preventDefault()
        $(this).closest(modalContentSelector).hide();
    };

    function submitForm(event){
        var form = $(this);
        event.preventDefault();

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
        }).done(_formSubmissionResponseHandler);
    };

    return { "displayInModal": displayInModal,
             "hide": hide,
             "submitForm": submitForm }

})();

$(document).on('click', 'a[data-behavior ~= display-in-modal]', Modal.displayInModal);
$(document).on("click", "[data-behavior ~= modal-close]", Modal.hide)
$(document).on('submit', "[data-behavior ~= modal-container] form", Modal.submitForm)
