const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    console.log("🚨 No Authorization header received.");
    return res.status(401).json({ error: "Access Denied: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
  
  if (!token) {
    console.log("🚨 Bearer token format incorrect:", authHeader);
    return res.status(401).json({ error: "Access Denied: Invalid token format" });
  }

  try {
    console.log("🔑 Verifying token:", token);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log("✅ Token verified successfully:", verified);
    next();
  } catch (error) {
    console.error("❌ JWT verification failed:", error.message);
    res.status(401).json({ error: "Invalid token" });
  }
};
