import express, { Router } from 'express'

const router = Router();

router.get('/api/v1/feed/:userId', (req, res, next) => {
    console.log('this is your feed' + new Date())
    res.send('this is your feed' + new Date())
})

export default router;