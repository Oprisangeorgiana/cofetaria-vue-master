<template>
    <div class="container-fluid">
        <div class="row ">
            <div class="col-12">
                <toolbar-component>
                </toolbar-component>
            </div>
        </div>

        <div class="row categoryTitle mt-10">
            <div class="col-12">
                <AppFooter></AppFooter>
            </div>
        </div>

    </div>

</template>

<script>
  // @ is an alias to /src

  import ToolbarComponent from '@/components/UI-kit/Toolbar/ToolbarComponent'
  import AppFooter from '@/components/UI-kit/AppFooter'

  export default {
    name: 'First',
    components: {
      ToolbarComponent,
      AppFooter,

    },
    data: function () {
      return {}
    },
    mounted () {
    },
    computed: {},

    methods: {}

  }
</script>

<style scoped>
</style>
