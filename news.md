---
layout: default
title: Old News
---
### Old News

<div class="pt-2">
  {% for n in site.data.news offset: 3 %}
  <div class="card mb-2 bg-light border-0">
    <div class="card-body align-items-center">
      <h6 class="card-title fw-bold">{{ n.date }}</h6>
      <p class="card-text">{{ n.headline }}</p>
    </div>
  </div>
  {% endfor %}
</div>
