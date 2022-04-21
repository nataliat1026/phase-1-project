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
        img.src = charObj.imageUrl;
        imageDiv.className = 'imgContainer';
        imageDiv.append(img);
        galleryDiv.append(imageDiv);
        img.addEventListener('mouseover', () => enlargeImg(img))
        img.addEventListener('mouseleave', () => resetImg(img))
        img.addEventListener('click', () => createModal(charObj))
    })
}

const enlargeImg = (img) => {
    img.style.opacity = '0.7';
}

const resetImg = (img) => {
    img.style.opacity = '1';
}

const createModal = (charObj) => {
    const modalCont = document.querySelector('#myModal');
    const modalImg = document.querySelector('#img01');
    const modalCap = document.querySelector('#caption');
    const pName = document.createElement('p');
    const pTitle = document.createElement('p');
    const pHouse = document.createElement('p');
    const close = document.querySelector('.close');
    const heart = document.querySelector('.heart');
    modalCont.style.display = 'block';
    modalImg.src = charObj.imageUrl;
    pName.textContent = charObj.fullName;
    pTitle.textContent = charObj.title;
    pHouse.textContent = charObj.family;
    modalCap.append(pName, pTitle, pHouse);
    close.addEventListener('click', () => {
        modalCont.style.display = 'none';
        modalCap.textContent = '';
    })
    heart.addEventListener('click', () => {
        modalCont.style.display = 'none';
        const favDiv = document.querySelector('#favDiv');
        const favImg = document.createElement('img');
        favImg.src = modalImg.src;
        console.log(favImg);
        favDiv.append(favImg);

    })
}
