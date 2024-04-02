import {prisma} from '@/app/lib/prisma'

import { NextResponse } from 'next/server'

export async function GET(request: { json: any }){
  

    const patients = await prisma.user.findMany()

 
  

    return NextResponse.json(patients)
}