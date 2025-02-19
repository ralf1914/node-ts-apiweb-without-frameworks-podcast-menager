import fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcast-models"

const pathData = path.join(__dirname, "../repositores/podcast.json")

export const respositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const languange = "utf-8"
    const rawData = fs.readFileSync(pathData, languange)
     let jsonFile = JSON.parse(rawData)

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        )
    }

    return jsonFile
}