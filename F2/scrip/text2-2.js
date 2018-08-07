import styles from './test2-2.css';
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

        optionSwitch() {
            for (let i = 0; i < this.len; i++) {
                this.optionlist[i].addEventListener("mouseover", () => {
                    this.optionlist[this.index].className = "";
                    this.optionlist[i].className = "active";
                    this.piclist[this.index].className = "";
                    this.piclist[i].className = "block";
                    this.index = i;
               })
            }
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
                    console.log(this.index)
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
        this.play();
        this.pause();
        this.optionSwitch();
        this.btnSwitch();
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
        }, 2000)
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
let wrap = document.querySelector("#mycarousel")

new FadeChildren(piclist, optionlist, oBtn, wrap).init()
