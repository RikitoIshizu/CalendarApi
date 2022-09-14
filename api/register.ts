import { Application, Request, Response } from 'express'
import { SupabaseClient } from '@supabase/supabase-js'
 
// カレンダーを登録するAPI
export const register = (app: Application, supabase: SupabaseClient) => app.post('/register', async (_req: Request, res: Response) => {
    console.log("1aokjanskdjh")
//   return res.status(200).send({
//       message: 'カレンダーを追加するよ。',
//     })
})