import './jquery-3.3.1.min.js';
import './bootstrap.min.js';
//import './bootstrap-3.3.7-dist/css/bootstrap.css';打包失败

import './mycarousel.less';

class Fade {
    constructor(piclist, optionlist, oBtn) {
        this.piclist = piclist;
        this.optionlist = optionlist;
        this.oBtn = oBtn;
        this.len = optionlist.length;
        this.index = 0;
    }
    init() {
        this.optionSwitch();
        this.btnSwitch();
    }

    //滑屏功能
    touchSwitch() {
        let startX,endX,moveX;
        this.wrap.addEventListener("touchstart", (event) => {
            let touch = event.touches[0];
            startX = touch.pageX;
        });
        this.wrap.addEventListener("touchmove", (event) => {
            event.preventDefault();
            let touch = event.touches[0];
            endX = touch.pageX;
        });
        this.wrap.addEventListener("touchend", (event) => {
            event.preventDefault();
            moveX = startX - endX;
            if(moveX>50) {
                this.optionlist[this.index].className = "";
                this.piclist[this.index].className = "";
                this.index++;
                if (this.index == this.len) {
                    this.index = 0;
                }
                this.optionlist[this.index].className = "active";
                this.piclist[this.index].className = "block";
            }
            else if(moveX<-50) {
                this.optionlist[this.index].className = "";
                this.piclist[this.index].className = "";
                this.index--;
                if (this.index == -1) {
                    this.index = this.len - 1;
                }
                this.optionlist[this.index].className = "active";
                this.piclist[this.index].className = "block";
            }
        });
    }

    optionSwitch() {
        $("#option").on("mouseover", (event) => {
            let e = event||window.event;
            let target = e.target||e.srcElement;
            if(target.nodeName=="LI") {
                let i = parseInt(target.id);
                this.optionlist[i].className = "active";
                this.optionlist[this.index].className = "";
                this.piclist[this.index].className = "";
                this.piclist[i].className = "block";
                this.index = i;
            }
        });
    }

    btnSwitch() {
        for (let i = 0; i < 2; i++) {
            this.oBtn[i].addEventListener("click", () => {
                this.optionlist[this.index].className = "";
                this.piclist[this.index].className = "";
                if (i) {
                    this.index++;
                    if (this.index == this.len) {
                            this.index = 0
                    }
                } 
                else {
                    this.index--;
                    if (this.index == -1) {
                        this.index = this.len - 1
                    }
                //console.log(this.index)
                }
                this.optionlist[this.index].className = "active";
                this.piclist[this.index].className = "block";
            })
        }
    }
}


class FadeChildren extends Fade {
    constructor(piclist, optionlist, oBtn, wrap) {
        super(piclist, optionlist, oBtn);
        this.wrap = wrap;
        this.timer = null;
    }
    init() {
        if(autowrap)
            this.play();
        this.pause();
        this.optionSwitch();
        this.btnSwitch();
        if(touch)
            this.touchSwitch();     
    }

    play() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.optionlist[this.index].className = "";
            this.piclist[this.index].className = "";
            this.index++;
            if (this.index == this.len) {
                this.index = 0
            }
            this.optionlist[this.index].className = "active"; 
            this.piclist[this.index].className = "block";
        }, timeinternal)
    }

    pause(){
        this.wrap.addEventListener("mouseover",()=>{
            clearInterval(this.timer);
        });
        this.wrap.addEventListener("mouseout",()=>{
            this.play()
        })
    }
}

let piclist = document.querySelectorAll("#picture li");
let optionlist = document.querySelectorAll("#option li");
let oBtn = document.querySelectorAll("#btn a");
let wrap = document.querySelector("#mycarousel");
let timeinternal = 2000;
let autowrap = true;
let touch = true;

new FadeChildren(piclist, optionlist, oBtn, wrap).init()
