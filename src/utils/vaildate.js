//用户名匹配
export function nameRule(rule,value,callback){
    //请输入4-0位昵称
        let reg=/(^[a-zA-Z0-9]{4,10}$)/
        if(value===''){
            callback(new Error('请输入用户名'))
        }else if(!reg.test(value)){
           callback(new Error('请输入4-10位用户名'))
        }else{
            callback();
        }  
}
//密码正则匹配
export function passRule(rule,value,callback){
  //请输入6到12位的密码需要包含大小写字母以及数字和特殊字符
  let pass=/^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  if(value===''){
      callback(new Error('请输入密码'))
  }else if(!pass.test(value)){
     callback(new Error('请输入6-12位密码需要包含大小写字母以及数字和特殊字符'))
  }else{
      callback();
  }
}