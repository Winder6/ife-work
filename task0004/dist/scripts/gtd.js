define(["util","selector"],function(a,b){function c(){A='[{"id": 0,"name": "默认分类","child": [0]},{"id": 1,"name": "百度IFE项目","child": [1, 3]}]',B='[{"id": 0,"name": "默认子分类","child": [],"father": 0},{"id": 1,"name": "task0001","child": [0, 1, 2],"father": 1},{"id": 3,"name": "task0002","child": [3],"father": 1}]',C='[{"id": 0,"name": "to-do 1","father": 1,"finish": true,"date": "2015-05-28","content": "开始 task0001 的编码任务。"},{"id": 1,"name": "to-do 3","father": 1,"finish": true,"date": "2015-05-30","content": "完成 task0001 的编码任务。"},{"id": 2,"name": "to-do 2","father": 1,"finish": false,"date": "2015-05-29","content": "重构 task0001 的编码任务。"},{"id": 3,"name": "to-do 4","father": 3,"finish": false,"date": "2015-06-29","content": "完成 task0002 的编码任务。"}]',D=JSON.parse(localStorage.cate),E=JSON.parse(localStorage.childCate),F=JSON.parse(localStorage.task),G=navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i),G&&(location.href="#type"),localStorage.getItem("cate")||(localStorage.cate=A,localStorage.childCate=B,localStorage.task=C,b("#type-all").className="choose"),z(b("#type-all"),k),z(b(".add"),n),z(document.getElementsByClassName("add")[1],q),z(b(".status").getElementsByTagName("li"),m),z(b(".icon-check"),v),z(b(".icon-edit"),w),z(b(".btn3"),r),z(document.getElementsByClassName("btn3")[1],s),z(b(".pop-close"),o);var a="#type";window.onhashchange=function(){var c=location.hash,d=b("."+a.substr(1)),e=b("."+c.substr(1));"#type"==a&&"#task"==c||"#task"==a&&"#details"==c?(d.classList.add("slide","out"),e.classList.add("slide","in"),e.style.display="block",d.style.display="block",setTimeout(function(){e.style.display="block",d.style.display="none",d.classList.remove("slide","out"),e.classList.remove("slide","in")},225)):("#task"==a&&"#type"==c||"#details"==a&&"#task"==c)&&(e.classList.add("slide","reverse","in"),d.classList.add("slide","reverse","out"),d.style.display="block",e.style.display="block",setTimeout(function(){d.style.display="none",e.style.display="block",e.classList.remove("slide","reverse","in"),d.classList.remove("slide","reverse","out")},225)),a=c}}function d(){u();var a=b(".type-wrap .choose");b("#type-all").innerHTML='<i class="icon-menu"></i><span>所有任务</span>('+F.length+")";for(var c="",d=0;d<D.length;d++){c+='<li><h3><i class="icon-folder-open-empty"></i><span>'+D[d].name+"</span>("+D[d].num+')<i class="delete icon-minus-circled"></i></h3><ul class="item">';for(var f=0;f<D[d].child.length;f++){var h=g(E,"id",D[d].child[f]);c+='<li><h4><i class="icon-doc-text"></i><span>'+h.name+"</span>("+h.child.length+')<i class="delete icon-minus-circled"></i></h4></li>'}c+="</ul></li>"}if(c=c.replace(/<i class="delete icon-minus-circled"><\/i>/,""),c=c.replace(/<i class="delete icon-minus-circled"><\/i>/,""),b(".item-wrap").innerHTML=c,z(document.getElementsByTagName("h3"),k),z(document.getElementsByClassName("delete"),t),z(document.getElementsByTagName("h4"),k),!G){if(a){var i=a.tagName.toLowerCase(),j=a.getElementsByTagName("span")[0].innerHTML,l=!1;switch(i){case"h2":b("h2").click(),l=!0;break;case"h3":for(var m=document.getElementsByTagName("h3"),d=0;d<m.length;d++)if(m[d].getElementsByTagName("span")[0].innerHTML===j){m[d].click(),l=!0;break}break;case"h4":for(var n=document.getElementsByTagName("h4"),d=0;d<n.length;d++)if(n[d].getElementsByTagName("span")[0].innerHTML===j){n[d].click(),l=!0;break}}l||b("h2").click()}else b("h2").click();e()}}function e(){var a=b(".task-wrap .choose");b(".status li").click();var c=b(".type-wrap .choose"),d=c.tagName.toLowerCase(),e=c.getElementsByTagName("span")[0].innerHTML,h=[];switch(d){case"h2":for(var i=0;i<F.length;i++)h.push(F[i].id);f(h);break;case"h3":for(var k=g(D,"name",e),i=0;i<k.child.length;i++)for(var l=g(E,"id",k.child[i]),m=0;m<l.child.length;m++)h.push(l.child[m]);f(h);break;case"h4":for(var l=g(E,"name",e),i=0;i<l.child.length;i++)h.push(l.child[i]);f(h)}if(!G)if(a)for(var n=document.getElementsByTagName("h6"),o=a.getElementsByTagName("span")[0].innerHTML,p=!1,i=0;i<n.length;i++){if(n[i].getElementsByTagName("span")[0].innerHTML===o){n[i].click(),p=!0;break}!p&&b("h6")&&b("h6").click()}else b("h6")&&b("h6").click();G||j()}function f(c){for(var d,e=[],f=0;f<c.length;f++)d=g(F,"id",c[f]),e.push(d.date);e=a.uniqArray(e),e=i(e);for(var h="",f=0;f<e.length;f++){h+="<li><h5>"+e[f]+'</h5><ul class="item">';for(var j=0;j<c.length;j++)d=g(F,"id",c[j]),d.date===e[f]&&(d.finish===!0?h+='<li class="task-item task-finish">':d.finish===!1&&(h+='<li class="task-item">'),h+='<h6><i class="icon-check"></i><span>'+d.name+'</span><i class="delete icon-minus-circled"></i></h6></li>');h+="</ul></li>"}b(".task-wrap").innerHTML=h,z(document.getElementsByTagName("h6"),l),z(document.getElementsByClassName("delete"),t)}function g(a,b,c){for(var d=0;d<a.length;d++)if(a[d][b]===c)return a[d]}function h(a,b,c){for(var d=0;d<a.length;d++)if(a[d][b]===c)return d}function i(a){return a.sort(function(a,b){return a.replace(/-/g,"")-b.replace(/-/g,"")})}function j(){var a=b(".task-wrap .choose"),c=b(".details").getElementsByTagName("span");if(a){var d=a.getElementsByTagName("span")[0].innerHTML,e=g(F,"name",d);e?(c[0].innerHTML=e.name,c[1].innerHTML=e.date,c[2].innerHTML=e.content):(c[0].innerHTML="",c[1].innerHTML="",c[2].innerHTML=""),b(".set").style.display="inline"}else c[0].innerHTML="",c[1].innerHTML="",c[2].innerHTML="",b(".set").style.display="none"}function k(){G&&(location.href="#task");for(var a=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("*"),b=0;b<a.length;b++)if("choose"===a[b].className){a[b].className="";break}this.className="choose",e()}function l(){G&&(location.href="#details");for(var a=this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("*"),b=0;b<a.length;b++)if("choose"===a[b].className){a[b].className="";break}this.className="choose",j()}function m(){for(var a=this.parentNode.getElementsByTagName("*"),c=0;c<a.length;c++)if("choose"===a[c].className){a[c].className="";break}this.className="choose";var d;if(-1!==this.innerHTML.indexOf("所有")){d=b(".task-wrap").getElementsByTagName("li");for(var c=0;c<d.length;c++)d[c].style.display="block"}else if(-1!==this.innerHTML.indexOf("已完成")){d=b(".task-wrap").getElementsByTagName("li");for(var c=0;c<d.length;c++)d[c].style.display="none";for(var c=0;c<d.length;c++)-1!==d[c].className.indexOf("task-finish")&&(d[c].style.display="block",d[c].parentNode.parentNode.style.display="block")}else if(-1!==this.innerHTML.indexOf("未完成")){d=b(".task-wrap").getElementsByTagName("li");for(var c=0;c<d.length;c++)d[c].style.display="none";for(var c=0;c<d.length;c++)-1===d[c].className.indexOf("task-finish")&&"item"===d[c].parentNode.className&&(d[c].style.display="block",d[c].parentElement.parentElement.style.display="block")}if(!G)for(var e=document.getElementsByTagName("h6"),c=0;c<e.length;c++)if("none"!==e[c].parentNode.style.display){e[c].click();break}}function n(){b(".pop").style.display="block",b(".overlay").style.display="block",b(".pop-name").innerHTML="新增分类";for(var a='<p>新分类名称:<input type="text" class="typeText" placeholder="在此输入新分类的名称"></p><p>新分类父节点:<select class="mySelect"><option value="-1">无</option>',c=b(".item-wrap"),d=c.getElementsByTagName("h3"),e=0;e<d.length;e++)a+='<option value="'+e+'">'+d[e].getElementsByTagName("span")[0].innerHTML+"</option>";a+='</select></p><p class="error"></p><button class="myButton btn1">取消</button><button class="myButton btn2">确定</button>',b(".pop-content").innerHTML=a,z(b(".btn1"),o),z(b(".btn2"),p)}function o(){b(".pop").style.display="none",b(".overlay").style.display="none"}function p(){var c=a.htmlEncode(b(".typeText").value),e=b(".mySelect").value;if(0===c.length)return void(b(".error").innerHTML="分类名称不能为空");if(c.length>=15)return void(b(".error").innerHTML="分类名称不能多于15个字符");if(g(D,"name",c))return void(b(".error").innerHTML="检测到相同名称的分类已存在");if(g(E,"name",c))return void(b(".error").innerHTML="检测到相同名称的子分类已存在");if("-1"===e){var f={id:D[D.length-1].id+1,name:c,num:0,child:[]};D.push(f),y()}else{var h={id:E[E.length-1].id+1,name:c,child:[],father:D[b(".mySelect").value].id},i=g(D,"id",h.father);i.child.push(h.id),E.push(h),y()}d(),o()}function q(){G&&(location.href="#details"),b(".task .add").onclick="",document.getElementsByClassName("taskText")[0].value="",document.getElementsByClassName("taskText")[1].value="",b(".myTextArea").value="",b(".task-title span").style.display="none",b(".task-date span").style.display="none",b(".task-content span").style.display="none",b(".set").style.display="none",b(".taskError").style.display="inline",document.getElementsByClassName("taskText")[0].style.display="inline",document.getElementsByClassName("taskText")[1].style.display="inline",b(".myTextArea").style.display="inline",document.getElementsByClassName("btn3")[0].style.display="inline",document.getElementsByClassName("btn3")[1].style.display="inline"}function r(){G&&(location.href="#task"),z(b(".task .add"),q),b(".task-title span").style.display="inline",b(".task-date span").style.display="inline",b(".task-content span").style.display="inline",b(".set").style.display="inline",b(".taskError").style.display="none",document.getElementsByClassName("taskText")[0].style.display="none",document.getElementsByClassName("taskText")[1].style.display="none",b(".myTextArea").style.display="none",document.getElementsByClassName("btn3")[0].style.display="none",document.getElementsByClassName("btn3")[1].style.display="none",b(".taskError").innerHTML=""}function s(){var c=a.htmlEncode(document.getElementsByClassName("taskText")[0].value),e=a.htmlEncode(document.getElementsByClassName("taskText")[1].value),f=a.htmlEncode(b(".myTextArea").value),h=e.split("-");if(0===c.length)return void(b(".taskError").innerHTML="任务标题不能为空");if(0===e.length)return void(b(".taskError").innerHTML="任务日期不能为空");if(!e.match(/^\d{4}-\d{2}-\d{2}$/))return void(b(".taskError").innerHTML="任务日期格式错误");if(h[1]<1||h[1]>12||h[2]<1||h[2]>31)return void(b(".taskError").innerHTML="不要骗我，根本没有这一天");if(g(F,"name",c))return void(b(".taskError").innerHTML="检测到相同名称的任务已存在");var i,j=b(".type-wrap .choose"),k=j.tagName.toLowerCase();switch(k){case"h2":i=0;break;case"h3":var l=j.getElementsByTagName("span")[0].innerHTML,m=g(D,"name",l);i=m.child.length>0?m.child[0]:0;break;case"h4":var n=j.getElementsByTagName("span")[0].innerHTML;i=g(E,"name",n).id}var o={id:F[F.length-1].id+1,name:c,father:i,finish:!1,date:e,content:f};F.push(o);var p=g(E,"id",o.father);p.child.push(o.id),y(),d();for(var q=document.getElementsByTagName("h6"),s=0;s<q.length;s++){var t=q[s].getElementsByTagName("span")[0];if(t.innerHTML===c){t.click();break}}r()}function t(a){window.event?window.event.cancelBubble=!0:a.stopPropagation();var b=confirm("删除操作不可逆，确定要删除吗？");if(b){var c,e=this.parentNode,f=e.tagName.toLowerCase(),i=e.getElementsByTagName("span")[0].innerHTML;switch(f){case"h3":c=h(D,"name",i);for(var j=0;j<D[c].child.length;j++){for(var k=h(E,"id",D[c].child[j]),l=0;l<E[k].child.length;l++){var m=h(F,"id",E[k].child[l]);F.splice(m,1)}E.splice(k,1)}D.splice(c,1);break;case"h4":c=h(E,"name",i);for(var j=0;j<E[c].child.length;j++){var m=h(F,"id",E[c].child[j]);F.splice(m,1)}var n=g(D,"id",E[c].father);n.child.splice(n.child.indexOf(E[c].id),1),E.splice(c,1);break;case"h6":c=h(F,"name",i);var n=g(E,"id",F[c].father);n.child.splice(n.child.indexOf(F[c].id),1),F.splice(c,1)}y(),d()}}function u(){for(var a,b=0;b<D.length;b++){a=0;for(var c=0;c<D[b].child.length;c++){var d=g(E,"id",D[b].child[c]).child.length;a+=d}D[b].num=a}}function v(){var a=b(".task-title span").innerHTML,c=g(F,"name",a);if(c.finish)return void alert("任务已经已经完成了哦~");var d=confirm("确定要设置任务为已完成状态吗？");d&&(c.finish=!0,e())}function w(){b(".task .add").onclick="",z(document.getElementsByClassName("btn3")[1],x),document.getElementsByClassName("taskText")[0].value="",document.getElementsByClassName("taskText")[1].value="",b(".myTextArea").value="",b(".task-date span").style.display="none",b(".task-content span").style.display="none",b(".set").style.display="none",b(".taskError").style.display="inline",document.getElementsByClassName("taskText")[1].style.display="inline",b(".myTextArea").style.display="inline",document.getElementsByClassName("btn3")[0].style.display="inline",document.getElementsByClassName("btn3")[1].style.display="inline",document.getElementsByClassName("taskText")[1].value=b(".task-date span").innerHTML,b(".myTextArea").value=b(".task-content span").innerHTML}function x(){var c=b(".task-title span").innerHTML,e=g(F,"name",c),f=a.htmlEncode(document.getElementsByClassName("taskText")[1].value),h=a.htmlEncode(b(".myTextArea").value),i=f.split("-");if(0===f.length)return void(b(".taskError").innerHTML="任务日期不能为空");if(!f.match(/^\d{4}-\d{2}-\d{2}$/))return void(b(".taskError").innerHTML="任务日期格式错误");if(i[1]<1||i[1]>12||i[2]<1||i[2]>31)return void(b(".taskError").innerHTML="不要骗我，根本没有这一天");e.date=f,e.content=h,y(),d();for(var j=document.getElementsByTagName("h6"),k=0;k<j.length;k++){var l=j[k].getElementsByTagName("span")[0];if(l.innerHTML===c){l.click();break}}r()}function y(){localStorage.childCate=JSON.stringify(E),localStorage.cate=JSON.stringify(D),localStorage.task=JSON.stringify(F)}function z(a,b){if(void 0!==a.length)for(var c=0;c<a.length;c++)a[c].addEventListener("click",b);else a.addEventListener("click",b)}var A,B,C,D,E,F,G;return{init:c,makeType:d}});