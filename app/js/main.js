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
    gap: '20px',
    pagination: false,
    type: 'loop'
} );

splide.mount();


$('.catalog__btn').on('click', function(e){
    window.location.href = '#contact'
})
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
$("#tel").mask("+7(999) 999-9999");

$("#tel").click(function(){
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");
  $("#tel").mask("+7(999) 999-9999");