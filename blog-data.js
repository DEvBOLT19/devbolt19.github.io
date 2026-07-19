/* ==========================================================================
   BOLT. — BLOG DATA
   ==========================================================================
   This is the ONLY file you edit to publish a post.

   HOW TO WRITE A POST
   -------------------
   Add a new object to the TOP of the BLOG_POSTS array below.
   The `content` is plain Markdown:

     # Heading           -> big heading
     ## Subheading       -> subheading
     ### Small heading   -> smaller subheading
     **bold text**       -> bold
     *italic text*       -> italic
     [text](https://url) -> hyperlink
     ![alt](images/x.png)-> image (put the file in the /images folder)
     > quoted text       -> blockquote
     `code`              -> inline code
     ---                 -> horizontal divider

   The newest post (by date) automatically shows its excerpt on the homepage.
   Don't start content with "# your title" — the page renders the title itself.
   ========================================================================== */

const BLOG_POSTS = [
  {
    slug: "how-i-write-these-posts",
    title: "How I write these posts",
    date: "2026-07-19", // YYYY-MM-DD
    tags: ["meta", "writing"],
    excerpt:
      "Every post on this site is just plain Markdown. Headings, bold text, links, images — all of it lives in one file. Here is the exact syntax I use, so future-me never forgets.",
    content: `
Every post here is written in **Markdown** inside a single file: \`blog-data.js\`. No CMS, no database, no build step. Just text.

## Headings

A single \`#\` makes a big heading. Two \`##\` make a subheading like the one above. Three \`###\` make a smaller one.

### Like this

## Bold and italic

Wrap text in double asterisks for **bold text**, single asterisks for *italic text*.

## Links

Write \`[the text](https://vercel.com)\` and you get [the text](https://vercel.com) as a clickable hyperlink.

## Images

Drop an image into the \`images\` folder, then write:

\`![a pixel sunset](images/pixel-sunset.png)\`

![a pixel sunset over a mountain landscape](images/pixel-sunset.png)

## Quotes and code

> Simplicity is the whole point.

And inline \`code\` looks like this.

---

That's the whole system. Write, save, publish.
`,
  },
  {
    slug: "why-minimal-wins",
    title: "Why minimal wins",
    date: "2026-07-10",
    tags: ["design", "opinion"],
    excerpt: "On the quiet power of removing things until only the essential remains.",
    content: `
Every element you remove makes the remaining ones **louder**.

## Less surface, less friction

A blog needs three things: a list, a post, a way back. Everything else is decoration.

> Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.

That's the whole argument.
`,
  },
  {
    slug: "hello-world",
    title: "hello, world",
    date: "2026-07-01",
    tags: ["meta"],
    excerpt: "First post. Testing the pixels.",
    content: `
This is the first post on **BOLT.** — a small corner of the internet for notes, experiments and half-finished thoughts.

More soon.
`,
  },
]

/* Your social links — update the usernames here */
const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  x: "https://x.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
}
