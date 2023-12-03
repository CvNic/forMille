const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const icon = document.querySelector('i');
const imageContainer = document.querySelector('.image-container');

const images = [
    'https://i.pinimg.com/736x/65/54/68/6554687629bfd304bffb7b9f410acff6.jpg',
    'https://ih1.redbubble.net/image.2130200545.5747/st,small,845x845-pad,1000x1000,f8f8f8.jpg',

];

yesBtn.addEventListener('click', () => {
    question.textContent = 'Nice';

    question.classList.add('animated-text');

    imageContainer.style.display = 'flex';

    yesBtn.remove();
    noBtn.remove();
    icon.remove();

    for (const imageUrl of images) {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.classList.add('popping-image');
        imageContainer.appendChild(imgElement);
    }

    animateImages();
});

function animateImages() {
    const poppingImages = document.querySelectorAll('.popping-image');

    poppingImages.forEach((img) => {
        setRandomPosition(img);
        img.style.animationDelay = Math.random() + 's';
        img.classList.add('pop-in');
    });
}

function setRandomPosition(element) {
    const wrapperRect = wrapper.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const randomX = Math.floor(Math.random() * (wrapperRect.width - elementRect.width));
    const randomY = Math.floor(Math.random() * (wrapperRect.height - elementRect.height));

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}
