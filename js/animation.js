document.addEventListener('DOMContentLoaded', function(event) {
    const $text_line = document.getElementsByClassName('text_line')[0];
    const characters = $text_line.innerText.split('');
    let   html       = '';
    for (let i = 0; i < characters.length; i++){
       if (characters[i] === ' ') { characters[i] = '&nbsp;' }
       html += `<span style="--i:${i}" >${characters[i]}</span>\n`;
    }
    $text_line.style.height = 2*$text_line.offsetHeight + 'px';
    $text_line.innerHTML    = html;
 })