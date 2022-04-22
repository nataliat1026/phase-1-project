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
        
        img.className = 'firstRender'

        img.src = charObj.imageUrl;
        imageDiv.className = 'imgContainer';
        imageDiv.id = charObj.fullName
        imageDiv.append(img);
        galleryDiv.append(imageDiv);
        
        img.addEventListener('mouseover', () => enlargeImg(img))
        img.addEventListener('mouseleave', () => resetImg(img))
        img.addEventListener('click', () => createModal(charObj))
        
    })
    const heart = document.querySelector('.heart');
    const sword = document.querySelector('.swords');
    
    heart.addEventListener('click', ()=>renderFavs());
    sword.addEventListener('click', ()=>renderKills());
}

const enlargeImg = (img) => {
    img.style.opacity = '0.7';
}

const resetImg = (img) => {
    img.style.opacity = '1';
}

const createModal = (charObj) => {
    const modalCont = document.querySelector('#modal');
    const modalImg = document.querySelector('#charImg');
    const modalCap = document.querySelector('#caption');
    const pName = document.createElement('p');
    const pTitle = document.createElement('p');
    const pHouse = document.createElement('p');
    const close = document.querySelector('.close');
    
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
}

const renderFavs = () => {
    const modal = document.querySelector('#modal');
    const div = document.querySelector('#favDiv');
    const imgFav = document.createElement('img');
    const imgModal = document.querySelector('#charImg')
    const modalCap = document.querySelector('#caption');
    const galleryDiv = document.getElementById(`${modalCap.firstChild.innerText}`)
    
    imgFav.src = imgModal.src
    imgFav.id = 'imgFav'
   
    imgFav.addEventListener('click', ()=>addFavToGallery(galleryDiv, imgFav))
    galleryDiv.remove()
    div.append(imgFav)

    modal.style.display = 'none';
    modalCap.textContent = '';
}

const renderKills = () => {
    const modal = document.querySelector('#modal');
    const div = document.querySelector('#killDiv');
    const imgKill = document.createElement('img');
    const imgModal = document.querySelector('#charImg')
    const modalCap = document.querySelector('#caption');
    const galleryDiv = document.getElementById(`${modalCap.firstChild.innerText}`)
   
    imgKill.src = imgModal.src
    imgKill.id = 'imgKill'
   
    imgKill.addEventListener('click', ()=>addKillToGallery(galleryDiv, imgKill))
    galleryDiv.remove()
    div.append(imgKill)

    modal.style.display = 'none';
    modalCap.textContent = '';
}

const addKillToGallery = (galleryDiv, imgKill) => {
    const galleryHolder = document.querySelector('#image-gallery');
    imgKill.remove()
    galleryHolder.prepend(galleryDiv)
    
}

const addFavToGallery = (galleryDiv, imgFav) => {
    const galleryHolder = document.querySelector('#image-gallery');
    imgFav.remove()
    galleryHolder.prepend(galleryDiv)
}