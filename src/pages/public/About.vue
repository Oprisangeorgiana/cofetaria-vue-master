<template>
    <public-page-layout>

        <div class="row">
            <div class="col-12">
                <img src="img\noi.jpg" class="mt-20 central"
                     style=" width: 900px;">
                <center>Noi la sedinte</center>
                <h3 class="central">In rest, nu sunt prea multe de spus despre noi</h3>
            </div>
        </div>

    </public-page-layout>

</template>

<script>
    // @ is an alias to /src

    import ToolbarComponent from '@/components/UI-kit/Toolbar/ToolbarComponent'
    import AppFooter from '@/components/UI-kit/AppFooter'
    import PublicPageLayout from "../../layouts/PublicPageLayout";

    export default {
        name: 'Despre',
        components: {
            PublicPageLayout,

        },
        data: function () {
            return {
                randomText: '',
            }
        }

    }
</script>

<style scoped>
    .central {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>
