let table = new Tabulator("#userList-table", {
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"userId", field:"userId", width:150},
        {title:"userName", field:"userName", align:"left", formatter:"progress"},
        {title:"userRole", field:"userRole"},
        {title:"appendDate", field:"appendDate"},
        {title:"updateDate", field:"updateDate"},
    ],
    ajaxConfig : {
        method: "get", //set request type to Position
        headers: {
            "Content-type": 'application/json; charset=utf-8', //set specific content type
        }
    },
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});
table.setData("/admin/getUserList");
