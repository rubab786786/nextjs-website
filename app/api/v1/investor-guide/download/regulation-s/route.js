import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';


export async function GET(req) {
  try {
    const fileName = "regulation-s.pdf"
    const headerFileName = "Actiwires_LLC_DBA_UFUND_Reg-S_Investors_Hand-Book"
    const filePath = "./public/files/regulation-s.pdf"


    if (!fs.existsSync(filePath)) {
      return new NextResponse().status(404).json({
        message: "File not found.",
      });
    }

    const file = fs.readFileSync(filePath);
    const stat = fs.statSync(filePath);

    const response = new NextResponse(file, {
      headers: {
        'Content-Disposition': `attachment; filename="${headerFileName}"`,
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size,
      }
    })
    // const fileStream = fs.createReadStream(filePath)
    // const response = new Response()

    // response.headers.set('Content-Disposition', `attachment; filename="${headerFileName}"`)
    // response.headers.set('Content-Type', 'application/pdf')
    // response.headers.set('Content-Length', stat.size)

    // fileStream.pipe(response.body)

    return response


    // Set response headers for file download
    // res.headers.set('Content-Disposition', `attachment; filename="${headerFileName}"`);
    // res.headers.set('Content-Type', 'application/pdf');
    // res.headers.set('Content-Length', stat.size);

    // Create a readable stream to send the file content
    // const stream = fs.createReadStream(filePath);
    // const fileContent = fs.readFileSync(filePath)


    // stream.pipe(res)


  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error." }, { status: 500 });
  }
}

// TODO: complete this function