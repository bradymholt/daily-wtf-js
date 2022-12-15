document.all // HTMLAllCollection[843]
document.all[0] // &lt;html&gt;...&lt;/html&gt;

typeof document.all // "undefined"!  WTF!
!{} // false. It's OK
!document.all // true! WTF!