---
title: Home
layout: default
---

<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-3 pb-2">
      <img class="profile-picture" src="{{'/assets/images/avatar3.jpg' | relative_url}}" alt="me"/>
    </div>
    <div class="col-lg profile-discription">
      <p>
      I'm an Assistant Professor at the <a href="https://www.ufb.br">Universidade Federal de Viçosa</a>, working on the intersections between Artificial Intelligence and Creativity, specifically in Algorithmic Music Composition, Generative AI, and Procedural Content Generation. 
      Previously, I was a Postdoctoral Fellow at the <a href="https://www.ualberta.ca">University of Alberta</a>, where I worked on controlling generative deep learning models to compose music with a given emotion. I received a Ph.D. in Computer Science from the <a href="https://www.ucsc.edu">University of California, Santa Cruz</a>, a M.Sc. in Computer Science from the <a href="https://www.usp.br">Universidade de São Paulo</a>, and a B.Sc. in Computer Science from <a href="https://www.ufpr.br">Universidade Federal do Paraná</a>.
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

  <p class="text-end pt-2">
    <a class="fw-light" href="news.html">
      Old News →
    </a>
  </p>
</div>
