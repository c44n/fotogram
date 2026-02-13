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

const dialogRef = document.getElementById('imageDialog');

function renderImages() {
    let contentRef = document.getElementById('image_wrapper');
    contentRef.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        let id = i;
        contentRef.innerHTML += `
            <article tabindex="0" aria-haspopup="dialog" aria-controls="imageDialog" class="gallery__image_box border"  onclick="openDialog(${[id]})" data-id="${[i]}">
                <img src="images/${images[i]}" alt="Fotoalbum Bild" class="image_box__img">
            </article>
        `;
    }
}

function openDialog(id) {
    dialogRef.showModal();
    loadImageDataDialog(id);
}

function closeDialog() {
    dialogRef.close();
}

dialogRef.addEventListener('click', (event) => {
    if (event.target === dialogRef) {
        dialogRef.close();
    }
});

function loadImageDataDialog(id) {
    let contentRef = document.getElementById('dialogImageInner');
    contentRef.innerHTML = `    
        <header class="image_dialog__header">
            <div class="image_dialog__header-wrapper">
                <div class="image_dialog__header-wrapper_title">
                    <h2 id="dialogTitle" tabindex="0">${images[id]}</h2>
                </div>
                <img onkeypress="enterKey(event)" class="dialog_close_btn" id="closeBtn" tabindex="0" src="images/close.svg" alt="Dialog Close Button"
                    onclick="closeDialog(event)">

            </div>
        </header>

        <section>
            <div id="dialog_image_wrapper">
                <img tabindex="0" src="images/${images[id]}" class="dialog_image" alt="Image Dialog Big Size">
            </div>
        </section>

        <footer class="footer__dialog">
            <div class="dialog_footer_arrow-wrapper">
                <div onkeypress="enterKey(event, ${id})" tabindex="0" aria-label="Vorheriges Bild anzeigen" id="prevBtn" class="dialog_footer__arrow_icon_wrapper" onclick="prevImage(${id})">
                    <img src="images/Arrow-Right.svg" class="dialog_footer__left-arrow"
                        alt="Vorheriges Bild ansehen">
                </div>

                <div  tabindex="0" aria-label="Aktuelle und Gesamtsumme der Bilder" class="dialog_footer__image-counter">${id + 1}/${images.length}</div>

                <div onkeypress="enterKey(event, ${id})" tabindex="0" aria-laben="Nächstes Bild anzeigen" id="nextBtn" class="dialog_footer__arrow_icon_wrapper" onclick="nextImage(${id})">
                    <img src="images/Arrow-Right.svg" class="dialog_footer__right-arrow"
                        alt="Nächstes Bild ansehen">
                </div>
            </div>
        </footer>
    `;
}

function nextImage(id) {
    const nextId = id + 1;

    if (nextId < images.length) {
        loadImageDataDialog(nextId);
    } else {
        loadImageDataDialog(0);
    }
}

function prevImage(id) {
    let prevId = id - 1;
    let index = images.length - 1;

    if (prevId > 0) {
        loadImageDataDialog(prevId);
    } else {
        loadImageDataDialog(index);
    }
}


function enterKey(event, id) {
    // Diese function leider nicht hinbekommen
    let closeBtn = document.getElementById("closeBtn");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");

    closeBtn.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("closeBtn").click();
        }
    });

    nextBtn.addEventListener("keyup", function (event) {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            document.getElementById("nextBtn").click();
        }
    });
}

