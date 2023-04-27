import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // console.log("verifytoken run");
  const token = req.cookies.accessToken;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }

  // If token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Token is invalid" });
    }
    req.user = user;
    next();
  });

  // console.log(token);
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.id === req.params.tourId.toString() ||
      req.user.role === "admin"
    ) {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You are not authorized" });
    }
  });
  // console.log(req.user);
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You are not authorized" });
    }
  });
};
