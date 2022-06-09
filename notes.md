---
layout: default
title: Notes
---
### Notes

This is a space I use to take notes of things I'm learning or reviewing. I'll
also use it as a blog space to advertise my own work in a more informal way.
I like to keep my notes public because it might help other people and it helps me
to be more careful when taking them.

{% for post in site.posts %}
  - **{{ post.date | date_to_string}}**: [{{ post.title }}]({{ post.url }})
{% endfor %}
