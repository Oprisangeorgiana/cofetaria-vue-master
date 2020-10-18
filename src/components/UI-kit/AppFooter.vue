<template>
    <div class="footer">
        <span>
        © COFETARIA 2019. All Rights Reserved
        </span>
    </div>
</template>

<script>


    export default {

        name: 'app-footer',

        //================================================================================
        layout: 'PublicPortal',

        //================================================================================
        components: {},

        //================================================================================

        props: {},

        //================================================================================
        data: function () {
            return {}
        },
        //================================================================================
        computed: {
            customProperty() {
                return ''
            }
        },

        //================================================================================
        watch: {},

        //================================================================================
        methods: {},

    }
</script>

<style>

    .footer {
        font-style: oblique;
        font-family: "American ", serif;
        text-align: center;
        background: #DCDCDC;
        height: 50px;
        display: block;
        margin-top: 34px;
    }

</style>
