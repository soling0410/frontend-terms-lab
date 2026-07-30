(function extendCatalog() {
  const group = (category, rows) => rows.map(([id, name, english, summary, description, usage, demo, prompt]) => ({
    id, category, name, english, summary, description, usage, demo,
    prompt: `请${prompt}`,
    related: []
  }));

  const additions = [
    ...group("布局", [
      ["margin","外边距","Margin","元素与外部邻居之间的距离。","Margin 在边框之外创造空白，也可能发生外边距合并。","区块彼此太挤，或列表首尾出现多余空白时。","margin","用 margin 调整区块外部距离，并避免用连续空行或绝对定位制造间隔。"],
      ["padding","内边距","Padding","内容与自身边框之间的呼吸空间。","Padding 属于元素内部，会影响背景色覆盖区域与实际尺寸。","按钮文字贴边、卡片内部拥挤时。","padding","统一卡片和按钮的 padding，建立紧凑、常规、宽松三个间距档位。"],
      ["overflow","内容溢出","Overflow","决定超出容器的内容被显示、裁切还是滚动。","常用 hidden、auto、clip；错误设置会裁掉阴影、浮层或焦点轮廓。","长内容撑坏容器，或页面出现意外横向滚动时。","overflow-box","检查 overflow 来源，只在必要容器使用 auto，避免误裁切浮层和焦点。"],
      ["box-sizing","盒模型","Box sizing","决定设定宽高是否包含内边距和边框。","border-box 让 width 包含 padding 与 border，更容易预测实际尺寸。","设置 100% 宽度后元素仍然溢出时。","box-sizing","全局使用 box-sizing: border-box，让组件宽高在加入 padding 和 border 后仍可预测。"],
      ["display","显示模式","Display","决定元素作为块、行内、网格或弹性容器参与排版。","block 会独占一行，inline 随文字流动，inline-block 可设置尺寸。","元素无法设置宽高，或莫名独占整行时。","display","根据内容关系选择 block、inline 或 inline-block，不要用空格和换行修正布局。"],
      ["justify-content","主轴对齐","Justify content","控制 Flex 或 Grid 主轴方向上的分布。","主轴会随 flex-direction 改变，因此它不永远等于横向。","按钮需要居中、两端对齐或均匀分布时。","justify","用 justify-content 调整主轴分布，并确认当前 flex-direction 后再选择对齐值。"],
      ["align-items","交叉轴对齐","Align items","控制一组元素在交叉轴上的对齐方式。","常见 center、start、end、stretch，适合修复图标与文字不齐。","头像和昵称、图标和按钮文字上下错位时。","align","用 align-items: center 统一图标与文字的垂直对齐，并检查不同高度内容。"],
      ["order","视觉顺序","Order","改变 Flex 或 Grid 子元素的视觉排列顺序。","它不会改变 DOM 与键盘阅读顺序，不能滥用于重要内容重排。","移动端需要把次要区域移到正文之后时。","order","仅在不影响阅读顺序时使用 order；重要顺序请同步调整 DOM 结构。"]
    ]),
    ...group("文字", [
      ["font-family","字体家族","Font family","定义界面使用的字体及回退顺序。","显示字体适合标题，正文字体更重视清晰和字形覆盖。","页面缺少气质，或中英文混排风格不一致时。","font-family","为标题和正文建立两套明确的 font-family，并配置可靠的中文回退字体。"],
      ["text-align","文本对齐","Text align","控制行内内容靠左、居中、靠右或两端对齐。","正文通常左对齐最易阅读，居中更适合短标题和状态。","长段落居中难读，或数字列无法快速比较时。","text-align","让正文保持左对齐，短标题按构图居中，数字比较列使用右对齐。"],
      ["white-space","空白处理","White space","控制空格、换行是否保留，以及文本能否自动换行。","nowrap 可禁止换行，pre-wrap 可保留输入中的换行与空格。","标签被拆行，或用户输入格式丢失时。","white-space","为短标签使用 nowrap，为需要保留格式的文本使用 pre-wrap，并处理窄屏溢出。"],
      ["word-break","长词换行","Word break","处理网址、代码和连续字符在窄容器中的断行。","overflow-wrap: anywhere 通常比粗暴拆开所有单词更自然。","长链接或英文串把手机页面撑出横向滚动时。","word-break","让长网址使用 overflow-wrap: anywhere，普通中英文保持自然断行。"],
      ["line-clamp","多行省略","Line clamp","把文字限制在指定行数，并在末尾显示省略。","适合统一卡片高度，但重要内容不应只靠省略隐藏。","卡片摘要长度不一导致网格参差时。","line-clamp","把卡片摘要限制为 3 行并显示省略号，同时提供进入详情查看完整内容的入口。"],
      ["text-decoration","文本装饰","Text decoration","控制下划线、删除线及其颜色和位置。","链接下划线能增强可识别性，也可用 thickness 与 offset 精修。","链接和普通文字难以区分时。","text-decoration","为正文链接保留下划线，并调整粗细与偏移，悬停时再改变颜色。"],
      ["text-shadow","文字阴影","Text shadow","给文字增加投影或发光，提升复杂背景上的可读性。","少量阴影可增强对比，过重会让正文发糊。","封面文字压在图片上不够清晰时。","text-shadow","给图片上的白字增加轻微深色 text-shadow，正文区域不要使用发光效果。"],
      ["variable-font","可变字体","Variable font","在一个字体文件中连续调整字重、字宽等轴。","可变字体能平滑变化并减少文件数量，但要先确认支持的轴。","品牌标题需要更细腻的字重动效时。","variable-font","使用可变字体的 weight 轴实现细腻字重层级，并提供普通字体回退。"]
    ]),
    ...group("外观", [
      ["background","背景","Background","为区域设置纯色、图片、渐变或多层背景。","背景可以多层叠加；主内容区应保持足够对比度。","页面缺少区域层次，或背景图影响文字时。","background","用明确的背景层区分内容区域，并检查文字与背景的对比度。"],
      ["filter","图像滤镜","CSS Filter","对元素应用模糊、饱和度、亮度或对比度。","filter 作用于元素整体，常用于图片状态和视觉氛围。","图片风格不统一，或禁用状态需要弱化时。","filter","使用 filter 统一图片饱和度与对比度，交互内容不要因滤镜失去可辨识度。"],
      ["mix-blend-mode","混合模式","Mix blend mode","让元素颜色与背后内容发生正片叠底、滤色等混合。","适合海报化视觉，但结果依赖背景，需谨慎检查可读性。","标题或色块需要和图片产生融合效果时。","blend","用 mix-blend-mode 制作局部海报效果，并为文字提供不依赖混合模式的可读方案。"],
      ["clip-path","形状裁切","Clip path","把元素裁成圆形、多边形或自定义轮廓。","裁切只改变可见区域，不改变元素原本占据的布局空间。","头像、图片或装饰色块需要非矩形轮廓时。","clip-path","用 clip-path 创建明确的几何图片轮廓，并避免裁掉主体内容。"],
      ["mask-image","蒙版","Mask image","用透明度渐变控制元素哪些区域可见。","蒙版适合做柔和消失、纹理边缘与图标着色。","图片边缘需要自然融入背景，而不是硬裁切时。","mask","用 mask-image 的透明渐变让图片边缘自然淡出，并提供兼容前缀。"],
      ["outline","轮廓线","Outline","在元素外侧绘制不占布局空间的轮廓。","特别适合键盘焦点，不应在未提供替代反馈时移除。","键盘操作时看不出当前焦点在哪里时。","outline","用 :focus-visible 显示高对比 outline，并通过 outline-offset 与元素保持距离。"],
      ["object-fit","媒体填充","Object fit","控制图片或视频如何适应固定比例容器。","cover 填满但可能裁切，contain 完整显示但可能留空。","封面被拉伸变形，或主体被错误裁掉时。","object-fit","让封面图使用 object-fit: cover，并根据主体位置调整 object-position。"],
      ["pseudo-element","伪元素","Pseudo element","用 ::before 和 ::after 添加不需要额外标签的装饰。","适合小图形、下划线和角标，不应承载重要语义内容。","只为画一条线或装饰块而增加空标签时。","pseudo","用 ::before 或 ::after 实现纯装饰，并保持重要内容仍存在于 HTML 中。"],
      ["css-variable","设计变量","CSS Custom properties","用变量集中管理颜色、间距和组件尺寸。","变量可继承、可覆盖，是建立主题与设计系统的基础。","同一颜色散落多处，修改时容易漏掉时。","css-variable","把颜色、间距、圆角整理为 CSS 自定义属性，并用语义名称替代具体颜色名。"],
      ["color-scheme","明暗主题","Color scheme","让界面在浅色和深色主题之间切换。","主题不只是反转背景，还需要重新校准边框、阴影与状态色。","希望网站适配夜间使用或系统主题时。","theme","实现浅色和深色两套主题变量，并检查两种模式下的文字对比度和状态色。"]
    ]),
    ...group("动画", [
      ["animation","CSS 动画","CSS Animation","把关键帧、时长、次数和方向组合成完整动画。","animation 是多个动画参数的简写，适合自动播放和循环效果。","需要不依赖鼠标触发的连续视觉变化时。","animation","用 CSS animation 组织关键帧、时长和次数，并提供减少动效模式。"],
      ["easing","缓动曲线","Easing","决定动画在不同时间段加速或减速的节奏。","ease-out 适合元素进入，ease-in 适合离开，线性适合持续转动。","动画机械、匀速，或停止时显得生硬时。","easing","根据进入、离开和循环场景选择 easing，避免所有动画共用同一曲线。"],
      ["animation-delay","动画延迟","Animation delay","让动画等待一段时间后开始。","延迟可建立节奏，但交互反馈不应延迟到让人误以为没有响应。","多个元素同时出现显得拥挤时。","delay","为装饰和列表入场增加短延迟，但按钮点击反馈必须立即发生。"],
      ["fade-in","淡入","Fade in","用透明度从 0 到 1 让内容柔和出现。","淡入幅度克制、适配性强，常与轻微位移组合。","内容加载或切换时瞬间跳出太生硬时。","fade","让新内容通过 opacity 淡入，时长约 200ms，并避免在首屏大面积滥用。"],
      ["slide-in","滑入","Slide in","元素从某个方向移动进入视野。","位移越小越像界面反馈，位移很大则更像舞台转场。","抽屉、通知或分步内容需要表达来源方向时。","slide","让侧边抽屉从屏幕边缘滑入，配合遮罩淡入并锁定背景滚动。"],
      ["scale-in","缩放进入","Scale in","元素从略小尺寸放大到正常大小。","适合弹窗、菜单和轻量强调，起始比例通常无需小于 0.9。","弹窗出现过于突然，缺少空间层级时。","scale","让弹窗从 scale(.96) 与 opacity: 0 过渡到正常状态，保持中心稳定。"],
      ["stagger","错峰动画","Stagger","让一组元素按顺序而不是同时开始动画。","短暂错峰能引导视线，延迟过长会拖慢信息获取。","卡片列表同时出现显得杂乱时。","stagger","让列表项以 40-70ms 间隔依次入场，总等待时间不要过长。"],
      ["spring","弹簧动效","Spring motion","用轻微超出与回弹模拟有质量的运动。","弹簧更自然但容易过度，适合拖拽、开关和小组件。","切换状态希望更有弹性和触感时。","spring","为开关或拖拽回位加入克制的 spring 效果，控制回弹次数避免晃动。"],
      ["parallax","视差滚动","Parallax","让前后景以不同速度移动，制造空间深度。","视差应服务叙事，幅度过大会引起眩晕并影响性能。","展示型页面需要加强景深和沉浸感时。","parallax","使用小幅视差区分前景与背景，并在减少动效模式下关闭。"],
      ["scroll-reveal","滚动显现","Scroll reveal","元素进入视口时触发一次入场动画。","通常用 Intersection Observer 触发，避免监听每一帧滚动。","长页面需要逐段建立阅读节奏时。","scroll-reveal","用 Intersection Observer 在区块进入视口时触发一次淡入上移，并避免重复闪烁。"],
      ["scroll-snap","滚动吸附","Scroll snap","滚动结束时把内容吸附到最近的卡片或页面。","适合横向画廊和全屏章节，但不能妨碍用户自由滚动。","手机横向卡片需要停在完整位置时。","scroll-snap","为横向卡片容器增加 scroll-snap，并保留自然触控惯性与可见的下一项提示。"],
      ["marquee","循环跑马灯","Marquee","让一行内容无缝连续滚动。","适合品牌墙和短装饰信息，不适合必须阅读的正文。","合作品牌或短标签需要营造连续节奏时。","marquee","实现无缝循环跑马灯，暂停悬停内容，并在减少动效模式下静止显示。"],
      ["page-transition","页面转场","Page transition","在页面或视图切换时保持视觉连续性。","转场应掩盖变化而不是拖慢导航，通常控制在 300-500ms。","多页面作品集切换太突兀时。","page-transition","为页面切换增加简短遮罩转场，确保返回、刷新和减少动效模式仍然正常。"]
    ]),
    ...group("响应式", [
      ["mobile-first","移动优先","Mobile first","先为小屏设计基础样式，再逐步增强大屏布局。","移动优先能迫使内容聚焦，也让媒体查询更容易维护。","桌面样式缩到手机后要覆盖大量规则时。","mobile-first","以手机单栏作为基础样式，再用 min-width 媒体查询逐步增强到桌面布局。"],
      ["container-query","容器查询","Container query","根据组件自身宽度而不是整个屏幕宽度改变布局。","同一组件放在侧栏和主区时，可以各自适应可用空间。","组件在不同页面区域复用，单靠视口断点不准确时。","container-query","使用 container query 让卡片依据父容器宽度切换排版，而不是依赖全局屏幕断点。"],
      ["fluid-grid","流体网格","Fluid grid","让列宽自动伸缩并在空间不足时自然换行。","repeat、minmax 与 auto-fit 可以减少大量人为断点。","卡片数量和屏幕宽度变化很大时。","fluid-grid","用 repeat(auto-fit, minmax()) 建立流体卡片网格，让列数随可用宽度自然变化。"],
      ["viewport-unit","视口单位","Viewport units","用 vw、vh、dvh 等单位关联屏幕可见区域。","移动浏览器地址栏会影响 vh，dvh 更接近动态可见高度。","全屏页面在手机上被地址栏遮挡时。","viewport-unit","移动端全屏区域使用 min-height: 100dvh，并为旧浏览器保留 100vh 回退。"],
      ["safe-area","安全区域","Safe area inset","避开刘海、圆角和底部手势条占用的区域。","env(safe-area-inset-*) 可为全屏移动页面增加设备相关内边距。","底部按钮贴住 iPhone 手势条或被遮挡时。","safe-area","给固定底栏叠加 safe-area-inset-bottom，确保按钮不会贴住系统手势区域。"],
      ["responsive-image","响应式图片","Responsive image","根据屏幕与像素密度加载合适尺寸的图片。","srcset、sizes 与 picture 可减少手机流量并保持清晰。","手机仍下载超大桌面图，加载速度慢时。","responsive-image","为内容图片配置 srcset 和 sizes，让浏览器按显示尺寸选择资源，并保留明确宽高。"]
    ]),
    ...group("交互", [
      ["modal","模态框","Modal","覆盖当前内容并要求用户先处理其中任务的浮层。","需要遮罩、焦点锁定、Esc 关闭和关闭后焦点归还。","确认危险操作或完成必须集中的短任务时。","modal","实现可访问的 Modal：锁定背景滚动、管理焦点、支持 Esc 与明确关闭按钮。"],
      ["drawer","抽屉","Drawer","从屏幕边缘滑出的临时面板。","适合导航、筛选和辅助信息，主任务不应长期藏在里面。","手机端容纳菜单或筛选条件时。","drawer","在移动端把筛选器改为侧边 Drawer，并加入遮罩、滑入动效和关闭手势。"],
      ["accordion","手风琴","Accordion","点击标题展开或收起对应内容。","适合降低长页面密度，但默认展开重要内容会更友好。","常见问题或设置项很多，需要渐进展示时。","accordion","把次要说明组织为 Accordion，标题保持可点击区域足够大并同步 aria-expanded。"],
      ["tabs","标签页","Tabs","在同一区域切换并列的几组内容。","标签应数量有限、名称简短，并支持键盘方向键。","同一对象有概览、数据、记录等并列视图时。","tabs","用 Tabs 组织并列视图，保留明显选中状态，并实现正确的键盘导航。"],
      ["dropdown","下拉菜单","Dropdown menu","从触发器展开一组临时选项或命令。","需处理点击外部关闭、键盘导航和视口边缘碰撞。","工具栏容纳不常用操作或选择项时。","dropdown","实现可键盘操作的 Dropdown，点击外部或按 Esc 可关闭，并避免超出屏幕。"],
      ["toggle","开关","Toggle switch","直接切换一个立即生效的二元设置。","开关适合开/关，提交表单中的选择通常更适合复选框。","深色模式、通知、自动保存等即时设置时。","toggle","为即时生效的二元设置使用 Toggle，并同时显示清晰文字标签与当前状态。"],
      ["focus-visible","键盘焦点","Focus visible","只在键盘导航等需要时显示清晰焦点样式。",":focus-visible 能避免鼠标点击后的多余轮廓，同时保留键盘可达性。","按钮可用 Tab 到达，但看不出焦点位置时。","focus","为所有交互元素设计统一的 :focus-visible 样式，绝不要直接 outline: none。"]
    ])
  ];

  additions.forEach((term, index) => {
    const siblings = additions.filter(item => item.category === term.category);
    const at = siblings.indexOf(term);
    term.related = [siblings[(at + 1) % siblings.length]?.id, siblings[(at + 2) % siblings.length]?.id].filter(Boolean);
  });

  terms.forEach(term => {
    if (term.category === "视觉") term.category = "外观";
    if (term.category === "动效") term.category = "动画";
    if (term.category === "反馈") term.category = "交互";
  });
  terms.push(...additions);
  categories.splice(0, categories.length, "全部", "布局", "文字", "外观", "动画", "响应式", "交互");

  const baseDemoFor = demoFor;
  const baseRunAction = runAction;
  const baseBindDemo = bindDemo;

  const action = (id, label) => `<button class="demo-action" type="button" data-action="${id}">${label}</button>`;
  const extraScene = (caption, className, inner) => scene(caption, `<div class="extra-target ${className}">${inner}</div>`);
  const cards = (count = 3) => Array.from({ length: count }, (_, i) => `<i>${String(i + 1).padStart(2, "0")}</i>`).join("");

  function extraDemo(t) {
    const map = {
      margin: {html:extraScene("margin: 24px","space-frame margin-demo",`<div>元素</div>`),controls:range("外边距",0,64,24,2,"px","--space"),hint:"黄色区域代表元素外部的距离"},
      padding: {html:extraScene("padding: 24px","space-frame padding-demo",`<div>内容</div>`),controls:range("内边距",0,64,24,2,"px","--space"),hint:"蓝色区域代表内容与边框之间的距离"},
      "overflow-box": {html:extraScene("overflow: hidden / auto","overflow-demo",`<div>${cards(8)}</div>`),controls:action("overflow-mode","切换处理方式"),hint:"在裁切和滚动之间切换"},
      "box-sizing": {html:extraScene("box-sizing: border-box","sizing-demo",`<div><b>200px</b><span>padding + border</span></div>`),controls:action("box-sizing","切换盒模型"),hint:"content-box 会把内边距加到设定宽度之外"},
      display: {html:extraScene("display: block","display-demo",`<span>A</span><span>B</span><span>C</span>`),controls:action("display-mode","切换显示模式"),hint:"观察独占一行与跟随文字流的区别"},
      justify: {html:extraScene("justify-content: flex-start","align-demo",cards()),controls:action("justify-mode","切换主轴对齐"),hint:"元素沿主轴改变分布"},
      align: {html:extraScene("align-items: flex-start","align-demo align-cross",cards()),controls:action("align-mode","切换交叉轴对齐"),hint:"不同高度元素沿交叉轴对齐"},
      order: {html:extraScene("order","order-demo",cards()),controls:action("order-mode","交换视觉顺序"),hint:"视觉顺序变了，DOM 顺序没有改变"},
      "font-family": {html:extraScene("font-family","font-family-demo",`<p>衬线字体 Serif</p><p>无衬线字体 Sans</p><p>等宽字体 Mono</p>`),controls:"",hint:"不同字体家族会直接改变界面气质"},
      "text-align": {html:extraScene("text-align: left","text-align-demo",`<p>排版不是装饰，而是帮助读者快速理解信息的秩序。</p>`),controls:action("text-align","切换对齐"),hint:"长段落通常左对齐最易阅读"},
      "white-space": {html:extraScene("white-space: nowrap","white-space-demo",`<p>这 是 一 段   保留空白与换行的文字\n第二行内容</p>`),controls:action("white-space","切换空白处理"),hint:"切换自动换行与保留输入格式"},
      "word-break": {html:extraScene("overflow-wrap: anywhere","word-break-demo",`<p>https://frontend-specimen-laboratory.example.com/a-very-long-address</p>`),controls:action("word-break","切换断行"),hint:"长网址不应撑出手机屏幕"},
      "line-clamp": {html:extraScene("line-clamp: 3","line-clamp-demo",`<p>这是一段较长的卡片摘要。它会在规定行数之后显示省略号，让同一排卡片保持整齐，但用户仍然可以进入详情查看完整内容。</p>`),controls:action("line-clamp","展开全文"),hint:"限制摘要行数可稳定卡片高度"},
      "text-decoration": {html:extraScene("text-decoration","decoration-demo",`<a href="#" onclick="return false">这是一条可以识别的正文链接</a>`),controls:action("decoration","切换样式"),hint:"链接不应只依赖颜色来识别"},
      "text-shadow": {html:extraScene("text-shadow: 0 4px 16px","text-shadow-demo",`<strong>清晰可读</strong>`),controls:range("阴影",0,30,12,1,"px","--text-shadow"),hint:"复杂背景上的轻微阴影可增强可读性"},
      "variable-font": {html:extraScene("font-variation-settings","variable-font-demo",`<strong>VARIABLE</strong>`),controls:range("字重",200,900,500,10,"","--variable-weight"),hint:"字重在一条连续轴上平滑变化"},
      background: {html:extraScene("layered background","background-demo",`<strong>BACKGROUND</strong>`),controls:action("background","切换背景"),hint:"背景可以由多层颜色和图案组成"},
      filter: {html:extraScene("filter: saturate()","filter-demo",`<div></div>`),controls:range("饱和度",0,200,100,5,"%","--filter"),hint:"滤镜作用于元素整体"},
      blend: {html:extraScene("mix-blend-mode: multiply","blend-demo",`<i></i><i></i><i></i>`),controls:action("blend","切换混合"),hint:"重叠区域会根据背景重新计算颜色"},
      "clip-path": {html:extraScene("clip-path: polygon()","clip-demo",`<div></div>`),controls:action("clip","切换形状"),hint:"可见轮廓变化，但占据的布局空间不变"},
      mask: {html:extraScene("mask-image","mask-demo",`<div></div>`),controls:action("mask","切换蒙版"),hint:"元素沿透明度渐变自然消失"},
      outline: {html:extraScene(":focus-visible outline","outline-demo",`<button type="button">按 Tab 聚焦我</button>`),controls:"",hint:"焦点轮廓不占据布局空间"},
      "object-fit": {html:extraScene("object-fit: cover","object-fit-demo",`<div><i></i></div>`),controls:action("object-fit","切换填充"),hint:"cover 填满并裁切，contain 完整显示"},
      pseudo: {html:extraScene("::before + ::after","pseudo-demo",`<strong>FEATURED</strong>`),controls:action("pseudo","切换装饰"),hint:"无需增加空标签也能完成纯装饰"},
      "css-variable": {html:extraScene("--accent: #246bfe","variable-demo",`${cards()}`),controls:action("variable-theme","切换变量"),hint:"改一个变量，所有相关组件同步变化"},
      theme: {html:extraScene("color-scheme","theme-demo",`<div><span>THEME</span><strong>夜间也要清晰</strong><button>操作按钮</button></div>`),controls:action("theme","切换明暗"),hint:"主题切换需要同时校准文字、边框和强调色"},
      animation: {html:extraScene("animation: orbit 2s infinite","orbit-demo",`<i></i><i></i><i></i>`),controls:action("pause-extra","暂停动画"),hint:"关键帧与时长、次数共同组成动画"},
      easing: {html:extraScene("easing curves","easing-demo",`<p><span>linear</span><i></i></p><p><span>ease-out</span><i></i></p><p><span>custom</span><i></i></p>`),controls:action("easing-play","重新播放"),hint:"同样距离和时长，不同曲线会有完全不同的感觉"},
      delay: {html:extraScene("animation-delay","delay-demo",cards(4)),controls:action("delay-play","重新播放"),hint:"四个元素按短延迟依次出现"},
      fade: {html:extraScene("opacity 0 → 1","entrance-demo fade-demo",`<div><strong>FADE IN</strong><span>柔和出现</span></div>`),controls:action("entrance-play","重新播放"),hint:"淡入适合低干扰的内容切换"},
      slide: {html:extraScene("translateX + opacity","entrance-demo slide-demo",`<div><strong>SLIDE IN</strong><span>带方向地进入</span></div>`),controls:action("entrance-play","重新播放"),hint:"方向应与组件来源一致"},
      scale: {html:extraScene("scale(.94) + opacity","entrance-demo scale-demo",`<div><strong>SCALE IN</strong><span>从中心展开</span></div>`),controls:action("entrance-play","重新播放"),hint:"缩放幅度要克制，避免突然扑向用户"},
      stagger: {html:extraScene("staggered entrance","stagger-demo",cards(5)),controls:action("stagger-play","重新播放"),hint:"短错峰能建立顺序但不会拖慢阅读"},
      spring: {html:extraScene("spring motion","spring-demo",`<button type="button"><i></i></button>`),controls:action("spring-play","触发回弹"),hint:"轻微越界和回弹会产生有质量的运动"},
      parallax: {html:extraScene("pointer parallax","parallax-demo",`<i></i><i></i><strong>DEPTH</strong>`),controls:"",hint:"在样本上移动鼠标，前后景以不同速度移动"},
      "scroll-reveal": {html:extraScene("Intersection Observer","reveal-demo",`<div class="reveal-scroll"><p>向下滚动</p><i></i><i></i><i></i></div>`),controls:"",hint:"在样本内部滚动，卡片进入可见区域时出现"},
      "scroll-snap": {html:extraScene("scroll-snap-type: x mandatory","snap-demo",`<div>${cards(4)}</div>`),controls:"",hint:"横向滑动，卡片会停在完整位置"},
      marquee: {html:extraScene("seamless marquee","marquee-demo",`<div><span>DESIGN · MOTION · TYPE · LAYOUT · </span><span>DESIGN · MOTION · TYPE · LAYOUT · </span></div>`),controls:action("pause-extra","暂停滚动"),hint:"循环内容首尾无缝衔接"},
      "page-transition": {html:extraScene("view transition","page-transition-demo",`<div><span>PAGE 01</span><strong>页面内容</strong></div><i></i>`),controls:action("page-transition","切换页面"),hint:"遮罩短暂覆盖变化，再显示下一视图"},
      "mobile-first": {html:extraScene("mobile first","mobile-first-demo",`<div><span>基础：单栏</span>${cards(3)}</div><div><span>增强：多栏</span>${cards(3)}</div>`),controls:"",hint:"先保证最小屏可用，再逐步增强"},
      "container-query": {html:extraScene("@container","container-demo",`<div><i></i><p><strong>组件自己判断</strong><span>依据容器宽度改变排版</span></p></div>`),controls:range("容器",220,500,420,10,"px","--container-width"),hint:"拖窄容器，组件会从横向改成纵向"},
      "fluid-grid": {html:extraScene("auto-fit + minmax","fluid-grid-demo",cards(8)),controls:range("容器",240,560,520,10,"px","--grid-width"),hint:"不写具体断点，列数也能自然变化"},
      "viewport-unit": {html:extraScene("100dvh","viewport-demo",`<div><span>浏览器栏</span><main>100dvh 可见区</main><span>手势区</span></div>`),controls:action("viewport","模拟地址栏"),hint:"动态视口单位会跟随浏览器栏变化"},
      "safe-area": {html:extraScene("safe-area-inset-bottom","safe-area-demo",`<div><main>页面内容</main><button>底部操作</button><i></i></div>`),controls:action("safe-area","显示安全区"),hint:"底部按钮要避开系统手势区域"},
      "responsive-image": {html:extraScene("srcset + sizes","responsive-image-demo",`<div><i></i><span>浏览器选择合适尺寸</span></div>`),controls:action("image-size","切换设备"),hint:"小屏无需下载超大的桌面图片"},
      modal: {html:extraScene("dialog / modal","modal-demo",`<button type="button" data-extra-action="modal">打开模态框</button><div class="mini-modal"><strong>确认操作</strong><span>焦点会留在这个任务里</span><button type="button" data-extra-action="modal">关闭</button></div>`),controls:"",hint:"点击打开，再点击关闭按钮"},
      drawer: {html:extraScene("off-canvas drawer","drawer-demo",`<button type="button" data-extra-action="drawer">打开抽屉</button><aside><strong>筛选条件</strong><span>类别</span><span>时间</span><button type="button" data-extra-action="drawer">关闭</button></aside>`),controls:"",hint:"抽屉从边缘滑入并覆盖当前内容"},
      accordion: {html:extraScene("accordion","accordion-demo",`<button type="button" data-extra-action="accordion">什么是响应式？ <span>+</span></button><div>让同一页面在不同尺寸的屏幕上都保持可读、可操作。</div>`),controls:"",hint:"点击标题展开或收起说明"},
      tabs: {html:extraScene("tabs","tabs-demo",`<nav><button class="active" data-extra-action="tab" data-tab="0">概览</button><button data-extra-action="tab" data-tab="1">参数</button><button data-extra-action="tab" data-tab="2">记录</button></nav><div>当前正在查看：<strong>概览</strong></div>`),controls:"",hint:"点击不同标签切换并列视图"},
      dropdown: {html:extraScene("dropdown menu","dropdown-demo",`<button type="button" data-extra-action="dropdown">更多操作 ↓</button><div><button>复制</button><button>重命名</button><button>归档</button></div>`),controls:"",hint:"点击触发器展开临时命令"},
      toggle: {html:extraScene("toggle switch","toggle-demo",`<button type="button" data-extra-action="toggle" aria-pressed="false"><i></i></button><strong>自动保存：<span>关闭</span></strong>`),controls:"",hint:"点击开关，状态立即生效"},
      focus: {html:extraScene(":focus-visible","focus-demo",`<button>第一个按钮</button><button>第二个按钮</button>`),controls:"",hint:"按 Tab 键查看清晰的键盘焦点"}
    };
    return map[t.demo] || null;
  }

  demoFor = function extendedDemoFor(t) {
    return extraDemo(t) || baseDemoFor(t);
  };

  runAction = function extendedRunAction(a, button) {
    const x = els.canvas.querySelector(".extra-target");
    if (!x) return baseRunAction(a, button);
    const cycle = (values, key = "mode") => { const n=(Number(x.dataset[key]||0)+1)%values.length;x.dataset[key]=n;return values[n]; };
    if (a === "overflow-mode") { const v=cycle(["auto","hidden","visible"]);x.querySelector("div").style.overflow=v;button.textContent=`当前：${v}`;return; }
    if (a === "box-sizing") { x.classList.toggle("content-box");button.textContent=x.classList.contains("content-box")?"当前 content-box":"当前 border-box";return; }
    if (a === "display-mode") { const v=cycle(["inline","inline-block","block"]);x.querySelectorAll("span").forEach(i=>i.style.display=v);button.textContent=`当前：${v}`;return; }
    if (a === "justify-mode") { const v=cycle(["center","space-between","space-around","flex-start"]);x.style.justifyContent=v;button.textContent=v;return; }
    if (a === "align-mode") { const v=cycle(["center","flex-end","stretch","flex-start"]);x.style.alignItems=v;button.textContent=v;return; }
    if (a === "order-mode") { x.classList.toggle("reversed");return; }
    if (a === "text-align") { const v=cycle(["center","right","left"]);x.style.textAlign=v;button.textContent=v;return; }
    if (a === "white-space") { x.classList.toggle("preserve");button.textContent=x.classList.contains("preserve")?"当前 pre-wrap":"当前 nowrap";return; }
    if (a === "word-break") { x.classList.toggle("break-anywhere");return; }
    if (a === "line-clamp") { x.classList.toggle("expanded");button.textContent=x.classList.contains("expanded")?"收起全文":"展开全文";return; }
    if (a === "decoration") { const v=cycle(["wavy","double","solid"]);x.querySelector("a").style.textDecorationStyle=v;button.textContent=v;return; }
    if (a === "background" || a === "blend" || a === "clip" || a === "mask" || a === "object-fit" || a === "pseudo" || a === "variable-theme" || a === "theme" || a === "viewport" || a === "safe-area" || a === "image-size") { x.classList.toggle("alternate");return; }
    if (a === "pause-extra") { x.classList.toggle("animation-paused");button.textContent=x.classList.contains("animation-paused")?"继续动画":"暂停动画";return; }
    if (["easing-play","delay-play","entrance-play","stagger-play","spring-play"].includes(a)) { x.classList.remove("replay");void x.offsetWidth;x.classList.add("replay");return; }
    if (a === "page-transition") { x.classList.remove("replay");void x.offsetWidth;x.classList.add("replay");const label=x.querySelector("span");label.textContent=label.textContent==="PAGE 01"?"PAGE 02":"PAGE 01";return; }
    baseRunAction(a, button);
  };

  bindDemo = function extendedBindDemo(t) {
    baseBindDemo(t);
    els.canvas.querySelectorAll("[data-extra-action]").forEach(button => button.addEventListener("click", () => {
      const root = els.canvas.querySelector(".extra-target");
      const a = button.dataset.extraAction;
      if (a === "modal" || a === "drawer" || a === "accordion" || a === "dropdown") root.classList.toggle("open");
      if (a === "tab") { root.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b===button));root.querySelector("div strong").textContent=button.textContent; }
      if (a === "toggle") { const on=root.classList.toggle("on");button.setAttribute("aria-pressed",on);root.querySelector("strong span").textContent=on?"开启":"关闭"; }
    }));
    const parallax = els.canvas.querySelector(".parallax-demo");
    parallax?.addEventListener("pointermove", event => {
      const r=parallax.getBoundingClientRect(),dx=(event.clientX-r.left-r.width/2)/r.width,dy=(event.clientY-r.top-r.height/2)/r.height;
      parallax.style.setProperty("--px",dx);parallax.style.setProperty("--py",dy);
    });
    const reveal = els.canvas.querySelector(".reveal-scroll");
    reveal?.addEventListener("scroll",()=>reveal.querySelectorAll("i").forEach(i=>{if(i.getBoundingClientRect().top<reveal.getBoundingClientRect().bottom-10)i.classList.add("visible");}));
  };

  const baseApplyProperty = applyProperty;
  applyProperty = function extendedApplyProperty(prop, value, unit, t) {
    const target = els.canvas.querySelector(".extra-target");
    if (!target) return baseApplyProperty(prop, value, unit, t);
    target.style.setProperty(prop, `${value}${unit}`);
    if (t.demo === "container-query") target.classList.toggle("narrow", Number(value) < 330);
  };

  state.activeCategory = categories.includes(state.activeCategory) ? state.activeCategory : "全部";
  els.total.textContent = terms.length;
  renderCategories();
  renderList();
  renderDetail(terms.find(term => term.id === state.activeId) || terms[0]);
})();
