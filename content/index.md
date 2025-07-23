# content/index.md
---
title: "Redirecting…"
layout: "base.njk"
permalink: "/"
eleventyExcludeFromCollections: true
---

<script>
  // 简易语言检测：中文浏览器跳 /zh/，其余跳 /en/
  const dest = (navigator.language || '').startsWith('zh') ? '/zh/' : '/en/';
  window.location.replace(dest);
</script>

<p>If you are not redirected automatically, choose <a href="/en/">English</a> or <a href="/zh/">中文</a>.</p>
