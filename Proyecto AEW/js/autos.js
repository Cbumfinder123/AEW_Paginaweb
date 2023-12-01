document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
function PlayAudio() {
    document.getElementById("musica2").play();
  } 
  let lists = document.querySelectorAll('.item');
let index = 0;

function nextSlide() {
    document.getElementById('slide').appendChild(lists[index]);
    index = (index + 1) % lists.length;
}
setInterval(nextSlide, 7000);
