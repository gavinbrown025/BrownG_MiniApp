(() => {

    Vue.component("spec-sheet", {

        data: function () {
            return {
                currentAcc: this.model.acceleration[0],
                accImg: this.model.acceleration[1],
                currentHp: this.model.horsepower[0],
                hpImg: this.model.horsepower[1],
                currentTq: this.model.torque[0],
                tqImg: this.model.torque[1]
            }
        }, 

        template:
        `<div class="spec-con">
            <div class="spec acc">
                <p>ACCELLERATION</p>
                <p>0-100 km/h: {{currentAcc}}</p>
                <img :src="'images/svg/' + accImg" alt="">
            </div>
            <div class="spec hp">
                <p>HORSEPOWER</p>
                <P>{{currentHp}}</P>
                <img :src="'images/svg/' + hpImg" alt="">
            </div>
            <div class="spec tq">
                <p>TORQUE</p>
                <p>{{currentTq}}</p>
                <img :src="'images/svg/' + tqImg" alt="">
            </div>
        </div>`
    })



})();
