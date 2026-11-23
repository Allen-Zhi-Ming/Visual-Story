"use strict";
/* All content and state in these demos is local. No checkout or network calls. */
const DICTIONARY = {"skip":{"en":"Skip to content","zh-TW":"跳到主要內容","zh-CN":"跳转到主要内容"},"back":{"en":"← BACK TO STUDIO","zh-TW":"← 返回工作室","zh-CN":"← 返回工作室"},"localeLabel":{"en":"Choose language","zh-TW":"選擇語言","zh-CN":"选择语言"},"navDemos":{"en":"THREE LIVE DEMOS","zh-TW":"三個互動案例","zh-CN":"三个交互案例"},"conceptNotice":{"en":"Original concept demonstration · Not a client project","zh-TW":"原創概念示範 · 非真實客戶專案","zh-CN":"原创概念演示 · 非真实客户项目"},"characterKind":{"en":"01 / CHARACTER PORTFOLIO","zh-TW":"01 / 角色作品集","zh-CN":"01 / 角色作品集"},"characterTitle":{"en":"ONE IDENTITY.<br><em>INFINITE WORLDS.</em>","zh-TW":"一個角色。<br><em>無限世界。</em>","zh-CN":"一个角色。<br><em>无限世界。</em>"},"characterIntro":{"en":"A digital muse with a recognizable silhouette. Change the world around her—keep her identity intact.","zh-TW":"以鮮明輪廓塑造原創數位角色。切換世界，維持相同角色身分。","zh-CN":"以鲜明轮廓塑造原创数字角色。切换世界，保持相同角色身份。"},"scenesTitle":{"en":"SCENE DIRECTOR","zh-TW":"場景導演","zh-CN":"场景导演"},"poseTitle":{"en":"SELECT POSE","zh-TW":"選擇姿勢","zh-CN":"选择姿势"},"sceneStudio":{"en":"Studio","zh-TW":"攝影棚","zh-CN":"摄影棚"},"sceneNeon":{"en":"Neon City","zh-TW":"霓虹城市","zh-CN":"霓虹城市"},"sceneSunset":{"en":"Dusk","zh-TW":"黃昏","zh-CN":"黄昏"},"poseFront":{"en":"Front","zh-TW":"正面","zh-CN":"正面"},"poseProfile":{"en":"Profile","zh-TW":"側面","zh-CN":"侧面"},"poseMotion":{"en":"Motion","zh-TW":"動態","zh-CN":"动态"},"charNote":{"en":"The figure is an original vector concept, not AI-generated client photography.","zh-TW":"此角色為原創向量概念圖，非 AI 客戶攝影作品。","zh-CN":"此角色为原创矢量概念图，并非 AI 客户摄影作品。"},"brandKind":{"en":"02 / BRAND EXPERIENCE","zh-TW":"02 / 品牌形象","zh-CN":"02 / 品牌形象"},"brandIntro":{"en":"An editorial experience built around mood, rhythm and a distinctive visual object.","zh-TW":"以氛圍、節奏與辨識度鮮明的視覺物件，呈現編輯式品牌體驗。","zh-CN":"以氛围、节奏与鲜明的视觉物件，呈现编辑式品牌体验。"},"collectionTitle":{"en":"CHOOSE THE COLLECTION","zh-TW":"切換形象系列","zh-CN":"切换形象系列"},"collectionDawn":{"en":"DAWN","zh-TW":"黎明","zh-CN":"黎明"},"collectionNoir":{"en":"MIDNIGHT","zh-TW":"午夜","zh-CN":"午夜"},"collectionEmber":{"en":"EMBER","zh-TW":"餘燼","zh-CN":"余烬"},"brandNote":{"en":"VALE is an original fictional brand. No real goods or orders are offered.","zh-TW":"VALE 為原創虛構品牌，沒有實際商品販售或訂單。","zh-CN":"VALE 为原创虚构品牌，不提供实际商品销售或订单。"},"productKind":{"en":"03 / PRODUCT SHOWCASE","zh-TW":"03 / 商品展示","zh-CN":"03 / 商品展示"},"productTitle":{"en":"WEAR THE<br><em>FUTURE.</em>","zh-TW":"穿上<br><em>未來。</em>","zh-CN":"穿上<br><em>未来。</em>"},"productIntro":{"en":"Introducing AIRFORM: an original speculative outerwear concept with real interface controls.","zh-TW":"AIRFORM 原創概念外套展示，提供真實可操作的介面控制。","zh-CN":"AIRFORM 原创概念外套展示，提供真实可交互的界面控制。"},"colorTitle":{"en":"COLORWAY","zh-TW":"選擇顏色","zh-CN":"选择颜色"},"sizeTitle":{"en":"SIZE","zh-TW":"選擇尺寸","zh-CN":"选择尺码"},"quantityTitle":{"en":"QUANTITY","zh-TW":"數量","zh-CN":"数量"},"cartButton":{"en":"ADD TO DEMO BAG","zh-TW":"加入示範購物袋","zh-CN":"加入演示购物袋"},"productNotice":{"en":"Demo only. No payment or fulfillment. Prices are illustrative.","zh-TW":"僅供示範；不提供付款或出貨，價格為示意。","zh-CN":"仅供演示；不提供付款或发货，价格仅为示意。"},"cartStatus":{"en":"DEMO BAG","zh-TW":"示範購物袋","zh-CN":"演示购物袋"},"bagAdded":{"en":"Added {qty} × AIRFORM ({color}, {size}) to the demo bag. No order was placed.","zh-TW":"已加入 {qty} 件 AIRFORM（{color}、{size}）至示範購物袋，沒有建立訂單。","zh-CN":"已加入 {qty} 件 AIRFORM（{color}、{size}）至演示购物袋，未创建订单。"},"productColorSage":{"en":"Moss green","zh-TW":"苔綠","zh-CN":"苔绿"},"productColorStone":{"en":"Cloud white","zh-TW":"雲白","zh-CN":"云白"},"productColorMidnight":{"en":"Midnight ink","zh-TW":"深夜墨黑","zh-CN":"深夜墨黑"},"nextDemo":{"en":"EXPLORE NEXT DEMO ↗","zh-TW":"探索下一個案例 ↗","zh-CN":"探索下一个案例 ↗"},"copyStatus":{"en":"Your selection is saved only in this preview page.","zh-TW":"選擇僅保留在這個示範頁面。","zh-CN":"选择仅保留在这个演示页面。"}};
const CHARACTER_SCENES = {"en":{"studio":["STUDIO / 01","Clean light. Pure form."],"neon":["NIGHT CITY / 02","Electric hues, same identity."],"sunset":["DUSK / 03","A warm world of new stories."]},"zh-TW":{"studio":["攝影棚 / 01","純粹光線，清晰造型。"],"neon":["霓虹城市 / 02","改變光色，角色依然一致。"],"sunset":["黃昏 / 03","用暖色打造全新故事。"]},"zh-CN":{"studio":["摄影棚 / 01","纯粹光线，清晰造型。"],"neon":["霓虹城市 / 02","改变光色，角色依然一致。"],"sunset":["黄昏 / 03","用暖色打造全新故事。"]}};
const BRAND_COLLECTIONS = {"en":{"dawn":["01 / DAWN","Light moves through every detail.","THE NEW QUIET."],"noir":["02 / MIDNIGHT","An elegant study in shadow.","AFTER DARK."],"ember":["03 / EMBER","Warmth that refuses to fade.","A SOFTER FIRE."]},"zh-TW":{"dawn":["01 / 黎明","光影流動於每處細節。","純粹新境。"],"noir":["02 / 午夜","在陰影裡重新定義優雅。","夜幕之後。"],"ember":["03 / 餘燼","不肯褪去的柔和溫度。","溫柔火光。"]},"zh-CN":{"dawn":["01 / 黎明","光影流动于每处细节。","纯粹新境。"],"noir":["02 / 午夜","在阴影中重新定义优雅。","夜幕之后。"],"ember":["03 / 余烬","不愿褪去的柔和温度。","温柔火光。"]}};
const LOCALES=["en","zh-CN","zh-TW"];
const LANG_KEY="visualStory.locale";
const select=document.getElementById("demoLanguage");
const kind=document.body.dataset.demo;
const queryLang=new URLSearchParams(location.search).get("lang");
let savedLang="en";
try { savedLang=localStorage.getItem(LANG_KEY)||"en"; } catch (_) {}
let locale=LOCALES.includes(queryLang) ? queryLang : (LOCALES.includes(savedLang) ? savedLang : "en");
let scene="studio", pose="front", collection="dawn", tone="sage", size="M", quantity=1, bagCount=0;
function tr(key){return DICTIONARY[key]?.[locale]||DICTIONARY[key]?.en||key;}
function setPressed(buttons,selectedKey,value){buttons.forEach(btn=>{const active=btn.dataset[selectedKey]===value;btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",String(active));});}
function updateDynamic(){
 if(kind==="character"){
  const entry=CHARACTER_SCENES[locale][scene];
  document.getElementById("sceneName").textContent=entry[0];
  document.getElementById("sceneDescription").textContent=entry[1];
 }
 if(kind==="brand"){
  const entry=BRAND_COLLECTIONS[locale][collection];
  document.getElementById("collectionIndex").textContent=entry[0];
  document.getElementById("collectionDescription").textContent=entry[1];
  document.getElementById("collectionHeadline").textContent=entry[2];
 }
 if(kind==="product"){
  const colorKey={sage:"productColorSage",stone:"productColorStone",midnight:"productColorMidnight"}[tone];
  document.getElementById("selectedColor").textContent=tr(colorKey);
  document.getElementById("selectedSize").textContent=size;
 }
}
function setLocale(next,persist=true){
 locale=LOCALES.includes(next)?next:"en";
 document.documentElement.lang=locale; select.value=locale;
 document.querySelectorAll("[data-t]").forEach(e=>{e.textContent=tr(e.dataset.t);});
 document.querySelectorAll("[data-t-html]").forEach(e=>{e.innerHTML=tr(e.dataset.tHtml);});
 document.querySelectorAll("[data-t-aria]").forEach(e=>{e.setAttribute("aria-label",tr(e.dataset.tAria));});
 if(persist){try {localStorage.setItem(LANG_KEY,locale);} catch(_){}}
 updateDynamic();
}
select.addEventListener("change",e=>setLocale(e.target.value));
if(kind==="character"){
 const root=document.querySelector(".character-experience");
 const scenes=[...document.querySelectorAll("[data-scene-choice]")];
 scenes.forEach(b=>b.addEventListener("click",()=>{scene=b.dataset.sceneChoice;root.dataset.scene=scene;setPressed(scenes,"sceneChoice",scene);updateDynamic();}));
 const poses=[...document.querySelectorAll("[data-pose-choice]")];
 poses.forEach(b=>b.addEventListener("click",()=>{pose=b.dataset.poseChoice;root.dataset.pose=pose;setPressed(poses,"poseChoice",pose);}));
}
if(kind==="brand"){
 const root=document.querySelector(".brand-experience");
 const buttons=[...document.querySelectorAll("[data-collection-choice]")];
 buttons.forEach(b=>b.addEventListener("click",()=>{collection=b.dataset.collectionChoice;root.dataset.collection=collection;setPressed(buttons,"collectionChoice",collection);updateDynamic();}));
}
if(kind==="product"){
 const root=document.querySelector(".product-experience");
 const colors=[...document.querySelectorAll("[data-tone-choice]")];
 colors.forEach(b=>b.addEventListener("click",()=>{tone=b.dataset.toneChoice;root.dataset.tone=tone;setPressed(colors,"toneChoice",tone);updateDynamic();}));
 const sizes=[...document.querySelectorAll("[data-size-choice]")];
 sizes.forEach(b=>b.addEventListener("click",()=>{size=b.dataset.sizeChoice;setPressed(sizes,"sizeChoice",size);updateDynamic();}));
 function updateQty(){document.getElementById("quantityValue").textContent=String(quantity);}
 document.getElementById("qtyMinus").addEventListener("click",()=>{quantity=Math.max(1,quantity-1);updateQty();});
 document.getElementById("qtyPlus").addEventListener("click",()=>{quantity=Math.min(10,quantity+1);updateQty();});
 document.getElementById("addDemoBag").addEventListener("click",()=>{
  bagCount+=quantity;
  document.getElementById("demoBagCount").textContent=String(bagCount);
  const chosen=tr({sage:"productColorSage",stone:"productColorStone",midnight:"productColorMidnight"}[tone]);
  document.getElementById("bagFeedback").textContent=tr("bagAdded").replace("{qty}",String(quantity)).replace("{color}",chosen).replace("{size}",size);
 });
}
setLocale(locale,false);
