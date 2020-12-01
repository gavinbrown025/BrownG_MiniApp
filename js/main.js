import{fetchData} from "./components/DataMiner.js"; 

(() => {

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
                    data.forEach(model => this.models.push(model));
                })
                .catch(err => console.error(err));

        },

        //! run a method when we change our view (update the DOM with Vue)
        updated: function () {
            console.log("updated current model to", this.currentModel.name, this.currentModel);
        },

        methods: {  //! generic functions go here

             playVideo(){
                let mainVideo = this.$refs.mainVideo;
                mainVideo.play();
             },

            showModelData(target) {
                console.log('clicked to view specs for', target.name, target);
                
                this.showCurrentModel = this.showCurrentModel ? false : true;

                this.currentModel = target;
            }, 

            showNextModel(direction) {
                let nextModel = parseInt(this.currentModel.id) + direction;
                if (nextModel > 4) {nextModel = 1}
                if (nextModel < 1) {nextModel = 4}
                
                this.currentModel = this.models[nextModel];
            }
        },

        components: {}
    
    
    }).$mount("#app");


})();

