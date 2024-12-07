const express = require("express");
const app = express();
const path = require("path");

const {pool} = require("./db");
const useragent = require("useragent");

const cors = require("cors");
app.use(cors());
app.use(express.json());//we need this as we send data from frontend to backend by using req.body

//Make sure static files are served from build directory
//this line can be commented out during development.
//app.use(express.static(path.join(__dirname, "client/build")));

//server test route
app.get("/serversendhello", (req, res) => {
  res.status(200).json({myMessage: "Hello from backend"});
})

//A temporary cache to save ip addresses and it will prevent saving same ip adress for 1 hour.
//I can do that by checking each ip with database ip addresses but then it will be too many requests to db
const ipCache = {};
// List of IPs to ignore (server centers, ad bots, my ip etc)
const ignoredIPs = ["66.249.68.5", "66.249.68.4", "66.249.88.2", "66.249.89.2", "66.249.65.32", "66.249.88.3", "209.85.238.225", 
  "209.85.238.224", "80.89.77.205", "212.3.197.186", "80.89.74.90", "::1", "80.89.79.74", "80.89.77.116", "80.89.73.22", 
  "66.249.64.10", "66.249.64.6", "66.249.64.5", "66.249.66.169", "66.249.66.160", "212.3.194.116", "212.3.194.116", 
  "66.249.73.233", "66.249.73.234", "62.103.210.169", "66.249.66.161", "66.249.69.65", "66.249.68.33", "66.249.68.37",
  "66.249.68.38", "66.249.68.34"];
//save each visitor to database by its ip address
app.post("/serversavevisitor", async (req, res) => {
  
    //here I could basically say "const ipVisitor = req.ip" but my app is running on Render platform and 
    //Render is using proxies and load balancers. Because of that I will weird ip addresses. To get actual ip:
    const ipVisitor = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : req.socket.remoteAddress || req.ip;

    let client;
    //check if ip is in the ignored list
    if(ignoredIPs.includes(ipVisitor)) {
        return;//simply exit function
    }
    //check if ip exists in cache and if last visit was less than 1 hour ago
    if(ipCache[ipVisitor] && Date.now() - ipCache[ipVisitor] < 3600000) {
        return res.status(429).json({myMessage: "Too many requests from this IP"})//I will not display this on frontend
    }

    ipCache[ipVisitor] = Date.now();//save visitor ip to ipCache to prevent repetitive savings
    const userAgentString = req.get('User-Agent');
    const agent = useragent.parse(userAgentString);
    try {
        const visitorData = {
            os: agent.os.toString(), // operating system
            browser: agent.toAgent(), // browser
            visitDate: new Date().toLocaleDateString('en-GB')
        }

        //save visitor to database
        client = await pool.connect();
        const result =  await client.query(
            `INSERT INTO visitors_latviaresidency (ip, op, browser, date)
            VALUES ($1, $2, $3, $4)`, [visitorData.ip, visitorData.os, visitorData.browser, visitorData.visitDate]
        );
        res.status(200).json({myMessage: "Visitor successfully logged"});//for console.log
    } catch (error) {
        console.error('Error logging visit:', error);
        res.status(500).json({myMessage: 'Error logging visit'}); //for console.log
    } finally {
        if(client) client.release();
    }
})

//This line must be under all server routes. Otherwise you will have like not being able to fetch comments etc.
//This code helps with managing routes that are not defined on react frontend. If you dont add, only index 
//route will be visible.
//this line can be commented out during development.
/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
}); */


const PORT = process.env.PORT ||5000;
app.listen(PORT, () => {
  console.log("Port is open on " + PORT);
})
  




























//A temporary cache to save ip addresses and it will prevent spam comments and replies for 1 minute.
//I can do that by checking each ip with database ip addresses but then it will be too many requests to db
const ipCache2 = {}
app.post("/serversavecomment", async (req, res) => {
  //preventing spam comments
  const ipVisitor = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : req.socket.remoteAddress || req.ip;
  // Check if IP exists in cache and if last comment was less than 1 minute ago
  /*
  if (ipCache2[ipVisitor] && Date.now() - ipCache2[ipVisitor] < 60000) {
    return res.status(429).json({message: 'Too many comments'});
  }
  */
  ipCache2[ipVisitor] = Date.now();//save visitor ip to ipCache2

  let client;
  const newComment = req.body;
  const {pageId, name, text, date} = newComment;

  try {
    client = await pool.connect();
    const result = await client.query(
      `INSERT INTO eumaps_comments (sectionid, date, name, comment) values ($1, $2, $3, $4)`, [pageId, date, name, text]
    );
    res.status(201).json({message: "Yorum kaydedildi"});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: "Error while saving comment"})
  } finally {
    if(client) client.release();
  }
});
app.post("/serversavecommentreply", async (req, res) => {
  
  //preventing spam replies
  const ipVisitor = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : req.socket.remoteAddress || req.ip;
  // Check if IP exists in cache and if last reply was less than 1 minute ago
  if (ipCache2[ipVisitor] && Date.now() - ipCache2[ipVisitor] < 60000) {
    return res.status(429).json({message: 'Too many comments'});
  }
  ipCache2[ipVisitor] = Date.now();//save visitor ip to ipCache2


  let client;
  const newComment = req.body;
  const {pageId3, name, text, date, commentId} = newComment;

  try {
    client = await pool.connect(); 
    const result = await client.query(
      `INSERT INTO eumaps_comments (sectionid, date, name, comment, parent_id) values ($1, $2, $3, $4, $5)`, 
      [pageId3, date, name, text, commentId]
    );
    res.status(201).json({message: "Cevap kaydedildi"});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: "Error while saving reply"})
  } finally {
    if(client) client.release();
  }
});

app.get("/servergetcomments/:pageId", async (req, res) => {
  let client;
  const { pageId } = req.params;
  try {
    client = await pool.connect(); 
    const result = await client.query(
      `SELECT * FROM eumaps_comments WHERE sectionid = $1`, [pageId]
    );
    const allComments = await result.rows;
    if(!allComments) {
      return res.status(404).json({ message: "No comments yet"})
    }
    res.status(200).json(allComments);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: "Error while fetching comments"})
  } finally {
    if(client) client.release();
  }
});




//remove "build" from gitignore before production deployment
//create "build" folder-- npm run build in client folder
//You can remove cors before production
//Fix server api routes before production, remove "localhost" part
//add environment variables
/*Also add this otherwise only index route will be visible when you deploy app to production

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

*/
