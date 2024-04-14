---
layout: default
title: People
---

#### PhD Students

<div class="pb-4">
  <div class="card bg-light border-0 mb-2">
    <div class="card-body">
        {% for s in site.data.students.phd %}
        <h6 class="card-title">{{ s.name }}</h6>
        {% endfor %}
    </div>
  </div>
</div>

#### Masters Students

<div class="pb-4">

  <div class="card bg-light border-0 mb-2">
    <div class="card-body">
        {% for s in site.data.students.masters %}
        <h6 class="card-title">{{ s.name }}</h6>
        {% endfor %}
    </div>
  </div>

</div>

#### Undergraduate Students

<div class="pb-4">

  <div class="card bg-light border-0 mb-2">
    <div class="card-body">
        {% for s in site.data.students.undergrad %}
        <h6 class="card-title">{{ s.name }}</h6>
        {% endfor %}
    </div>
  </div>

</div>
