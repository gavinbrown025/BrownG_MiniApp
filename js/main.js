import{fetchData} from "./components/DataMiner.js"; 

(() => {

    let vue_vm = new Vue({

        data: {
            showCurrentModel: false,
            models: [],
            currentModelData: {}
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function () {
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(model => this.models.push(model));
                })
                .catch(err => console.error(err));
            
            console.log(this.models);

        },

        //! run a method when we change our view (update the DOM with Vue)
        updated: function () {
            console.log(this.models);
        },

        methods: {  //! generic functions go here
            logClicked() {
                console.log("clicked on a list item");
            },

             playVideo(){
            //     this.$refs.mainVideo.play();
             },

            showProfData(target) {
                console.log('clicked to view prof bio data', target, target.name);
                
                
                //* the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                //* toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true;

                //* make the selected prof's data visible
                this.currentProfData = target;
            },

            removeProf(target) {
                //* remove this prof from the professors array
                console.log('clicked to remove prof', target, target.name);
                //* the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                //* make the selected prof's data visible
                //* this.professors.splice(this.professors.indexOf(target), 1);
                this.$delete(this.professors, target);
            }
        },

        components: {}
    
    
    }).$mount("#app");


})();

