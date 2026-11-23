"use strict";
/* All content and state in these demos is local. No checkout or network calls. */
const DICTIONARY = {"skip":{"en":"Skip to content","zh-TW":"跳到主要內容","zh-CN":"跳转到主要内容"},"back":{"en":"← BACK TO STUDIO","zh-TW":"← 返回工作室","zh-CN":"← 返回工作室"},"localeLabel":{"en":"Choose language","zh-TW":"選擇語言","zh-CN":"选择语言"},"navDemos":{"en":"THREE LIVE DEMOS","zh-TW":"三個互動案例","zh-CN":"三个交互案例"},"conceptNotice":{"en":"Original concept demonstration · Not a client project","zh-TW":"原創概念示範 · 非真實客戶專案","zh-CN":"原创概念演示 · 非真实客户项目"},"characterKind":{"en":"01 / CHARACTER PORTFOLIO","zh-TW":"01 / 角色作品集","zh-CN":"01 / 角色作品集"},"characterTitle":{"en":"THE ART OF<br><em>BEING SEEN.</em>","zh-TW":"被看見的<br><em>藝術。</em>","zh-CN":"被看见的<br><em>艺术。</em>"},"characterIntro":{"en":"An editorial portrait, designed to hold attention. Explore lighting moods and framing without changing the original identity.","zh-TW":"一張引人注目的編輯式肖像。探索光線氛圍與取景方式，保留同一人物形象。","zh-CN":"一张引人注目的编辑式肖像。探索光线氛围与取景方式，保留同一人物形象。"},"scenesTitle":{"en":"SCENE DIRECTOR","zh-TW":"場景導演","zh-CN":"场景导演"},"poseTitle":{"en":"FRAME COMPOSITION","zh-TW":"取景構圖","zh-CN":"取景构图"},"sceneStudio":{"en":"Studio","zh-TW":"攝影棚","zh-CN":"摄影棚"},"sceneNeon":{"en":"Neon City","zh-TW":"霓虹城市","zh-CN":"霓虹城市"},"sceneSunset":{"en":"Dusk","zh-TW":"黃昏","zh-CN":"黄昏"},"poseFront":{"en":"Wide","zh-TW":"全景","zh-CN":"全景"},"poseProfile":{"en":"Portrait","zh-TW":"肖像","zh-CN":"肖像"},"poseMotion":{"en":"Detail","zh-TW":"細節","zh-CN":"细节"},"charNote":{"en":"Original AI-generated concept image. Controls are crop and color treatments, not newly generated photographs.","zh-TW":"原創 AI 概念影像。選項僅改變裁切與色調，不會產生新照片。","zh-CN":"原创 AI 概念影像。选项仅改变裁切与色调，不会生成新照片。"},"brandKind":{"en":"02 / BRAND EXPERIENCE","zh-TW":"02 / 品牌形象","zh-CN":"02 / 品牌形象"},"brandIntro":{"en":"A visual identity shaped by light, texture and restraint. A contemporary fashion atelier told through an editorial lens.","zh-TW":"以光線、質感與留白形塑品牌識別，用編輯式攝影語言呈現當代時尚。","zh-CN":"以光线、质感与留白塑造品牌识别，以编辑式摄影语言呈现当代时尚。"},"collectionTitle":{"en":"CHOOSE THE COLLECTION","zh-TW":"切換形象系列","zh-CN":"切换形象系列"},"collectionDawn":{"en":"DAWN","zh-TW":"黎明","zh-CN":"黎明"},"collectionNoir":{"en":"MIDNIGHT","zh-TW":"午夜","zh-CN":"午夜"},"collectionEmber":{"en":"EMBER","zh-TW":"餘燼","zh-CN":"余烬"},"brandNote":{"en":"VALE is a fictional brand. The original AI visual has three color treatments, not three physical collections.","zh-TW":"VALE 為虛構品牌；原創 AI 影像切換三種色調，而非實體服裝系列。","zh-CN":"VALE 为虚构品牌；原创 AI 影像切换三种色调，并非实体服装系列。"},"productKind":{"en":"03 / PRODUCT SHOWCASE","zh-TW":"03 / 商品展示","zh-CN":"03 / 商品展示"},"productTitle":{"en":"WEAR THE<br><em>FUTURE.</em>","zh-TW":"穿上<br><em>未來。</em>","zh-CN":"穿上<br><em>未来。</em>"},"productIntro":{"en":"Designed for movement. An editorial product experience with working options, sizing and a clearly simulated shopping bag.","zh-TW":"為行動而設計：具備可操作規格、尺寸選擇與明確標示的示範購物袋。","zh-CN":"为行动而设计：具备可操作规格、尺码选择和明确标示的演示购物袋。"},"colorTitle":{"en":"COLORWAY","zh-TW":"選擇顏色","zh-CN":"选择颜色"},"sizeTitle":{"en":"SIZE","zh-TW":"選擇尺寸","zh-CN":"选择尺码"},"quantityTitle":{"en":"QUANTITY","zh-TW":"數量","zh-CN":"数量"},"cartButton":{"en":"ADD TO DEMO BAG","zh-TW":"加入示範購物袋","zh-CN":"加入演示购物袋"},"productNotice":{"en":"AI-generated concept image. Color treatments are illustrative. No real inventory, payment or shipping.","zh-TW":"AI 概念圖，顏色僅供示意。無真實庫存、付款或出貨。","zh-CN":"AI 概念图，颜色仅供示意。无真实库存、付款或发货。"},"cartStatus":{"en":"DEMO BAG","zh-TW":"示範購物袋","zh-CN":"演示购物袋"},"bagAdded":{"en":"Added {qty} × AIRFORM ({color}, {size}) to the demo bag. No order was placed.","zh-TW":"已加入 {qty} 件 AIRFORM（{color}、{size}）至示範購物袋，沒有建立訂單。","zh-CN":"已加入 {qty} 件 AIRFORM（{color}、{size}）至演示购物袋，未创建订单。"},"productColorSage":{"en":"Moss green","zh-TW":"苔綠","zh-CN":"苔绿"},"productColorStone":{"en":"Cloud white","zh-TW":"雲白","zh-CN":"云白"},"productColorMidnight":{"en":"Midnight ink","zh-TW":"深夜墨黑","zh-CN":"深夜墨黑"},"nextDemo":{"en":"EXPLORE NEXT DEMO ↗","zh-TW":"探索下一個案例 ↗","zh-CN":"探索下一个案例 ↗"},"copyStatus":{"en":"Your selection is saved only in this preview page.","zh-TW":"選擇僅保留在這個示範頁面。","zh-CN":"选择仅保留在这个演示页面。"},"echoFeatureTitle":{"en":"An image should feel like a world.","zh-TW":"讓影像呈現完整世界觀。","zh-CN":"让影像呈现完整世界观。"},"echoFeatureBody":{"en":"A focused visual identity is more convincing than dozens of unrelated variations. Each composition here is a treatment of one original portrait.","zh-TW":"一致的視覺識別比大量不相干的變體更有說服力。本頁所有構圖皆源於同一張原創肖像。","zh-CN":"一致的视觉识别比大量不相关的变体更有说服力。本页所有构图均源于同一张原创肖像。"},"echoFeatureCta":{"en":"Explore the visual treatments ↗","zh-TW":"探索視覺變化 ↗","zh-CN":"探索视觉变化 ↗"},"valeFeatureTitle":{"en":"Quiet is a powerful point of view.","zh-TW":"安靜，也是一種有力的態度。","zh-CN":"安静，也是一种有力的态度。"},"valeFeatureBody":{"en":"Editorial pacing, considered color and a defined visual identity: the foundations of a premium brand experience.","zh-TW":"編輯式節奏、審慎用色與鮮明識別，是高質感品牌網站的基礎。","zh-CN":"编辑式节奏、审慎用色与鲜明识别，是高质感品牌网站的基础。"},"valeFeatureCta":{"en":"Explore the collection moods ↗","zh-TW":"探索系列氛圍 ↗","zh-CN":"探索系列氛围 ↗"},"auraFeatureTitle":{"en":"Every detail, presented with intention.","zh-TW":"細節，都值得被好好呈現。","zh-CN":"细节，都值得被认真呈现。"},"auraFeatureBody":{"en":"A commercial product page needs clear choices, useful sizing and an honest presentation. Material performance and availability are not verified in this design study.","zh-TW":"真正的商品頁需要清楚選項、尺寸資訊與誠實呈現。此設計示範未驗證材質性能與庫存。","zh-CN":"真正的商品页需要清晰选项、尺码信息与真实呈现。此设计演示未验证材质性能与库存。"},"auraFeatureCta":{"en":"Return to product options ↗","zh-TW":"返回商品選項 ↗","zh-CN":"返回商品选项 ↗"}};
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
