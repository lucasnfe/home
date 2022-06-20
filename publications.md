---
title: Publications
layout: default
---

### Peer Reviewed Journal Publications

<div class="pb-4">
{% for p in site.data.publications.journals %}
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

### Peer Reviewed Conference and Workshop Publications

<div class="pb-4">
{% for p in site.data.publications.conferences %}
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

### Dissertations and Theses

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
