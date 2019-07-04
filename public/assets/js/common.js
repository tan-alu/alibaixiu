$('#logout').on('click',function(){
    //退出就是删除凭证
    //确认一下用户是否真的想退出
    var isConfirm = confirm('你是否真的想退出')
    if(isConfirm == true){
        $.ajax({
            type:'post',//get或post
            url:'/logout',//请求的地址
            
            success:function(result){//成功的回调函数
                // console.log(result)
                location.href='login.html'
            },
            error:function(result){//成功的回调函数
                // console.log(result)
                alert('退出失败')
            }
        })
    }
})