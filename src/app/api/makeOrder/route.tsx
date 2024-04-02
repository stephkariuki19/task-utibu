import bcrypt from 'bcrypt'
import {prisma} from '@/app/lib/prisma'

import { NextResponse } from 'next/server'

//adding medicines
export async function POST(request: { json: any }){
    const body = await request.json();
    const { email,med_id,quantity} = body;


    const order = await prisma.order.create({
        data: {
            email,
            med_id,
            quantity,
        }
    });

    return NextResponse.json(order)
}

//getting all medicines
export async function GET(request: { json: any }){
  

    const orders = await prisma.order.findMany()

 
  

    return NextResponse.json(orders)
}