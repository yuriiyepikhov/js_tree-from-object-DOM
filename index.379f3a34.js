!function e(t,r){var n=document.createElement("ul");t.append(n);var a=Object.keys(r),l=!0,o=!1,c=void 0;try{for(var i,u=a[Symbol.iterator]();!(l=(i=u.next()).done);l=!0){var y=i.value,d=document.createElement("li");d.textContent=y,n.append(d),Object.keys(r[y]).length>0&&e(d,r[y])}}catch(e){o=!0,c=e}finally{try{l||null==u.return||u.return()}finally{if(o)throw c}}}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.379f3a34.js.map
