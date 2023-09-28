let container = document.querySelector('.cont');
var btn = document.querySelector(".btn");
var scrolled = false;

btn.addEventListener('click', function () {
    if (!scrolled) {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
        setTimeout(function(){
        btn.innerHTML = '<iconify-icon icon="pajamas:scroll-up"></iconify-icon>';
        } ,850)

    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(function(){
                btn.innerHTML = '<iconify-icon icon="pajamas:scroll-down"></iconify-icon>';
        },850)

    }
    scrolled = !scrolled;
});
for (var i = 2; i <= 25; i++) {
    var newImg = document.createElement('img');
    newImg.src = 'Img/img' + i + '.jpg';
    container.appendChild(newImg);
}
