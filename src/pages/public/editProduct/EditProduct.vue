<template>
    <public-page-layout>

        <div class="d-flex justify-content-center p-2 bd-highlight">

            <div class="row">

                <div class="col-6">
                    Product Name
                </div>
                <div class="col-6">
                    <input type="text" v-model="product.name">
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center p-2 bd-highlight">

            <div class="row">
                <div class="col-6">
                    Ingrediente
                </div>
                <div class="col-6">
                    <vue-tags-input
                            v-model="tag"
                            :tags="tags"
                            @tags-changed="newTags => tags = newTags"
                    />
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center p-2 bd-highlight">

            <div class="row">
                <div class="col-6">
                    Pret
                </div>
                <div class="col-6">
                    <input type="text" v-model="product.price">
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center p-2 bd-highlight">
            <div class="col-2">
                <button v-on:click="submitChanges">Submit</button>
            </div>
        </div>

    </public-page-layout>
</template>

<script>

    import ToolbarComponent from '@/components/UI-kit/Toolbar/ToolbarComponent'
    import AppFooter from '@/components/UI-kit/AppFooter'
    import VueTagsInput from '@johmun/vue-tags-input'
    import productActions from 'pages/public/editProduct/store/actions'
    import productGetters from 'pages/public/editProduct/store/getters'
    import PublicPageLayout from "../../../layouts/PublicPageLayout";

    export default {
        name: 'EditProduct',
        components: {
            PublicPageLayout,
            ToolbarComponent,
            AppFooter,
            VueTagsInput,
        },
        computed: {
            product() {
                return this.$store.getters[productGetters.GET_PRODUCT]
            }
        },
        data: function () {
            return {
                productID: this.$route.params.id,
                tag: '',
                tags: []
            }
        },
        methods: {
            submitChanges() {
                this.$store.dispatch(productActions.UPDATE_PRODUCT)
                let ingrediente = []
                this.tags.forEach(function (item) {
                    ingrediente.push(item.text)
                })
                this.product.ingrediente = ingrediente

            }
        },
        async mounted() {
            await this.$store.dispatch(productActions.FETCH_PRODUCT, this.productID)
            this.tags = this.product.ingrediente
            this.tags = this.tags.map(function (item) {
                const tag = {}
                tag.text = item
                return tag
            })
        }
    }
</script>

<style scoped>

</style>
