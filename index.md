---
title: Home
layout: default
---

<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-3">
      <img class="profile-picture" src="/assets/images/avatar.png" alt="me"/>
    </div>
    <div class="col-lg">
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

  <p class="text-end"><a href="news.html">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#404040" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>
  </a></p>
</div>
