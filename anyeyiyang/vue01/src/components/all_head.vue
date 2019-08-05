<template>
    <div class="all_head">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-3 top_qyh t1"><slot name="one"></slot></div>
          <div class="col-xs-6 top_qyh t2"><span class="span1"><slot name="two"></slot></span></div>
          <div class="col-xs-3 top_qyh t3"><slot name="three"></slot></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "all_head"
    }
</script>

<style scoped>
  .all_head{
    width: 100%;
    height: 0.48rem;
    background: #3190e8;
    position: fixed;
    z-index: 1;
  }
  .all_head .top_qyh{
    display: flex;
    align-items: center;
    height: 0.48rem;
    color: white;
  }
  .all_head .t2{
    justify-content: center;
  }
  .all_head .t3{
    justify-content: flex-end;
  }
  .all_head .span1{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
