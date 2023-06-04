(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const Je="modulepreload",et=function(e,t){return new URL(e,t).href},Te={},tt=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=et(o,r),o in Te)return;Te[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Je,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((c,f)=>{d.addEventListener("load",c),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var J=1e-6,U=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function nt(){var e=new U(9);return U!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function H(){var e=new U(16);return U!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function rt(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function K(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],l=t[6],d=t[7],c=t[8],f=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],L=t[15],C=n*s-r*a,P=n*l-i*a,h=n*d-o*a,y=r*l-i*s,E=r*d-o*s,b=i*d-o*l,R=c*x-f*g,S=c*m-u*g,_=c*L-p*g,V=f*m-u*x,T=f*L-p*x,F=u*L-p*m,O=C*F-P*T+h*V+y*_-E*S+b*R;return O?(O=1/O,e[0]=(s*F-l*T+d*V)*O,e[1]=(i*T-r*F-o*V)*O,e[2]=(x*b-m*E+L*y)*O,e[3]=(u*E-f*b-p*y)*O,e[4]=(l*_-a*F-d*S)*O,e[5]=(n*F-i*_+o*S)*O,e[6]=(m*h-g*b-L*P)*O,e[7]=(c*b-u*h+p*P)*O,e[8]=(a*T-s*_+d*R)*O,e[9]=(r*_-n*T-o*R)*O,e[10]=(g*E-x*h+L*C)*O,e[11]=(f*h-c*E-p*C)*O,e[12]=(s*S-a*V-l*R)*O,e[13]=(n*V-r*S+i*R)*O,e[14]=(x*P-g*y-m*C)*O,e[15]=(c*y-f*P+u*C)*O,e):null}function Be(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],l=t[5],d=t[6],c=t[7],f=t[8],u=t[9],p=t[10],g=t[11],x=t[12],m=t[13],L=t[14],C=t[15],P=n[0],h=n[1],y=n[2],E=n[3];return e[0]=P*r+h*s+y*f+E*x,e[1]=P*i+h*l+y*u+E*m,e[2]=P*o+h*d+y*p+E*L,e[3]=P*a+h*c+y*g+E*C,P=n[4],h=n[5],y=n[6],E=n[7],e[4]=P*r+h*s+y*f+E*x,e[5]=P*i+h*l+y*u+E*m,e[6]=P*o+h*d+y*p+E*L,e[7]=P*a+h*c+y*g+E*C,P=n[8],h=n[9],y=n[10],E=n[11],e[8]=P*r+h*s+y*f+E*x,e[9]=P*i+h*l+y*u+E*m,e[10]=P*o+h*d+y*p+E*L,e[11]=P*a+h*c+y*g+E*C,P=n[12],h=n[13],y=n[14],E=n[15],e[12]=P*r+h*s+y*f+E*x,e[13]=P*i+h*l+y*u+E*m,e[14]=P*o+h*d+y*p+E*L,e[15]=P*a+h*c+y*g+E*C,e}function it(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],s=r+r,l=i+i,d=o+o,c=r*s,f=r*l,u=r*d,p=i*l,g=i*d,x=o*d,m=a*s,L=a*l,C=a*d;return e[0]=1-(p+x),e[1]=f+C,e[2]=u-L,e[3]=0,e[4]=f-C,e[5]=1-(c+x),e[6]=g+m,e[7]=0,e[8]=u+L,e[9]=g-m,e[10]=1-(c+p),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function ot(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function at(e,t){var n=t[0],r=t[1],i=t[2],o=t[4],a=t[5],s=t[6],l=t[8],d=t[9],c=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(o,a,s),e[2]=Math.hypot(l,d,c),e}function $e(e,t){var n=new U(3);at(n,t);var r=1/n[0],i=1/n[1],o=1/n[2],a=t[0]*r,s=t[1]*i,l=t[2]*o,d=t[4]*r,c=t[5]*i,f=t[6]*o,u=t[8]*r,p=t[9]*i,g=t[10]*o,x=a+c+g,m=0;return x>0?(m=Math.sqrt(x+1)*2,e[3]=.25*m,e[0]=(f-p)/m,e[1]=(u-l)/m,e[2]=(s-d)/m):a>c&&a>g?(m=Math.sqrt(1+a-c-g)*2,e[3]=(f-p)/m,e[0]=.25*m,e[1]=(s+d)/m,e[2]=(u+l)/m):c>g?(m=Math.sqrt(1+c-a-g)*2,e[3]=(u-l)/m,e[0]=(s+d)/m,e[1]=.25*m,e[2]=(f+p)/m):(m=Math.sqrt(1+g-a-c)*2,e[3]=(s-d)/m,e[0]=(u+l)/m,e[1]=(f+p)/m,e[2]=.25*m),e}function st(e,t,n,r,i){var o=1/Math.tan(t/2),a;return e[0]=o/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(a=1/(r-i),e[10]=(i+r)*a,e[14]=2*i*r*a):(e[10]=-1,e[14]=-2*r),e}var Oe=st;function lt(e,t,n,r){var i,o,a,s,l,d,c,f,u,p,g=t[0],x=t[1],m=t[2],L=r[0],C=r[1],P=r[2],h=n[0],y=n[1],E=n[2];return Math.abs(g-h)<J&&Math.abs(x-y)<J&&Math.abs(m-E)<J?rt(e):(c=g-h,f=x-y,u=m-E,p=1/Math.hypot(c,f,u),c*=p,f*=p,u*=p,i=C*u-P*f,o=P*c-L*u,a=L*f-C*c,p=Math.hypot(i,o,a),p?(p=1/p,i*=p,o*=p,a*=p):(i=0,o=0,a=0),s=f*a-u*o,l=u*i-c*a,d=c*o-f*i,p=Math.hypot(s,l,d),p?(p=1/p,s*=p,l*=p,d*=p):(s=0,l=0,d=0),e[0]=i,e[1]=s,e[2]=c,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=a,e[9]=d,e[10]=u,e[11]=0,e[12]=-(i*g+o*x+a*m),e[13]=-(s*g+l*x+d*m),e[14]=-(c*g+f*x+u*m),e[15]=1,e)}function ke(e,t,n,r){var i=t[0],o=t[1],a=t[2],s=r[0],l=r[1],d=r[2],c=i-n[0],f=o-n[1],u=a-n[2],p=c*c+f*f+u*u;p>0&&(p=1/Math.sqrt(p),c*=p,f*=p,u*=p);var g=l*u-d*f,x=d*c-s*u,m=s*f-l*c;return p=g*g+x*x+m*m,p>0&&(p=1/Math.sqrt(p),g*=p,x*=p,m*=p),e[0]=g,e[1]=x,e[2]=m,e[3]=0,e[4]=f*m-u*x,e[5]=u*g-c*m,e[6]=c*x-f*g,e[7]=0,e[8]=c,e[9]=f,e[10]=u,e[11]=0,e[12]=i,e[13]=o,e[14]=a,e[15]=1,e}var ct=Be;function Ne(){var e=new U(3);return U!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function dt(e){var t=new U(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function ut(e){var t=e[0],n=e[1],r=e[2];return Math.hypot(t,n,r)}function Re(e,t,n){var r=new U(3);return r[0]=e,r[1]=t,r[2]=n,r}function Se(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function ft(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function vt(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function De(e,t){var n=t[0],r=t[1],i=t[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o)),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}function ht(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function le(e,t,n){var r=t[0],i=t[1],o=t[2],a=n[0],s=n[1],l=n[2];return e[0]=i*l-o*s,e[1]=o*a-r*l,e[2]=r*s-i*a,e}function _e(e,t,n){var r=t[0],i=t[1],o=t[2],a=n[3]*r+n[7]*i+n[11]*o+n[15];return a=a||1,e[0]=(n[0]*r+n[4]*i+n[8]*o+n[12])/a,e[1]=(n[1]*r+n[5]*i+n[9]*o+n[13])/a,e[2]=(n[2]*r+n[6]*i+n[10]*o+n[14])/a,e}function ne(e,t,n){var r=n[0],i=n[1],o=n[2],a=n[3],s=t[0],l=t[1],d=t[2],c=i*d-o*l,f=o*s-r*d,u=r*l-i*s,p=i*u-o*f,g=o*c-r*u,x=r*f-i*c,m=a*2;return c*=m,f*=m,u*=m,p*=2,g*=2,x*=2,e[0]=s+c+p,e[1]=l+f+g,e[2]=d+u+x,e}var pt=ft,mt=ut;(function(){var e=Ne();return function(t,n,r,i,o,a){var s,l;for(n||(n=3),r||(r=0),i?l=Math.min(i*n+r,t.length):l=t.length,s=r;s<l;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],o(e,e,a),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();function gt(){var e=new U(4);return U!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function yt(e){var t=new U(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function xt(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function wt(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=n*n+r*r+i*i+o*o;return a>0&&(a=1/Math.sqrt(a)),e[0]=n*a,e[1]=r*a,e[2]=i*a,e[3]=o*a,e}(function(){var e=gt();return function(t,n,r,i,o,a){var s,l;for(n||(n=4),r||(r=0),i?l=Math.min(i*n+r,t.length):l=t.length,s=r;s<l;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],o(e,e,a),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();function Ie(){var e=new U(4);return U!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function ue(e,t,n){n=n*.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function Et(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],s=n[0],l=n[1],d=n[2],c=n[3];return e[0]=r*c+a*s+i*d-o*l,e[1]=i*c+a*l+o*s-r*d,e[2]=o*c+a*d+r*l-i*s,e[3]=a*c-r*s-i*l-o*d,e}function ee(e,t,n,r){var i=t[0],o=t[1],a=t[2],s=t[3],l=n[0],d=n[1],c=n[2],f=n[3],u,p,g,x,m;return p=i*l+o*d+a*c+s*f,p<0&&(p=-p,l=-l,d=-d,c=-c,f=-f),1-p>J?(u=Math.acos(p),g=Math.sin(u),x=Math.sin((1-r)*u)/g,m=Math.sin(r*u)/g):(x=1-r,m=r),e[0]=x*i+m*l,e[1]=x*o+m*d,e[2]=x*a+m*c,e[3]=x*s+m*f,e}function Pt(e,t){var n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var o=(i+1)%3,a=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[o*3+o]-t[a*3+a]+1),e[i]=.5*r,r=.5/r,e[3]=(t[o*3+a]-t[a*3+o])*r,e[o]=(t[o*3+i]+t[i*3+o])*r,e[a]=(t[a*3+i]+t[i*3+a])*r}return e}var Ve=yt,Mt=xt,Ae=Et,We=wt;(function(){var e=Ne(),t=Re(1,0,0),n=Re(0,1,0);return function(r,i,o){var a=ht(i,o);return a<-.999999?(le(e,t,i),mt(e)<1e-6&&le(e,n,i),De(e,e),ue(r,e,Math.PI),r):a>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(le(e,i,o),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+a,We(r,r))}})();(function(){var e=Ie(),t=Ie();return function(n,r,i,o,a,s){return ee(e,r,a,s),ee(t,i,o,s),ee(n,e,t,2*s*(1-s)),n}})();(function(){var e=nt();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],We(t,Pt(t,e))}})();const $={rgba:1370609456,field:`const dt = 0.01; // Time step for integration

// Vector field definition. Return velocity at point
fn getVelocityAtPoint(pos: vec4f) -> vec4f {
    let x = pos.x;
    let y = pos.y;
    let z = pos.z;
    let w = pos.w;
    // Change this to define a new field:
    return vec4f(10 * (y - x), x * (28 - z) - y, x * y - 1.5*z, 0);
}`};function Lt(e,t,n){var r=e/255,i=t/255,o=n/255,a=Math.max(r,i,o),s=Math.min(r,i,o),l,d,c;return a===s?l=0:a===r?l=(i-o)/(a-s)%6:a===i?l=(2+(o-r)/(a-s))%6:a===o&&(l=(4+(r-i)/(a-s))%6),l=Math.round(l*60),a===0?d=0:d=1-s/a,d=Math.round(d*100),c=Math.round(a*100),[l,d,c]}function bt(e,t,n){var r=e%360,i=t/100,o=n/100,a=o*i,s=r/60,l=a*(1-Math.abs(s%2-1)),d=o-a,c,f,u;return s>=0&&s<1?(c=a,f=l,u=0):s>=1&&s<2?(c=l,f=a,u=0):s>=2&&s<3?(c=0,f=a,u=l):s>=3&&s<4?(c=0,f=l,u=a):s>=4&&s<5?(c=l,f=0,u=a):(c=a,f=0,u=l),c=Math.round((c+d)*255),f=Math.round((f+d)*255),u=Math.round((u+d)*255),[c,f,u]}function ce(e){let t=e>>24&255,n=e>>16&255,r=e>>8&255;return Lt(t,n,r)}function Ct(e,t){const n=document.createElement("div");for(n.innerHTML=Ot();n.children.length>0;)e.appendChild(n.children[0]);const r=e.querySelector(".axes-container .axes"),i=e.querySelector(".axes-container .location"),o=e.querySelector(".axes-container .ship-pitch"),a=e.querySelector(".cross-location");Rt(e.querySelector(".coordinate-plane")),t.on("updated",s),i.addEventListener("change",()=>{console.log("changed",i.value);try{let l=JSON.parse(i.value);if(Array.isArray(l)&&l.length===3&&l.every(d=>typeof d=="number")){for(let d=0;d<3;++d)t.position[d]=l[d];t.update()}}catch(l){console.error("Invalid location",l)}}),s();function s(){let l=ne([0,0,0],[0,0,-t.targetDistance],t.orientation),d=Math.round(180*Math.atan2(l[1],l[0])/Math.PI-90);r.style.transform=`rotate(${d}deg)`,i.value=Ue(t.position);let c=Tt(t.orientation);o.style.transform=`rotate(${c}deg)`,a.textContent=Ue([l[0]+t.position[0],l[1]+t.position[1],l[2]+t.position[2]])}}function Ue(e){return`[${e.map(t=>t.toFixed(2)).join(", ")}]`}function Tt(e){let t=e[0],n=e[1],r=e[2],i=e[3];return 90-Math.round(180*Math.atan2(2*(n*r+i*t),i*i-t*t-n*n+r*r)/Math.PI)}function Ot(){return`
  <div class="coordinate-plane">
    <div class='axes-container level-indicator'>
      <div class="plane-axis">
        <div class="horizontal">
          <span class='axis-label'>pitch</span>
        </div>
      </div>

      <div class='plane-level'>
        <div class='ship-pitch'>
          <div class="ship-body"></div>
          <div class="ship-tail"></div>
        </div>
      </div>
    </div>
    <div class='axes-container'>
      <div class="axes">
        <div class="horizontal">
          <span class='right-arrow'></span>
          <span class='axis-label'>x</span>
        </div>
        <div class="vertical">
          <span class='top-arrow'></span>
          <span class='axis-label'>y</span>
        </div>
      </div>

      <div class='ship'>
        <div class='left'></div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
      <input class="location" type='text'/>
    </div>
  </div>
  <div class="cross-container">
    <div class='indicator'>+</div>
    <div class="cross-location">
    </div>
  </div>`}function Rt(e){const t=document.createElement("div");t.className="hue-picker";const n=document.createElement("canvas");let r=n.width=80,i=n.height=80;t.style=`width: ${r}px; height: ${i}px;`;const o=n.getContext("2d"),a=r/2;d(),c(),t.appendChild(n),e.appendChild(t),n.addEventListener("click",f),n.addEventListener("mousemove",u);const s=document.createElement("div");s.style="transform: translate(-50%, -50%); position: absolute; top: 50%; left: 50%;";let l=ce($.rgba);return s.style.color=`hsl(${l[0]||0}, 80%, 50%)`,s.innerText=Math.round(l[0]),t.appendChild(s),{};function d(){for(let g=0;g<=360;g+=1){o.beginPath(),o.strokeStyle=`hsl(${g}, 80%, 50%)`;const x=Math.cos(g*Math.PI/180),m=Math.sin(g*Math.PI/180);o.moveTo(a*(1+.7*x),a*(1+.7*m)),o.lineTo(a*(1+.9*x),a*(1+.9*m)),o.stroke()}}function c(){let g=ce($.rgba),x=Math.round(g[0]);o.beginPath(),o.strokeStyle="white",o.lineWidth=2;const m=Math.cos(x*Math.PI/180),L=Math.sin(x*Math.PI/180);o.moveTo(a*(1+.6*m),a*(1+.6*L)),o.lineTo(a*(1+m),a*(1+L)),o.stroke()}function f(g){let x=n.getBoundingClientRect(),m=g.clientX-x.left,L=g.clientY-x.top,C=m-a,P=L-a,h=Math.round(180*Math.atan2(P,C)/Math.PI);h<0&&(h+=360);let y=bt(h,80,50);$.rgba=y[0]<<24|y[1]<<16|y[2]<<8|63,p()}function u(g){g.buttons===1&&f(g)}function p(){o.clearRect(0,0,r,i),d(),c();let g=ce($.rgba);s.style.color=`hsl(${g[0]||0}, 80%, 50%)`,g[0]<0&&(g[0]+=360),s.innerText=Math.round(g[0]||0)}}function St(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _t=function(t){Vt(t);var n=It(t);return t.on=n.on,t.off=n.off,t.fire=n.fire,t};function It(e){var t=Object.create(null);return{on:function(n,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var o=t[n];return o||(o=t[n]=[]),o.push({callback:r,ctx:i}),e},off:function(n,r){var i=typeof n>"u";if(i)return t=Object.create(null),e;if(t[n]){var o=typeof r!="function";if(o)delete t[n];else for(var a=t[n],s=0;s<a.length;++s)a[s].callback===r&&a.splice(s,1)}return e},fire:function(n){var r=t[n];if(!r)return e;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var o=0;o<r.length;++o){var a=r[o];a.callback.apply(a.ctx,i)}return e}}}function Vt(e){if(!e)throw new Error("Eventify cannot use falsy object as events subject");for(var t=["on","fire","off"],n=0;n<t.length;++n)if(e.hasOwnProperty(t[n]))throw new Error("Subject cannot be eventified, since it already has property '"+t[n]+"'")}const qe=St(_t);class At{constructor(t){qe(this),this.matrix=H(),this.cameraWorld=K(H(),this.matrix),this.position=[0,-5,10],this.orientation=[0,0,0,1],this.center=[0,0,0],this.targetDistance=5,this.projection=H();const n=t.width/t.height;Oe(this.projection,t.fov,n,.1,1e3),this.inverseProjection=H(),this.modelViewProjection=H(),lt(this.matrix,this.position,this.center,[0,1,0]),K(this.cameraWorld,this.matrix),this.deconstructPositionRotation(),this.update()}lookAt(t,n,r){return ke(this.cameraWorld,t,n,r),K(this.matrix,this.cameraWorld),this.deconstructPositionRotation(),this}update(){return it(this.cameraWorld,this.orientation,this.position),K(this.matrix,this.cameraWorld),Be(this.modelViewProjection,this.projection,this.matrix),this.updated=!0,this.fire("updated",this),this}updateSize(t,n,r){const i=t/n;Oe(this.projection,r,i,.1,1e3),this.update()}deconstructPositionRotation(){ot(this.position,this.cameraWorld),$e(this.orientation,this.cameraWorld)}translateOnAxis(t,n){let r=ne(spareVec3,t,this.orientation);return vt(this.position,this.position,r,n),this}translateX(t){return this.translateOnAxis(xAxis,t)}translateY(t){return this.translateOnAxis(yAxis,t)}translateZ(t){return this.translateOnAxis(zAxis,t)}}const Fe=[0,0,-1],w={MOVE_FORWARD:1,MOVE_BACKWARD:2,MOVE_LEFT:3,MOVE_RIGHT:4,MOVE_UP:5,MOVE_DOWN:6,TURN_LEFT:7,TURN_RIGHT:8,TURN_UP:9,TURN_DOWN:10};function Ut(e,t){let{view:n}=e,r=n.position,i=n.center,o={};const a=[0,0,1];let s=Math.PI,l=Math.PI*1.618,d=Ft(o.captureMouse,!0),c,f,u=[0,0,0,1],p=0,g=[0,0,0,1],x=[0,0,0,1],m=[0,0,0],L=0,C=0,P=0;const h=e.canvas;h.style.outline="none",h.getAttribute("tabindex")||h.setAttribute("tabindex","0"),h.addEventListener("keydown",pe),h.addEventListener("keyup",me),h.addEventListener("mousedown",ge),h.addEventListener("touchmove",Ee),h.addEventListener("touchstart",xe),h.addEventListener("wheel",we),document.addEventListener("pointerlockchange",Pe,!1);let y=0,E=0,b=0,R=0,S=0,_=0,V=0,T=0,F=0,O=0,z=0,A={[w.MOVE_FORWARD]:!1,[w.MOVE_BACKWARD]:!1,[w.MOVE_LEFT]:!1,[w.MOVE_RIGHT]:!1,[w.MOVE_UP]:!1,[w.MOVE_DOWN]:!1,[w.TURN_LEFT]:!1,[w.TURN_RIGHT]:!1,[w.TURN_UP]:!1,[w.TURN_DOWN]:!1},k=.01,re=3,X=.01;const B={dispose:Ze,handleCommand:Le,setViewBox:Ye,getUpVector:Xe,lookAt:j,enableMouseCapture:He,setRotationSpeed(v){return s=v,B},setMoveSpeed(v){return k=v,B},setScrollSpeed(v){return re=v,B},setFlySpeed(v){return X=v,B},setSpeed(v){return k=v,X=v,B},getRotationSpeed(){return s},getMoveSpeed(){return k},getScrollSpeed(){return re},getFlySpeed(){return X},getKeymap(){return he},getMouseCapture(){return d}},he={87:w.MOVE_FORWARD,65:w.MOVE_LEFT,83:w.MOVE_BACKWARD,68:w.MOVE_RIGHT,81:w.TURN_LEFT,37:w.TURN_LEFT,69:w.TURN_RIGHT,39:w.TURN_RIGHT,38:w.TURN_UP,40:w.TURN_DOWN,16:w.MOVE_DOWN,32:w.MOVE_UP};return qe(B),B;function pe(v){Me(v,1)}function me(v){Me(v,0)}function ge(v){v.which===1&&(document.pointerLockElement?ye():d?h.requestPointerLock():(h.focus(),document.addEventListener("mousemove",ie),document.addEventListener("mouseup",oe),c=v.clientX,f=v.clientY,v.preventDefault()))}function ye(){const v=ne([0,0,0],[0,0,-n.targetDistance],n.orientation);t([n.position[0]+v[0],n.position[1]+v[1],n.position[2]+v[2],0])}function xe(v){v.touches.length===1&&(c=v.touches[0].clientX,f=v.touches[0].clientY)}function we(v){v.preventDefault();let M=v.deltaMode>0?100:1,I=re*Ge(-v.deltaY*M),N=+new Date,D=v.clientX,W=v.clientY;if(document.pointerLockElement&&(D=e.width/(e.pixelRatio*2),W=e.height/(e.pixelRatio*2)),document.pointerLockElement||N-L>200||Math.hypot(D-C,W-P)>20){let q=[0,0,-1];q[0]=(D*e.pixelRatio/e.width-.5)*2,q[1]=(1-W*e.pixelRatio/e.height-.5)*2,_e(q,q,ct([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e.view.cameraWorld,e.inverseProjection)),m=pt([0,0,0],q,n.position),De(m,m);let Qe=dt(i);g=Ve(n.orientation),j(r,q),x=Ve(n.orientation),j(r,Qe),C=D,P=W,p=0,L=N}p<1&&(ee(u,g,x,p),Mt(n.orientation,u[0],u[1],u[2],u[3]),p+=.01),r[0]+=k*I*m[0],r[1]+=k*I*m[1],r[2]+=k*I*m[2],Z(),v.preventDefault()}function Ge(v){return Math.sign(v)*Math.min(.25,Math.abs(v/128))}function Ee(v){if(v.touches.length!==1)return;let M=v.touches[0].clientY-f,I=v.touches[0].clientX-c;se(-I,M),c=v.touches[0].clientX,f=v.touches[0].clientY,v.preventDefault()}function ie(v){let M=v.clientY-f,I=v.clientX-c;se(-I,-M),c=v.clientX,f=v.clientY,v.preventDefault()}function oe(v){document.removeEventListener("mousemove",ie),document.removeEventListener("mouseup",oe)}function Pe(v){document.pointerLockElement?document.addEventListener("mousemove",ae,!1):(document.removeEventListener("mousemove",ae,!1),T=0,O=0)}function ae(v){se(v.movementX,-v.movementY),v.buttons&1&&ye()}function se(v,M){let I=s*v/e.width,N=l*M/e.height;Ce(I,N),Z()}function He(v){return d=v,B}function Me(v,M){if(zt(v)){R=0;return}let I=he[v.which];I&&Le(I,M)}function Le(v,M){switch(v){case w.MOVE_FORWARD:b=M;break;case w.MOVE_BACKWARD:b=-M;break;case w.MOVE_LEFT:E=M;break;case w.MOVE_RIGHT:E=-M;break;case w.MOVE_UP:R=-M;break;case w.MOVE_DOWN:R=M;break;case w.TURN_LEFT:F=-M;break;case w.TURN_RIGHT:F=M;break;case w.TURN_UP:z=M;break;case w.TURN_DOWN:z=-M;break;default:throw new Error("Unknown command "+v)}be()}function be(){y||(y=requestAnimationFrame(Ke))}function Ye(v){const I=e.pixelRatio*Math.max((v.top-v.bottom)/2,(v.right-v.left)/2);let N=(v.left+v.right)/2,D=(v.top+v.bottom)/2,W=I/Math.tan(e.fov/2);return j([N,D,W],[N,D,0]),B}function Ke(){y=0;let v=.9,M=!1;S=Y(S*v+E,.5,0),_=Y(_*v+b,.5,0),V=Y(V*v+R,.5,0),T=Y(T*v+F/2,Math.PI/360,0),O=Y(O*v+z/6,Math.PI/360,0),(S||_)&&(je(S*k,_*k),M=!0),V&&(r[2]+=V*X,M=!0),(O||T)&&(Ce(T*.01,O*.01),M=!0),M&&(Z(),be()),A[w.MOVE_LEFT]=S>0,A[w.MOVE_RIGHT]=S<0,A[w.MOVE_FORWARD]=_>0,A[w.MOVE_BACKWARD]=_<0,A[w.MOVE_UP]=V>0,A[w.MOVE_DOWN]=V<0,A[w.TURN_LEFT]=T<0,A[w.TURN_RIGHT]=T>0,B.fire("move",A)}function j(v,M){return Se(r,v[0],v[1],v[2]),Se(i,M[0],M[1],M[2]),ke(n.cameraWorld,r,i,a),$e(n.orientation,n.cameraWorld),K(n.matrix,n.cameraWorld),Z(),B}function Xe(){return a}function Z(){n.update(),_e(i,Fe,n.cameraWorld)}function Ce(v,M){v&&Ae(n.orientation,ue([0,0,0,0],Fe,v),n.orientation),M&&Ae(n.orientation,n.orientation,ue([0,0,0,0],[1,0,0],M))}function je(v,M){let I=ne([0,0,0],[-v,0,-M],n.orientation);r[0]+=I[0],r[1]+=I[1]}function Ze(){cancelAnimationFrame(y),y=0,h.removeEventListener("keydown",pe),h.removeEventListener("keyup",me),h.removeEventListener("mousedown",ge),h.removeEventListener("touchmove",Ee),h.removeEventListener("touchstart",xe),h.removeEventListener("wheel",we),document.removeEventListener("mousemove",ae,!1),document.removeEventListener("pointerlockchange",Pe,!1),document.removeEventListener("mousemove",ie),document.removeEventListener("mouseup",oe)}}function Ft(e,t){return e===void 0?t:e}function Y(e,t,n){return Math.abs(e)<t?n:e}function zt(e){return e.altKey||e.ctrlKey||e.metaKey}let Q=0;function fe(e,t,n,r,i=200,o=.9){Q++;const{width:a,height:s,device:l,canvasFormat:d,mvpUniform:c}=e,f=4,u=f*(n+1),p=3,g=t*p*Uint32Array.BYTES_PER_ELEMENT;let x=t;const m=new Float32Array([-.5,0,-.5,1,.5,1,-.5,0,.5,1,.5,0]),L=l.createBuffer({label:`Line vertices ${Q}`,size:m.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});l.queue.writeBuffer(L,0,m);const C={arrayStride:2*4,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},P=l.createShaderModule({label:`Line shader ${Q}`,code:`
@group(0) @binding(0) var<uniform> modelViewProjection: mat4x4<f32>;
@group(0) @binding(1) var<storage> lineCoordinates: array<f32>;
@group(0) @binding(2) var<storage> lineLifeCycle: array<u32>;

struct VertexInput {
    @location(0) pos: vec2<f32>,
    @builtin(instance_index) instance: u32,
};

struct VertexOutput {
    @builtin(position) pos: vec4<f32>,
    @location(0) color: vec4<f32>,
};

fn rand(co: f32) -> f32 {
    let t = dot(vec3f(12.9898, 78.233, 4375.85453), vec3f(co));
    return fract(sin(t) * (4375.85453 + t));
}

fn hsv2rgb(hsv: vec3<f32>) -> vec3<f32> {
    let c = hsv.y * hsv.z;
    let h = hsv.x / 60.0;
    let x = c * (1.0 - abs(h % 2.0 - 1.0));
    let m = hsv.z - c;
    var rgb = vec3<f32>(0.0, 0.0, 0.0);
    if (h < 1.0) {
        rgb = vec3<f32>(c, x, 0.0);
    } else if (h < 2.0) {
        rgb = vec3<f32>(x, c, 0.0);
    } else if (h < 3.0) {
        rgb = vec3<f32>(0.0, c, x);
    } else if (h < 4.0) {
        rgb = vec3<f32>(0.0, x, c);
    } else if (h < 5.0) {
        rgb = vec3<f32>(x, 0.0, c);
    } else if (h < 6.0) {
        rgb = vec3<f32>(c, 0.0, x);
    }
    return rgb + m;
}

fn getColor(color: u32) -> vec4<f32> {
    let r = f32((color >> 24) & 0xFF) / 255.0;
    let g = f32((color >> 16) & 0xFF) / 255.0;
    let b = f32((color >> 8) & 0xFF) / 255.0;
    let a = f32((color >> 0) & 0xFF) / 255.0;
    return vec4f(r, g, b, a);
}

@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
    var i = input.instance;
    var output: VertexOutput;

    var lineIndex = u32(floor(f32(i) / f32(${n})));
    var lineStart = lineIndex * ${u};
    var head = lineLifeCycle[lineIndex * ${p} + 0];
    var length = lineLifeCycle[lineIndex * ${p} + 1];
    i = i % ${n};
    if (i >= length) {
        output.pos = vec4<f32>(0, 0, 0, 1);
        output.color = vec4<f32>(0, 0, 0, 0);
        return output;
    }
    var start = (head - length + i + ${n+1}) % (${n+1});

    var width = 2.0;
    var startIndex = lineStart + (start * ${f});
    var endIndex = lineStart + ((start + 1) * ${f}) % (${u});
    var startPos = vec3(lineCoordinates[startIndex + 0], lineCoordinates[startIndex + 1], lineCoordinates[startIndex + 2]);
    var endPos = vec3(lineCoordinates[(endIndex + 0)], lineCoordinates[endIndex + 1], lineCoordinates[endIndex + 2]);

    let clip0 = modelViewProjection * vec4(startPos, 1);
    let clip1 = modelViewProjection * vec4(endPos, 1);
    let resolution = vec2f(${a}, ${s});
    let screen0 = resolution * (0.5 * clip0.xy/clip0.w + 0.5);
    let screen1 = resolution * (0.5 * clip1.xy/clip1.w + 0.5);
    let xBasis = normalize(screen1 - screen0);
    let yBasis = vec2(-xBasis.y, xBasis.x);

    let pt0 = screen0 + width * input.pos.x * yBasis;
    let pt1 = screen1 + width * input.pos.x * yBasis;
    let pt = mix(pt0, pt1, input.pos.y);
    let clip = mix(clip0, clip1, input.pos.y);
    
    output.pos = vec4(clip.w * (2.0 * pt/resolution - 1.0), clip.z, clip.w);
    output.color = getColor(lineLifeCycle[lineIndex * ${p} + 2]);
    return output;
}
// @location(0) indicates which colorAttachment (specified in 
// beginRenderPass) to output to.
@fragment
fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
    return input.color;
}`}),h=l.createBindGroupLayout({label:"Flow simulation render bind group layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),y=l.createPipelineLayout({label:"Flow simulation render pipeline layout",bindGroupLayouts:[h]}),E=l.createRenderPipeline({label:"Cell pipeline",layout:y,vertex:{module:P,entryPoint:"vertexMain",buffers:[C]},fragment:{module:P,entryPoint:"fragmentMain",targets:[{format:d,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"}}}]}}),b=l.createBuffer({label:`Line life cycle ${Q}`,size:g,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),R=new Uint32Array(p*t);for(let T=0;T<R.length;T+=p)R[T+2]=i;l.queue.writeBuffer(b,0,R);const S=l.createBuffer({label:"Line coordinates",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});l.queue.writeBuffer(S,0,r);const _=l.createBindGroup({label:"Line render bind group",layout:h,entries:[{binding:0,resource:{buffer:c}},{binding:1,resource:{buffer:S}},{binding:2,resource:{buffer:b}}]});return{ATTRIBUTES_PER_LINE:p,POINT_DIMENSIONS:f,POINTS_PER_LINE:u,LINE_COUNT:t,SEGMENTS_PER_LINE:n,lineCoordinates:S,lineLifeCycle:b,setVisibleCount:T=>x=T,getVisibleCount:()=>x,draw:V,dispose(){S.destroy(),b.destroy()}};function V(T){T.setPipeline(E),T.setVertexBuffer(0,L),T.setBindGroup(0,_),T.draw(m.length/2,x*n)}}function ze(e,t,n){const{POINT_DIMENSIONS:i,POINTS_PER_LINE:o,LINE_COUNT:a,SEGMENTS_PER_LINE:s,ATTRIBUTES_PER_LINE:l,lineCoordinates:d,lineLifeCycle:c}=t,{device:f}=e,u=f.createBindGroupLayout({label:"Flow simulation bind group layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),p=f.createPipelineLayout({label:"Flow simulation compute pipeline layout",bindGroupLayouts:[u]});let g=C(n);const x=f.createBindGroup({label:"Line render compute bind group A",layout:u,entries:[{binding:0,resource:{buffer:d}},{binding:1,resource:{buffer:c}}]});return{updatePositions:L,setNewField:m};function m(P,h){h?C(P,h).then(y=>{y&&(g=y)}):g=C(P)}function L(P){const h=P.beginComputePass();h.setPipeline(g),h.setBindGroup(0,x);const y=Math.ceil(a/8);h.dispatchWorkgroups(y),h.end()}function C(P,h){const y=f.createShaderModule({label:"Flow simulation shader",code:`
        @group(0) @binding(0) var<storage, read_write> lineCoordinates: array<f32>;
        @group(0) @binding(1) var<storage, read_write> lineLifeCycle: array<u32>;
    
        ${P}
    
        fn rk4(pos: vec4f) -> vec4f {
            let k1 = getVelocityAtPoint(pos);
            let k2 = getVelocityAtPoint(pos + 0.5 * dt * k1);
            let k3 = getVelocityAtPoint(pos + 0.5 * dt * k2);
            let k4 = getVelocityAtPoint(pos + dt * k3);
            return pos + dt * (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0;
        }
    
        fn rand(co: vec4f) -> f32 {
            let t = dot(vec4f(12.9898, 78.233, 53.12, 4375.85453), co);
            let x = sin(t) * (4375.85453 + t);
            return fract(x);
        }
    
        @compute
        @workgroup_size(8)
        fn computeMain(@builtin(global_invocation_id) cell: vec3u) {
            let lineIndex = cell.x;
            if (lineIndex >= ${a}) {
                return;
            }
            // first we get the last point in the line:
            var lineHead   = lineLifeCycle[lineIndex * ${l} + 0];
            var lineLength = lineLifeCycle[lineIndex * ${l} + 1];
            var lastPosIndex = lineIndex * ${o} + lineHead * ${i};
            var lastPos = vec4f(
                lineCoordinates[lastPosIndex + 0], lineCoordinates[lastPosIndex + 1], 
                lineCoordinates[lastPosIndex + 2], lineCoordinates[lastPosIndex + 3]
                );
    
            if (rand(lastPos * f32(lineIndex)) > 10) { // disabled temporary
                lastPos = vec4f(rand(lastPos), rand(lastPos - 1), rand(lastPos + 1), rand(lastPos + 2)) * 2.0 - 1.0;
    
                lastPosIndex = lineIndex * ${o} + (${s} * ${i});
                lineCoordinates[lastPosIndex + 0] = lastPos.x;
                lineCoordinates[lastPosIndex + 1] = lastPos.y;
                lineCoordinates[lastPosIndex + 2] = lastPos.z;
                lineCoordinates[lastPosIndex + 3] = lastPos.w;
                lineLength = 0;
                lineHead = ${s};
            }

            // advance it:
            let newPos = rk4(lastPos);

            // Update the line:
            let newLength = clamp(1 + lineLength, 0, ${s});
            let newPosIndex = lineIndex * ${o} + ((lineHead + 1) * ${i}) % (${o});
            lineCoordinates[newPosIndex + 0] = newPos.x;
            lineCoordinates[newPosIndex + 1] = newPos.y;
            lineCoordinates[newPosIndex + 2] = newPos.z;
            lineCoordinates[newPosIndex + 3] = newPos.w;
    
            lineLifeCycle[lineIndex * ${l} + 0] = (lineHead + 1) % (${s+1});
            lineLifeCycle[lineIndex * ${l} + 1] = newLength;
        }
        `});return h?y.getCompilationInfo().then(E=>{let b=E.messages.filter(R=>R.type==="error");return b.length>0?(console.error("Error compiling shader:",b),h(b[0].message),null):f.createComputePipeline({label:"Flow simulation pipeline",layout:p,compute:{module:y,entryPoint:"computeMain"}})}):f.createComputePipeline({label:"Flow simulation pipeline",layout:p,compute:{module:y,entryPoint:"computeMain"}})}}function Bt(e){let t=[],n=[],r=-50,i=50,o=-50,a=50,s=1,l=1,d=1145342020,c=12;for(let u=r;u<=i;u+=s)t.push(u,o,0,0,u,o,0,0,u,a,0,0),n.push(0,2,d);for(let u=o;u<=a;u+=l)t.push(r,u,0,0,r,u,0,0,i,u,0,0),n.push(0,2,d);t.push(0,0,0,0,0,0,0,0,0,1,0,0),n.push(0,2,16711935),t.push(0,0,0,0,0,0,0,0,0,0,1,0),n.push(0,2,4294902015),t.push(0,0,0,0,0,0,0,0,1,0,0,0),n.push(0,2,4278190335);let f=fe(e,t.length/c,2,new Float32Array(t),200,.6);return e.device.queue.writeBuffer(f.lineLifeCycle,0,new Uint32Array(n)),{draw(u){f.draw(u)}}}function $t(e){let t=document.createElement("div");t.innerHTML=kt(),document.body.appendChild(t.firstChild);let n=document.querySelector(".navigation-controls");const r={left:w.MOVE_LEFT,right:w.MOVE_RIGHT,fwd:w.MOVE_FORWARD,back:w.MOVE_BACKWARD,up:w.MOVE_UP,down:w.MOVE_DOWN,rotLeft:w.TURN_LEFT,rotRight:w.TURN_RIGHT};let i=Object.keys(r);i.forEach(a=>{let s=n.querySelector(`#${a}`);Nt(s,l=>{let d=r[a];d===w.MOVE_UP?d=w.MOVE_DOWN:d===w.MOVE_DOWN&&(d=w.MOVE_UP),e.handleCommand(d,l?1:0)})}),e.on("move",o);function o(a){i.forEach(s=>{n.querySelector(`#${s}`).classList.toggle("down",a[r[s]])})}}function kt(){return`<div class='navigation-controls'>
    <div class='navigation-row padded'>
      <div class='item'>
        <a href="#" class='navigation-btn secondary left' :class="{down: isRotLeft}" id="rotLeft">
          <svg viewBox="0 0 1024 1024">
          <path d="m884.6 622.6v192c0 11.333-3.834 20.833-11.5 28.5-7.667 7.666-17 11.5-28 11.5s-20.5-3.834-28.5-11.5c-8-7.667-12-17.167-12-28.5v-192c0-61.334-21.667-113.67-65-157-43.334-43.334-95.667-65-157-65h-340l113 112c7.333 8 11 17.5 11 28.5s-3.834 20.333-11.5 28c-7.667 7.666-17 11.5-28 11.5s-20.5-4-28.5-12l-178-178c-8-8-12-17.5-12-28.5s4-20.5 12-28.5l183-183c8-8 17.5-12 28.5-12s20.5 3.833 28.5 11.5c8 7.666 12 17 12 28s-4 20.5-12 28.5l-114 114h336c83.333 0 154.5 29.5 213.5 88.5s88.5 130.17 88.5 213.5z"/>
          </svg>
          <div class='legend'>Q</div>
        </a>
      </div>
      <a href='#' class='item navigation-btn' :class="{down: isFwd}" id='fwd'>
        <svg viewBox="0 0 100 100"><path d="M10,80 50,30 90,80z"></path></svg>
        <div class='legend'>W</div>
      </a>
      <a href="#" class='item navigation-btn secondary right' :class="{down: isRotRight}" id='rotRight'>
        <svg viewBox="0 0 1024 1024">
          <path d="m108.6 622.6v192c0 11.333 3.833 20.833 11.5 28.5 7.666 7.666 17 11.5 28 11.5s20.5-3.834 28.5-11.5c8-7.667 12-17.167 12-28.5v-192c0-61.334 21.666-113.67 65-157 43.333-43.334 95.666-65 157-65h340l-113 112c-7.334 8-11 17.5-11 28.5s3.833 20.333 11.5 28c7.666 7.666 17 11.5 28 11.5s20.5-4 28.5-12l178-178c8-8 12-17.5 12-28.5s-4-20.5-12-28.5l-183-183c-8-8-17.5-12-28.5-12s-20.5 3.833-28.5 11.5c-8 7.666-12 17-12 28s4 20.5 12 28.5l114 114h-336c-83.334 0-154.5 29.5-213.5 88.5s-88.5 130.17-88.5 213.5z"/>
        </svg>
        <div class='legend'>E</div>
      </a>
    </div>
    <div class='navigation-row padded'>
      <a href='#' class='item navigation-btn' :class="{down: isLeft}" id='left'>
        <svg viewBox="0 0 100 100" ><path d="M80,10 80,90 30,50z"></path></svg>
        <div class='legend'>A</div>
      </a>
      <a href='#' class='item navigation-btn' :class="{down: isBack}" id='back'>
        <svg viewBox="0 0 100 100"><path d="M10,30 50,80 90,30z"></path></svg>
        <div class='legend'>S</div>
      </a>
      <a href='#' class='item navigation-btn' :class="{down: isRight}" id='right'>
        <svg viewBox="0 0 100 100" ><path d="M30,10 30,90 80,50z"></path></svg>
        <div class='legend'>D</div>
      </a>
    </div>
    <div class='navigation-row'>
      <a href='#'  class='item navigation-btn wide' :class="{down: isDown}" id='up'>

        <svg viewBox="0 0 1024 1024"><path d="M726 167L568 9q-9-9-22.5-9T523 9L365 167q-10 10-10 23t10 23q9 9 22.5 9t22.5-9l104-104v692q0 13 9 22.5t23 9.5q13 0 22.5-9.5T578 801V109l103 104q9 9 22.5 9t22.5-9q9-10 9-23t-9-23zm298 825q0 13-9.5 22.5T992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h960q13 0 22.5 9.5t9.5 22.5z"></path></svg>
        <div class='legend'>shift</div>
      </a>
      <a href='#' class='item navigation-btn wide' :class="{down: isUp}" id='down'>
        <svg width="100%" height="100%" viewBox="0 0 1024 1024">
            <path d="M364,666L522,824C528,830 535.5,833 544.5,833C553.5,833 561,830 567,824L725,666C731.667,659.333 735,651.667 735,643C735,634.333 731.667,626.667 725,620C719,614 711.5,611 702.5,611C693.5,611 686,614 680,620L576,724L576,32C576,23.333 573,15.833 567,9.5C561,3.167 553.333,0 544,0C535.333,0 527.833,3.167 521.5,9.5C515.167,15.833 512,23.333 512,32L512,724L409,620C403,614 395.5,611 386.5,611C377.5,611 370,614 364,620C358,626.667 355,634.333 355,643C355,651.667 358,659.333 364,666ZM1024,992C1024,1000.67 1020.83,1008.17 1014.5,1014.5C1008.17,1020.83 1000.67,1024 992,1024L32,1024C23.333,1024 15.833,1020.83 9.5,1014.5C3.167,1008.17 0,1000.67 0,992C0,983.333 3.167,975.833 9.5,969.5C15.833,963.167 23.333,960 32,960L992,960C1000.67,960 1008.17,963.167 1014.5,969.5C1020.83,975.833 1024,983.333 1024,992Z" style="fill-rule:nonzero;"/>
        </svg>
        <div class='legend'>space</div>
      </a>
    </div>
  </div>`}function Nt(e,t,n=15){let r;return e.addEventListener("mousedown",o),e.addEventListener("touchstart",o),e.addEventListener("keydown",l),e.addEventListener("keyup",d),i;function i(){e.removeEventListener("mousedown",o),e.removeEventListener("touchstart",o),e.removeEventListener("keydown",l),e.removeEventListener("keyup",d),document.removeEventListener("mouseup",s),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c),clearTimeout(r)}function o(u){u.preventDefault(),document.addEventListener("mouseup",s),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c),a()}function a(){t(1),r=setTimeout(a,n)}function s(){f()}function l(u){u.which===13&&(t(1),u.preventDefault())}function d(u){u.which===13&&(t(0),u.preventDefault())}function c(){f()}function f(){clearTimeout(r),document.removeEventListener("mouseup",s),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c),t(0)}}async function Dt(e){e.width=window.innerWidth,e.height=window.innerHeight;const t={canvas:e,width:e.width,height:e.height,fov:45*Math.PI/180,pixelRatio:window.devicePixelRatio||1};t.view=new At(t),await P();let n=new Map;const r=2e3,i=4,o=100,a=i*(o+1);let s=0;const l=new Float32Array(r*a);for(let h=0;h<l.length;++h)l[h]=Math.random()*2-1;const d=Bt(t),c=fe(t,r,o,l,$.rgba);c.setVisibleCount(0);const f=ze(t,c,$.field);m();const u=Ut(t,L);return requestAnimationFrame(x),window.addEmitter=p,$t(u),{viewMatrix:t.view,updateField:g};function p(h,y){let E=h.id??y??"emitter-"+Math.round(Math.random()*1e3).toString(36),b=h.field,R=h.lineCount||420,S=h.segmentCount||100,_=h.initialPositions,V=h.color||$.rgba;if(!_){_=new Float32Array(R*(S+1)*4);let z=h.startPoint||[0,0,0,0];for(;z.length<4;)z.push(0);for(let A=0;A<_.length;A++)_[A]=z[A%4]+Math.random()*2-1}let T=fe(t,R,S,_,V),F=ze(t,T,b),O={emitterId:E,calculate(z){F.updatePositions(z)},draw(z){T.draw(z)},remove(){T.dispose(),n.delete(E)}};return n.set(E,O),O}function g(h,y){s=0,c.setVisibleCount(0),f.setNewField(h,y)}function x(){requestAnimationFrame(x);const{context:h,device:y}=t;t.view.updated&&(y.queue.writeBuffer(t.mvpUniform,0,t.view.modelViewProjection),t.view.updated=!1);const E=y.createCommandEncoder();f.updatePositions(E),n.forEach(R=>R.calculate(E));const b=E.beginRenderPass({colorAttachments:[{view:h.getCurrentTexture().createView(),loadOp:"clear",clearValue:[0,0,0,1],storeOp:"store"}]});d.draw(b),c.draw(b),n.forEach(R=>R.draw(b)),b.end(),y.queue.submit([E.finish()])}function m(){window.addEventListener("resize",C)}function L(h){let y=c.getVisibleCount();const E=t.device;let b=new Uint32Array(c.ATTRIBUTES_PER_LINE);b[2]=$.rgba,E.queue.writeBuffer(c.lineLifeCycle,s*c.ATTRIBUTES_PER_LINE*4,b),E.queue.writeBuffer(c.lineCoordinates,s*a*4,Float32Array.from(h)),s+=1,s>=r&&(s=0),y<r&&c.setVisibleCount(y+1)}function C(){e.width=window.innerWidth,e.height=window.innerHeight,t.width=e.width,t.height=e.height,t.view.updateSize(t.width,t.height,t.fov)}async function P(){if(!navigator.gpu)throw new Error("WebGPU not supported");const h=await navigator.gpu.requestAdapter();if(!h)throw new Error("Failed to get adapter");const y=await h.requestDevice(),E=navigator.gpu.getPreferredCanvasFormat(),b=e.getContext("webgpu");b.configure({device:y,format:E});const R=t.view.modelViewProjection,S=y.createBuffer({label:"mvp matrix",size:R.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});t.context=b,t.canvasFormat=E,t.device=y,t.mvpUniform=S,y.queue.writeBuffer(t.mvpUniform,0,t.view.modelViewProjection)}}let te=null;Dt(document.querySelector("#scene")).then(e=>{Ct(document.body,e.viewMatrix),te=e}).catch(e=>{document.body.innerHTML=`<div class='error'>
  <div>Could not initialize WebGPU scene. </div>
  <pre>${e}</pre>
  </div>`});const G=document.querySelector(".field-editor-panel"),de=document.querySelector(".field-editor"),ve=document.querySelector(".open-editor");tt(()=>import("./editor.main-d48757b2.js").then(e=>e.e),["./editor.main-d48757b2.js","./editor-715255e9.css"],import.meta.url).then(e=>{G.classList.remove("hidden");var t=e.editor.create(de,{value:$.field,language:"wgsl",minimap:{enabled:!1},automaticLayout:!0,roundedSelection:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"vs-dark"});G.classList.add("hidden"),t.onDidFocusEditorText(()=>{de.classList.add("focused")}),t.onDidBlurEditorText(()=>{de.classList.remove("focused")}),G.querySelector("button.save").addEventListener("click",n=>{let r=t.getValue();document.querySelector(".field-errors").textContent="",te==null||te.updateField(r,i=>{if(i){document.querySelector(".field-errors").textContent=i;return}$.field=r})}),G.querySelector("button.close").addEventListener("click",n=>{G.classList.add("hidden"),ve.classList.remove("hidden")})});ve.addEventListener("click",e=>{G.classList.remove("hidden"),ve.classList.add("hidden")});export{tt as _};
