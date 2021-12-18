<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
        <px-assests-table v-if="!isLoading" v-bind:assets="assets"/>
        
    </div>
</template>

<script>

import api from '@/api'

import PxAssestsTable from '@/components/PxAssestsTable'

export default {
    name : 'Home',
    components : { PxAssestsTable },
    data() {
        return {
            isLoading : false,
            assets : []
        }
    },

    created () {
        this.isLoading = true;

        api.getAssets()
        .then( assets => this.assets = assets)
        .finally(()=>{
            this.isLoading = false
        })
    }
}



</script>