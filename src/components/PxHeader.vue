<template>
    <header class="shadow w-screen">
       <nav>
           <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
               <div class="flex items-center flex-shrink-0 text-white mr-6">
                   <PxIcon class="mr-2"/>
                   <router-link :to="{name : 'Home'}" class="font-semibold text-xl tracking-tight">PlatziExchange</router-link>
               </div>
               <div class="flex sm:block blok flex-grow lg:flex lg:items-center lg:wauto">
                   <div class="flex text-sm lg:flex-grow gap-4">
                       <router-link v-for="l in links" :key="l.title" :to="l.to" class="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white" >
                           {{ l.title }}
                       </router-link>
                   </div>
               </div>
           </nav>
       </nav>
    </header> 
</template>

<script>

    import PxIcon from '@/components/PxIcon'

    export default {
        name:'PxHeader',
        components : {
            PxIcon
        },
        props : {
            links: {
                type : Array,
                default : () => []   
            }
        }
    }
</script>

<style >

body {
  box-sizing: border-box;
}
header {
  max-width: 100%;
}
</style>
