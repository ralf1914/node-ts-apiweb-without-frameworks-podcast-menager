import { Status } from "../enum/status-code"
import { FilterPodcastModel } from "../models/filter-podcast-model"
import { respositoryPodcast } from "../repositores/podcast-repository"


export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<FilterPodcastModel> => {
    //defini a interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }
    //buscando dados
    const queryString = podcastName?.split("?p=")[1] || ""

    const data = await respositoryPodcast(queryString)

    //verifico se tem conteúdo
    if (data.length != 0) {
        responseFormat.statusCode = Status.OK
    } else {
        responseFormat.statusCode = Status.NoContent
    }

    responseFormat.body = data;

    return responseFormat;
}

