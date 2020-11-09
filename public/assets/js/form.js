
// ==== form.js ====

$(function () {
    
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload(); // Reload the page to update the Burger List
            console.log("New Burger is added to the list.");
        }
        );
    });

    $(".burgerBtn").on("click", function (event) {
        console.log(this.id);
        let devouredTrue = {
            devoured: "true"
        };

        $.ajax(`/api/burgers/${this.id}`, {
            type: "PUT",
            data: devouredTrue
        }).then(() => { 
            location.reload(); // Reload the page to update the Devoured Bugers
            console.log("The burger is added to the Devoured Bugers.");
        });
    });
});

