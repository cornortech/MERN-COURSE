const router = require("express").Router();
const {
  register,
  login,
  sentPasswordResetLink,
  resetPassword,
} = require("../controllers/auth.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
/**
 *
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: This route is used to register a new user into the system.
 *     description: Register a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongpassword123
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       403:
 *         description: Required fields are not sent.
 *       500:
 *         description: Internal server error.
 */

router.post("/register", register);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: This route is used to login a user.
 *     description: This route is used to login a user and retrieve the authorization token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 example: strongpassword123
 *     responses:
 *       200:
 *         description: User login successful.
 *       401:
 *         description: Invalid credentials.
 *       500:
 *         description: Internal server error.
 */

router.post("/login", login);

/**
 * @openapi
 * /auth/send-reset-password-email:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: This router is used to send reset password email.
 *     description: This route is used to send reset password email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *     responses:
 *       200:
 *         description: User login successful.
 *       401:
 *         description: Invalid credentials.
 *       500:
 *         description: Internal server error.
 */

router.post("/send-reset-password-email", sentPasswordResetLink);

/**
 * @openapi
 * /auth/reset-password:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: This router is used to reset password.
 *     description: This route is used to reset password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *               - token
 *             properties:
 *               password:
 *                 type: string
 *                 example: yournewpassword
 *               token:
 *                  type: string
 *                  example: your token here
 *     responses:
 *       200:
 *         description: Password reset successful.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */

router.post("/reset-password", resetPassword);

router.get("/logged-in-user", AuthMiddleware, (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "User not found.",
    });
  }
  // req.user
  return res.status(200).json({
    success: true,
    user: req.user, // user is attached to request object by AuthMiddleware
  });
});

module.exports = router;



