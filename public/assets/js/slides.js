$('#myfile').on('change',function(){
    var formData = new FormData();
    formData.append('avatar',this.files[0]);
    // console.log(formData);
    
    $.ajax({
      type:'post',//get或post
      url:'/upload',//请求的地址
      processData:false,
      contentType:false,
      data:formData,
      success:function(result){//成功的回调函数
        // console.log(result)
        $('#preview').attr('src',result[0].avatar).show();//图片预览
        $('#hiddenImg').val(result[0].avatar);
      }
    })
  })


  $('#slideForm').on('submit',function(){
    //收集表单数据
    // console.log($(this).serialize());
    $.ajax({
      type:'post',//get或post
      url:'/slides',//请求的地址
      data:$(this).serialize(),
      success:function(result){//成功的回调函数
        // console.log($(this).serialize());
        location.reload();
      }
    })
    return false;
  })


  //获取并渲染轮播图列表
  $.ajax({
    type:'get',//get或post
    url:'/slides',//请求的地址
    success:function(result){//成功的回调函数
      console.log(result)
      var html = template('tpl',{data:result});
      $('#slideBox').html(html);
    }
  })


//   //删除功能
  $('#slideBox').on('click','.delete',function(){
    if(confirm('确定要删除吗？')){
      var id = $(this).attr('data-id');
      $.ajax({
        type: 'delete',//get或post
        url: '/slides/' + id,//请求的地址
        success: function(result) {//成功的回调函数
          location.reload();
        }
      })
    }
  })