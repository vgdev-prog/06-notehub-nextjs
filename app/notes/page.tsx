import NotesClient from "@/app/notes/Notes.client";
import {HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getAllNotes} from "@/lib/api";
import {dehydrate} from "@tanstack/query-core";

const Page = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['notes', '', 1],
        queryFn: () => getAllNotes('', 1),
    })

    return (
        <>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NotesClient/>
            </HydrationBoundary>
        </>
    );
};

export default Page;