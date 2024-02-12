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
 *          example:
 *                  p_id: 111
 *                  p_name: p_one
 *                  p_cost: 10000
 *      Product:
 *          type: object          
 *          properties:
 *              p_id:
 *                  type: number
 *                  description : Products id
 *          example:
 *                  p_id: 111
 */
//=================Name instead of default=================//
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: "Products management api"
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
 *                          $ref: '#/components/schemas/Product'
 *                      
 *          
 *      responses:
 *          '200':
 *              description: "Product deleted"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'    
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
