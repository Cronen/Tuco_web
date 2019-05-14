<template>
  <div style="color: black;">
    {{email}}
  </div>
</template>

<script>
//Currently not in use, as I can't get it to work with passing props to modal in different component
export default {
  data() {
    return {
      email: this.mail
    };
  },
  props: {
    mail: String
  }
};
</script>
