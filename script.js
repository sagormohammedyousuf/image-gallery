
// show img title //

const imgs = document.querySelectorAll('#img-div img');
const imgTitle = document.getElementById('img-title');

imgs.forEach(img => {
    img.addEventListener('mouseover', function () {
        imgTitle.textContent = img.alt;


    });

    img.addEventListener('mouseout', function () {
        imgTitle.textContent = '';
    });
});


const imgDiv = document.getElementById('img-div');
const selectImg = document.getElementById('select-img');
const addImg = document.getElementById('add-img');

addImg.addEventListener('click', function () {
    const selectedImage = selectImg.files[0];
    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('img-wrapper');

            const closeButton = document.createElement('button');
            closeButton.classList.add('close');
            closeButton.setAttribute('type', 'button');
            closeButton.innerHTML = '&#x2715;';
            closeButton.addEventListener('click', function () {
                imgWrapper.parentNode.removeChild(imgWrapper); // Remove the image wrapper when the close button is clicked
            });

            const imgElement = document.createElement('img');
            imgElement.src = event.target.result;
            imgElement.alt = "Newly added image";
            imgElement.classList.add('img-9');


            imgElement.addEventListener('mouseover', function () {
                imgTitle.textContent = imgElement.alt;
            });

            imgElement.addEventListener('mouseout', function () {
                imgTitle.textContent = '';
            });

            imgElement.addEventListener('click', function(){
                modalFunction();
            })



            imgWrapper.appendChild(closeButton);
            imgWrapper.appendChild(imgElement);

            imgDiv.appendChild(imgWrapper);

            selectImg.value = "";
        };
        reader.readAsDataURL(selectedImage);
    } else {
        alert("Please select an image file.");
    }
});


const closeBtns = document.querySelectorAll('#img-div .img-wrapper .close');

closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
       
        const imgWrapper = this.parentNode;
       
        imgWrapper.style.display = "none";
    });
});



// Get the modal

let modalFunction = () => {

    var modal = document.getElementById('myModal');

    var modalImg = document.querySelectorAll('#img-div .img-wrapper img')
    modalImg.forEach(function (img) {
        img.onclick = function () {
            modal.style.display = "block";
            modalContentImg.src = this.src;
            captionText.innerHTML = this.alt;
            
        }

    })

    var modalContentImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    var span = document.getElementsByClassName("close-modal")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

}

modalFunction();


// const zoomElement = document.querySelector("#img01");
// let zoom = 1;
// const ZOOM_SPEED = 0.1;

// document.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
//   } else {
//     zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
//   }
// });


const zoomElement = document.querySelector("#img01");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function (e) {

    e.preventDefault();

    const deltaY = e.deltaY || e.detail || e.wheelDelta;

    if (deltaY > 0) {
        zoom += ZOOM_SPEED;
    } else {
        zoom -= ZOOM_SPEED;
    }

    // Ensure boundary //
    zoom = Math.max(0.1, Math.min(zoom, 1.3));


    zoomElement.style.transform = `scale(${zoom})`;
});

// Reset zoom when clicking on a new image
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", function () {
        zoom = 1;
        zoomElement.style.transform = `scale(${zoom})`;
    });
});
