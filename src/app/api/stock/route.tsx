import bcrypt from 'bcrypt'
import {prisma} from '@/app/lib/prisma'

import { NextResponse } from 'next/server'

//adding medicines
export async function POST(request: { json: any }){
    const body = await request.json();
    const { unit_price,med_name,quantity} = body;


    const medicine = await prisma.medicineStock.create({
        data: {
            unit_price,
            med_name,
            quantity,
        }
    });

    return NextResponse.json(medicine)
}

//getting all medicines
export async function GET(request: { json: any }){
  

    const medicines = await prisma.medicineStock.findMany()

 
  

    return NextResponse.json(medicines)
}