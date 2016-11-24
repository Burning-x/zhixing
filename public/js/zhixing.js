/**
 * Created by 54574_000 on 2016/11/25.
 */
//移除提交按钮的不可用状态
function myupdate() {
    $("#t1").find("input").removeAttr("disabled")
}
//修改信息再次确认
function  ifsubmit() {

    var gnl=confirm("确定修改？");
    if (gnl==true){
        return true;
    }else {
        return false;
    }

}
//上一页按钮点击事件
function getPrePage() {
    var page=$("#pagenow")[0].innerHTML;
    location.href="/?page="+(parseInt(page)-1-1);
}
//下一页按钮点击事件
function getNextPage() {
    var page=$("#pagenow")[0].innerHTML;
    location.href="/?page="+(parseInt(page)+1-1);
}