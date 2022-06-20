---
title: Resources
layout: default
---

<div>
  {% for r in site.data.resources %}
      <h3 class="pb-2">{{ r.title }}</h3>
      <div class="row align-items-center pb-4">  
        <div class="col-md-3">
          <img class="project-picture img-fluid" src="{{ r.image }}" alt="me"/>
        </div>
        <div class="col-md">
          <p>{{ r.abstract }}</p>
        </div>
      </div>
  {% endfor %}
</div>
