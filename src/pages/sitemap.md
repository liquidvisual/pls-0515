---
layout: internal/text_page
title: Sitemap
permalink: /sitemap/
hero_image: "/img/content/banners/banner-canola-field.jpg"
---

<!--- This child document initializes the page in Jekyll. -->

<div class="row">
	<div class="columns">
		<h2>All Available Pages for Planet Software</h2>
		<section class="section has-padding">
			<ul class="triangle-list">
				{% for item in site.pages %}
					<li><a href="{{ item.url }}">{{ item.layout }}</a> <small>({{ item.title }})</small></li>
				{% endfor %}
			</ul>
		</section>
	</div>
</div>
