<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="send"
    >
      Send
    </v-btn>
  </v-form>
</template>

<script>
  import { PUT_SUBSCRIBER_POST } from "@/queries/SubscribeMutation"

  export default {
    name: "Subscribe",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      async send () {
        const subscribe = { title: this.name, fieldNewsletterSignupName: this.name, fieldNewsletterSignupEmail: this.email }
        const subscriberCreated = await this.$apollo.mutate({
          mutation: PUT_SUBSCRIBER_POST,
          variables: {
             subscribe 
          }
        })
      }
    },
  }
</script>