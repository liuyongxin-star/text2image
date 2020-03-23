const xlsx = require("xlsx");
// import node_xlsx from 'node-xlsx';
// console.log('node_xlsx', node_xlsx);
let sheet2arr = function(sheet, json_model=false, header=true){
    let result = [];
    let row;
    let keys = [];
    let rowNum;
    let colNum;
    console.log('sheet', sheet);
    let range = xlsx.utils.decode_range(sheet['!ref']);

    if (json_model) {
        let u_c = 0;
        for(colNum=range.s.c; colNum<=range.e.c; colNum++){
            let nextCell = sheet[
                xlsx.utils.encode_cell({r: range.s.r, c: colNum})
                ];

            if( typeof nextCell === 'undefined' ){

                keys.push(`undefined${u_c}`);
                u_c += 1
            } else keys.push(nextCell.w);
        }
    }
    console.log('keys', keys);
    let first_row_pass = header;
    for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
        if (first_row_pass) {
            first_row_pass = false;
            continue
        }
        row = json_model ? {} : [];
        let col_index = 0;
        for(colNum=range.s.c; colNum<=range.e.c; colNum++){
            let nextCell = sheet[
                xlsx.utils.encode_cell({r: rowNum, c: colNum})
                ];
            if (json_model){
                if( typeof nextCell === 'undefined' ){
                    row[keys[col_index]] = (void 0)
                } else row[keys[col_index]] = nextCell.w
            }else row.push(nextCell.w);
            col_index += 1
        }
        result.push(row);
    }
    return result;
};

const parse = (test_excel_path, json_model=false) => {

    let workbook = xlsx.readFile(test_excel_path);
    console.log('workbook', workbook);
    let sheet = workbook['Sheets']['Sheet1'];
    // console.log('sheet', sheet);
    let res = sheet2arr(sheet, json_model);
    // console.log('res', res)
    return res
};

// const node_parse = (test_excel_path) => {
//
//     let workbook = node_xlsx.parse(test_excel_path);
//     console.log('workbook', workbook)
// };
const node_parse1 = (test_excel_path) => {
    console.log(test_excel_path)
};


module.exports = {
    parse,
    node_parse1
};