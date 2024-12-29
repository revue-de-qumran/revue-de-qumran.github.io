<template>
    <v-col>
        <v-card>
                <v-img
                v-if="imglink"
                class="align-end text-white"
                height="150"
                :src="imglink"
                cover
                >
                </v-img>
                <div>
                    <v-card-title>
                        {{ title }}
                    </v-card-title>
                    <v-card-text>
                        {{ description }}
                    </v-card-text>
                </div>
                <!--
                <v-avatar
                    class="ma-3"
                    rounded="0"
                    size="125">
                        <v-img :src="imglink"></v-img>
                </v-avatar>
                -->
            <v-card-actions>
                <v-row justify="center">
                    <v-btn 
                        rounded="l" 
                        prepend-icon="mdi-link"
                        :href="link" target="_blank"
                        class="custom-btn"
                    >
                        Link
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-col>
    </template>
    
    <script>
    export default {
        name: 'ToolsItem',
        props: {
            title: String,
            description: String,
            link: String,
            imglink: String,
        }
    }
    </script>

<style scoped>
.custom-btn:hover {
    background-color: #ca80b1 !important; /* Change this to your desired color */
    color: white !important;
}
</style>