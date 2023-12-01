let items = document.querySelectorAll('.slider .lista .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.galeria .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .lista .item.active');
    let thumbnailActiveOld = document.querySelector('.galeria .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
function playVideo() {
 
    var video = document.getElementById('background-video');
    

    video.style.display = 'block';


    video.play();
}
function toggleVideo(videoId) {

    var video = document.getElementById(videoId);
    var currentOpacity = parseFloat(video.style.opacity);
    video.style.opacity = (currentOpacity === 0) ? 1 : 0;
    if (currentOpacity === 0) {
        video.play();
    } else {
        video.pause();
    }
}
function PlayAudio() {
    document.getElementById("musica3").play();
  } 
let paElements = document.querySelectorAll('p a');
paElements.forEach((pa) => {
    pa.addEventListener('click', () => {
        if (refreshInterval) {
            clearInterval(refreshInterval); 
            refreshInterval = null;
        } else {
            refreshInterval = setInterval(() => { 
                next.click();
            }, 5000);
        }
    });
});

