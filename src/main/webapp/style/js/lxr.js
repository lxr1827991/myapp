
function $lxr(){
	
	
}


$lxr.quickSort=function(arr,f){   
    //如果数组长度小于等于1无需判断直接返回即可  
    if(arr.length<=1){  
        return arr;  
    }  
    var midIndex=Math.floor(arr.length/2);//取基准点  
    var midIndexVal=arr.splice(midIndex,1);//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数arr[index+1]  
    var left=[];//存放比基准点小的数组  
    var right=[];//存放比基准点大的数组  
    //遍历数组，进行判断分配  
    for(var i=0;i<arr.length;i++){  
        if(f(arr[i],midIndexVal[0])>0){  
            left.push(arr[i]);//比基准点小的放在左边数组  
        }  
        else{  
            right.push(arr[i]);//比基准点大的放在右边数组  
        }  
         
    }  
    //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；  
    return $lxr.quickSort(left,f).concat(midIndexVal,$lxr.quickSort(right,f));  
};  

$lxr.setCookie = function(name,value)
{
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}


$lxr.getCookie = function(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
	}

$lxr.delCookie = function(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=getCookie(name);
if(cval!=null)
document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}



