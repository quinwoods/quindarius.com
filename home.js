const title = "Website"
const home = 
`
<html lang=en>
<head>
	<title>quin'darius</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="home.css">
	<link rel="stylesheet" href="fonts.css">
</head>
<body>
<center>
<a rel=author href="./">
		<h1>
			Quin'darius
		</h1>
	</a>
<nav>
	<a href="/projects">projects</a>
	<span>•</span>
	<a href="/articles">articles</a>
	<span>•</span>
	<a href="/contact">contact</a>
	<span>•</span>
	<a href="/about">about</a>
	<span>•</span>
	<a href="/rss">rss</a>
</nav>
<main>
<article >
	<a href="./posts/post_1.html">
<h2>
	${title}
</h2>
<h4>
	Re-writing my website, with some seemingly bold aspirations.
	There are many things I want to express and have been looking for the correct medium, but now it's clear that the medium isn't found but created.
</h4>
<hr/>
	</a>
</article>
</main>
<footer>
<figure>
<blockquote>
“I'm trying to speak--to write-the truth. I"m trying to be clear. I'm not interested in being fancy, or even original. Clarity and truth will be plenty, if I can only achieve them.”
</blockquote>
<figcaption>—Octavia Butler <br/><cite>Parable of the Sower</cite></figcaption>
</figure>
</footer>
</center>
</body>
</html>
`

console.log(home)
