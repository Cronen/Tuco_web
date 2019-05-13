<template>
    <section class="section_padding">
      <b-container>
        <b-row>
          <b-col>
            <div class="form_wrapper">
              <h3 class="form_title">Let's get in touch</h3>
              <p class="form_subtext">Leave your details below and we will contact you for a day trial to work at a Spaces location of your choice. Your first killer coffee is on us.</p>
              <form id="contactForm" action="">
                <div class="form_col">
                    <input id="firstName" name="FirstName" type="text" placeholder="Firstname" class="form_input mb-25">
                    <input id="lastName" name="lastName" type="text" placeholder="Lastname" class="form_input mb-25">
                    <input id="company" name="company" type="text" placeholder="Company" class="form_input mb-25">
                    <input id="jobTitle" name="jobTitle" type="text" placeholder="Job discription" class="form_input mb-25">
                    <input id="email" name="email" type="email" placeholder="Email" class="form_input mb-25">
                    <input id="phone" name="phone" type="tel" placeholder="Phone number" class="form_input mb-25">
                    <select name="country" id="country" class="form_select mb-30">
                    <option value="countryDisabled" disabled selected>Country</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Estonia">Estonia</option>
                    </select>
                </div>
                <div class="wrapper_checkbox mb-60">
                    <input type="checkbox" name="confirmPolicy" id="confirmPolicy" value="yes" class="coustom_checkbox">
                    <label for="confirmPolicy">
                        <p>I confirm that I have and agree to the Privacy Policy</p>
                    </label>
                </div>
                <button type="submit" class="btn btn-main">Send request<font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/></button>
              </form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
</template>

<script>
export default {

}
</script>