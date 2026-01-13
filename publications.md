---
title: Publications
layout: default
---

#### Conference, Workshop, and Journal Publications

<div class="pb-4">
{% for p in site.data.publications.papers %}
  <div class="card bg-light border-0 mb-2">
    <div class="card-body">
      {% if p.video %}
        <h6 class="card-title"><a href="{{ p.pdf }}">{{ p.title }}</a> [<a href="{{ p.video }}">Video</a>]</h6>
      {% else %}
        <h6 class="card-title"><a href="{{ p.pdf }}">{{ p.title }}</a></h6>
      {% endif %}
      <p class="card-text">
        {{ p.authors }}<br>
        {{ p.venue }}
      </p>
    </div>
  </div>
{% endfor %}
</div>

#### Theses and Dissertation

<div class="pb-4">
{% for p in site.data.publications.theses %}
  <div class="card bg-light border-0 mb-2">
    <div class="card-body">
      {% if p.video %}
        <h6 class="card-title"><a href="{{ p.pdf }}">{{ p.title }}</a> [<a href="{{ p.video }}">Video</a>]</h6>
      {% else %}
        <h6 class="card-title"><a href="{{ p.pdf }}">{{ p.title }}</a></h6>
      {% endif %}
      <p class="card-text">
        {{ p.authors }}<br>
        {{ p.venue }}
      </p>
    </div>
  </div>
{% endfor %}
</div>
