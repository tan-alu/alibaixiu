$('#userForm').on('submit',function(){
    console.log($('#userForm').serialize())
    $.ajax({
        type:'post',//get或post
        url:'/users',//请求的地址
        data:$('#userForm').serialize(),//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        // dataType:'name=itcast&age=20',
        success:function(result){//成功的回调函数
            location.reload();
            console.log(result);           
        }
    })
    //阻止默认行为
    return false;
})
//头像上传
$('#formBox').on('change','#avatar',function(){
    var formData = new FormData();
    formData.append('avatar',this.files[0])
    $.ajax({
        type:'post',//get或post
        url:'/upload',//请求的地址
        contentType:false,
        processData:false,
        data:formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        // dataType:'json',
        success:function(result){//成功的回调函数
            console.log(result)
            $('#preview').attr('src',result[0].avatar)
            $('#hiddenAvatar').val(result[0].avatar);
        }
    })
})
// $('#avatar').on('change',function(){
    
// })

//显示用户列表
$.ajax({
    type:'get',//get或post
    url:'/users',//请求的地址
    data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    dataType:'json',
    success:function(result){//成功的回调函数
        // console.log(result)
        //数据和html模板拼接
        var html= template('userTpl',{data:result})
        $('#usersBox').html(html)
    }
})
//修改功能
$('#usersBox').on('click','.edit',function(){
    //获取修改用户的id
    var id = $(this).attr('data-id')
    // console.log(id);
    
    $.ajax({
        type:'get',//get或post
        url:'/users/'+id,//请求的地址
        success:function(result){//成功的回调函数
            console.log(result)
            var html = template('modifyFormTpl',result)
            $('#formBox').html(html)
        }
    })

})
$('#formBox').on('submit','#userForm',function(){
    //收集表单数据
    console.log($(this).serialize());
    var id = $(this).attr('data-id')
    console.log(id);    
    $.ajax({
        type:'put',//get或post
        url:'/users/'+id,//请求的地址
        data:$(this).serialize(),//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        success:function(result){//成功的回调函数
            // console.log(result)
            location.reload();
        }
    })
    // var html = template('userTpl',{data-id:result})
    // $('usersBox').html(html)
    return false;    
})
//删除
$('#usersBox').on('click','.delete' ,function(){
    //获取删除用户的id
    var id = $(this).attr('data-id')
    console.log(id);
    $.ajax({
        type:'delete',//get或post
        url:'/users/'+id,//请求的地
        success:function(result){//成功的回调函数
           location.reload();
        }
    })
    
})