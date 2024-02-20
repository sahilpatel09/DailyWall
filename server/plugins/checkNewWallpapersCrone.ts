import { useScheduler } from "#scheduler"
import axios from "axios";

import prisma from '../prismaInstance'

export default defineNitroPlugin(() => {
  startScheduler()
})

function startScheduler() {
  const scheduler = useScheduler();

  scheduler.run(async () => {

    const n = 9;
    const api = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=${n}&mkt=en-US`;

    const response = await axios.get(api);
    
    if (response.status !== 200) {
      console.log("FAILED TO REQUEST")
      return
    }

    const imageList = response.data.images

    try{
      for (const item of imageList) {
        const { hsh: hash } = item;
  
        const exists = await prisma.wallpapers.findUnique({
          where: {
            hsh: hash
          }
        })
  
        if(!exists){
          item.copyright = item.copyright.replace(/'/g, '');
          item.title = item.title.replace(/'/g, '');
          let query = `INSERT INTO wallpapers (startdate, enddate, url, copyright, copyrightlink, title, quiz, hsh)
          VALUES 
            ('${item.startdate}', '${item.enddate}', '${item.url}', '${item.copyright}', '${item.copyrightlink}', '${item.title}', '${item.quiz}', '${item.hsh}');
          `;

          try {
            const createdRecord = await prisma.$queryRawUnsafe(query);
            console.log("Added:"+ JSON.stringify(item))
          } catch (error) {
            console.error('Error creating new record:', error);
            console.error(JSON.stringify(item))
          }

        }
      }
    }catch(e){
      console.log(e)
    }

  }).everySeconds(43200);
}