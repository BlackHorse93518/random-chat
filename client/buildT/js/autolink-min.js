(function(){var t=[].slice;String.prototype.autoLink=function(){var n,a,c,r,i,l;return r=1<=arguments.length?t.call(arguments,0):[],i=/(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi,0<r.length?(c=r[0],a=function(){var t;t=[];for(n in c)l=c[n],"callback"!==n&&t.push(" "+n+"='"+l+"'");return t}().join(""),this.replace(i,function(t,n,r){return t=("function"==typeof c.callback?c.callback(r):void 0)||"<a href='"+r+"'"+a+">"+r+"</a>",""+n+t})):this.replace(i,"$1<a href='$2'>$2</a>")}}).call(this);
//# sourceMappingURL=autolink-min.js.map
