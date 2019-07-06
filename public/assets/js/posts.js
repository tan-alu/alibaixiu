// //向服务器发送请求 获取文章列表
$.ajax({
    type:'get',//get或post
    url:'/posts',//请求的地址
    // data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    // dataType:'json',
    success:function(result){//成功的回调函数
        // console.log(result)
        //拼接数据和模板
        var html = template('postsTpl',{data:result})
        $('#postsBox').html(html)
        //分页模板
        var page = template('pageTpl',result)
        $('#pageBox').html(page)

    }
})
//处理时间格式
function formateDate(date){
    date = new Date(date);
    //拼接处理时间
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
}
//处理分页操作
function changePage(page){
    //向服务器发送请求 获取文章列表
$.ajax({
    type:'get',//get或post
    url:'/posts',//请求的地址
    data:{
        page:page
    },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    // dataType:'json',
    success:function(result){//成功的回调函数
        // console.log(result)
        //拼接数据和模板
        var html = template('postsTpl',{data:result})
        $('#postsBox').html(html)
        //分页模板
        var page = template('pageTpl',result)
        $('#pageBox').html(page)
    }
})
}
//渲染筛选数据的分类
$.ajax({
    type:'get',//get或post
    url:'/categories',//请求的地址
    data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    // dataType:'json',
    success:function(result){//成功的回调函数
        // console.log(result)
        var html = template('categoryTpl',{data:result})
        $('#categoryBox').html(html)
    }
})
//用户进行文章筛选
$('#filterForm').on('submit',function(){
    // alert(1)
    var formData = $(this).serialize()
    $.ajax({
        type:'get',//get或post
        url:'/posts',//请求的地址
        data:formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        // dataType:'json',
        success:function(result){//成功的回调函数
            // console.log(result)
            //拼接数据和模板
            var html = template('postsTpl',{data:result})
            $('#postsBox').html(html)
            //分页模板
            var page = template('pageTpl',result)
            $('#pageBox').html(page)
        }
    })
    return false;
})
    //删除功能
    $('#postsBox').on('click','.delete',function(){
        if(confirm('确定要删除么')){
            var id = $(this).attr('data-id')
            $.ajax({
                type:'delete',//get或post
                url:'/posts/'+id,//请求的地址
                // data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
                // dataType:'json',
                success:function(result){//成功的回调函数
                    // console.log(result)
                    location.reload()
                }
            })
        }
        
    })
