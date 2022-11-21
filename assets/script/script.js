var btn = document.querySelectorAll('.control');
var img = document.querySelectorAll('.slide-item');
var current = 0;
var maxImg = img.length;

btn.forEach(control => {
    control.addEventListener('click', () => {
        
        let btnPrev = control.classList.contains('seta-prev');

        if(btnPrev) {
            current -= 1;
        }else {
            current += 1;
        }

        if(current >= maxImg) {
            current = 0;
        }

        if(current < 0) {
            current = maxImg - 1;
        }

        img[current].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

    })
});