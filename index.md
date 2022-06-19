---
title: Home
layout: default
---

<div class="container">
  <div class="row align-items-center">
    <div class="col-3">
      <img class="img-fluid" src="/assets/images/avatar.png" alt="me"/>
    </div>
    <div class="col">
      <p>
      I'm broadly interested in the intersections between Artificial Intelligence and Creativity, specifically in
      algorithmic music composition, generative art, and procedural content generation for games. I'm currently a Postdoctoral Fellow at the <a href="https://www.ualberta.ca">University of Alberta</a>, working on controlling generative deep learning models to compose music with a given emotion. I received a Ph.D. in Computer Science from the <a href="https://www.ucsc.edu">University of California, Santa Cruz</a> (UCSC), a M.Sc. in Computer Science from the <a href="https://www.usp.br">Universidade de São Paulo</a>, and a B.Sc. in Computer Science from <a href="https://www.ufpr.br">Universidade Federal do Paraná</a> (UFPR).
      </p>
    </div>
  </div>
</div>

<div class="pt-4">
  {% for n in site.data.news limit: 3 %}
  <div class="card mb-2 bg-light border-0">
    <div class="card-body align-items-center">
      <h6 class="card-title fw-bold">{{ n.date }}</h6>
      <p class="card-text">{{ n.headline }}</p>
    </div>
  </div>
  {% endfor %}

  <h6 class="pt-3 fw-bold text-end"><a href="news.html">></a></h6>
</div>
