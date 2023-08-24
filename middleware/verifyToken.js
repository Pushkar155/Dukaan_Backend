const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Access denied by token' });
    }
  
    try {
      const decodedToken = jwt.verify(token, process.env.SECRETEKEY);
      req.userId = decodedToken.userId;
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };
module.exports=verifyToken;
