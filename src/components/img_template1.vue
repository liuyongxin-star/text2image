<template>
  <div>
    <div class="product-detail">
      <div class="paramsContent">
        <div class="paramsItem" v-for="(item,name) in img_data.canshu" :key="name">
          <div class="paramsTitle">{{name}}</div>
          <div class="paramsData">{{item}}</div>
        </div>
      </div>
      <div class="describeContent" v-if="img_data.describe.length">
        <p  v-html="img_data.describe">
        </p>
      </div>
    </div>
    <div class="canvas"></div>
  </div>
</template>

<script>
export default {
  name: "img_template1",
  props: ["img_data"],
  data: () => {
    return {};
  },
  methods: {
    test() {
      console.log("qwer", this.img_data);
    }
  },
  watch: {
    img_data: () => {
      console.log("data change");
    }
  }
};
</script>

<style scoped>
.product-detail {
  position: relative;
  width: 790px;
  float: left;
  /*top: 300px;*/
  padding: 0 40px;
  box-sizing: border-box;
}
img {
  width: 100%;
}
th {
}
table.gridtable {
  font-family: verdana, arial, sans-serif;
  font-size: 11px;
  color: #333333;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
  width: 100%;
}
table.gridtable th {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: rgb(254, 140, 35);
}
table.gridtable td {
  border-bottom-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #ffffff;
}
.describeContent {
  text-align: left;
  padding: 20px 0;
}
.text {
  line-height: 1.5;
  text-align: left;
}
.paramsContent{
  border:1px solid #e5e5e5;
  border-top: 0px;
}
.paramsItem{
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid #e5e5e5;
}
.paramsTitle{
  flex: 0 0 200px;
  color: #666666;
  text-align: left;
  padding-left: 30px;
}
</style>
