console.log("Hello World");

const treeObject = {
    height: document.getElementById("tree-height"),
    character: document.getElementById("tree-char")
};

// function tree(object) {
//     for (var i = 0; i <= )
//     const bottomWidth = treeObject.height.value;
// };

document.getElementById("submit-btn").addEventListener("click", function tree() {
    // console.log(treeObject.height.value);
    // console.log(treeObject.character.value);
        if (treeObject.height.value === "" || treeObject.character.value === "") {
            alert("Oops! You forgot one of the fields:(");
        } 
        //var grow = "";
        var space = " ";
        const bottomWidth  = (treeObject.height.value * 2) - 1;
        //console.log(bottomWidth)
        for (var i = 1; i <= bottomWidth; i += 2) {
            space2 = space.repeat(treeObject.height.value - i / 2)
            grow = (treeObject.character.value).repeat(i);
            console.log(space2, grow);
        }
    });


    