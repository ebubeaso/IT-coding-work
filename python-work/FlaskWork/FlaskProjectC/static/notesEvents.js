// Handling events that happen in the notes page
    
//made this function for handling PUT ssrequests
let url = '';
function updateNoteEntry(u) {
    console.log(u);
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', u, true);
    let form = document.getElementById("change-note-form");
    let formData = new FormData(form);
    xhr.send(formData);
};

/* made this variable to help with refreshing tha page after 
doing a DELETE request (it is a nice workaround) */
let notesLocation = window.location;

// made this function to handle DELETE requests
function deleteNoteEntry(u) {
    console.log(u);
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', u, true);
    xhr.send();
}

$(function() {
    // for adding a new note
    let myTable = $("#table-body");
    let entryForm = $("#new-note-form");
    let popupBackground = $("#add-note-popup");
    let closeAddButton = $("#close-add"); // closes popup screen
    // for changing a current note
    let updateForm = $("#change-note-form");
    let updatePopupScreen = $("#change-note-popup");
    let closeChangeButton = $("#close-update");

    entryForm.hide();
    updateForm.hide();
    let noteButton = $("#add-note");
    //let updateButton = $(".modify");
    
    //These two events show and hide the popup to add a note
    noteButton.on('click', () => {
        popupBackground.css("display", "flex").fadeIn(300);
        entryForm.slideDown(600);
    });
    closeAddButton.on('click', () => {
        entryForm.slideUp(300);
        popupBackground.fadeOut(600);
    });

    // These two events show and hide the popup for updating a note
    myTable.on('click', '.modify a', (event) => {
        event.preventDefault();
        updatePopupScreen.css("display", "flex").fadeIn(300);
        updateForm.slideDown(600);
        url = event.target.href;
        return url;
    });
    closeChangeButton.on('click', () => {
        updateForm.slideUp(300);
        updatePopupScreen.fadeOut(600);
    });
    // This event is what leads to making the PUT request
    entryForm.on('submit', () => {return true;});
    $("#submit-update").on('click', (event) => {
        updateNoteEntry(url);
        event.preventDefault();
        alert('The note entry has been updated!');
        location.reload(); //refreshes the webpage
    } );
    // This event is what leads to the DELETE request (based off of PUT request)
    myTable.on('click', '.delete a', (event) => {
        url = event.target.href;
        let confirmation = confirm("Are you sure you want to delete this note? Click 'OK' if you are.");
        if (confirmation == true) {
            deleteNoteEntry(url);
            alert('The note entry has been deleted!');
            window.location = notesLocation;
            event.preventDefault();
        } else {
            return false;
        };
    })
});