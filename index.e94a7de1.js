function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},o=i.parcelRequire00f1;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},i.parcelRequire00f1=o),o.register("27Lyk",(function(t,i){var r,s;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var o={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)o[t[i]]=e[t[i]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"1LzKV":"index.e94a7de1.js","52abJ":"paddle.59785228.png","04ZtS":"ball.5d2aed75.png","18x6a":"brick-red.15768ee1.png","2ByUz":"brick-blue.2842147b.png","kGInd":"brick-green.559eaa27.png","3NdBM":"brick-yellow.adc6599c.png","4JXcm":"brick-purple.dccf6a30.png"}'));class n{constructor(e,t,i,r){this.ballSize=t,this.position=i,this.ballImage=new Image,this.ballSize=t,this.position=i,this.speed={x:e,y:-e},this.ballImage.src=r}get width(){return this.ballSize}get height(){return this.ballSize}get pos(){return this.position}get image(){return this.ballImage}changeYDirection(){this.speed.y=-this.speed.y}changeXDirection(){this.speed.x=-this.speed.x}moveBall(){this.pos.x+=this.speed.x,this.pos.y+=this.speed.y}}class h{constructor(e,t,i,r,s){this.speed=e,this.paddleWidth=t,this.paddleHeight=i,this.position=r,this.paddleImage=new Image,this.handleKeyUp=e=>{"ArrowLeft"!==e.code&&"ArrowLeft"!==e.key||(this.moveLeft=!1),"ArrowRight"!==e.code&&"ArrowRight"!==e.key||(this.moveRight=!1)},this.handleKeyDown=e=>{"ArrowLeft"!==e.code&&"ArrowLeft"!==e.key||(this.moveLeft=!0),"ArrowRight"!==e.code&&"ArrowRight"!==e.key||(this.moveRight=!0)},this.speed=e,this.paddleWidth=t,this.paddleHeight=i,this.position=r,this.moveLeft=!1,this.moveRight=!1,this.paddleImage.src=s,document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}get width(){return this.paddleWidth}get height(){return this.paddleHeight}get pos(){return this.position}get image(){return this.paddleImage}get isMovingLeft(){return this.moveLeft}get isMovingRight(){return this.moveRight}movePaddle(){this.moveLeft&&(this.pos.x-=this.speed),this.moveRight&&(this.pos.x+=this.speed)}}class a{isCollidingBrick(e,t){return e.pos.x<t.pos.x+t.width&&e.pos.x+e.width>t.pos.x&&e.pos.y<t.pos.y+t.height&&e.pos.y+e.height>t.pos.y}isCollidingBricks(e,t){let i=!1;return t.forEach(((r,s)=>{this.isCollidingBrick(e,r)&&(e.changeYDirection(),1===r.energy?t.splice(s,1):r.energy-=1,i=!0)})),i}checkBallCollision(e,t,i){e.pos.x+e.width>t.pos.x&&e.pos.x<t.pos.x+t.width&&e.pos.y+e.height===t.pos.y&&e.changeYDirection(),(e.pos.x>i.canvas.width-e.width||e.pos.x<0)&&e.changeXDirection(),e.pos.y<0&&e.changeYDirection()}}var d;d=new URL(o("27Lyk").resolve("52abJ"),import.meta.url).toString();var l;l=new URL(o("27Lyk").resolve("04ZtS"),import.meta.url).toString();var c;c=new URL(o("27Lyk").resolve("18x6a"),import.meta.url).toString();var g;g=new URL(o("27Lyk").resolve("2ByUz"),import.meta.url).toString();var p;p=new URL(o("27Lyk").resolve("kGInd"),import.meta.url).toString();var u;u=new URL(o("27Lyk").resolve("3NdBM"),import.meta.url).toString();var f;f=new URL(o("27Lyk").resolve("4JXcm"),import.meta.url).toString();const w=document.querySelector("#playField"),y=w?Math.floor((w.width-20)/10)-5:100,m=w?Math.floor((w.height-20)/20)-5:30,v={1:t(c),2:t(p),3:t(u),4:t(g),5:t(f)},k={1:1,2:1,3:2,4:2,5:3},b=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,2,2,2,2,2,2,2,2,0,0,3,3,3,3,3,3,3,3,0,0,0,4,4,4,4,4,4,0,0,0,0,5,5,0,0,5,5,0,0];class x{constructor(e,t,i,r,s){this.brickWidth=e,this.brickHeight=t,this.position=i,this.brickEnergy=r,this.brickImage=new Image,this.brickWidth=e,this.brickHeight=t,this.position=i,this.brickEnergy=r,this.brickImage.src=s}get width(){return this.brickWidth}get height(){return this.brickHeight}get pos(){return this.position}get image(){return this.brickImage}get energy(){return this.brickEnergy}set energy(e){this.brickEnergy=e}}let S=!1,L=0;function R(e,t,i,r,s){console.log("draw!"),e.clear(),e.drawBricks(t),e.drawSprite(i),e.drawSprite(r),r.moveBall(),(i.isMovingLeft&&i.pos.x>0||i.isMovingRight&&i.pos.x<e.canvas.width-i.width)&&i.movePaddle(),s.checkBallCollision(r,i,e);return s.isCollidingBricks(r,t)&&(L+=1,e.drawScore(L)),r.pos.y>e.canvas.height&&(S=!0),0===t.length?function(e){e.drawInfo("Game Won!"),S=!1}(e):S?function(e){e.drawInfo("Game Over!"),S=!1}(e):void requestAnimationFrame((()=>R(e,t,i,r,s)))}new class{constructor(e){this.canvas=document.querySelector(e),this.context=this.canvas.getContext("2d"),this.scoreDisplay=document.querySelector("#score"),this.start=document.querySelector("#start"),this.info=document.querySelector("#info")}clear(){this.context?.clearRect(0,0,this.canvas.width,this.canvas.height)}initStartButton(e){this.start?.addEventListener("click",(()=>e(this)))}drawScore(e){this.scoreDisplay&&(this.scoreDisplay.innerHTML=e.toString())}drawInfo(e){this.info&&(this.info.innerHTML=e)}drawSprite(e){e&&this.context?.drawImage(e.image,e.pos.x,e.pos.y,e.width,e.height)}drawBricks(e){e.forEach((e=>this.drawSprite(e)))}}("#playField").initStartButton((function(e){L=0,e.drawInfo(""),e.drawScore(0);const i=new a,r=b.reduce(((e,t,i)=>{const r=Math.floor((i+1)/10),s=10+i%10*(y+5),o=10+r*(m+5);return 0===t?e:[...e,new x(y,m,{x:s,y:o},k[t],v[t])]}),[]),s=new n(5,20,{x:500,y:400},t(l));R(e,r,new h(10,150,25,{x:450,y:e.canvas.height-25-5},t(d)),s,i)}));
//# sourceMappingURL=index.e94a7de1.js.map
