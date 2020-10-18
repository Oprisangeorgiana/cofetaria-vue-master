<template>
    <div class="container-fluid">
        <div class="row ">
            <div class="col-12">
                <toolbar-component/>
            </div>
        </div>


            <slot style="overflow:auto"/>


                <app-footer class="row"/>

    </div>
</template>

<script>
    import ToolbarComponent from "../components/UI-kit/Toolbar/ToolbarComponent";
    import AppFooter from "../components/UI-kit/AppFooter";

    export default {
        name: "PublicPageLayout",
        components: {AppFooter, ToolbarComponent}
    }
</script>

<style scoped>

</style>
