// Handling events that happen in the notes page

//made this function for handling PATCH requests
const updateNoteEntry = () => {
    let xhr = new XMLHttpRequest();
    let myTable = document.getElementById("table-body");
    let entryID = myTable.rows.item(0).cells.item(0).textContent;
    let url = 'http://0.0.0.0:5000/'+entryID;
    xhr.open('PATCH', url, true);
    xhr.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded")
    let formData = new FormData(document.getElementById("change-note-form"));
    xhr.send(formData);
}

$(function() {
    //for adding a new note
    let entryForm = $("#new-note-form");
    let popupBackground = $("#add-note-popup");
    let closeAddButton = $("#close-add"); // closes popup screen
    //for changing a current note
    let updateForm = $("#change-note-form");
    let updatePopupScreen = $("#change-note-popup");
    let closeChangeButton = $("#close-update");

    entryForm.hide();
    updateForm.hide();
    let noteButton = $("#add-note");
    let updateButton = $(".modify");
    
    //These two events show and hide the popup to add a note
    noteButton.on('click', () => {
        popupBackground.css("display", "flex").fadeIn(300);
        entryForm.slideDown(600);
    });
    closeAddButton.on('click', () => {
        entryForm.slideUp(300);
        popupBackground.fadeOut(600);
    });

    //These two events show and hide the popup for updating a note
    updateButton.on('click', (event) => {
        event.preventDefault();
        updatePopupScreen.css("display", "flex").fadeIn(300);
        updateForm.slideDown(600);
    });
    closeChangeButton.on('click', () => {
        updateForm.slideUp(300);
        updatePopupScreen.fadeOut(600);
    });

    entryForm.on('submit', () => {return true;});
    $("#submit-update").on('click', updateNoteEntry);
});