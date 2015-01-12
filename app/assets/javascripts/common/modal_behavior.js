if ( Modal !== undefined ) {
    alert('Modal is already defined');
}

var Modal = (function() {

    var modal_content_selector = "[data-behavior ~= modal-content]",
        modal_container_selector = "[data-behavior ~= modal-container]";

    function _displayModal(link) {
        var modal_container = _findOrCreateModalContainer(),
            url = link.data('url');

        $(modal_container).load(url, function() {
            $(this).find(modal_content_selector).show();
            $(this).find(modal_content_selector).find('[data-focus~=true]').focus();
        });
    }

    function _findOrCreateModalContainer() {
        var element;

        if ($(modal_container_selector).length) {
            element = $(modal_container_selector);
        } else {
            element = $('<div data-behavior="modal-container"></div>');
            $('body').append(element);
        }

        return element
    };

    function _formSubmitResponseHandler(data) {
        var modal_container = _findOrCreateModalContainer();
        if (data.modal_content) {
            modal_container.html(data.modal_content)
            modal_container.find(modal_content_selector).show();

        } else if (data.redirect_to) {
            window.location.href = data.redirect_to;

        } else {
            modal_container.find(modal_content_selector).hide();
        };
    }

    function displayInModal(event) {
        event.preventDefault();
        _displayModal($(this));
    };

    function hide(event) {
        event.preventDefault()
        $(this).closest(modal_content_selector).hide();
    };

    function submitForm(event){
        event.preventDefault();
        var form = $(this);

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
        }).done(_formSubmitResponseHandler);
    };

    return { "displayInModal": displayInModal,
             "hide": hide,
             "submitForm": submitForm }

})();

$(document).on('click', 'a[data-behavior ~= display-in-modal]', Modal.displayInModal);
$(document).on("click", "[data-behavior ~= modal-close]", Modal.hide)
$(document).on('submit', "[data-behavior ~= modal-container] form", Modal.submitForm)
