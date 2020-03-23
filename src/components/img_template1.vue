<template>
    <div>
        <div class="product-detail">
            商品详情标题
            <div class="product-title">
                <div class="title_1">
                    <div class="border1"></div>
                    {{img_data.title}}
                    <div class="border2"></div>
                </div>
                <p class="title_2">{{img_data.name}}</p>
                <p class="title_3">
                    {{img_data.attribute1}}
                </p>
                <div class="title_4">
                    <div class="title_4_item" v-for="(item,index) in img_data.attribute2" :key="index">{{item}}</div>
                </div>
                <img :src="img_data.img[0]" >
            </div>
            <!-- 商品详情标题 end -->
            <div class="product-parameters">
                <div class="title">
                    <div>
                        <p>产品参数</p>
                        <span>PRODUCT PARAMETER</span>
                    </div>
                </div>
                <div class="content">
                    <ul class="list-box">
                        <li>
                            <div>品牌</div>
                            <div>{{img_data.brand}}</div>
                        </li>
                          <li>
                            <div>名称</div>
                            <div>{{img_data.name}}</div>
                        </li>
                          <li>
                            <div>材质</div>
                            <div>{{img_data.material}}</div>
                        </li>
                          <li>
                            <div>型号</div>
                            <div>{{img_data.number}}</div>
                        </li>
                          <li>
                            <div>功能</div>
                            <div>{{img_data.fn}}</div>
                        </li>
                          <li>
                            <div>范围</div>
                            <div>{{img_data.scope}}</div>
                        </li>
                     
                    </ul>
                    <div>
                        <!-- <table class="size-table">
                            <tr>
                                <th>编号</th>
                                <th>规格(mm)</th>
                                <th>S(mm)</th>
                                <th>L(mm)</th>
                                <th>D(mm)</th>
                                <th>H(mm)</th>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                                <td>11</td>
                            </tr>
                        </table> -->
                    </div>
                </div>
            </div>
           
            <!-- 产品细节 -->
            <div class="product-introduce">
                <div class="title">
                    <div>
                        <p>产品细节</p>
                        <span>PRODUCT DETAIL</span>
                    </div>
                </div>
                <div class="product-introduce-content">
                    <div class="product-introduce-content-item" v-for="(item,index) in img_data.introduce" :key="index">
                        <div class="product-introduce-content-item-left">
                            <div><img src="@/img/icon_product_detail@2x.png" class="product-introduce-content-item_icon">产品细节{{index + 1}}</div>
                            <p>{{item}}</p>
                        </div>
                       <img :src="img_data.img[index]" class="product-introduce-content-item-right">
                    </div>
                </div>
            </div>
             <!-- 产品实拍 -->
            <div class="product-img">
                <div class="title">
                    <div>
                        <p>产品实拍</p>
                        <span>PRODUCT PICTURE</span>
                    </div>
                </div>
                <div class="product-img-content">
                     <img :src="item" :key="index" v-for="(item,index) in img_data.img">
                </div>
            </div>
            <!-- 推荐使用 -->
            <div class="recommend-use" v-if="img_data.scene_img && img_data.scene_img.length != 0">
                 <div class="title">
                    <div>
                        <p>场景展示</p>
                        <span>SCENE SHOW</span>
                    </div>
                </div>
                 <div class="scene-content">
                    <div class="scene-content_title">
                        <span>适用场景: <label v-for="(item,index) in img_data.scene_img" :key="index">{{item.name}}</label></span>
                    </div>
                </div>
                <div class="recomment-content">
                    <div class="recomment-content-item" v-for="(item,index) in img_data.scene_img" :key="index" >
                         <img :src="item.url">
                        <div>{{item.name}}</div>
                    </div>
                </div>
            </div>
              <!-- 产品实拍 -->
            <!-- <div class="product-img">
                <div class="title">
                    <div>
                        <p>场景展示</p>
                        <span>SCENE SHOW</span>
                    </div>
                </div>
                <div class="scene-content">
                    <div class="scene-content_title">
                        <label>适用场景: 办公场景 工地 </label>
                    </div>
                </div>
            </div> -->
            <!-- 可兼容机型 -->
            <div class="compatibility">
                <!-- <div class="title">
                    <div>
                        <p>可兼容机型</p>
                        <span>COMPATIBLE MODEL</span>
                    </div>
                </div> -->
                <div class="compatibility-content">
                    <!-- <div class="compatibility-header-text">
                        <span class="border"></span> 适用设备 <span class="border"></span>
                    </div>
                    <p class="compatibility_title_2">钻床、攻丝机、自动机床、加工中心、CNC等机器钻床、攻丝机、钻床、
                        攻丝机、自动机床、加工中心、CNC等机器自动机床、加工中心、CNC
                        等机器。</p> -->
                    <!-- <div class="compatibility-item">
                        <div class="compatibility-item-title">手持设备</div>
                        <div class="compatibility-item-imgList">
                            <div class="compatibility-item-imgList-item">
                                               <img src="../assets/equipment1.jpg">
                                <div>台站</div>
                            </div>
                            <div class="compatibility-item-imgList-item">
                           <img src="../assets/equipment2.jpg">
                                <div>吸尘器</div>
                            </div>
                            <div class="compatibility-item-imgList-item">
                                 <img src="../assets/equipment3.jpg">
                                <div>钻床</div>
                            </div>
                        </div>
                    </div> -->
                    
                    <div class="detailpage">
                      <img src="../assets/detailpage-buynotes@2x.png">
                    </div>
                </div>
            </div>
        </div>


        <div class="canvas">           </div>
    </div>
</template>

<script>
    export default {
        name: "img_template1",
        props:{
            img_data: Object
        },

        data: () =>{
            return {
            }
        },
        methods:{
            test(){
                console.log('qwer', this.img_data)
            }
        },
        watch: {
            img_data: ()=>{
                console.log('data change')
            }
        }
    }
</script>

<style scoped>
    .product-detail{
        position: relative;
        width: 750px;
        float: left;
        font-size: 0;
        /*top: 300px;*/
    }
    .product-parameters {
        width: 100%;
        background: url('../assets/product_bg.png') no-repeat;
        background-size: 100%;
        /* height: 1437px; */
    }

    .title {
        background: url("../assets/PRODUCT_PARAMETER.png") no-repeat;
        background-size: 100% 160px;
        text-align: center;
        color: #fff;
        height: 160px;
        box-sizing: border-box;
        overflow: hidden;
        padding-top: 37px;
    }

    .title p {
        font-size:44px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:62px;
        margin: 0;
    }

    .title span {
        font-size: 20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,0.58);
        line-height:28px;
    }

    .product-parameters .content {
        background: url('../assets/product_bg.png') center no-repeat;
        background-size: 100% 100%;
        background-origin: border-box;
    }

    .content {
        margin: 0 auto;
        padding: 40px 30px 56px;
    }

    .list-box {
        /* width: 64rem; */
        margin: 0;
        padding: 0;
        list-style: none;
        color: #fff;
        margin: 0 auto 57px;
        border-bottom:1px solid 
    }

    ul.list-box li {
        box-sizing: border-box;
        width: 100%;
        line-height: 40px;
        border: 1px solid #fff;
        border-bottom: none;
        font-size: 20px;
        overflow-y: hidden;
        display: flex;
    }
ul.list-box li div{
    padding:0 10px
}
    ul.list-box li:last-child {
        border-bottom: .1px solid #fff;
    }


    ul.list-box li>div:first-child {
        width: 165px;
        flex: 0 0 165px;
        text-align: center;
        background: #FC732B;
        border-right: 1px solid #fff;
    }

    .size-table {
        margin: 0 auto;
        border-collapse: collapse;
    }

    .size-table tr th {
        height: 54px;
        line-height: 54px;
        background: #FC732B;
        color: #fff;
        font-size: 20px;
        border-right: 1px solid #fff;
        padding: 0 15px;
    }

    .size-table tr th:last-child {
        border-right: none;
    }

    .size-table tr:not(:nth-child(1)) {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .size-table tr:not(:nth-child(1)) td {
        border-right: .1rem solid #fff;
    }

    .size-table tr:not(:nth-child(1)) td:last-child {
        border-right: none;
    }

    .size-table tr:nth-of-type(even) {
        background: #C0C4CC;
    }

    .size-table tr:nth-of-type(odd) {
        background: #F5F7FA;
    }
    .product-img-content{
        font-size: 0;
        background: black;
    }
    .product-img-content img{
        width: 100%;
        margin-bottom: 5px;
    }
    .recommend-use{
        background:rgba(0,0,0,0.85);
    }
    .recommend-use-header{
        font-size:44px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:62px;
        text-align: center;
        padding: 37px 0 31px 0;
    }
    .recommend-use-header-text {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .recommend-use-header-text .border{
        width:191px;
        height:2px;
        margin: 0 40px;
        background:linear-gradient(118deg,rgba(255,143,52,1) 0%,rgba(254,96,35,1) 100%);
    }

    .english{
        font-size:20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(103,102,102,1);
        line-height:28px;
    }
    .recomment-content{
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px 10px;
        box-sizing: border-box;
    }
    .recomment-content div{
       width:350px;
        text-align: center;
    }
    .recomment-content img{
        width:350px;
        height:206px;

    }
    .recomment-content-item{
        margin-bottom: 24px;
        font-size: 0;
        position: relative;
         width:350px;
        height:206px;
        overflow: hidden;
    }
    .recomment-content-item img{
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;

    }
    .recomment-content-item div{
       position: absolute;
       bottom: 0;
       width: 100%;
       height:37px;
background:rgba(0,0,0,0.65);
font-size:18px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:37px;
text-align:center;
    }
    .product-title{
        background: url("../assets/title_new.png");
        background-size: 100% 100%;
        text-align: center;
        padding: 60px 0;
    }
    .title_1{
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title_2{
        font-size:60px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(252,115,43,1);
        line-height:84px;
    }
    .title_1 .border1{
        margin: 0 20px;
        width:103px;
        height:2px;
        background:linear-gradient(118deg,rgba(255,255,255,0.5)  0%,rgba(255,255,255,1) 100%);
    }
    .title_1 .border2{
        margin: 0 20px;
        width:103px;
        height:2px;
        background:linear-gradient(118deg,white 0%,rgba(255,255,255,0.5) 100%);
    }
    .title_2{
        margin: 7px 0 1px 0;
    }
    .title_3{
        font-size:24px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:33px;
    }
    .title_4{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }
    .title_4_item{
        width:142px;
        height:47px;
        background:rgba(254,121,44,1);
        border-radius:25px;
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:47px;
        margin: 0 20px;
    }
    .product-title img{
        width: 650px;
        border-radius: 10px;
        margin-top: 60px;
    }
    .product-introduce-content-item{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 35px 0;
    }
    .product-introduce-content-item:nth-child(even){
        flex-direction:row-reverse;
    }
    .product-introduce-content-item-right{
        width: 350px;
    }
    .product-introduce{
        background: url("../assets/bg2.png");
    }
    .product-introduce-content-item-left {
        margin: 0 25px;
    }
    .product-introduce-content-item-left p{
        width:309px;
        font-size:20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:38px;
        opacity: 0.8;
        margin-top: 30px;
    }
    .product-introduce-content-item-left div{
        font-size:36px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(255,255,255,1);
        background:rgba(254,121,44,1);
        line-height:70px;
        width:300px;
        text-align: center;
    }
    .compatibility{
    }
    .compatibility-content{
        background:rgba(0,0,0,0.85);
        background-size: 100% 100%;
    }
    .compatibility-header-text{
        font-size:32px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .compatibility-header-text .border{
        width:242px;
        height:1px;
        background: #979797;
        margin: 0 20px;
    }
    .compatibility_title_2{
        width:580px;
        height:75px;
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:25px;
        opacity: 0.8;
        margin: 15px auto 30px auto;
    }
    .compatibility-item-title{
        width:298px;
        height:50px;
        background:rgba(254,121,44,1);
        border-radius:25px;
        border:1px solid rgba(151,151,151,1);
        font-size:24px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:50px;
        text-align: center;
        margin: 0 auto 30px auto;
    }
    .compatibility-item-imgList{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 36px;
    }
    .compatibility-item-imgList-item{
        width: 234px;
        margin: 0 5px;

    }
    .compatibility-item-imgList-item img{
        width: 100%;
        height: 234px;
    }
    .compatibility-item-imgList-item div{
        width:234px;
        height:47px;
        background:rgba(144,147,153,1);
        font-size:24px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:47px;
        text-align: center;
    }
    .detailpage{
        padding: 10px;
        box-sizing: border-box;
        width: 100%
    }
    .detailpage img{
        width: 100%
    }
    .canvas{
        float: right;
    }
    .product-introduce-content-item_icon{
      width: 71px;
      height: 59px;
      float: left;
      margin:6px 0 0 24px;
    }
    .scene-content{
    }
    .scene-content_title{
        width:610px;
        text-align: left;
        font-size:20px;
font-family:PingFangSC-Semibold,PingFang SC;
color:rgba(255,255,255,1);
line-height:28px;
margin:0 auto;
padding: 32px 0
    }
    .scene-content_title label{
        margin-right: 5px;
    }
</style>