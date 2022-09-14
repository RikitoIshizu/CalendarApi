import express, { Application, Request, Response } from 'express'
import { getCalendarList } from './api/getCalendarList'
import { register } from './api/register'
import { createClient } from '@supabase/supabase-js'

const app: Application = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// dotenvを使えるようにする
require('dotenv').config()
const env = process.env
const supabaseUrl = env.SUPABASE_URL ? env.SUPABASE_URL : ''                  // superbaseのURL
const supabaseAnonKey = env.SUPABASE_ANON_KEY ? env.SUPABASE_ANON_KEY : ''    // superbaseのanon key
const supabase = createClient(
  supabaseUrl, supabaseAnonKey
)

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!',
  })
})

// API各種
getCalendarList(app, supabase)
register(app, supabase)

try {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/が立ち上がったよ、わんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわんわん(犬のモノマネ)`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
