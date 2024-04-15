
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
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result; 
            imgElement.alt = "Newly added image"; 
            imgDiv.appendChild(imgElement); 
            selectImg.value = ""; 

            attachEventListeners();
        };
        reader.readAsDataURL(selectedImage); 
    } else {
        alert("Please select an image file.");
    }
});



