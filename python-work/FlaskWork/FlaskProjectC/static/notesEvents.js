// Handling events that happen in the notes page

// made this function to select the entry ID of a note
// let myTable = document.getElementById("table-body");
// myTable.addEventListener('click', event => {
//     for (let i=0; i< myTable.length; i++) {
//         for (let j=0; j < myTable.rows[i].cells.length; j++) {
//             if(event.target.className === 'modify') {}
//         };
//     };
// })
    
//made this function for handling PUT ssrequests
let url = '';
function updateNoteEntry(u) {
    console.log(u);
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', u, true);
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    let form = document.getElementById("change-note-form");
    let formData = new FormData(form);
    xhr.send(formData);
}

$(function() {
    //for adding a new note
    let myTable = $("#table-body");
    let entryForm = $("#new-note-form");
    let popupBackground = $("#add-note-popup");
    let closeAddButton = $("#close-add"); // closes popup screen
    //for changing a current note
    let updateForm = $("#change-note-form");
    let updatePopupScreen = $("#change-note-popup");
    let closeChangeButton = $("#close-update");
    //let submitUpdate = $("#submit-update");

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

    //These two events show and hide the popup for updating a note
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
    entryForm.on('submit', () => {return true;});
    updateForm.on('submit', (event) => {
        updateNoteEntry(url);
        event.preventDefault();
    } );
});