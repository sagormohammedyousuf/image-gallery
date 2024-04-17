
// show img title //

const imgs = document.querySelectorAll('#img-div img');
const imgTitle = document.getElementById('img-title');

imgs.forEach(img => {
    img.addEventListener('mouseover', function(){
        imgTitle.textContent = img.alt;
       
        
    });

    img.addEventListener('mouseout', function() {
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
            closeButton.addEventListener('click', function() {
                imgWrapper.parentNode.removeChild(imgWrapper); // Remove the image wrapper when the close button is clicked
            });

            const imgElement = document.createElement('img');
            imgElement.src = event.target.result; 
            imgElement.alt = "Newly added image"; 
            imgElement.classList.add('img-9');


            imgElement.addEventListener('mouseover', function(){
                imgTitle.textContent = imgElement.alt;
            });

            imgElement.addEventListener('mouseout', function() {
                imgTitle.textContent = ''; 
            });



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

closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        // Get the parent image wrapper of the clicked close button
        const imgWrapper = this.parentNode;
        // Hide the parent image wrapper
        imgWrapper.style.display = "none";
    });
});
