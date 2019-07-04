    //实现分类显示功能
    $.ajax({
        type:'get',//get或post
        url:'/categories',//请求的地址
        data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        dataType:'json',
        success:function(result){//成功的回调函数
          // console.log(result)
          var html = template('categoryTpl',{data:result})
          $('#category').html(html)
        }
      })
  
      //图片上传和预览
      $('#feature').on('change',function(){
        var formData = new FormData();
        formData.append('avatar',this.files[0]);
        $.ajax({
          type:'post',//get或post
          url:'/upload',//请求的地址
          contentType:false,
          processData:false,
          data:formData,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
          // dataType:'json',
          success:function(result){//成功的回调函数
            console.log(result)
            //图片预览
            $('.thumbnail').attr('src',result[0].avatar).show();
            $('#hiddenImg').attr('value',result[0].avatar);
  
  
          }
        })
      })
      //文章上传
      $('#addForm').on('submit',function(){
        console.log($(this).serialize());
        $.ajax({
          type:'post',//get或post
          url:'/posts',//请求的地址
          data:$(this).serialize(),//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
          // dataType:'json',
          success:function(result){//成功的回调函数
            console.log(result)
            // location.href='posts.html'
          }
        })
        return false;
      })
  