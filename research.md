---
title: Research
layout: default
---

<div>
  {% for r in site.data.research %}
      <h3 class="pb-2">{{ r.title }}</h3>
      <div class="row align-items-center pb-4">  
        <div class="col-3">
          <img class="img-fluid" src="{{ r.image }}" alt="me"/>
        </div>
        <div class="col">
          <p>{{ r.abstract }}</p>
        </div>
      </div>
  {% endfor %}
</div>
