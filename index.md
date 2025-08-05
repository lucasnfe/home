---
title: Home
layout: default
---

<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-3 pb-2">
      <img class="profile-picture" src="{{'/assets/images/avatar2.jpg' | relative_url}}" alt="me"/>
    </div>
    <div class="col-lg profile-discription">
      <p>I'm an Assistant Professor in the <a href="https://www.dcc.ufmg.br">Department of Computer Science</a> at the <a href="https://www.ufmg.br">Federal University of Minas Gerais</a> (UFMG), where I lead the <a href="https://mosaic-ufmg.github.io/">MOSAIC</a> research group, working at the intersection of Artificial Intelligence and Creativity, primarily in Generative AI and Music Information Retrieval. Previously, I was an Assistant Professor of Computer Science at the <a href="https://www.ufv.br">Federal University of Viçosa</a> (UFV). I also served as a Postdoctoral Fellow at the <a href="https://www.ualberta.ca">University of Alberta</a>, as part of the <a href="https://www.amii.ca">Alberta Machine Intelligence Institute (Amii)</a>. I hold a Ph.D. in Computer Science from the <a href="https://www.ucsc.edu">University of California, Santa Cruz</a>.</p>
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
