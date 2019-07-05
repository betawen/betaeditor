function mdSwitch() {
    var mdValue = document.getElementById("md-area").value;
    var converter = new showdown.Converter();
    var html = converter.makeHtml(mdValue);
    document.getElementById("show-area").innerHTML = html;
}

$("#md-area").keyup(e => {
    var mdValue = document.getElementById("md-area").value;
    var converter = new showdown.Converter();
    var html = converter.makeHtml(mdValue);
    document.getElementById("show-area").innerHTML = html;
});



$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

$('#download_pdf').click(e => {
    document.body.innerHTML = document.getElementById('show-area').innerHTML;
    window.print();
})
// mdSwitch();