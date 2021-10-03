const app = Vue.createApp({
  data() {
    return {
      name: {
        title: "Mr",
        first: "John",
        last: "Doe",
      },
      email: "johndoe@test.com",
      gender: "male",
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    async getUser() {
      const response = await fetch('https://randomuser.me/api');
      const { results } = await response.json();
      const data = results[0];
      console.log(data);
      this.name = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.picture = data.picture.large;
    }
  }
});

app.mount('#app');