export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  snippet: string;
  readTime?: string;
  publication?: string;
}

export const FALLBACK_ARTICLES: MediumArticle[] = [
  {
    title: "Why My Production AI Agents Kept Breaking at 3 AM (And How We Fixed It)",
    link: "https://medium.com/codetodeploy/why-my-production-ai-agents-kept-breaking-at-3-am-and-how-we-fixed-it-226978d82285",
    pubDate: "2026-08-02",
    categories: ["large-language-models", "ai-agent", "artificial-intelligence"],
    snippet: "A practical guide on why autonomous AI agents fail in real-world production systems and how we built SRE reliability patterns, guardrails, and cost-efficient memory architectures to keep them running smoothly.",
    readTime: "7 min read",
    publication: "Code to Deploy on Medium"
  }
];

export async function fetchMediumArticles(username: string = 'muskangujar_'): Promise<MediumArticle[]> {
  try {
    // Strategy 1: Fetch via rss2json API for pre-parsed JSON feed
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`, {
      next: { revalidate: 3600 } // Cache for 1 hour in Next.js
    });

    if (res.ok) {
      const data = await res.json();
      if (data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
        return data.items.map((item: any) => {
          // Clean HTML tags from content snippet
          const rawContent = item.content || item.description || '';
          const cleanedText = rawContent
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          
          const snippet = cleanedText.length > 200 
            ? cleanedText.substring(0, 200) + '...' 
            : cleanedText;

          // Estimate read time (~200 words per min)
          const wordCount = rawContent.split(/\s+/).length;
          const readTimeMinutes = Math.max(3, Math.ceil(wordCount / 200));

          return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            categories: item.categories || ["AI", "SRE", "Engineering"],
            snippet: snippet || "Click to read full article on Medium.",
            readTime: `${readTimeMinutes} min read`,
            publication: item.link.includes('codetodeploy') ? "Code to Deploy on Medium" : "Published on Medium"
          };
        });
      }
    }

    // Strategy 2: Direct RSS XML fetch as fallback
    const xmlRes = await fetch(`https://medium.com/feed/@${username}`, {
      next: { revalidate: 3600 }
    });

    if (xmlRes.ok) {
      const xmlText = await xmlRes.text();
      const itemRegex = /<item>([\s\S]*?)<\/item>/g;
      let match;
      const parsedArticles: MediumArticle[] = [];

      while ((match = itemRegex.exec(xmlText)) !== null) {
        const itemContent = match[1];
        const titleMatch = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/.exec(itemContent);
        const linkMatch = /<link>([\s\S]*?)<\/link>/.exec(itemContent);
        const pubDateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/.exec(itemContent);

        const title = titleMatch ? (titleMatch[1] || titleMatch[2]).trim() : '';
        const link = linkMatch ? linkMatch[1].trim() : '';
        const pubDateRaw = pubDateMatch ? pubDateMatch[1].trim() : '';

        if (title && link) {
          parsedArticles.push({
            title,
            link,
            pubDate: pubDateRaw ? new Date(pubDateRaw).toISOString().split('T')[0] : 'Recently',
            categories: ["AI", "SRE", "Cloud Reliability"],
            snippet: "Read latest technical publication on Medium.",
            readTime: "5 min read",
            publication: link.includes('codetodeploy') ? "Code to Deploy on Medium" : "Published on Medium"
          });
        }
      }

      if (parsedArticles.length > 0) {
        return parsedArticles;
      }
    }
  } catch (error) {
    console.error("Failed to fetch Medium articles dynamically:", error);
  }

  return FALLBACK_ARTICLES;
}
