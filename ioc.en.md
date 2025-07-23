---
title: "Indicators of Compromise (IoCs)"
lang: "en"
layout: "page.njk"
permalink: "ioc/index.html"
---

Below are known indicators of compromise (IoCs) associated with Volt Typhoon’s activities. Click on each category to expand the list of indicators:

{% for cat in ioc.en %}
<div class="ioc-category">
  <h3 class="ioc-cat-header">{{ cat.category }} <span class="toggle-indicator">[+]</span></h3>
  <ul class="ioc-list">
    {% for item in cat.items %}
    <li><code>{{ item }}</code></li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
