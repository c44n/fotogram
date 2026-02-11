let images = [
    "chian88-paper-items-2412978_640.jpg",
    "gbtaylor-science-fiction-7642235_640.jpg",
    "gosiak1980-technique-4915548_640.jpg",
    "gregreese-city-3289047_640.jpg",
    "photronous-glass-items-3064492_640.jpg",
    "rieracanler-stones-7307274_640.jpg",
    "viviane6276-medieval-times-3772369_640.jpg",
    "wal_172619-screws-8429778_640.jpg",
    "wuestensohn2000-elements-2065316_640.jpg",
    "3c416b08502bf2ed10a304bdce5c1c782b99c40d.jpg",
    "bbd3479cb0c36ecd872f4526275e11a893e50107.jpg",
    "cc1d7f8870c4b98e849a8e36c6c397e0f71486f9.jpg",
];

function renderImages() {
    let contentRef = document.getElementById('image_wrapper');
    contentRef.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        let id = i;
        contentRef.innerHTML += `
            <article class="gallery__image_box border"  onclick="openDialog(${[id]})" data-id="${[i]}">
                <img src="images/${images[i]}" alt="" class="image_box__img">
            </article>
        `;
        // console.log(images[i]);
    }
}

const dialogRef = document.getElementById('imageDialog');

function openDialog(id){
    dialogRef.showModal();
}

function closeDialog(id){
    dialogRef.close();
}