const termRows = [
  ["flexbox","布局","弹性布局","Flexbox","让一组元素沿横向或纵向排列，并轻松完成对齐与分配空间。","一维布局方式，最擅长处理一排或一列元素，例如导航栏、按钮组、头像与文字。","元素挤在一起、无法垂直居中，或想让左右两端自动撑开时。","请把这组元素改成 Flexbox 布局，主轴两端对齐，交叉轴垂直居中，并用 gap 控制元素间距。","flex","gap,grid,media-query"],
  ["grid","布局","网格布局","CSS Grid","同时控制行和列，适合画廊、卡片墙和复杂页面骨架。","二维布局系统，可以先定义列宽与行高，再把元素放进网格。","卡片需要多列排列、区域需要跨行跨列，或页面骨架较复杂时。","请用 CSS Grid 重构这块布局，桌面端使用两列网格，统一行列间距，并让主要内容跨越完整一行。","grid","flexbox,gap,breakpoint"],
  ["gap","布局","元素间距","Gap","直接控制子元素之间的空隙，比逐个设置外边距更稳定。","gap 会在 Flexbox 或 Grid 的子元素之间生成统一间距，不会给容器外侧加空白。","一组按钮、卡片或标签的间距不统一时。","请不要逐个使用 margin，改用父容器的 gap 属性统一控制子元素间距，并保持移动端间距更紧凑。","gap","flexbox,grid,media-query"],
  ["max-width","布局","最大宽度","Max-width","限制内容不要无限变宽，让大屏上的文字和页面仍然容易阅读。","常与 width: 100% 和 margin: auto 搭配，既适应小屏，又不会在大屏上过散。","网页在宽屏上显得空、散，文字一行太长时。","请给主要内容容器增加合理的 max-width，并通过 margin-inline: auto 居中；小屏下仍保持 width: 100%。","max-width","clamp,breakpoint,media-query"],
  ["sticky","布局","粘性定位","Position: sticky","滚动到指定位置后固定住，离开所属区域时再自然消失。","它像 relative 与 fixed 的结合体，滚动触碰到阈值后才固定。","吸顶导航、目录标题、表格表头需要持续可见时。","请把标题栏改成 position: sticky，并设置合适的 top 与 z-index，保证滚动时吸顶且不被正文遮挡。","sticky","position,z-index,breakpoint"],
  ["position","布局","定位方式","Position","决定元素跟随页面排版，还是固定到父级或屏幕的特定位置。","常见值有 relative、absolute、fixed 和 sticky，absolute 常用于角标、浮层和装饰。","关闭按钮或角标需要压在内容上方并固定在角落时。","请让父容器使用 position: relative，再把角标设为 position: absolute，并通过 top/right 精确贴在右上角。","position","sticky,z-index,transform"],
  ["border-radius","视觉","圆角","Border radius","控制边角的圆润程度，数值越大越接近胶囊或圆形。","可统一设置四角，也能分别控制；圆角并不是越大越高级。","卡片太生硬，或当前圆角太大显得幼稚时。","请把卡片圆角统一为 6px，按钮保持 4px，避免过大的胶囊圆角，并确保内部图片继承相同圆角。","radius","border,box-shadow,hover"],
  ["box-shadow","视觉","投影","Box shadow","用阴影表达层级、悬浮感和空间关系。","由偏移、模糊、扩散和颜色组成；柔和大阴影显得悬浮，硬边阴影更像贴纸。","弹窗与背景分不清，或阴影太黑太脏时。","请弱化卡片投影：增加模糊半径、降低不透明度、减少扩散范围，只保留轻微的垂直位移。","shadow","z-index,opacity,border"],
  ["gradient","视觉","渐变","Linear gradient","让颜色沿一个方向平滑过渡，表达光感、层次或重点。","可以设置角度、多个颜色节点和位置，最好承担明确功能而不是铺满页面。","纯色背景太平，需要给重点区域加入方向感时。","请使用克制的 linear-gradient 作为重点区域背景，明确渐变角度和颜色节点，不要把所有卡片都做成渐变。","gradient","opacity,backdrop-filter,border"],
  ["border","视觉","边框","Border","用线条划分区域，通常比堆叠阴影更安静、更利于扫描。","可控制粗细、样式与颜色；细线适合工具界面，粗线更像海报。","卡片边界不清晰，或整个页面阴影过多时。","请移除多余阴影，改用 1px 中性灰边框划分区域；重点组件可用更深边框提高层级。","border","box-shadow,border-radius,opacity"],
  ["backdrop-filter","视觉","背景模糊","Backdrop filter","模糊元素背后的画面，常见于玻璃质感的导航和浮层。","它处理元素背后的内容，因此自身通常要带半透明背景才能看出效果。","固定导航覆盖图片，需要兼顾文字清晰与背景透出时。","请给浮层使用半透明背景和 backdrop-filter: blur()，保留清晰边框，并提供纯色回退。","backdrop","opacity,gradient,z-index"],
  ["opacity","视觉","透明度","Opacity","控制整个元素及其子元素的透明程度。","取值 0 到 1；若只想让背景透明，应使用带 alpha 的背景色。","次要装饰太抢眼，或遮罩需要透出后方内容时。","请降低装饰元素的 opacity；正文不要整体设置 opacity，改用对比度合适的文本颜色。","opacity","backdrop-filter,z-index,gradient"],
  ["z-index","视觉","堆叠层级","Z-index","决定重叠元素谁在上面，但只在正确的层叠上下文中生效。","数字大通常更靠上，但 transform、opacity 等属性可能创建新的层叠上下文。","弹窗被导航遮住、下拉菜单藏在卡片后面时。","请检查当前 stacking context，不要盲目增加 z-index；为导航、浮层、弹窗建立有限的层级规范。","z-index","position,sticky,opacity"],
  ["font-size","文字","字号","Font size","控制文字大小，也是建立标题、正文、辅助信息层级的基础。","字号需要和容器、阅读距离及信息层级一起考虑，工具卡片标题不必像营销主标题。","所有文字差不多大，或小屏标题挤压内容时。","请建立页面标题、区块标题、正文和辅助信息的字号层级，并让移动端标题适度缩小。","font-size","font-weight,line-height,clamp"],
  ["font-weight","文字","字重","Font weight","控制笔画粗细，用于区分重点，而不是把所有文字都加粗。","常用值从 400 到 700，是否生效取决于字体是否提供对应粗细。","页面重点太多，或标题和正文没有明显层级时。","请减少无意义的粗体，只让标题和关键数字使用 600-700 字重，正文保持 400。","font-weight","font-size,line-height,letter-spacing"],
  ["line-height","文字","行高","Line height","控制每行文字占用的垂直空间，直接影响长文的可读性。","中文正文通常需要比英文更宽松的行高，无单位值更适合通用排版。","多行文字粘在一起，或卡片文字上下过空时。","请把中文正文 line-height 调整到 1.7 左右，紧凑标题使用 1.2，并检查多行文字是否容易扫描。","line-height","font-size,font-weight,letter-spacing"],
  ["letter-spacing","文字","字间距","Letter spacing","调整字符之间的距离，适合短标签和英文大写字，不宜滥用。","过大的中文字符间距会割裂词语，多数正文保持 0 最自然。","英文眉题需要更像标签，或文字显得松散时。","请把正文 letter-spacing 保持为 0；仅对短英文标签适量增加字间距，避免对中文段落使用宽字距。","letter-spacing","font-weight,line-height,text-overflow"],
  ["text-overflow","文字","文本溢出省略","Text overflow","单行文字放不下时，用省略号保持布局稳定。","单行省略通常需要 overflow、white-space 与 text-overflow 三个属性配合。","文件名、标题或用户名过长，把卡片撑坏时。","请给过长标题增加单行省略号，并确保父级允许收缩；悬停时用 Tooltip 展示完整内容。","overflow","tooltip,max-width,font-size"],
  ["transition","动效","过渡动画","Transition","让属性变化不再瞬间跳变，常用于悬停、展开和状态切换。","它描述动画属性、持续时间和速度曲线，通常 150-300ms 已足够。","按钮悬停太突兀，或面板展开生硬时。","请给颜色、位移和透明度变化增加 180-240ms 的 transition，并使用自然 easing；不要使用 transition: all。","transition","transform,hover,keyframes"],
  ["transform","动效","变形","Transform","移动、缩放或旋转元素，通常不会重新挤压周围布局。","常配合 transition 做轻量交互，动画性能也通常优于改变 top/left。","卡片需要悬浮、按钮按下缩小或装饰需要旋转时。","请用 transform 实现悬停时轻微上移和缩放，并配合 transition；避免位移过大导致界面晃动。","transform","transition,hover,position"],
  ["keyframes","动效","关键帧动画","@keyframes","定义多个时间节点的状态，用于循环或更复杂的连续动画。","可描述从开始到结束的多个阶段，再通过 animation 控制时长和次数。","加载骨架、呼吸提示、循环装饰需要连续变化时。","请用 @keyframes 制作克制的循环呼吸动画，并支持 prefers-reduced-motion，避免持续大幅位移。","keyframes","transition,skeleton,transform"],
  ["hover","动效","悬停状态","Hover state","鼠标移到可操作元素上时给出反馈，让用户知道它可以点击。",":hover 不能成为唯一信息入口，因为触屏设备没有稳定的悬停状态。","按钮和普通文字长得一样，不知道哪里可点击时。","请为可点击元素补充清晰的 hover 状态，同时保留 focus-visible 和触屏点击反馈。","hover","transition,tooltip,transform"],
  ["media-query","响应式","媒体查询","Media query","根据屏幕宽度、设备能力或用户偏好切换样式规则。","@media 常用于改变布局，也能检测减少动效、深色模式和悬停能力。","桌面版缩到手机后文字太挤、双栏放不下时。","请用移动优先的媒体查询适配手机：双栏改单栏，缩小边距，保证触控目标至少 44px。","responsive","breakpoint,clamp,flexbox"],
  ["breakpoint","响应式","断点","Breakpoint","布局真正需要改变时对应的宽度，不等于某一款手机型号。","好的断点由内容何时放不下来决定，而不是机械照抄设备尺寸。","某个宽度开始拥挤，需要从双栏切换到单栏时。","请根据内容开始拥挤的位置设置 breakpoint，而不是按具体设备型号；检查断点前后的自然过渡。","responsive","media-query,max-width,clamp"],
  ["clamp","响应式","流体尺寸","CSS clamp()","让字号或间距随空间平滑变化，同时限制最小值和最大值。","clamp(最小值, 理想值, 最大值) 能减少突兀的断点变化。","标题在手机太大、电脑又太小，希望自然缩放时。","请用 CSS clamp() 设置响应式标题字号，明确最小值和最大值，避免只用 vw。","clamp","font-size,breakpoint,media-query"],
  ["aspect-ratio","响应式","宽高比","Aspect ratio","在宽度变化时保持固定比例，避免图片或视频区域跳动。","可在内容加载前预留正确高度，也能创建正方形、4:3、16:9 容器。","图片加载后页面跳动，或封面比例不一致时。","请给媒体容器设置 aspect-ratio，并让图片使用 object-fit: cover，保持响应式构图。","ratio","media-query,max-width,grid"],
  ["skeleton","反馈","骨架屏","Skeleton screen","数据加载时先显示内容轮廓，减少空白等待感和页面跳动。","骨架应接近真实内容的形状和尺寸，且不能代替明确的错误状态。","列表或详情等待接口返回，页面短暂空白时。","请在加载期间显示与真实布局一致的骨架屏，完成后平滑替换，并为失败情况提供错误提示。","skeleton","keyframes,toast,opacity"],
  ["tooltip","反馈","文字提示","Tooltip","悬停或聚焦时补充简短说明，适合陌生图标和被省略内容。","它是辅助信息，不应承载完成任务所必需的内容，并要支持键盘聚焦。","工具栏图标难懂，或需要查看被省略的完整文本时。","请为陌生图标增加支持 hover 与 keyboard focus 的 Tooltip，并确保不会被裁切或跑出视口。","tooltip","hover,text-overflow,z-index"],
  ["toast","反馈","轻提示","Toast","操作完成后短暂出现的状态消息，不打断当前流程。","适合已保存、复制成功等轻量反馈；严重错误要用更明确的方式。","点击复制、保存、收藏后，需要知道是否成功时。","请在操作成功后显示简短 Toast，数秒后自动消失，同时使用 aria-live 让辅助技术读出状态。","toast","skeleton,tooltip,transition"]
];

const terms = termRows.map(([id,category,name,english,summary,description,usage,prompt,demo,related]) => ({id,category,name,english,summary,description,usage,prompt,demo,related:related.split(",")}));
const categories = ["全部","布局","视觉","文字","动效","响应式","反馈"];
const validHash = () => terms.some(t => t.id === location.hash.slice(1)) ? location.hash.slice(1) : terms[0].id;
const state = { activeCategory:"全部", search:"", activeId:validHash(), viewport:"desktop" };
const $ = s => document.querySelector(s);
const els = { total:$("#total-count"), result:$("#result-count"), search:$("#search-input"), clear:$("#clear-search"), categories:$("#category-tabs"), mobileCategories:$("#mobile-category-rail"), mobileTotal:$("#mobile-discovery-total"), list:$("#term-list"), empty:$("#empty-state"), number:$("#detail-number"), category:$("#detail-category"), name:$("#detail-name"), english:$("#detail-english"), summary:$("#detail-summary"), description:$("#detail-description"), usage:$("#detail-usage"), prompt:$("#detail-prompt"), related:$("#related-terms"), previewLabel:$("#preview-label"), canvas:$("#preview-canvas"), hint:$("#preview-hint"), controls:$("#demo-controls"), toast:$("#app-toast"), catalog:$("#catalog"), backdrop:$("#catalog-backdrop"), catalogButton:$("#mobile-catalog-button") };

function filteredTerms(){const q=state.search.trim().toLowerCase();return terms.filter(t=>(state.activeCategory==="全部"||t.category===state.activeCategory)&&(!q||[t.name,t.english,t.summary,t.description,t.usage].join(" ").toLowerCase().includes(q)));}
function categoryCount(category){return category==="全部"?terms.length:terms.filter(t=>t.category===category).length;}
function renderCategories(){
  els.categories.innerHTML=categories.map(c=>'<button class="category-tab'+(state.activeCategory===c?' active':'')+'" type="button" role="tab" aria-selected="'+(state.activeCategory===c)+'" data-category="'+c+'">'+c+'</button>').join("");
  els.mobileCategories.innerHTML=categories.filter(c=>c!=="全部").map(c=>'<button class="mobile-category-card'+(state.activeCategory===c?' active':'')+'" type="button" aria-pressed="'+(state.activeCategory===c)+'" data-mobile-category="'+c+'"><strong>'+c+'</strong><span>'+categoryCount(c)+' 个术语</span><i aria-hidden="true">→</i></button>').join("");
  els.mobileTotal.textContent=(categories.length-1)+' 类 · '+terms.length+' 词';
}
function renderList(){const visible=filteredTerms();els.list.innerHTML=visible.map(t=>{const n=terms.indexOf(t)+1;return `<button class="term-button${t.id===state.activeId?" active":""}" type="button" data-term-id="${t.id}" aria-current="${t.id===state.activeId}"><span class="term-index">${String(n).padStart(2,"0")}</span><span><strong>${t.name}</strong><small>${t.english}</small></span><span class="arrow" aria-hidden="true">→</span></button>`}).join("");els.empty.hidden=visible.length>0;els.list.hidden=!visible.length;els.result.textContent=`${state.activeCategory} ${visible.length} 个`;els.clear.hidden=!state.search;}
function selectTerm(id,{close=true,scroll=false}={}){const t=terms.find(x=>x.id===id);if(!t)return;state.activeId=id;history.replaceState(null,"",`#${id}`);renderList();renderDetail(t);if(close)closeCatalog();if(scroll&&innerWidth<=900)$("#term-detail").scrollIntoView({behavior:"smooth"});}
function renderDetail(t){const n=terms.indexOf(t)+1;els.number.textContent=`${String(n).padStart(2,"0")} / ${terms.length}`;els.category.textContent=t.category;els.name.textContent=t.name;els.english.textContent=t.english;els.summary.textContent=t.summary;els.description.textContent=t.description;els.usage.textContent=t.usage;els.prompt.textContent=`“${t.prompt}”`;els.previewLabel.textContent=`${t.english} 实时样本`;els.related.innerHTML=t.related.map(id=>{const r=terms.find(x=>x.id===id);return r?`<button class="related-term" type="button" data-related-id="${id}">${r.name}</button>`:""}).join("");renderDemo(t);}
function range(label,min,max,value,step,unit,property){return `<label class="range-control"><span>${label}</span><input type="range" min="${min}" max="${max}" value="${value}" step="${step}" data-property="${property}" data-unit="${unit}"><output>${value}${unit}</output></label>`;}
function scene(caption,content){return `<div class="demo-scene"><span class="demo-caption">${caption}</span>${content}</div>`;}
function typeDemo(kind,property,value,unit,control){return {html:scene(`${kind}: ${value}${unit}`,`<div class="type-sheet" style="${property}:${value}${unit}"><span class="type-label">TYPOGRAPHY SPECIMEN</span><p class="type-sample">好看的界面，不只是颜色好看。它首先要让信息容易被看懂。</p></div>`),controls:control,hint:"拖动控件，观察文字的阅读感与信息层级"};}

function demoFor(t){
  const demos={
    flex:{html:scene("display: flex",`<div class="demo-flex"><div>01</div><div>02</div><div>03</div></div>`),controls:`<button class="demo-action" data-action="flex" type="button">切换方向</button>`,hint:"切换横向与纵向排列，观察主轴变化"},
    grid:{html:scene("display: grid",`<div class="demo-grid"><div>HEADER</div><div>MAIN</div><div>ASIDE</div></div>`),controls:`<button class="demo-action" data-action="grid" type="button">切换网格</button>`,hint:"切换列结构，观察如何同时控制行和列"},
    gap:{html:scene("gap: 16px",`<div class="gap-sample"><span>A</span><span>B</span><span>C</span></div>`),controls:range("间距",0,48,16,1,"px","--demo-gap"),hint:"容器外侧不会出现额外空白"},
    "max-width":{html:scene("max-width: 420px",`<div class="width-track"><div class="width-content"><b>内容有自己的舒适宽度</b><p>屏幕可以继续变宽，但文字不会被拉成很长的一行。</p></div></div>`),controls:range("最大宽度",240,540,420,10,"px","--demo-width"),hint:"观察正文行长和容器的关系"},
    sticky:{html:scene("position: sticky; top: 0",`<div class="sticky-window"><header>我会吸附在顶部</header>${[1,2,3,4].map(n=>`<p>第 ${n} 段内容<br>向下滚动这个区域，标题仍然可见。</p>`).join("")}</div>`),controls:"",hint:"请在样本内部向下滚动"},
    position:{html:scene("relative parent + absolute badge",`<div class="position-parent"><span class="position-badge">NEW</span><strong>父容器</strong><small>角标相对我定位</small></div>`),controls:`<button class="demo-action" data-action="position" type="button">切换角落</button>`,hint:"角标移动时不会挤压父容器中的文字"},
    radius:{html:scene("border-radius: 8px",`<div class="shape-sample">8px</div>`),controls:range("圆角",0,72,8,1,"px","--demo-radius"),hint:"从利落直角到圆润形状"},
    shadow:{html:scene("box-shadow",`<div class="shadow-sample"><i></i><strong>浮在表面上</strong><span>阴影越大，视觉距离越远。</span></div>`),controls:range("模糊",0,60,24,1,"px","--demo-shadow"),hint:"观察组件层级如何变化"},
    gradient:{html:scene("linear-gradient(135deg)",`<div class="gradient-sample">COLOR FLOW</div>`),controls:range("角度",0,360,135,1,"deg","--demo-angle"),hint:"观察颜色的流动方向"},
    border:{html:scene("border + outline",`<div class="border-sample"><strong>边界就是秩序</strong></div>`),controls:range("粗细",1,12,3,1,"px","--demo-border"),hint:"细边框安静，粗边框更像海报"},
    backdrop:{html:`<div class="demo-scene"><div class="glass-bg"><div class="glass-card"><strong>清晰，又保留背景</strong><span>半透明 + 背景模糊</span></div></div></div>`,controls:range("模糊",0,30,14,1,"px","--demo-blur"),hint:"背景越复杂，模糊对可读性帮助越明显"},
    opacity:{html:scene("opacity: 0.65",`<div class="opacity-scene"><div class="opacity-layer">65%</div></div>`),controls:range("透明度",0,100,65,1,"%","--demo-opacity"),hint:"透明度会影响整个元素，包括文字"},
    "z-index":{html:scene("stacking order",`<div class="stack-sample"><div>01</div><div>02</div><div>03</div></div>`),controls:`<button class="demo-action" data-action="stack" type="button">切换顶层</button>`,hint:"切换谁在最上层，观察重叠关系"},
    "font-size":typeDemo("font-size","--demo-font-size",36,"px",range("字号",20,56,36,1,"px","--demo-font-size")),
    "font-weight":typeDemo("font-weight","--demo-font-weight",500,"",range("字重",100,900,500,100,"","--demo-font-weight")),
    "line-height":typeDemo("line-height","--demo-line-height",1.35,"",range("行高",1,2.2,1.35,.05,"","--demo-line-height")),
    "letter-spacing":typeDemo("letter-spacing","--demo-letter-spacing",0,"px",range("字间距",0,10,0,.5,"px","--demo-letter-spacing")),
    overflow:{html:scene("text-overflow: ellipsis",`<div class="overflow-card"><strong>这是一段故意写得非常非常长而且可能放不下的标题</strong><p>容器宽度保持稳定</p></div>`),controls:`<button class="demo-action" data-action="overflow" type="button">切换省略</button>`,hint:"观察省略和换行对卡片高度的影响"},
    transition:{html:scene("transition: 450ms",`<button class="motion-sample" type="button">点我变化</button>`),controls:range("时长",100,1200,450,50,"ms","--demo-duration"),hint:"点击样本，再调节持续时间"},
    transform:{html:scene("translate + rotate + scale",`<button class="motion-sample" type="button">点我变形</button>`),controls:`<button class="demo-action" data-action="motion" type="button">切换状态</button>`,hint:"变形不会把周围布局挤开"},
    keyframes:{html:scene("@keyframes ripple",`<div class="keyframe-sample"><span>LOADING</span></div>`),controls:`<button class="demo-action" data-action="animation" type="button">暂停动画</button>`,hint:"关键帧定义动画的开始、过程和结束"},
    hover:{html:scene(":hover + :focus-visible",`<button class="hover-sample" type="button">把鼠标移到这里</button>`),controls:"",hint:"悬停或键盘聚焦按钮"},
    responsive:{html:scene("responsive breakpoint: 380px",`<div class="responsive-frame"><header></header><div class="responsive-body"><div></div><div></div></div></div>`),controls:range("容器宽度",260,520,460,10,"px","--demo-frame-width"),hint:"拖到 380px 以下，双栏会切换为单栏"},
    clamp:{html:scene("font-size: clamp(16px, 4cqi, 32px)",`<div class="clamp-sample"><div><span>SMALL</span><strong>自然缩放</strong></div><div><span>MEDIUM</span><strong>自然缩放</strong></div><div><span>LARGE</span><strong>自然缩放</strong></div></div>`),controls:"",hint:"同一规则在不同容器中自然变化"},
    ratio:{html:scene("aspect-ratio: 1 / 1",`<div class="ratio-sample">1 : 1</div>`),controls:`<button class="demo-action" data-action="ratio" type="button">切换比例</button>`,hint:"切换常见媒体比例"},
    skeleton:{html:scene("loading placeholder",`<div class="skeleton-sample"><div class="skeleton-avatar"></div><div class="skeleton-line"></div><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>`),controls:`<button class="demo-action" data-action="skeleton" type="button">暂停加载</button>`,hint:"骨架形状应接近最终内容"},
    tooltip:{html:scene("hover / focus for details",`<button class="tooltip-trigger" type="button">悬停查看说明</button>`),controls:"",hint:"悬停或键盘聚焦，提示会出现在上方"},
    toast:{html:scene("non-blocking feedback",`<div class="toast-demo-card"><strong>操作完成了吗？</strong><p>用轻提示给用户一个明确答复。</p><button class="demo-action" type="button" data-action="toast">模拟保存</button></div><div class="inner-toast" role="status">✓ 已保存到草稿箱</div>`),controls:"",hint:"点击模拟保存，提示不会打断操作"}
  }; return demos[t.demo]||demos.flex;
}

function renderDemo(t){const d=demoFor(t);els.canvas.innerHTML=d.html;els.controls.innerHTML=d.controls;els.hint.textContent=d.hint;els.canvas.classList.toggle("mobile-view",state.viewport==="mobile");bindDemo(t);}
function bindDemo(t){els.controls.querySelectorAll("input[type=range]").forEach(input=>input.addEventListener("input",()=>{const unit=input.dataset.unit||"";input.closest("label").querySelector("output").textContent=`${input.value}${unit}`;applyProperty(input.dataset.property,input.value,unit,t);}));els.canvas.querySelector(".motion-sample")?.addEventListener("click",e=>e.currentTarget.classList.toggle("is-active"));els.controls.querySelectorAll("[data-action]").forEach(b=>b.addEventListener("click",()=>runAction(b.dataset.action,b)));els.canvas.querySelector("[data-action=toast]")?.addEventListener("click",showInnerToast);}
function applyProperty(prop,value,unit,t){let target=els.canvas.querySelector(".demo-scene > div:not(.demo-caption)");if(prop.startsWith("--demo-font" )||prop.includes("line-height")||prop.includes("letter-spacing"))target=els.canvas.querySelector(".type-sheet");if(prop==="--demo-blur")target=els.canvas.querySelector(".glass-card");if(!target)return;target.style.setProperty(prop,prop==="--demo-opacity"?String(value/100):`${value}${unit}`);const cap=els.canvas.querySelector(".demo-caption");if(cap&&t.demo!=="responsive")cap.textContent=`${prop.replace("--demo-","")}: ${value}${unit}`;if(t.demo==="radius")target.textContent=`${value}${unit}`;if(t.demo==="opacity")target.querySelector(".opacity-layer").textContent=`${value}%`;if(t.demo==="responsive"){target.classList.toggle("narrow",value<380);cap.textContent=value<380?"mobile layout: one column":"desktop layout: two columns";}}
function runAction(a,b){
  if(a==="flex"){const x=els.canvas.querySelector(".demo-flex"),v=x.style.flexDirection==="column";x.style.flexDirection=v?"row":"column";b.textContent=v?"切换方向":"恢复横向";}
  if(a==="grid"){const x=els.canvas.querySelector(".demo-grid"),v=x.style.gridTemplateColumns==="1fr 1fr 1fr";x.style.gridTemplateColumns=v?"1.3fr .7fr":"1fr 1fr 1fr";x.firstElementChild.style.gridColumn=v?"1 / -1":"auto";b.textContent=v?"切换网格":"恢复跨列";}
  if(a==="position"){const x=els.canvas.querySelector(".position-badge"),v=x.classList.toggle("bottom-corner");b.textContent=v?"回到右上角":"切换角落";}
  if(a==="stack"){const x=els.canvas.querySelector(".stack-sample"),n=(Number(x.dataset.top||3)%3)+1;x.dataset.top=n;[...x.children].forEach((c,i)=>c.style.zIndex=i+1===n?5:i+1);b.textContent=`当前 0${n} 在顶层`;}
  if(a==="overflow"){const x=els.canvas.querySelector(".overflow-card strong"),v=x.style.whiteSpace==="normal";x.style.whiteSpace=v?"nowrap":"normal";x.style.textOverflow=v?"ellipsis":"clip";b.textContent=v?"切换省略":"恢复省略";}
  if(a==="motion")els.canvas.querySelector(".motion-sample").classList.toggle("is-active");
  if(a==="animation"||a==="skeleton"){const x=els.canvas.querySelector(a==="animation"?".keyframe-sample":".skeleton-sample"),v=x.classList.toggle("animation-paused");b.textContent=v?(a==="animation"?"继续动画":"继续加载"):(a==="animation"?"暂停动画":"暂停加载");}
  if(a==="ratio"){const x=els.canvas.querySelector(".ratio-sample"),rs=[["1 / 1","1 : 1"],["4 / 3","4 : 3"],["16 / 9","16 : 9"]],n=(Number(x.dataset.i||0)+1)%3;x.dataset.i=n;x.style.setProperty("--demo-ratio",rs[n][0]);x.textContent=rs[n][1];}
}
function showInnerToast(){const x=els.canvas.querySelector(".inner-toast");x.classList.add("show");clearTimeout(showInnerToast.t);showInnerToast.t=setTimeout(()=>x.classList.remove("show"),2200);}
function showToast(msg){els.toast.textContent=msg;els.toast.classList.add("show");clearTimeout(showToast.t);showToast.t=setTimeout(()=>els.toast.classList.remove("show"),2200);}
function copyPrompt(){
  const selection=window.getSelection();
  const range=document.createRange();
  range.selectNodeContents(els.prompt);
  selection.removeAllRanges();
  selection.addRange(range);
  $("#copy-button span:last-child").textContent="已选中";
  showToast("文字已选中，请使用系统复制操作");
  setTimeout(()=>$("#copy-button span:last-child").textContent="选中文字",1600);
}
function step(n){const p=filteredTerms().length?filteredTerms():terms;let i=p.findIndex(x=>x.id===state.activeId);selectTerm(p[(Math.max(i,0)+n+p.length)%p.length].id,{close:false});}
function openCatalog({focusSearch=true}={}){els.catalog.classList.add("open");els.backdrop.hidden=false;els.catalogButton.setAttribute("aria-expanded","true");if(focusSearch)setTimeout(()=>els.search.focus(),220);}
function closeCatalog(){els.catalog.classList.remove("open");els.backdrop.hidden=true;els.catalogButton.setAttribute("aria-expanded","false");}

els.categories.addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;state.activeCategory=b.dataset.category;renderCategories();renderList();});
els.mobileCategories.addEventListener("click",e=>{const b=e.target.closest("[data-mobile-category]");if(!b)return;state.activeCategory=b.dataset.mobileCategory;renderCategories();renderList();openCatalog({focusSearch:false});});
els.list.addEventListener("click",e=>{const b=e.target.closest("[data-term-id]");if(b)selectTerm(b.dataset.termId,{scroll:true});});
els.related.addEventListener("click",e=>{const b=e.target.closest("[data-related-id]");if(b)selectTerm(b.dataset.relatedId,{close:false,scroll:true});});
els.search.addEventListener("input",()=>{state.search=els.search.value;renderList();});
els.clear.addEventListener("click",()=>{state.search="";els.search.value="";renderList();els.search.focus();});
$("#copy-button").addEventListener("click",copyPrompt);$("#previous-term").addEventListener("click",()=>step(-1));$("#next-term").addEventListener("click",()=>step(1));els.catalogButton.addEventListener("click",()=>els.catalog.classList.contains("open")?closeCatalog():openCatalog());els.backdrop.addEventListener("click",closeCatalog);
document.querySelectorAll(".viewport-button").forEach(b=>b.addEventListener("click",()=>{state.viewport=b.dataset.viewport;document.querySelectorAll(".viewport-button").forEach(x=>{const on=x===b;x.classList.toggle("active",on);x.setAttribute("aria-pressed",on)});els.canvas.classList.toggle("mobile-view",state.viewport==="mobile");}));
document.addEventListener("keydown",e=>{const typing=/input|textarea/i.test(document.activeElement?.tagName||"");if(e.key==="/"&&!typing){e.preventDefault();innerWidth<=900?openCatalog():els.search.focus();}if(e.key==="Escape"){closeCatalog();els.search.blur();}if(e.altKey&&e.key==="ArrowLeft")step(-1);if(e.altKey&&e.key==="ArrowRight")step(1);});
addEventListener("hashchange",()=>{const id=validHash();if(id!==state.activeId)selectTerm(id,{close:false});});
els.total.textContent=terms.length;renderCategories();renderList();renderDetail(terms.find(t=>t.id===state.activeId));
