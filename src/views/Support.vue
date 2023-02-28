<template>
  <div id="app">
    <section>
      <div class="formcontainer">
        <div class="container">
          <div class="spacer">
            <label for="uname">
              <strong>Full Name</strong> </label
            ><br />
            <input
              v-model="paymentData.customer.name"
              required
              type="text"
              placeholder="Your Name"
              name="uname"
            /><br />
          </div>

          <div class="spacer">
            <label for="email">
              <strong>Email Address</strong> </label
            ><br />
            <input
              v-model="paymentData.customer.email"
              required
              type="text"
              placeholder="you@email.com"
              name="email"
            /><br />
          </div>

          <div class="spacer">
            <label for="phone">
              <strong>Phone Number</strong> </label
            ><br />
            <input
              v-model="paymentData.customer.phone_number"
              required
              type="tel"
              placeholder="+234 8000000000"
              name="phone"
            /><br />
          </div>

          <div class="spacer">
            <label for="amount">
              <strong>Amount</strong> </label
            ><br />
            <input
              v-model.number="paymentData.amount"
              type="number"
              placeholder="1000"
              name="amount"
              required
            />
          </div>
          <br />
          <br />
          <flutterwave-pay-button v-bind="paymentData">
            Click To Pay
          </flutterwave-pay-button>
        </div>
        <img style="max-width: 200px" alt="Vue logo" src="../assets/flutter.png" />
      </div>
    </section>
  </div>
</template>
    
    <script>
import router from "../router";

export default {
  name: "Support",
  data() {
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 0,
        currency: "NGN",
        payment_options: "card,ussd",
        redirect_url: "",
        meta: {
          counsumer_id: "7898",
          consumer_mac: "kjs9s8ss7dd",
        },
        customer: {
          name: "",
          email: "",
          phone_number: "",
        },
        customizations: {
          title: "Customization Title",
          description: "Customization Description",
          logo: "https://flutterwave.com/images/logo-colored.svg",
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      },
    };
  },
  methods: {
    makePaymentCallback(response) {
      console.log("Pay", response);
    },
    closedPaymentModal() {
      console.log("payment is closed");
      router.push('/success')
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
  },
};
</script>
    
    <style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  display: flex;
  justify-content: center;
  font-family: Roboto, Arial, sans-serif;
  font-size: 15px;
}
.spacer {
  width: 100%;
  height: auto;
  /* border: 1px solid red; */
  margin: 10px auto;
}
label {
  float: left;
}
input {
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #8ebf42;
  color: white;
  padding: 14px 0;
  margin: 10px auto;
  border: none;
  cursor: pointer;
  width: 80%;
}

button:hover {
  opacity: 0.8;
}
.formcontainer {
  text-align: center;
  margin: 50px auto 12px;
  padding: 40px;
  width: 70%;
}
.container {
  padding: 16px 0;
  text-align: center;
}
span.psw {
  float: right;
  padding-top: 0;
  padding-right: 15px;
}
@media screen and (max-width: 600px) {
  .formcontainer {
    width: 90%;
  }
}
/* Change styles for span on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>
    