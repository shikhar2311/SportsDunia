import React from 'react'
import NewsCard from '../../ui/NewsCard';

//dynamic
const article = {
  author: null,
  title:
    "Vegas Cybertruck bomber to ex-girlfriend: This rented Tesla makes me feel like 'The Goddamn Batman' [Interesting]",
  description:
    "Vegas Cybertruck bomber to ex-girlfriend: This rented Tesla makes me feel like 'The Goddamn Batman'",
  url: "https://www.fark.com/comments/13512988/Vegas-Cybertruck-bomber-to-ex-girlfriend-This-rented-Tesla-makes-me-feel-like-The-Goddamn-Batman",
  urlToImage: "https://img.fark.net/images/2013/site/farkLogo2Big.gif",
  publishedAt: "2025-01-03T15:00:34Z",
  content:
    "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]",
};

function NewSection() {

   

  return (
    <div className=' flex items-center justify-center flex-col'>
      <h1 className=' '>News Articles</h1>
      <div className=' my-5 flex justify-center items-center flex-wrap gap-3'> 
        <NewsCard article={article}/>
        <NewsCard article={article}/>
        <NewsCard article={article}/>
        <NewsCard article={article}/>
        <NewsCard article={article}/>
      </div>
      <button>Load More....</button>
    </div>
  )
}

export default NewSection