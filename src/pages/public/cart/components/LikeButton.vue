<template>
    <div class="heart " onclick="javascript:this.classList.toggle('active')"></div>
</template>

<script>


    export default {
        //  ================================================================================
        //  ========================   GLOBAL AWARENESS   ==================================
        //  ================================================================================
        name: 'like-button',

        //  ================================================================================
        layout: 'PublicPortal',

        //  ================================================================================
        components: {},

        //  ================================================================================

        props: {
            product: Object,

        },

        //  ================================================================================
        data: function () {
            return {}
        },

        //  ================================================================================

        //  ================================================================================
        methods: {}
    }
</script>

<style scoped>
    .heart {
        width: 100px;
        height: 100px;
        background: url(https://cssanimation.rocks/images/posts/steps/heart.png) no-repeat;
        cursor: pointer;

    }

    .heart.active {
        animation: fave-heart 1s steps(28);
        background-position: -2800px 0;
        transition: background 1s steps(28);
        cursor: pointer;
    }
</style>
