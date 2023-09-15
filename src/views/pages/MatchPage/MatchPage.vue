<template src="./MatchPage.html"></template>
<style src="./MatchPage.scss"></style>

<script>

export default {
  name: 'MatchPage',
  components: {},

  methods: {
    methods: {
      async uploadFile() {
        const fileInput = document.getElementById('file-input'); // Assuming you have an input element with the id 'file-input'
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append('file', file);

        try {
          const response = await axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          console.log(response.data); // Handle the response data as needed
        } catch (error) {
          console.error(error);
        }
      },
    },
  }
};
</script>
