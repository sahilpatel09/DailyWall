import axios from 'axios'

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const n = query?.n || 2;
        const api = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=${n}&mkt=en-US`;

        const response = await axios.get(api);
        if (response.status === 200) {
            console.log("ON CREATED RESPONSE " + JSON.stringify(response.data.images));
            return response.data.images;
        } else {
            console.error("Failed to fetch data from the API");
            return null;
        }
    } catch (error) {
        console.error("Error while fetching data:", error);
        return null;
    }
});
