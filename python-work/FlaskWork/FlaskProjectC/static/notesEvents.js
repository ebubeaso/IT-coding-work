// Handling events that happen in the notes page
$(function() {
    let entryForm = $("#new-note-form");
    entryForm.hide();
    let noteButton = $("#add-note");
    noteButton.on('click', () => {
        entryForm.slideToggle(300);
    });

    entryForm.on('submit', () => {return true;});
})