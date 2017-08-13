$(function () {

    $('#baiduBtn').on('click', function () {
        var wd = $('#wd').val()
        window.open("https://www.baidu.com/s?wd=" + wd)
    })

    var columns = [];
    columns.push({
        title: 'ID',
        field: '',
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {
            return row.id
        }
    });

    columns.push({
        title: '分类',
        field: 'category',
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {
            return value
        }
    }, {
        title: '美图',
        field: 'url',
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {
            return "<a target='_blank' class='full-width' href='" + value + "'><img src='" + value + "'></a>"
        }
    })

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

    $('#meituTable').bootstrapTable({
        url: 'wotuJson',
        sidePagination: "server",
        queryParamsType: 'page,size',
        contentType: "application/x-www-form-urlencoded",
        method: 'get',
        striped: false,     //是否显示行间隔色
        cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,  //是否显示分页（*）
        paginationLoop: true,
        paginationHAlign: 'right', //right, left
        paginationVAlign: 'bottom', //bottom, top, both
        paginationDetailHAlign: 'left', //right, left
        paginationPreText: ' 上一页',
        paginationNextText: '下一页',
        search: false,
        sortable: true,    //是否启用排序
        sortOrder: "desc",   //排序方式
        sortName: "id",
        pageNumber: 1,     //初始化加载第一页，默认第一页
        pageSize: 10,      //每页的记录行数（*）
        pageList: [5, 10, 20, 50, 100], // 可选的每页数据
        totalField: 'totalPages',
        dataField: 'content', //后端 json 对应的表格数据 key
        columns: columns,
        queryParams: function (params) {
            return {
                size: params.pageSize,
                page: params.pageNumber,
                sortName: params.sortName,
                sortOrder: params.sortOrder
            }
        },
        classes: 'table table-responsive full-width',
    })


    // 键盘翻页事件
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 38 || e && e.keyCode == 37) {//上,左
        // 上一页
        $('.page-pre').click()
    }
    if (e && e.keyCode == 40 || e && e.keyCode == 39) {//下,右
        // 下一页
        $('.page-next').click()
    }

    // 默认加载body体全部sloth图片
    var sloth = new Sloth()
    // 默认滚动条加载
    sloth.init()
    // 手动加载
    // sloth.load();


    // $('#wotuTable').on('order.dt',
    //     function () {
    //         console.log('排序')
    //         sloth.init()
    //     }).on('search.dt',
    //     function () {
    //         console.log('搜索')
    //         sloth.init()
    //     }).on('page.dt',
    //     function () {
    //         console.log('翻页')
    //         sloth.init()
    //     }).dataTable() // 前端分页

})
