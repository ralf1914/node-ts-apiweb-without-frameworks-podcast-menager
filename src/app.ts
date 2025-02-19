import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { Method } from "./enum/http-method";

 export const App = async (
    req: http.IncomingMessage,
    res: http.ServerResponse
) => {

    const baseUrl = req.url?.split("?") [0]
    
     
     

    if (req.method === Method.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res)
    }

    if (req.method === Method.GET && baseUrl === Routes.EP) {
        await getFilterEpisodes(req, res)
    }
}