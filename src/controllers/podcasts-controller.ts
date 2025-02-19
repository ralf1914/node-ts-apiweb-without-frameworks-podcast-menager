import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { Status } from "../enum/status-code";
import { ContentType } from "../enum/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { PodcastModel } from "../models/podcast-models";

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content: FilterPodcastModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, { "content-type": ContentType.JSON });
    res.write(JSON.stringify(content.body))
    res.end();
};

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

   
    

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, { "content-type": ContentType.JSON });
    res.write(JSON.stringify(content.body))
    res.end();
};



