let btn = document.getElementById("btn");
let show = document.getElementById("show");

btn.addEventListener("click", add);

function add() {
    console.log("Clicked");

    // Create the textarea
    let box = document.createElement('textarea');
    show.append(box);

    // Create the submit button
    let submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.classList.add("btn");
    submit.setAttribute("id", "sub");
    show.append(submit); // Append the submit button inside the show div

    // Temporarily remove the event listener from the "Add" button
    btn.removeEventListener("click", add);

    submit.addEventListener("click", function write() {
        let place = document.createElement("p");
        place.textContent = box.value;
        show.append(place);

        // Remove the submit button and textarea after submission
        show.removeChild(box);
        show.removeChild(submit);

        // Re-enable the event listener for the "Add" button
        btn.addEventListener("click", add);
    });
}
