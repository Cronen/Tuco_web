<template>
     <div class="container">
    <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">OUR FUTURE</a>
        </h4>
      </div>
      <div id="collapse1" class="panel-collapse collapse in">
        <div class="panel-body">One of the great strengths of Tuco Yacht Yard is the many different competences and that it makes it possible to have a very versatile production and several projects running at a time. Jonas Pedersen says, “That at Tuco they adapt to the needs of clients and to the market”. </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">OUR STRENGTH</a>
        </h4>
      </div>
      <div id="collapse2" class="panel-collapse collapse">
        <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">VISION</a>
        </h4>
      </div>
      <div id="collapse3" class="panel-collapse collapse">
        <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
  </div> 
</div>
</template>

<script>
export default {
    head(){
    return{
     script: [{src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"},
     {src:"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"}],
     }
  }
}
</script>

