import express, { Router } from 'express'

const router = Router()


router.post('/api/v1/login', (req, res, next) => {
    console.log('this is login', new Date());
    res.send('this is login' + new Date());
})

router.post('/api/v1/signup', (req, res, next) => {
    console.log('this is signup', new Date());
    res.send('this is signup' + new Date());
})

export default router