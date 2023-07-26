---
sys:
  id: "2PtC9h1YqIA6kaUaIsWEQ0"
  updatedAt: "2022-03-25T15:03:11.107Z"
  createdAt: "2023-07-26T07:13:22.150Z"
  revision: 2
  space: "jdgh9667u2ox"
  contentType: "blogPost"
date: "2022-03-25T15:03:11.107Z"
title: "Static sites are great"
slug: "static-sites-are-great"
heroImage:
  assetType: "image/jpeg"
  url: "//images.ctfassets.net/jdgh9667u2ox/4NzwDSDlGECGIiokKomsyI/a5c92bc30956ee455bfd7f655f93155b/denys-nevozhai-100695.jpg"
  title: "City"
  description: "City pictured from the sky"
  size: 15736986
  width: 3992
  height: 2992
description: "Worry less about security, caching, and talking to the server. Static sites are the new thing."
publishDate: "2017-05-15T22:00:00.000Z"
tags:
  - "javascript"
  - "static-sites"
---

## The case for the static site generator

More and more developers are jumping on the "go static train", and rightfully so. Static pages are fast, lightweight, they scale well. They are more secure, and simple to maintain and they allow you to focus all your time and effort on the user interface. Often times, this dedication really shows.

![clouddev](//images.ctfassets.net/jdgh9667u2ox/1nbwvsLg9Jzco4AE87D2Gi/31843fabecfdd5d93aa2f8176d9864da/azure-for-operators-martin-lund-blog-banner.jpg)

It just so happens that static site generators are mostly loved by developers, but not by the average Joe. They do not offer WYSIWYG, previewing on demo sites may take an update cycle, they are often based on markdown text files, and they require some knowledge of modern day repositories.

Moreover, when teams are collaborating, it can get complicated quickly. Has this article already been proof-read or reviewed? Is this input valid? Are user permissions available, e.g. for administering adding and removing team members? Can this article be published at a future date? How can a large repository of content be categorized, organized, and searched? All these requirements have previously been more or less solved within the admin area of your CMS. But of course with all the baggage that made you leave the appserver-app-database-in-one-big-blob stack in the first place.

## Content APIs to the rescue

An alternative is decoupling the content management aspect from the system. And then replacing the maintenance prone server with a cloud based web service offering. Effectively, instead of your CMS of old, you move to a [Content Management as a Service (CMaaS)](https://www.contentful.com/r/knowledgebase/content-as-a-service/ "Content Management as a Service (CMaaS)") world, with a content API to deliver all your content. That way, you get the all the [benefits of content management features](http://www.digett.com/blog/01/16/2014/pairing-static-websites-cms "benefits of content management features") while still being able to embrace the static site generator mantra.

It so happens that Contentful is offering just that kind of content API. A service that

* from the ground up has been designed to be fast, scalable, secure, and offer high uptime, so that you don’t have to worry about maintenance ever again.
* offers a powerful editor and lots of flexibility in creating templates for your documents that your editors can reuse and combine, so that no developers resources are required in everyday writing and updating tasks.
* separates content from presentation, so you can reuse your content repository for any device platform your heart desires. That way, you can COPE ("create once, publish everywhere").
* offers webhooks that you can use to rebuild your static site in a fully automated fashion every time your content is modified.

Extracted from the article [CMS-functionality for static site generators](https://www.contentful.com/r/knowledgebase/contentful-api-cms-static-site-generators/ "CMS-functionality for static site generators"). Read more about the [static site generators supported by Contentful](https://www.contentful.com/developers/docs/tools/staticsitegenerators/ "static site generators supported by Contentful").