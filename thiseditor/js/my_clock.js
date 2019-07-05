// import img from '../images/icon.png';
function my_clock(el){
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    el.innerHTML = h+":"+m+":"+s;
    setTimeout(() => {my_clock(el)}, 1000);
}

// 打开后台页
$('#open_editor').click(e => {
    window.open(chrome.extension.getURL('background.html'));
});

let clock_div = document.getElementById('clock_div');
my_clock(clock_div);