const router = require("express").Router();
import fetch from 'node-fetch';
import axios from 'axios';
/* /api/spider */
router.route('/')
    .post((req, res) => {
        const { movie, ip } = req.body;
        console.log(req.connection.remoteAddress);
        const url = `https://videospider.in/getticket.php?key=XQfajbgr6UlJuc8S&secret_key=zpqjtddfngl4trolf6blfts956n6ll&video_id=${movie}&ip=${ip}`;
        console.log("Get URL: ", url);
        axios(url).then(data => { console.log("Reply: ", data.data); res.send(data.data); }).catch(err => console.log(err));
    });
    // .post();

module.exports = router;
