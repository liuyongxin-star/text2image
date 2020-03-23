<template>
  <div class="hello">
    <div class="common_content">
      <div class="control_area">
        <div style="width: 100%; position: relative; height: 50px;">
          <input type="file" name="file2" id="file2" @change="file_path_change" v-show="false" />
          <el-input
            style="width: 65%;float: left;"
            placeholder="请选择.xlsx文件，建议小于500k"
            v-model="file_path"
            :disabled="true"
          ></el-input>
          <el-button type="primary" @click="click_file_input" style="width:28%">选取Excel文件</el-button>
        </div>

        <div style="width: 100%; position: relative; height: 50px;">
          <input
            type="file"
            name="file1"
            id="file1"
            webkitdirectory
            @change="test_func"
            v-show="false"
          />
          <el-input
            style="width: 65%;float: left;"
            placeholder="请选择excel相匹配图片所在文件夹"
            v-model="dir_path"
            :disabled="true"
          ></el-input>
          <el-button type="primary" @click="click_dir_input" style="width:28%">选择图片文件夹</el-button>
        </div>
        <div style="width: 100%; position: relative; height: 50px;">
          <input
            type="file"
            name="file3"
            id="file3"
            webkitdirectory
            @change="save_func"
            v-show="false"
          />
          <el-input
            style="width: 65%;float: left;"
            placeholder="请选择详情图保存文件夹"
            v-model="save_path"
            :disabled="true"
          ></el-input>
          <el-button type="primary" @click="click_save_input" style="width:28%">选择保存文件夹</el-button>
        </div>
        <br />
        <br />
        <el-button
          style="margin-left: 20px;"
          size="small"
          type="primary"
          @click="get_excel_data"
        >生成图片</el-button>
        <!-- <el-radio-group v-model="template" size="small">
          <el-radio v-model="template" label="1" border>模板1</el-radio>
          <el-radio v-model="template" label="2" border>模板2</el-radio>
        </el-radio-group>-->
      </div>
    </div>

    <img_template1 v-if="template === '1'" :img_data="product"></img_template1>
  </div>
</template>

<script>
const html2canvas = require("../utils/html2canvas.min.js");
const path = require("path");
const fs = require("fs");
const mineType = require("mime-types");
// _ = require("../utils/canvas2image.js");
import { Canvas2Image } from "../utils/canvas2image.js";
import excel_parser from "../utils/excel_parser.js";
import detail_img_mgr from "../utils/detail_img_data_formater";
import img_template1 from "./img_template1";

const test_img = require("../assets/main_img/test.jpg");

export default {
  name: "HelloWorld",

  props: {
    msg: String
  },
  components: {
    img_template1
  },
  data() {
    return {
      product: {
        title: "多功能五金工具箱",
        name: "多功能五金工具箱", //标题
        attribute1: "制作工艺*工具种类齐全", //
        attribute2: ["种类丰s富", "种类丰富", "种类丰富"],
        introduce: ["种类丰s富", "种类丰富", "种类丰富"],
        cover: test_img,
        brand: "公牛牌",
        texture: "材质",
        model: "型号",
        img: [test_img],
        function:
          "功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能功能",
        photography: [test_img, test_img, test_img], //实拍
        detail: [
          {
            title: "合金锻造",
            content: "会撒娇快点哈时间肯定会撒娇肯定会",
            img: test_img
          },
          {
            title: "合金锻造",
            content: "会撒娇快点哈时间肯定会撒娇肯定会",
            img: test_img
          },
          {
            title: "合金锻造",
            content: "会撒娇快点哈时间肯定会撒娇肯定会",
            img: test_img
          },
          {
            title: "合金锻造",
            content: "会撒娇快点哈时间肯定会撒娇肯定会",
            img: test_img
          }
        ]
      },
      fileList3: [],
      dir_path: null,
      file_path: null,
      save_path: null,
      template: "1",
      img_data: {},
      index: 0,
      data: null,
      key_word: null
    };
  },
  methods: {
    imgToBase64(url) {
      let imgurl = url;
      let imageData = fs.readFileSync(imgurl);
      if (!imageData) return "";
      let bufferData = Buffer.from(imageData).toString("base64");
      let base64 = "data:" + mineType.lookup(imgurl) + ";base64," + bufferData;
      return base64;
    },
    get_excel_data() {
      // const test_excel_path = 'D:/detail_img_test/20191113升华牌钻头文案(1).xlsx';
      if (!this.file_path) {
        return this.$message({
          message: "请先加载excel文件",
          type: "warning"
        });
      }
      if (!this.dir_path) {
        return this.$message({
          message: "请先选择图片所在文件夹",
          type: "warning"
        });
      }
      if (!this.save_path) {
        return this.$message({
          message: "请先选择图片保存文件夹",
          type: "warning"
        });
      }
      let data = excel_parser.parse(this.file_path, true);
      console.log(data, "all data 所有数据");
      let newData = []
       data.forEach(item => {
        if(!item.spu){
          return
        }
        var check = newData.every(function(b) {
            return item[1] !== b[1];
        })
        check ? newData.push(item) : ''
      })
      data = newData
      console.log(data,"newData")
      let file_name = path.basename(this.file_path);
      let key_word = file_name.split(".")[0];
      console.log("key_word", key_word);
      this.key_word = key_word;
      this.data = data;
      // for (let per_item of data.slice(0, 1)) {
      //   let res = detail_img_mgr.format_data(key_word, per_item, this.dir_path);
      //   res.img = this.changeSuffix(res.img);
      //   console.log("res,------", res);
      //   this.product = res
      // }
      
      this.generate_img(this.data[this.index]);
    },
    generate_img(data) {
       const loading = this.$loading({
          lock: true,
          text: '正在火速生成中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      let res = detail_img_mgr.format_data(this.key_word, data, this.dir_path,loading);
      res.img = this.changeSuffix(res.img);
      if(res.scene_img){
        res.scene_img.forEach((item,index)=>{
          res.scene_img[index].url = this.imgToBase64(res.scene_img[index].url)
        })
      }
      this.product = res;
      console.log(this.product, "this.product");
      let pre_time = new Date().getTime();
      setTimeout(() => {
        html2canvas(document.querySelector(".product-detail")).then(canvas => {
          console.log(canvas);
          let end_time = new Date().getTime();
          console.log("total time", end_time - pre_time);
          document.querySelector(".canvas").innerHTML = null;
          document.querySelector(".canvas").appendChild(canvas);
          let base64 = canvas.toDataURL("image/png");
          base64 = base64.replace(/^data:image\/\w+;base64,/, "");
          let dataBuffer = new Buffer(base64, "base64");
          fs.writeFileSync(
            `${this.save_path}/${this.product.name}.jpg`,
            dataBuffer
          );
          this.index++;
          console.log(this.index);
          if (this.data[this.index]) {
            //如果还有数据
            this.generate_img(this.data[this.index])
          }else{
            loading.close()
            this.index = 0
             this.$message({
          message: '处理完成',
          type: 'success'
        });
          }
        })
      }, 0);
    },
    changeSuffix(imgArr) {
      //改变图片后缀
      imgArr.forEach((item, index) => {
        let newImg = imgArr[index].replace(/JPG/g, "jpg");
        fs.renameSync(imgArr[index], newImg);
        imgArr[index] = newImg;
        imgArr[index] = this.imgToBase64(imgArr[index]);
      });
      return imgArr;
    },
    get_format_img_data(canvas, width, height) {
      console.log("Canvas2Image", Canvas2Image);
      console.log("Canvas2Image.convertToPNG", Canvas2Image.convertToPNG);
      return Canvas2Image.convertToPNG(canvas, width, height);
    },

    click_dir_input() {
      document.getElementById("file1").click();
    },
    click_save_input() {
      document.getElementById("file3").click();
    },
    click_file_input() {
      document.getElementById("file2").click();
    },

    test_func(event) {
      console.log("event", event);
      if (event.target.files.length > 0) {
        this.dir_path = event.target.files[0].path;
        localStorage.setItem("dir_path", this.dir_path);
      } else {
        console.log("dir change cancel");
      }
    },

    file_path_change(event) {
      console.log("event", event);

      if (event.target.files.length > 0) {
        this.file_path = event.target.files[0].path;
        localStorage.setItem("file_path", this.file_path);
      } else {
        console.log("file change cancel");
      }
      console.log("this.file_path", this.file_path);
    },
    save_func(event) {
      //选择图片保存地址
      if (event.target.files.length > 0) {
        this.save_path = event.target.files[0].path;
        localStorage.setItem("save_path", this.save_path);
      }
    },
    test() {
      console.log("fs", fs);
      this.img_data = { data: "sssss" };
    }
  },
  mounted() {
    this.file_path = localStorage.getItem("file_path");
    this.dir_path = localStorage.getItem("dir_path");
    this.save_path = localStorage.getItem("save_path");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
}
/*button, input, select, textarea { font-size:100%; }*/
input:focus {
  outline: none;
}

.common_content {
  /*background-color: #676666;*/
  text-align: center;
  height: 260px;
  width: 100%;
}

.control_area {
  position: relative;
  width: 500px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
