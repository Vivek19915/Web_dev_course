//=================Create schema=================//
/**
 * @swagger
 * components:
 *  schemas:
 *      Products:
 *          type: object
 *          required:
 *              - p_name
 *              - p_cost
 *          properties:
 *              p_id:
 *                  type: number
 *                  description : Products id
 *              p_name:
 *                  type: string
 *                  description: Products name
 *              p_cost:
 *                  type: number
 *                  description: Products cost
 *              p_category:
 *                  type: string
 *                  description: Products category
 *              p_img:
 *                  type: string
 *                  description: Products image
 *              p_desc:
 *                  type: string
 *                  description: Product description
 *          example:
 *                  p_id: 1
 *                  p_name: T-Shirt
 *                  p_cost: 2300
 *                  p_catergory: Mens
 *                  p_img: https://m.media-amazon.com/images/I/71ShBw4g6GL._SX679_.jpg
 *                  p_desc: Fabric:- Rayon Stylish Shirt
 *      Users:
 *          type: object          
 *          properties:
 *              u_id:
 *                  type: number
 *                  description : User id
 *              u_name:
 *                  type: string
 *                  description : User name
 *              u_pwd:
 *                  type: string
 *                  description : User password
 *              u_email:
 *                  type: string
 *                  description : User email
 *              u_address:
 *                  type: string
 *                  description : User address
 *          example:
 *                  u_id: 1
 *                  u_name: Vivek
 *                  u_pass: ads123
 *                  u_email: vivek@gmail.com
 *                  u_address: BlueYonder, Sattava Knowledge City
 *      Cart:
 *          type: object
 *          properties:
 *              p_id:
 *                  type: number
 *                  description: Product Id
 *              p_cost:
 *                  type: number
 *                  description: Product cost
 *              qty:
 *                  type: number
 *                  description: Product qunatity
 *              p_img:
 *                  type: string
 *                  description: Product Image
 *              u_name:
 *                  type: string
 *                  description: User name
 *          example:
 *              p_id: 1
 *              p_cost: 2300
 *              qty: 2
 *              p_img: https://m.media-amazon.com/images/I/71ShBw4g6GL._SX679_.jpg
 *              u_name: Harshini
 */
//=================Name instead of default=================//
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: "Products management api"
 */
/**
 * @swagger
 * tags:
 *  name: Users
 *  description: "Users management api"
 */
/**
 * @swagger
 * tags:
 *  name: Cart
 *  description: "Cart management api"
 */
//=================tags -> grouping under 'Products'=================//
//================= GET =================//
/**
 * @swagger
 * /fetch:
 *  get:
 *      summary: Returns list of all products
 *      tags: [Products]
 *      responses:
 *          '200':
 *              description: List of all Products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Products'
 */
//================= POST =================//
/**
 * @swagger
 * /insert:
 *  post:
 *      summary: Create a new product
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/Products'
 *      responses:
 *          '200':
 *              description: "Product created"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'
 *          '500':
 *              description: "Server Error"
 */
//================= PUT =================//
/**
 * @swagger
 * /update:
 *  put:
 *      summary: "Update existing Product by p_id"
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Products'    
 *      responses:
 *          '200':
 *              description: "Product updated"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'
 *          '500':
 *              description: "Server Error"
 */
//================= DELETE =================//
/**
 * @swagger
 *  /delete:
 *     delete:
 *      summary: "Delete existing Product by p_id"
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                          $ref: '#/components/schemas/Products'
 *                      
 *          
 *      responses:
 *          '200':
 *              description: "Product deleted"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Products'    
 *          '500':
 *              description: "Server Error"
 */

//=================tags -> grouping under 'Users'=================//
//================= GET =================//
/**
 * @swagger
 * /fetch/UsersDetails:
 *  get:
 *      summary: Returns list of all Users
 *      tags: [Users]
 *      responses:
 *          '200':
 *              description: List of all Users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 */
//================= POST =================//
/**
 * @swagger
 * /insert/createUser:
 *  post:
 *      summary: Create a new User
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/Users'
 *      responses:
 *          '200':
 *              description: "User created"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          '500':
 *              description: "Server Error"
 */
//================= PUT =================//
/**
 * @swagger
 * /update/updateUser:
 *  put:
 *      summary: "Update existing User by u_id"
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'    
 *      responses:
 *          '200':
 *              description: "User details updated"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          '500':
 *              description: "Server Error"
 */
//================= DELETE =================//
/**
 * @swagger
 *  /delete/deleteUser:
 *     delete:
 *      summary: "Delete existing User by u_id"
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                          $ref: '#/components/schemas/Users'
 *                      
 *          
 *      responses:
 *          '200':
 *              description: "User deleted"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'    
 *          '500':
 *              description: "Server Error"
 */

//create router instance
const router = require('express').Router()
//import fetch insert update delete modules
let fetch = require('./fetch/fetch')
let insert = require('./insert/insert')
let update = require('./update/update')
let remov = require('./delete/delete')
//use above modules
router.use('/fetch', fetch)
router.use('/insert', insert)
router.use('/update', update)
router.use('/delete', remov)
module.exports = router
