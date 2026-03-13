**What is the difference between res.send() and res.sendFile()? When would you use one over the other?**
The difference between res.send() and res.sendFile() in Express is what type of content they send to the browser.
res.sendFile() sends a file from your computer/server to the browser and res.send() sends data directly from your server code to the client.



**Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?**
The path module is necessary when serving files because it creates correct and reliable file paths.
If you just use a relative path like 'public/index.html', The server may look in the wrong folder if it’s started from a different directory.



**How would you add a third page (e.g., a menu page) to this server? What steps would you take?**
To add a third page, I would add another file to the public folder with the content I wanted,
I would then import it into server.js to display the content.

