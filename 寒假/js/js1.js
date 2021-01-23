//搜索框鼠标移入变色
var IconSpan = document.getElementById("icon-span");
function iconColor1() {
    IconSpan.style.backgroundColor = '#8aa8ff';
}
function iconColor2() {
    IconSpan.style.backgroundColor = '#4673ff';
}




//产品栏鼠标移入图片放大
var productImg = document.getElementsByClassName("product-img");
for (var i = 0; i < productImg.length; i++) {
    productImg[i].onmouseover = function () {
        this.style.width = "120px";
        this.style.height = "120px";
    }
    productImg[i].onmouseout = function () {
        this.style.width = "90px";
        this.style.height = "90px";
    }
}


//鼠标移入变色
var productButton = document.getElementById("productButton");
function colorChange1() {
    productButton.style.backgroundColor = '#8aa8ff';
}
function colorChange2(params) {
    productButton.style.backgroundColor ="#4673ff";
}

//职位栏鼠标移入图片放大
var jobsImg = document.getElementsByClassName("jobs-img");
for (var i = 0; i < jobsImg.length; i++) {
    jobsImg[i].onmouseover = function () {
        this.style.width = "320px";
        this.style.height = "320px";
    }
    jobsImg[i].onmouseout = function () {
        this.style.width = "270px";
        this.style.height = "270px";
    }
}


//选项卡
var bytestyleContent = document.getElementById("bytestyleContent");
var conLi = bytestyleContent.getElementsByTagName("li");

for (var i = 0; i < conLi.length; i++) {
    conLi[i].onclick = function () {
        for (var j = 0; j < conLi.length; j++) {
            var a = conLi[j].getElementsByTagName("div")[0];
            a.style.display = "none";
            conLi[j].style.fontSize = "15px";
            conLi[j].style.fontWeight = "normol";
            conLi[j].style.color = "#656a73";
        }
        var b = this.getElementsByTagName("div")[0];
        b.style.display = "block";
        this.style.fontSize = "20px";
        this.style.fontWeight = "bold";
        this.style.color = "#979ba1";
    }
    
}


var storyMan = document.getElementById("story-man");
var storyDiv = storyMan.getElementsByTagName("div");
for( var i =0;i<storyDiv.length;i++){
    storyDiv[i].onmouseover = function(){
        this.style.boxShadow = "0 0 10px 5px #f6f6f7";
    }
    storyDiv[i].onmouseout = function(){
        this.style.boxShadow = "0 0 0px 0px #333";
    }
}