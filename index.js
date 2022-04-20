document.addEventListener('DOMContentLoaded', () => {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then((resp) => resp.json())
    .then((charArr) => renderGallery(charArr))
})

const renderGallery = (charArr) => {
    charArr.forEach((charObj) => {
        const galleryDiv = document.querySelector('#image-gallery');
        const imageDiv = document.createElement('div');
        const img = document.createElement('img');
        const imgText = document.createElement('div');
        img.src = charObj.imageUrl;
        imageDiv.className = 'imgContainer';
        // imgText.textContent = charDetails(charObj);
        imageDiv.append(img);
        galleryDiv.append(imageDiv);
        galleryDiv.append(imgText);
        img.addEventListener('mouseover', () => enlargeImg(img))
        img.addEventListener('mouseleave', () => resetImg(img))
    })
}

const enlargeImg = (img) => {
    img.style.opacity = '0.7';
}

const resetImg = (img) => {
    img.style.opacity = '1';
}




// const charDetails = (charObj) => {
//     return {
//         'Full Name': `${charObj.fullName}`,
//         'Title': `${charObj.title}`,
//         'Family': `${charObj.family}`,
//     }
// }

