const router = require("express").Router();
const { register, login } = require("../controllers/auth.controller");
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

module.exports = router;
