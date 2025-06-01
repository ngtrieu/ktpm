 import {trpc} from "@/trpc/server";
 
 interface PageProps {
    params: Promise<{
        videoId:  string;
    }>;
 }

const Page = async({params}: PageProps) => {
    const { videoId } = await params;

    void trpc.videos.getOne.prefetch({id: videoId});

    return (
        <div>
            <videoView/>
        </div>
    );
};

export default Page;