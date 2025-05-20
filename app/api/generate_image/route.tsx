import { NextRequest, NextResponse} from 'next/server';

export async function POST(req:NextRequest){
    const input = {
        prompt: ""
    };
    const output:any = await openai.run("")
    return NextResponse.json({"imageUrl":output[0]})
}