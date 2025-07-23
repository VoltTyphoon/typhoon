---
title: "时间线"
lang: "zh"
layout: "page.njk"
permalink: "zh/timeline/index.html"
---

以下时间线汇总了有关“伏特台风”行动的主要已知事件：

{% for event in timeline.zh %}
{% include "card.njk" with event %}
{% endfor %}
