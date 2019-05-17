<template>
  <div role="tablist" class="tab_collaps">
    <b-card no-body>
      <b-card-header class="p-0" role="tab">
        <b-button v-b-toggle.accordion-1 class="collapse_button">Our future<font-awesome-icon :icon="['fas', 'chevron-down']" class="collapse_icon"/></b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>One of the great strengths of Tuco Yacht Yard is the many different competences and that it makes it possible to have a very versatile production and several projects running at a time. Jonas Pedersen says, “That at Tuco they adapt to the needs of clients and to the market”.</p>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header class="p-0" role="tab">
        <b-button v-b-toggle.accordion-2 class="collapse_button">Our strength<font-awesome-icon :icon="['fas', 'chevron-down']" class="collapse_icon"/></b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>test</p>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header class="p-0" role="tab">
        <b-button v-b-toggle.accordion-3 class="collapse_button">Vision<font-awesome-icon :icon="['fas', 'chevron-down']" class="collapse_icon"/></b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>test</p>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {

}
</script>

