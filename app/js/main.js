document.querySelectorAll(".que__body-acc-item").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.que__body-acc-item p');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.que__body-acc-item p').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.que__body-acc-item').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.que__body-acc-item p').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.que__body-acc-item').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})





var splide = new Splide( '.splide', {
    perPage: 4,
    rewind : true,
    gap: '20px'
} );

splide.mount();


