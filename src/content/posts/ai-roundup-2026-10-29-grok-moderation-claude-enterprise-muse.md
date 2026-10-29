---
title: "AI Roundup: Grok API Moderation Controls, Claude Spend Reports and Research Grants"
description: "xAI lets developers set content rules per request, Anthropic shows enterprises what their Claude spend buys, and Anthropic and Meta expand support for scientists"
summary: "xAI lets developers set content rules per request, Anthropic shows enterprises what their Claude spend buys, and Anthropic and Meta expand support for scientists"
pubDate: 2026-10-29
publishedAt: 2026-10-29T13:07:14.000Z
author: "Vet, VetTV Studios"
category: news
type: news
tags: ["ai","grok","anthropic"]
offTopic: true
cover: "covers/ai-roundup-2026-10-29-grok-moderation-claude-enterprise-muse.png"
sources:
  - title: "xAI docs: Custom Moderation Controls"
    url: "https://docs.x.ai/developers/advanced-api-usage/custom-moderation-controls"
  - title: "xAI release notes"
    url: "https://docs.x.ai/developers/release-notes"
  - title: "TechCrunch: Anthropic launches tools to show companies what their AI spending is buying"
    url: "https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/"
  - title: "Anthropic: AI for Science expands to foundations and research institutions"
    url: "https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions"
  - title: "Meta AI Research: Supporting medical and scientific research"
    url: "https://research.meta.ai/blog/supporting-medical-scientific-research"
source: "Article Desk: ai-roundup-2026-10-29-grok-moderation-claude-enterprise-muse.md"
---
Here are four AI updates from October 28, each checked against its official announcement or documentation.

## Grok API: custom moderation controls

Developers using the Grok API can now add a `guidelines` array to a request to tighten how Grok handles three content categories: `nsfw`, `violence` and `profanity`. According to xAI's documentation, the only behavior available today is `decline`. With it set, Grok avoids sexualized content or graphic violence, or writes without profanity, while still handling things like educational questions or news. Categories you leave out keep the model's default behavior.

Guidelines work on Chat Completions, the Responses API and the xAI Python SDK, and they apply only to the request that carries them. They don't currently work with multi-agent models or deferred completions, and some requests that set `stop` or `n` greater than 1 are rejected.

## Claude Enterprise: reports on what AI spend buys

Anthropic launched reporting tools for Claude Enterprise. TechCrunch reports that managers can see what a team produced over a chosen date range, how much it cost and where its workflows broke down. The reports draw on internal analytics and employee surveys and include recommendations for improving results. Anthropic says it won't use this data for model training by default. It's also adding pooled group budgets so teams can manage token spending together.

## Anthropic expands AI for Science

Anthropic is partnering with 20 foundations, institutions and research groups in an expansion of its AI for Science program, which gives researchers free Claude credits. Funders including the Alfred P. Sloan Foundation, the Simons Foundation, Schmidt Sciences, the US National Science Foundation and CAS will hand out credits to researchers. Institutions such as the Space Telescope Science Institute, the Wellcome Sanger Institute, the Francis Crick Institute and EMBL will use credits in-house, and projects like FlyWire and gnomAD get direct support.

## Meta brings Muse models to five universities

Meta is supporting research at Caltech, Ohio State's College of Medicine, Louisiana State University, Indiana University and UTHealth Houston. Support varies by school and can include model access, work with Meta researchers and funding. Researchers will use models including Muse Spark Open and Muse Glimmer, which Meta describes as a 30B open-weight model that runs on a single consumer GPU. Meta says the universities will run models in their own environments for the healthcare projects and that patient data won't be shared with Meta.
