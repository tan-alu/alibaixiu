
//添加分类
  $('#addCategory').on('submit',function () {
    console.log($(this).serialize());
    // return false;
    $.ajax({
      type:'post',//get或post
      url:'/categories',//请求的地址
      data:$(this).serialize(),//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
      // dataType:'json',
      success:function(result){//成功的回调函数
        console.log(result)
        location.reload();
      }
    })
    return false;
    
  })
  
  //展示分类列表数据
  $.ajax({
    type:'get',//get或post
    url:'/categories',//请求的地址
    // data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    // dataType:'json',
    success:function(result){//成功的回调函数
      // console.log(result)
      var html = template('categoryTpl',{data:result})
      $('#categoryBox').html(html);
    }
  })

  //当点击编辑事件时，让当前一行的内容展示在左侧的表单上
  $('#categoryBox').on('click','.edit',function(){
    var id = $(this).attr('data-id');
    console.log(id);
    $.ajax({
      type:'get',//get或post
      url:'/categories/'+id,//请求的地址
      data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
      // dataType:'json',
      success:function(result){//成功的回调函数
        console.log(result)
        var html = template('modifyFormTpl',result)
        $('#formBox').html(html);
      }
    })
  })

  //当提交修改表单时候,ajax
  $('#formBox').on('submit','#modifyCategory',function(){
    console.log($(this).serialize());
    var id = $(this).attr('data-id')
    $.ajax({
      type:'put',//get或post
      url:'/categories/'+id,//请求的地址
      data:$(this).serialize(),//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
      dataType:'json',
      success:function(result){//成功的回调函数
        console.log(result)
        location.reload();
      }
    })
    
    return false;
  })

  //删除功能
  $('#categoryBox').on('click','.delete',function(){
    var id = $(this).attr('data-id')
    $.ajax({
      type:'delete',//get或post
      url:'/categories/'+id,//请求的地址
      data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
      dataType:'json',
      success:function(result){//成功的回调函数
        console.log(result)
        location.reload();
      }
    })
  })
  // //全选名称，下面全部跟着选中
  // $('#nameAll').on('change',function(){
  //   $(this).prop()
  // })
