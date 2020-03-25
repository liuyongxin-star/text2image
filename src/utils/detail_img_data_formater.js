const fs = require('fs');
const element = require("element-ui");
const get_img_path_data = (abs_path) => {
    let img_path_list = fs.readdirSync(abs_path);
    console.log(img_path_list,"img_path_list--------------------------------")
    let imgData = {
        imgList:[],
        scene_img: []
    }
    for(let i = 0;i<img_path_list.length;i++){
        let stat = fs.lstatSync( `${abs_path}\\${img_path_list[i]}` );
        if(stat.isDirectory()){
           console.log(`${abs_path}\\${img_path_list[i]}`,"目录" )
           imgData["scene_img"] = get_scene_data(`${abs_path}\\${img_path_list[i]}`)
        }else{
            imgData["imgList"].push(`${abs_path}\\${img_path_list[i]}`)
        }
    }
    return imgData
};

const get_scene_data = (url) =>{
    let imgList = fs.readdirSync(url);
    imgList = imgList.map(item=>{
        return {
            name: item.substring(item.indexOf("."),0),
            url: url + '\\' + item
        }
    })
    console.log(imgList,"场景图片")
    return imgList
}

const get_map_img_path = (key_word, data_index, dir_path) => {
    let all_list = fs.readdirSync(dir_path);
    console.log('all_list', all_list);
    let candidate_list = all_list.filter((x) => {
        let stat = fs.lstatSync(`${dir_path}/${x}`);
        // 检测是一个目录
        return  stat.isDirectory()
    });
    // console.log(data_index);
    console.log('candidate_list', candidate_list);
    for (let per_path of candidate_list) {
        // console.log('per_path', per_path)
        let num_list = per_path.match(/\d+/g);
        // console.log('num_list', num_list)
        if (Number(data_index) >= Number(num_list[0]) && Number(data_index) <= Number(num_list[1])) {
            let res = `${dir_path}\\${per_path}`;
            console.log('res', res);
            return res
        }
    }
};

const format_data = (key_word, data, img_dir_path,loading) => {
    console.log(data, "数据-----------")
    if(!data){
        loading.close();
        element.MessageBox({
            message: '处理有误，请检查表格',
            type: 'info'
          });
    }
    
    let res_data = {
        index: data['undefined0']
     }
     if(data['参数规格']){
         let str = data['参数规格'].replace(/"/g,"”")
         str = str.replace(/'/g,'"')
        res_data.canshu = JSON.parse(str) 

     }
     if(data['产品描述']){
        let str = eval(data['产品描述'])
        str.forEach(item=>{
            item.indexOf()
            if(item.indexOf("◆") != -1){
                str = item
            }
        })
        if(typeof str == 'string'){
            str= str.replace(/◆/g,"<br/>◆");
        }else{
            str = ""
        }
        res_data.describe = str
    }
     if(data['描述']){
        let str =  data['描述'].replace(/\n+/g,"<br/>");
        res_data.describe = str
    }
    if(data['产品特征']){
        res_data.describe = eval(data['产品特征'])
        // res_data.describe = res_data.describe.substring(1, res_data.describe.length - 1).replace(/'/g,"").split(",")
    }
    if(data['安装与使用']){
        res_data.content = eval(data['安装与使用'])
    }
    if(data['订购码']){
        res_data.code = data['订购码']
    }
    if(data['产品规格']){
        res_data.img = data['产品规格']
    }
    if(data['参数图片'] && data['参数图片'] != 'none'){
        res_data.img = data['参数图片']
    }
    if(data['表格项']){
        let longest = {
            index: 0,
            length: 0
        }
        let col = []
        let sku = []
        res_data.table = eval(data['表格项'])
        res_data.table.forEach((item,index)=>{
            if(Object.keys(item).length > longest.length){
                longest.index = index
                longest.length = Object.keys(item).length
            }
        })
       
        let item = res_data.table[0]
        res_data.table[0] = res_data.table[longest.index]
        res_data.table[longest.index] = item
        res_data.table.forEach((item)=>{
            let arr = []
            for(let key in res_data.table[0]){
                let data = item[key] || ""
                arr.push(data)
            }
            sku.push(arr)
        })
        for(let key in res_data.table[0]){
            col.push(key)
        }
        console.log(col,sku,"longest")
        res_data.table = {
            col: col,
            sku: sku
        }
    }
    console.log(res_data,"---------------")
    return res_data

};

module.exports = {
    format_data,
    get_img_path_data,
    get_map_img_path,

};