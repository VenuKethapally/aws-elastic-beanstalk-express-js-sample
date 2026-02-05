const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('🚀 Welcome to My DevOps Project 🚀

This project is designed to showcase modern DevOps practices:
- Automated CI/CD pipelines
- Cloud-native deployments on AWS
- Infrastructure as Code
- Monitoring & logging for reliability

The goal is simple: streamline operations, ensure compliance, and deliver applications faster with confidence.

Let’s build, deploy, and innovate together!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
