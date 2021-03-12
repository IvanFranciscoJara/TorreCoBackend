const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()
const FetchData = async (url, method, requestData) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    const info = await response.json()
    if (response.status === 500) {
      throw info.errorMessage
    }
    return info
  } catch (error) {
    console.log(error)
  }
}

router.post('/ListJobs', async (req, res, next) => {
  console.log('using ListJobs')
  let route = 'https://search.torre.co/' + req.body.endPoint
  let body = req.body.data
  let response = await FetchData(route, 'POST', body)
  res.status(200).json(response)
})

router.post('/JobDetail', async (req, res, next) => {
  console.log(req.body)
  console.log('using JobDetail')
  let route = 'https://torre.co/api/' + req.body.endPoint
  let body = req.body.data
  let response = await FetchData(route, 'GET', body)
  res.status(200).json(response)
})
module.exports = router
