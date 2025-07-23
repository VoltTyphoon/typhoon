---
title: "入侵指标（IoCs）"
lang: "zh"
layout: "page.njk"
permalink: "zh/ioc/index.html"
---

以下列出了与“伏特台风”组织活动相关的已知入侵指标（IoC）。点击各指标类别可展开查看具体列表：

{% for cat in ioc.zh %}
<div class="ioc-category">
  <h3 class="ioc-cat-header">{{ cat.category }} <span class="toggle-indicator">[+]</span></h3>
  <ul class="ioc-list">
    {% for item in cat.items %}
    <li><code>{{ item }}</code></li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
