define(["util"],function(a){function b(b){for(var c=function(a){return a.getElementsByTagName("*")},d=document.getElementsByTagName("html")[0],e=b.replace(/\s+/," ").split(" "),f=0,g=e.length;g>f;f++){d=c(d);var h=d.length,i=!1;switch(e[f][0]){case"#":for(var j=0;h>j;j++)if(d[j].id===e[f].substring(1)){d=d[j],i=!0;break}break;case".":for(var j=0;h>j;j++){var k=a.uniqArray(d[j].className.split(" "));if(-1!==k.indexOf(e[f].substring(1))){d=d[j],i=!0;break}}break;case"[":var l=e[f].indexOf("=");if(-1!==l){for(var m=e[f].substring(1,l),n=e[f].substring(l+1,e[f].length-1),j=0;h>j;j++)if(d[j][m]===n){d=d[j],i=!0;break}}else for(var m=e[f].substring(1,e[f].length-1),j=0;h>j;j++)if(d[j][m]){d=d[j],i=!0;break}break;default:for(var j=0;h>j;j++)if(d[j].tagName===e[f].toUpperCase()){d=d[j],i=!0;break}}}return i||(d=null),d}return b});