<template>

    <v-row justify="center" class="d-flex flex-column flex-md-row">
        <v-col class="bg-secondary-darken-4"  col="12" md="2">
        </v-col>
        <v-col class="bg-secondary-darken-2 pa-16" col="12"  md="8">
            <h1>Data Repositories</h1>

            <v-row class="my-5">
                <v-col cols="12" md="6">
                    <v-card
                    title="Github"
                    prepend-icon="mdi-github"
                    href="https://github.com/revue-de-qumran" target="_blank"
                    >
                        <v-card-text>
                            <p>Access to the <strong>GitHub</strong> repository of the Revue de Qumran</p>
                        </v-card-text>
                    
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card
                    
                    href="https://zenodo.org/communities/revuedequmran" target="_blank"
                    >
                        <v-card-title style="height:52px">
                            <div class="d-flex align-center">
                            <img src="/assets/img/zenodo-icon-blue.svg" height="24" style="padding: 0px 8px 0px 0px;">
                            Zenodo
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <p>Access to the <strong>Zenodo</strong> repository of Revue de Qumran</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>


            
        </v-col>
        <v-col  class="bg-secondary" col="12"  md="2">
        </v-col>
    </v-row>

</template>

<script>
</script>