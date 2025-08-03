import {HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {dehydrate} from "@tanstack/query-core";
import {NoteDetailsClient} from "@/app/notes/[id]/NoteDetails.client";
import * as NoteService from "@/lib/api";

interface Props {
    params: Promise<{ id: string }>
}

const Page = async ({params}: Props) => {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['note',id],
        queryFn: () => NoteService.getNoteById(id),
    })
    return (
        <>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NoteDetailsClient />
            </HydrationBoundary>
        </>
    );
};
export default Page