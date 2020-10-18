<template>
    <div class="container-fluid">
        <div class="row ">
            <div class="col-12">
                <toolbar-component>
                </toolbar-component>
            </div>
        </div>

        <div class="align">
            <div>
                Full Name: <input type="text" name="fullName" placeholder="ex: Mickey Mouse" v-model="fullName">
            </div>
            <br>
            <div>
                Mail: <input type="text" name="mail" placeholder="ex: example@gmail.com" v-model="mail">
            </div>
            <br>
            <div>
                Username: <input type="text" name="username" placeholder="ex: mickey.mouse" v-model="userName">
            </div>
            <br>
            <div>
                Password: <input type="password" name="password" v-model="firstPassword">
            </div>
            <br>
            <div>
                Confirm Password: <input type="password" name="coPassword" v-model="secondPassword">
            </div>
            <br>
            <div v-if="error">
                <p v-for="item in errorMessages" :key="item">
                    {{item}}
                </p>
            </div>
            <br>
            <div>
                <button @click="register">Create account</button>
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
  import signinGetters from 'pages/public/sign/store/getters'
  import signinMutations from 'pages/public/sign/store/mutations'
  import signinActions from 'pages/public/sign/store/actions'
  import loginGetters from 'pages/public/login/store/actions'
  import RouterContants from '../../../router/RouterContants'

  export default {
    name: 'Sign',
    components: {
      ToolbarComponent,
      AppFooter,

    },
    data: function () {
      return {}
    },

    computed: {
      users () {
        return this.$store.getters[loginGetters.GET_USER]
      },
      error () {
        return this.$store.getters[signinGetters.GET_ERROR]
      },
      errorMessages () {
        return this.$store.getters[signinGetters.GET_ERROR_MESSAGES]
      },

      fullName: {
        get () {
          return this.$store.getters[signinGetters.GET_FULL_NAME]
        },
        set (value) {
          this.$store.commit(signinMutations.SET_FULL_NAME, value)
        }
      },
      mail: {
        get () {
          return this.$store.getters[signinGetters.GET_MAIL]
        },
        set (value) {
          this.$store.commit(signinMutations.SET_MAIL, value)
        }
      },
      userName: {
        get () {
          return this.$store.getters[signinGetters.GET_USERNAME]
        },
        set (value) {
          this.$store.commit(signinMutations.SET_USERNAME, value)
        }
      },
      firstPassword: {
        get () {
          return this.$store.getters[signinGetters.GET_FIRST_PASSWORD]
        },
        set (value) {
          this.$store.commit(signinMutations.SET_FIRST_PASSWORD, value)
        }
      },
      secondPassword: {
        get () {
          return this.$store.getters[signinGetters.GET_SECOND_PASSWORD]
        },
        set (value) {
          this.$store.commit(signinMutations.SET_SECOND_PASSWORD, value)
        }
      },

    },

    mounted () {},

    methods: {
      async register () {
        await this.$store.dispatch(signinActions.CREATE_USER)
        this.$router.push(RouterContants.LOGIN)

      }
    }

  }
</script>

<style scoped>
    .align {
        text-align: center;
    }
</style>
