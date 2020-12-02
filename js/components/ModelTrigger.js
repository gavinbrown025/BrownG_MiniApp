export default {
    name: "ModelTrigger",

    props: ["model"],

    data: function () {
        return {
        }
    },

    template:
        `<div @click="showModelData(model)" class="selection">
			<p>{{model.name}}</p>
			<div class="trigger-con" >
			    <div class="trigger"></div>
            </div>
        </div> `,

    methods: {

        showModelData(target) {
            console.log('fired inside module, to view specs for', target.name, target); 
            this.$emit("showmodel", target);
        }
    }
}