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
    console.log(data, "数据",element)
    if(!data){
        loading.close();
        element.MessageBox({
            message: '处理有误，请检查表格',
            type: 'info'
          });
    }
    
    let res_data = {
        'introduce': [],
        params: []
    };
    res_data.title = data[1]
    res_data.name = data[2]
    res_data.attribute1 = data[3]
    if(data[4].search("，") != '-1'){
        console.log("又发")
        res_data.attribute2 = data[4].split("，")
    }else{
        res_data.attribute2 = data[4].trim().split(/\s+/)
    }
    res_data.brand = data[5]
    res_data.fn = data[9]
    res_data.number = data[8]
    res_data.scope = data[10]
    res_data['index'] = data['序号'];
    res_data['material'] = data['材质'];
    res_data['describe'] = data['详细描述'];
    let c = 1;
    let condition = true;
    for (let key in data) {
        // if(key.search("！")){ //需要放进表格里
        //     res_data.params.push({
        //         key: data[key]
        //     })
        // }
        // if (key.search("！") != '-1') {
        //     let name = key.substr(0, key.length - 1)
        //     res_data.params.push({
        //         name: name,
        //         value: data[key]
        //     })
        // }
        console.log(key.search("！"), "key.search()")
        if (key >= 13) { //大于13都是产品介绍
            console.log(key, "key")
            res_data.introduce.push(data[key])
        }
    }
    while (condition) {
        let intro_key_name = `介绍${c}`;
        if (data[intro_key_name] === undefined) {
            break;
        }
        res_data.introduce.push(data[intro_key_name]);
        c += 1
    }
    console.log('img_dir_path', img_dir_path);
    console.log('key_word', key_word, res_data['index'], img_dir_path);
    let img_path = get_map_img_path(key_word, res_data['index'], img_dir_path);
    console.log('img_path', img_path);
    let imgData = get_img_path_data(img_path)
    res_data['img'] = imgData.imgList;
    res_data['scene_img'] = imgData.scene_img
    console.log(res_data, "数据res_data")
    return res_data

};

module.exports = {
    format_data,
    get_img_path_data,
    get_map_img_path,

};