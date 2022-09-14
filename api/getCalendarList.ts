import { Application, Request, Response } from 'express'
import { SupabaseClient } from '@supabase/supabase-js'

// 登録されているカレンダーのデータを取得するAPI
export const getCalendarList = (app: Application, supabase: SupabaseClient) =>
  app.get('/getCalendarList', async (_req: Request, res: Response) => {
  const { data, error } = await supabase.from("calendar").select("*")

  if (error) throw error;

  return res.status(200).send({
      calendar: data,
    })
})