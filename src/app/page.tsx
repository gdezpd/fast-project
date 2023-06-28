"use client"
import FilteredTab from "@/components/FilteredTab";

export type DataType = {
    id: number,
    title: string,
    city: string,
    state: 'in_progress'|'moderation' | 'paused' | "waiting_start" | 'completed',
    locations: number,
    transports: number,
    display: string,
    budget: number,
    photos: string[]
}

const getData = async (): Promise<DataType[]> => {
    const res = await fetch(
        'https://test-api.biterika.team/v1/campaigns/'
    )
    const data = await res.json()
    return data.campaigns
}

export default async function Home() {
    const campaignsData = await getData()

    return (
        <>
            <section className="lk-section flex-column flex-auto">
                <FilteredTab campaignsData={campaignsData}/>
            </section>
        </>
    )
}
