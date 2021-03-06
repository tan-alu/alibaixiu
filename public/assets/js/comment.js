$.ajax({
    type:'get',//get或post
    url:'/comments',//请求的地址
    data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    dataType:'json',
    success:function(result){//成功的回调函数
        console.log(result)
    }
})
    $.ajax({
        type:'get',//get或post
        url:'/comments',//请求的地址
        data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',
        success:function(result){//成功的回调函数
            // console.log(result)
            var html = template('commentsTpl',result)
            $('#commentsBox').html(html)

        }
    })

    //处理时间格式
function formateDate(date){
    date = new Date(date);
    //拼接处理时间
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
}

$('#commentsBox').on('click','.status',function(){
    var id = $(this).attr('data-id')
    var status = $(this).attr('data-status')

    $.ajax({
        type:'put',//get或post
        url:'/comments/'+id,//请求的地址
        data:{
            state:status==1?0:1
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',
        success:function(result){//成功的回调函数
            // console.log(result)
            location.reload()
        }
    })
    return false;
})

//删除
$('#commentsBox').on('click','.delete',function(){
    var id = $(this).attr('data-id')
    // alert(id)
$.ajax({
    type:'delete',//get或post
    url:'/comments/'+id,//请求的地址
    // data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    // dataType:'json',
    success:function(result){//成功的回调函数
        // console.log(result)
        location.reload();
    }
})   
return false; 
})

//分页
