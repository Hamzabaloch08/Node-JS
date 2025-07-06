import express, { Router } from 'express'

const router = Router();


// GET /api/v1/post/:userId/:postId
router.get('/api/v1/post/:userId/:postId', (req, res, next) => {
    console('post get' + new Date());
    res.send('Post Get Succesfully')
})

// GET /api/v1/posts/:userId
router.get('/api/v1/post/:userId/', (req, res, next) => {
    console('All posts get' + new Date());
    res.send('Posts Get Succesfully')
})

// POST /api/v1/posts/
router.post('/api/v1/post/', (req, res, next) => {
    console('post created' + new Date());
    res.send('Post Created succesfully')
})

// PUT /api/v1/post/:userId/:postId
router.put('/api/v1/post/:userId/:postId', (req, res, next) => {
    console('Post edit' + new Date());
    res.send('Post Edit Succesfully')
})

// DELETE /api/v1/post/:userId/:postId
router.delete('/api/v1/post/:userId/:postId', (req, res, next) => {
    console('Post Deleted' + new Date());
    res.send('Post Deleted Succesfully')
})

export default router