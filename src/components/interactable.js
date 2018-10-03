AFRAME.registerComponent('gui-interactable', {
    schema: {
        clickAction: { type: 'string' },
        hoverAction: { type: 'string' },
        keyCode: { type: 'number', default: null },
    },
    init: function() {
        var _this = this;
        var data = this.data;
        var el = this.el;

        // this.keyHandler = function(event) {
        //     if (event.keyCode == data.keyCode) {
        //         console.log("key press by gui-interactable : " + data.keyCode);
        //         el.emit('click');
        //     }
        //     event.preventDefault();
        // }
        // if (data.keyCode) {
        //     window.addEventListener("keydown", this.keyHandler, true);
        // }


        if(data.keyCode){
            window.addEventListener("keydown", function (event) {
                if(event.keyCode == data.keyCode){                  
                    console.log("key press by gui-interactable : " + data.keyCode);
                    el.emit('click');
                }
                event.preventDefault();
            }, false);
        }
    },
    update: function() {},
    tick: function() {},
    remove: function() {
        console.log("AM REMOVED BRO")
        // window.removeEventListener("keydown", this.keyHandler, true);
    },
    pause: function() {
        console.log("AM PAUSING BRO")
        // window.removeEventListener("keydown", this.keyHandler, true);
    },
    play: function() {
        console.log("AM PLAYING BRO")
    },
    setClickAction: function(action) {
        this.data.clickAction = action; //change function dynamically
    },
});
