const hB = document.getElementById("heroButton");

function testFunc(){
    alert("hi");
}

hB.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        event.target.style.color = "orange";

        // reset the color after a short delay
        setTimeout(() => {
            event.target.style.color = "";
        }, 500);
    },
    false,
);

hB.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        event.target.style.color = "orange";

        // reset the color after a short delay
        setTimeout(() => {
            event.target.style.color = "";
        }, 500);
    },
    false,
);

hB.addEventListener(
    "click",
    (event) => {
        testFunc();
        },
    false,
);