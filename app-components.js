(function addInterfaceCatalog() {
  const groups = {
    "基础": [
      ["frontend","前端","Frontend","用户在浏览器里看见、点击和操作的界面部分。"],
      ["component","组件","Component","可重复使用、拥有独立结构与状态的一块界面。"],
      ["state","界面状态","UI State","同一组件在默认、加载、成功、失败等阶段的不同表现。"],
      ["html","网页结构","HTML","定义标题、段落、按钮和表单等网页内容的语义结构。"],
      ["dom","文档对象模型","DOM","浏览器把 HTML 转换成可被 JavaScript 读取和修改的节点树。"]
    ],
    "表单": [
      ["button","按钮","Button","触发保存、提交、删除等明确操作的控件。"],
      ["link","链接","Link","把用户导航到另一个页面、位置或资源。"],
      ["input","输入框","Input","接收短文本、邮箱、密码等单行信息。"],
      ["textarea","多行文本框","Textarea","接收留言、描述和长段文本。"],
      ["input-number","数字输入框","Number input","只接收数字，并可通过加减按钮调整。"],
      ["radio","单选框","Radio","从一组互斥选项中选择一个。"],
      ["checkbox","复选框","允许同时选择多个互不冲突的选项。"],
      ["switch","即时开关","Switch","立即开启或关闭一个设置。"],
      ["range-slider","范围滑块","Range slider","通过拖动滑块选择连续数值。"],
      ["select","选择器","Select","把较多选项收进一个下拉列表。"],
      ["autocomplete","自动完成","Autocomplete","根据已输入内容实时推荐可能选项。"],
      ["date-picker","日期选择器","Date picker","通过日历界面选择日期。"],
      ["upload","文件上传","Upload","选择或拖入图片、文档等本地文件。"],
      ["form","表单","Form","组织多个字段、校验规则和提交动作。"],
      ["color-picker","颜色选择器","Color picker","通过色板或色值选择颜色。"]
    ],
    "内容展示": [
      ["table","表格","Table","按行列对齐展示可比较的结构化数据。"],
      ["list","列表","List","用一致结构逐条展示一组内容。"],
      ["card","卡片","Card","把同一对象的图片、标题和操作组织在一个边界内。"],
      ["tag","标签","Tag","用短词标记类别、属性或状态。"],
      ["badge","徽标","Badge","附着在图标或标题旁显示数量和新状态。"],
      ["avatar","头像","Avatar","用人物照片、品牌图标或首字母表示身份。"],
      ["statistic","统计数值","Statistic","突出展示需要快速扫描的关键数字。"],
      ["segmented","分段控件","Segmented control","在少量并列模式间直接切换。"],
      ["timeline","时间轴","Timeline","按时间顺序展示事件、物流或项目进度。"],
      ["tree","树形控件","Tree","展示文件夹或组织架构等层级关系。"],
      ["carousel","轮播图","Carousel","在固定区域内依次切换多张内容。"],
      ["content-image","内容图片","Image","展示照片、封面或插图，并处理加载与裁切。"],
      ["icon","图标","Icon","用简洁符号表达常见动作或对象。"],
      ["chart","图表","Chart","把数据关系转换成柱状、折线或饼图。"],
      ["chat-ui","聊天界面","Chat UI","按对话顺序展示消息、输入与发送状态。"],
      ["file-item","文件项","File item","展示文件名、大小、类型与操作。"]
    ],
    "反馈": [
      ["alert","警告提示","Alert","持续展示需要用户注意的重要信息。"],
      ["notification","通知","集中呈现系统消息和未读状态。"],
      ["popconfirm","气泡确认框","Popconfirm","在操作附近进行轻量二次确认。"],
      ["popover","气泡卡片","Popover","在触发器旁展示一小块补充内容或操作。"],
      ["progress","进度条","Progress","显示上传、安装或任务完成到什么程度。"],
      ["result","结果页","Result","完整表达成功、失败以及下一步操作。"],
      ["spinner","旋转加载","Spinner","在短暂等待时表示系统仍在工作。"],
      ["empty","空状态","Empty state","没有数据时解释现状并给出可执行下一步。"]
    ],
    "导航": [
      ["menu","导航菜单","Menu","集中提供产品主要页面和功能入口。"],
      ["breadcrumb","面包屑","Breadcrumb","显示当前层级并允许返回上级。"],
      ["pagination","分页","Pagination","把大量内容拆成多个可跳转页面。"],
      ["steps","步骤条","Steps","显示多步骤流程的当前位置和完成情况。"],
      ["anchor","锚点目录","Anchor","点击后跳到长页面中的指定章节。"],
      ["back-top","回到顶部","Back to top","长页面向下滚动后快速返回顶部。"],
      ["search-component","搜索框","Search","输入关键词快速缩小内容范围。"]
    ],
    "官网区块": [
      ["hero","首屏","Hero","用品牌名、核心价值和主操作建立第一印象。"],
      ["cta","行动号召","Call to action","用明确文案推动注册、购买或试用。"],
      ["site-header","页头","Header","承载品牌标志、导航和账户入口。"],
      ["navbar","顶部导航栏","Navbar","持续提供站点主要栏目与当前位置。"],
      ["footer","页脚","Footer","集中放置次要链接、版权和联系方式。"],
      ["faq","常见问题","FAQ","用问答形式消除用户最常见的疑虑。"],
      ["pricing","定价区","Pricing","并列比较不同套餐的价格与权益。"],
      ["social-proof","社会证明","Social proof","用客户标志、数量和评价建立可信度。"]
    ]
  };

  const additions = Object.entries(groups).flatMap(([category, rows]) => rows.map(([id, name, english, summary], index) => ({
    id,
    category,
    name,
    english,
    summary,
    description: `${summary}右侧样本展示它在真实界面中的典型结构和状态。`,
    usage: `当你需要向 AI 准确描述“${name}”这类界面元素时。`,
    prompt: `请在当前页面中加入${name}（${english}），让它符合现有视觉系统，并补齐悬停、键盘聚焦、禁用和移动端状态。`,
    demo: `ui-${id}`,
    related: [rows[(index + 1) % rows.length][0], rows[(index + 2) % rows.length][0]]
  })));

  terms.push(...additions);
  categories.splice(0, categories.length,
    "全部", "基础", "表单", "内容展示", "反馈", "导航", "官网区块",
    "布局", "文字", "外观", "动画", "响应式", "交互"
  );

  const previousDemoFor = demoFor;
  const previousBindDemo = bindDemo;

  const wrap = (id, inner) => scene(id.replaceAll("-", " "), `<div class="ui-specimen ui-${id}">${inner}</div>`);
  const button = (label, action = "") => `<button type="button"${action ? ` data-ui-action="${action}"` : ""}>${label}</button>`;
  const field = (type, placeholder) => `<input type="${type}" placeholder="${placeholder}">`;

  function interfaceDemo(term) {
    const id = term.id;
    const specimens = {
      frontend: `<div class="mini-browser"><header>● ● ● <span>my-product.com</span></header><main><nav>LOGO　产品　定价</nav><strong>用户看见并操作这里</strong>${button("开始使用")}</main></div>`,
      component: `<div class="component-row">${[1,2,3].map(n=>`<article><i>0${n}</i><strong>Product Card</strong>${button("加入清单")}</article>`).join("")}</div>`,
      state: `<div class="state-row"><span>默认</span><span class="loading">保存中</span><span class="success">✓ 已保存</span><span class="error">重试</span></div>`,
      html: `<div class="code-tree"><b>&lt;main&gt;</b><span>　&lt;h1&gt;标题&lt;/h1&gt;</span><span>　&lt;p&gt;正文&lt;/p&gt;</span><span>　&lt;button&gt;操作&lt;/button&gt;</span><b>&lt;/main&gt;</b></div>`,
      dom: `<div class="dom-tree"><b>document</b><span>└─ body</span><span>　├─ header</span><span class="active">　└─ main</span><span>　　└─ button</span></div>`,
      button: `<div class="button-states">${button("主要按钮")}${button("次要按钮")}<button disabled>不可用</button></div>`,
      link: `<p class="link-copy">继续阅读这篇文章，了解 <a href="#link">如何建立设计系统</a>。</p>`,
      input: `<label class="field-demo">邮箱地址${field("email","name@example.com")}<small>我们不会发送垃圾邮件</small></label>`,
      textarea: `<label class="field-demo">项目描述<textarea rows="4" placeholder="写下你的想法…"></textarea><small>0 / 200</small></label>`,
      "input-number": `<div class="number-demo">${button("−","number-minus")}<output>1</output>${button("+","number-plus")}</div>`,
      radio: `<fieldset class="choice-demo"><legend>选择布局</legend><label><input type="radio" name="layout" checked> 紧凑</label><label><input type="radio" name="layout"> 舒适</label></fieldset>`,
      checkbox: `<fieldset class="choice-demo"><legend>需要的功能</legend><label><input type="checkbox" checked> 搜索</label><label><input type="checkbox"> 深色模式</label></fieldset>`,
      switch: `<div class="switch-demo">${button("","switch")}<strong>自动保存 <span>关闭</span></strong></div>`,
      "range-slider": `<label class="slider-demo">圆角 <input type="range" min="0" max="32" value="12"><output>12px</output></label>`,
      select: `<label class="field-demo">内容类型<select><option>教程</option><option>案例</option><option>资讯</option></select></label>`,
      autocomplete: `<div class="autocomplete-demo">${field("search","输入“前…”")}<div><span>前端开发</span><span>前端设计</span><span>前端动画</span></div></div>`,
      "date-picker": `<label class="field-demo">发布日期${field("date","")}</label>`,
      upload: `<label class="upload-demo"><input type="file" accept="image/png,image/jpeg"><strong>＋</strong><span>点击选择或拖入文件</span><small>PNG、JPG，最大 10MB</small></label>`,
      form: `<form class="form-demo"><label>姓名${field("text","你的名字")}</label><label>邮箱${field("email","name@example.com")}</label>${button("提交表单","form-submit")}<span></span></form>`,
      "color-picker": `<div class="color-demo"><input type="color" value="#246bfe"><strong>#246BFE</strong><div><i></i><i></i><i></i><i></i></div></div>`,
      table: `<table><thead><tr><th>项目</th><th>状态</th><th>进度</th></tr></thead><tbody><tr><td>术语词典</td><td><b>进行中</b></td><td>81%</td></tr><tr><td>移动适配</td><td><b>已完成</b></td><td>100%</td></tr></tbody></table>`,
      list: `<ul class="content-list"><li><i>01</i><span><b>整理术语分类</b><small>今天 10:20</small></span></li><li><i>02</i><span><b>检查移动端</b><small>今天 11:45</small></span></li></ul>`,
      card: `<article class="content-card"><div></div><span>UI 设计</span><strong>用准确术语让 AI 做出更好的页面</strong>${button("查看详情 →")}</article>`,
      tag: `<div class="tag-row"><span>教程</span><span>CSS</span><span>新手友好</span><span>已发布</span></div>`,
      badge: `<div class="badge-row"><span>消息<i>8</i></span><span>更新<i>NEW</i></span></div>`,
      avatar: `<div class="avatar-row"><i>SO</i><i>AI</i><i>UI</i><span>+12</span></div>`,
      statistic: `<div class="stat-row"><article><span>术语总数</span><strong>140</strong><small>↑ 59</small></article><article><span>动画样本</span><strong>17</strong><small>全部可播放</small></article></div>`,
      segmented: `<div class="segmented-demo">${button("预览","segment")}${button("代码","segment")}${button("说明","segment")}</div>`,
      timeline: `<ol class="timeline-demo"><li><b>需求确认</b><span>09:20</span></li><li><b>开始制作</b><span>10:15</span></li><li><b>等待发布</b><span>现在</span></li></ol>`,
      tree: `<div class="tree-demo"><button data-ui-action="tree">▾ src</button><div><span>　components</span><span>　styles.css</span><span>　app.js</span></div></div>`,
      carousel: `<div class="carousel-demo"><div><article>01</article><article>02</article><article>03</article></div>${button("→","carousel")}</div>`,
      "content-image": `<figure class="image-demo"><div></div><figcaption>山海之间 · 16:9 响应式封面</figcaption></figure>`,
      icon: `<div class="icon-grid"><button title="搜索">⌕</button><button title="下载">↓</button><button title="收藏">☆</button><button title="关闭">×</button></div>`,
      chart: `<div class="chart-demo"><i style="--v:42%"></i><i style="--v:68%"></i><i style="--v:54%"></i><i style="--v:88%"></i><i style="--v:73%"></i></div>`,
      "chat-ui": `<div class="chat-demo"><p>帮我把卡片做得更有层次</p><p>可以减弱边框，并增加轻微投影。</p><footer>${field("text","继续输入…")}${button("发送")}</footer></div>`,
      "file-item": `<div class="file-demo"><i>PDF</i><span><b>前端术语清单.pdf</b><small>2.4 MB · 刚刚上传</small></span>${button("⋯")}</div>`,
      alert: `<div class="alert-demo"><i>!</i><span><b>账号将在 3 天后到期</b><small>续费后可以继续使用全部功能。</small></span>${button("立即续费")}</div>`,
      notification: `<div class="notice-demo"><header>通知 <b>3</b></header><p><i></i><span>项目已经完成导出<small>2 分钟前</small></span></p><p><i></i><span>收到一条新评论<small>1 小时前</small></span></p></div>`,
      popconfirm: `<div class="pop-demo">${button("删除项目","popconfirm")}<aside><b>确定删除吗？</b><span>此操作无法撤销</span><footer>${button("取消","popconfirm")}${button("确定")}</footer></aside></div>`,
      popover: `<div class="pop-demo">${button("查看作者","popover")}<aside><b>SO · 内容创作者</b><span>专注 AI 绘图与前端工具</span><footer>作品 30　关注 128</footer></aside></div>`,
      progress: `<div class="progress-demo"><header><span>正在上传素材</span><b>68%</b></header><div><i></i></div><small>scene-cover.png · 6.8 / 10 MB</small></div>`,
      result: `<div class="result-demo"><i>✓</i><strong>发布成功</strong><span>内容已经保存并同步到线上。</span>${button("查看内容")}</div>`,
      spinner: `<div class="spinner-demo"><i></i><strong>正在生成预览</strong><span>预计还需要几秒钟</span></div>`,
      empty: `<div class="empty-demo"><i>□</i><strong>还没有收藏</strong><span>看到有用的术语，可以先收藏起来。</span>${button("浏览术语")}</div>`,
      menu: `<nav class="menu-demo"><a class="active">⌂　概览</a><a>▦　项目</a><a>◫　素材</a><a>⚙　设置</a></nav>`,
      breadcrumb: `<nav class="breadcrumb-demo"><a>首页</a><span>›</span><a>术语</a><span>›</span><b>动画</b></nav>`,
      pagination: `<nav class="pagination-demo">${button("←")}${button("1","page")}${button("2","page")}${button("3","page")}${button("→")}</nav>`,
      steps: `<ol class="steps-demo"><li class="done"><i>✓</i><span>填写信息</span></li><li class="active"><i>2</i><span>确认内容</span></li><li><i>3</i><span>完成发布</span></li></ol>`,
      anchor: `<div class="anchor-demo"><nav><a>概览</a><a class="active">排版</a><a>动画</a></nav><article><b>02 / 排版</b><p>通过字号、字重和行高建立清晰的信息层级。</p></article></div>`,
      "back-top": `<div class="backtop-demo"><p>长页面内容<br>继续向下滚动<br>……<br>已经到达页面底部</p>${button("↑","back-top")}</div>`,
      "search-component": `<div class="search-demo">⌕ ${field("search","搜索术语、效果或组件")}<kbd>/</kbd></div>`,
      hero: `<section class="hero-demo"><span>FRONTEND SPECIMEN</span><h2>前端术语实验室</h2><p>看得见效果，才能说得清需求。</p>${button("开始探索")}</section>`,
      cta: `<section class="cta-demo"><span>准备好了吗？</span><strong>把模糊想法变成准确指令</strong>${button("免费开始 →")}</section>`,
      "site-header": `<header class="site-header-demo"><b>LAB.</b><nav>产品　案例　价格</nav>${button("登录")}</header>`,
      navbar: `<nav class="navbar-demo"><b>VIBE</b><a class="active">术语</a><a>练习</a><a>收藏</a><i></i></nav>`,
      footer: `<footer class="footer-demo"><strong>LAB.</strong><div><span>产品</span><a>术语库</a><a>练习</a></div><div><span>关于</span><a>联系</a><a>隐私</a></div><small>© 2026</small></footer>`,
      faq: `<div class="faq-demo"><details open><summary>需要懂代码才能使用吗？</summary><p>不需要，先看懂效果，再把准确指令复制给 AI。</p></details><details><summary>手机端可以使用吗？</summary><p>可以，布局会自动切换为单栏。</p></details></div>`,
      pricing: `<div class="pricing-demo"><article><span>基础版</span><strong>免费</strong><small>常用术语</small></article><article><b>推荐</b><span>完整版</span><strong>¥29</strong><small>全部样本</small></article><article><span>团队版</span><strong>¥99</strong><small>共享词库</small></article></div>`,
      "social-proof": `<div class="proof-demo"><span>已经有 <b>12,680</b> 位创作者使用</span><div><i>ORBIT</i><i>NOVA</i><i>FRAME</i><i>PIXEL</i></div></div>`
    };
    return specimens[id] || `<strong>${term.name}</strong>`;
  }

  demoFor = function componentDemoFor(term) {
    if (!term.demo.startsWith("ui-")) return previousDemoFor(term);
    return {
      html: wrap(term.id, interfaceDemo(term)),
      controls: "",
      hint: "直接操作样本，观察它的结构、状态与反馈"
    };
  };

  bindDemo = function bindComponentDemo(term) {
    previousBindDemo(term);
    if (!term.demo.startsWith("ui-")) return;
    const specimen = els.canvas.querySelector(".ui-specimen");
    specimen?.querySelectorAll("[data-ui-action]").forEach(control => control.addEventListener("click", () => {
      const actionName = control.dataset.uiAction;
      if (actionName === "number-minus" || actionName === "number-plus") {
        const output = specimen.querySelector("output");
        output.textContent = Math.max(0, Number(output.textContent) + (actionName === "number-plus" ? 1 : -1));
      }
      if (["switch","popconfirm","popover","tree"].includes(actionName)) specimen.classList.toggle("open");
      if (actionName === "switch") specimen.querySelector("strong span").textContent = specimen.classList.contains("open") ? "开启" : "关闭";
      if (["segment","page"].includes(actionName)) {
        specimen.querySelectorAll("button").forEach(button => button.classList.toggle("active", button === control));
      }
      if (actionName === "carousel") {
        const track = specimen.querySelector(".carousel-demo > div");
        const next = (Number(track.dataset.index || 0) + 1) % 3;
        track.dataset.index = next;
        track.style.transform = `translateX(-${next * 100}%)`;
      }
      if (actionName === "form-submit") {
        specimen.querySelector("form > span").textContent = "✓ 已提交";
      }
      if (actionName === "back-top") specimen.querySelector(".backtop-demo").scrollTo({ top: 0, behavior: "smooth" });
    }));
    const form = specimen?.querySelector(".form-demo");
    form?.addEventListener("submit", event => event.preventDefault());
    const slider = specimen?.querySelector(".slider-demo input");
    slider?.addEventListener("input", () => specimen.querySelector(".slider-demo output").textContent = `${slider.value}px`);
  };

  const requested = terms.find(term => term.id === location.hash.slice(1));
  if (requested) state.activeId = requested.id;
  els.total.textContent = terms.length;
  renderCategories();
  renderList();
  renderDetail(terms.find(term => term.id === state.activeId) || terms[0]);
})();
