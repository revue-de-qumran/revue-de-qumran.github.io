<template>

    <v-row justify="center" class="d-flex flex-column flex-md-row">
        <v-col class="bg-secondary-darken-4"  col="12" md="2">
        </v-col>
        <v-col class="bg-secondary-darken-2 pa-16" col="12"  md="8">    
            <h1>Tools</h1>
        <v-row justify="center" class="my-5">
        <ToolsItem v-for="tool in tools" :title="tool.title" :description="tool.description" :link="tool.link" :imglink="tool.imglink"/>
        </v-row>
            

        </v-col>
        <v-col  class="bg-secondary" col="12"  md="2">
        </v-col>
    </v-row>

</template>

<script>
import ToolsItem from "../components/ToolsItem.vue";
import tools from "../assets/data/tools.json";

export default {
    name: 'Tools',
    components: {
        ToolsItem
    },
    data() {
        return {
            tools: tools
        }
    }
}
</script>