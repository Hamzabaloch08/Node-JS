import express, { Router } from 'express'

const router = Router();


// GET /api/v1/comment/:postId
router.get('/api/v1/comment//:postId', (req, res, next) => {
    console('comment get' + new Date());
    res.send('comment Get Succesfully')
})

// GET /api/v1/comments/:postId
router.get('/api/v1/post/:userId/', (req, res, next) => {
    console('All comments get from this post' + new Date());
    res.send('comments Get Succesfully')
})

// POST /api/v1/comment/postId
router.post('/api/v1/post/', (req, res, next) => {
    console('comment created' + new Date());
    res.send('comment Created succesfully')
})

// PUT /api/v1/commnet/:postId
router.put('/api/v1/comment/:postId', (req, res, next) => {
    console('comment edit' + new Date());
    res.send('comment Edit Succesfully')
})

// DELETE /api/v1/comment/:postId
router.delete('/api/v1/comment/:postId', (req, res, next) => {
    console('comment Deleted' + new Date());
    res.send('comment Deleted Succesfully')
})

export default router