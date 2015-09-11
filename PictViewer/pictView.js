function DataElement(url, text) {
    this.img = url;
    this.text = text;
}

var a = {};
a.dataArray = [
    new DataElement("http://www.sundayschoolleader.com/wp-content/uploads/2012/10/1.png", "1"),
    new DataElement("http://funmoving.in.ua/images/2.gif", "2"),
    new DataElement("https://dwellingintheword.files.wordpress.com/2011/08/3.png", "3"),
    new DataElement("http://store.donanimhaber.com/7f/55/d7/7F55D753BA8915A5B58AABF39572636E.png", "4"),
    new DataElement("http://f0.bcbits.com/img/0001844146_10.jpg", "5"),
    new DataElement("http://www.todayfm.com/content/000/images/000011/11392_54_news_hub_10066_588x448.jpg", "6"),
    new DataElement("http://images.mmorpg.com/images/galleries/formatted/032012/044e0f52-7320-48e1-8a56-34064171e984.jpg", "7"),
    new DataElement("http://otvet.imgsmail.ru/download/100147760_f1c8e32fae641dad01b616011ec5288c_800.png", "8")
];
a.active = 2;
a.left = 0;
a.boxWidth = 264;

Draw();

function MakeActive() {
    if(a.active>0) document.getElementById('liId').children[a.active - 1].style.backgroundColor = '#75fbce';
    if(a.active<a.dataArray.length-1)document.getElementById('liId').children[a.active + 1].style.backgroundColor = '#75fbce';
    document.getElementById('liId').children[a.active].style.backgroundColor = '#40ba91';
}

function Draw() {
    var rez = "", i;
    for (i = 0; i < a.dataArray.length; i++) {
        rez += "<li><div align=\"center\"><img src = \"" + a.dataArray[i].img + "\" width=250 height=250></img><h2>" + a.dataArray[i].text + "</h2></div></li>";
    }
    var divDat = document.getElementById('liId');
    divDat.innerHTML = rez;
    MakeActive();
}

document.onkeydown = function (e) {
    e.preventDefault();
    if (e.keyCode == 39) moveRight();
    if (e.keyCode == 37) moveLeft();
}

function moveRight() {
    var divDoc = document.getElementById('workPart');
    if (a.active < a.dataArray.length - 1) a.active++;
    if (a.left > -a.boxWidth * (a.dataArray.length - 5)) { a.left -= a.boxWidth; }
    divDoc.style.cssText += "margin-left: " + a.left + "px; transition-property: margin-left; transition-duration: .2s; transition-timing-function: linear;";
    MakeActive();
}
function moveLeft() {
    var divDoc = document.getElementById('workPart');
    if (a.active > 0) a.active--;
    if (a.left < 0) { a.left += a.boxWidth; }
    divDoc.style.cssText += "margin-left: " + a.left + "px; transition-property: margin-left; transition-duration: .2s; transition-timing-function: linear;";
    MakeActive();
}