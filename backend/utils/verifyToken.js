import jwt from "jsonwebtoken";
import User from "../models/User.js";
// import Tour from "../models/Tour.js";

export const verifyToken = (req, res, next) => {
  // console.log("verifytoken run");
  const token = req.cookies.accessToken;

  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized....." });
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

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, () => {
//     console.log(req.user.id, req.params);
//     if (
//       req.user.id === req.params.tourId.toString() ||
//       req.user.role === "admin"
//     ) {
//       next();
//     } else {
//       return res
//         .status(401)
//         .json({ success: false, message: "You are not authorized" });
//     }
//     console.log(req.user);
//   });
// };

export const verifyUser = async (req, res, next) => {
  verifyToken(req, res, async () => {
    const userId = req.user.id;

    try {
      const tour = await User.findById(userId);

      // console.log(req.user.id, tour?._id.toString());

      if (req.user.id === tour?._id.toString()) {
        // console.log("trigger");
        next();
      } else {
        return res.status(401).json({
          success: false,
          message: "You are not authorized..",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while verifying the user",
      });
    }
  });
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
