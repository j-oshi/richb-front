<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card ref="form">
        <v-card-text>
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              ref="name"
              v-model="name"
              :rules="nameRules"
              label="Full Name"
              placeholder="Enter full name"
              required
            ></v-text-field>
            <v-text-field
              ref="email"
              v-model="email"
              :rules="emailRules"
              label="email"
              placeholder="Enter email"
              required
            ></v-text-field>
            <v-textarea
              ref="message"
              v-model="messages"
              :rules="messageRules"
              name="message"
              label="Message"
              placeholder="Enter message"
            ></v-textarea>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn :disabled="!valid" color="success" class="mr-4" text @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { PUT_CONTACT_US_POST } from "@/queries/ContactUsMutation";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length > 2) || "Name must be entered"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    messages: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.length > 5) || "Message must be entered"
    ],
    lazy: false
  }),
  methods: {
    async submit() {
      const message = {
        fieldSendName: this.name,
        subject: "Contact us",
        fieldSenderEmail: this.email,
        message: this.messages
      };
      const contactCreated = await this.$apollo.mutate({
        mutation: PUT_CONTACT_US_POST,
        variables: {
          message
        }
      });
    }
  }
};
</script>