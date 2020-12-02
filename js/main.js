import{fetchData} from "./components/DataMiner.js"; 
import Trigger from "./components/ModelTrigger.js";

(() => {

    // Vue.component("model-trigger", {

    //     props: ["model"],

    //     template: 
    //     `<div class="selection">
	// 		<p>{{model.name}}</p>
	// 		<div class="trigger-con" >
	// 		    <div class="trigger"></div>
    //         </div>
    //     </div> `
    // });


    let vue_vm = new Vue({

        data: {
            showCurrentModel: false,
            models: [],
            currentModel: {}
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function () {
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(model => {
                        this.models.push(model);
                    });
                })
                .catch(err => console.error(err));

            },
            
            //! run a method when we change our view (update the DOM with Vue)
            updated: function () {

        },

        methods: {  //! generic functions go here

             playVideo(){
                let mainVideo = this.$refs.mainVideo;
                mainVideo.play();
             },

            showModelData(target) {
                this.showCurrentModel = this.showCurrentModel ? false : true;
                this.currentModel = target;
            }, 

            showNextModel(direction) {
                let nextModel = parseInt(this.currentModel.id) + direction;
                if (nextModel > 3){nextModel = 0}
                if (nextModel < 0){nextModel = 3}
                
                this.currentModel = this.models[nextModel];
            }
        }, 

        components: {
            "model-trigger": Trigger
        }
    
    
    }).$mount("#app");



})();

