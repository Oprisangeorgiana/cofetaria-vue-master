<template>
    <div>
        <div>
            <button
                    @click="setActive"
                    :class="buttonClass"
                    type="button">{{text}}
            </button>
        </div>

    </div>
</template>

<script>


  export default {

    name: 'app-button',

    //================================================================================
    layout: 'PublicPortal',

    //================================================================================
    components: {},
    //================================================================================
    props: {
      text: String,
      isActive: Boolean
    },

    //  ================================================================================
    data: function () {
      return {}
    },
    //================================================================================
    computed: {
      buttonClass () {
        return {
          'btn btn-link': true,
          'active': this.isActive
        }
      }
    },

    //  ================================================================================
    methods: {

      setActive: function () {
        this.$emit('on-pressed', this.text)
      },

    },

  }
</script>

<style>
    .category {
        background: #FDF5E6;
    }

    .categoryTitle {
        background: #DCDCDC;
    }

</style>
