---
sys:
  id: "31TNnjHlfaGUoMOwU0M2og"
  updatedAt: "2022-03-25T15:03:10.578Z"
  createdAt: "2022-03-25T15:03:10.578Z"
  revision: 1
  space: "jdgh9667u2ox"
  contentType: "blogPost"
date: "2022-03-25T15:03:10.578Z"
title: "Automate with webhooks"
slug: "automate-with-webhooks"
heroImage:
  assetType: "image/jpeg"
  url: "//images.ctfassets.net/jdgh9667u2ox/4shwYI3POEGkw0Eg6kcyaQ/51df036ebebdb1e1cf4c355400e31e30/felix-russell-saw-112140.jpg"
  title: "Man in the fields"
  description: "Tattooed man walking in a field"
  size: 4539181
  width: 2500
  height: 1667
description: "Webhooks notify you, another person or system when resources have changed by calling a given HTTP endpoint."
publishDate: "2017-05-11T22:00:00.000Z"
tags:
  - "javascript"
---

## What are webhooks?

The webhooks are used to notify you when content has been changed. Specify a URL, configure your webhook, and we will send an HTTP POST request whenever something happens to your content.

## How do I configure a webhook?

Go to Settings → Webhooks from the navigation bar at the top. From there, hit Add webhook, and you will be directed to your new webhook. Then choose a name, put in the information of your HTTP endpoint (URL and authentication), specify any custom headers and select the types of events that should trigger the webhook.

## Why do I get an old version in the CDA?

As the delivery API is powered by a CDN network consisting of hundreds of servers distributed across continents, it takes some time (up to a few minutes) to reflect the changes to the published content. This must be taken into consideration when reacting to webhooks. In normal conditions, there could be a reasonable delay of 2 to 5 minutes.

Extracted from the [Webhooks FAQ](https://www.contentful.com/faq/webhooks/ "Webhooks FAQ").