import { Modal } from "@/components/ui/modal";
import ToolTip from "@/components/ui/tool-tip";
import { cn } from "@/lib/cn";
import { useToastStore } from "@/store/toasts-store";
import type { Position } from "@/types/app";
import type { TrackPost } from "@/types/notification";
import { formatNumber } from "@/utils/text-parser";
import { CopyIcon, MoreHorizontal, Repeat2Icon, ShareIcon } from "lucide-react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import ShareModal from "./share-modal";

interface ActionButtonProps {
    post: TrackPost;
}

const tooltips = [
    { id: "like-tooltip", content: "Like", position: "bottom" },
    { id: "repost-tooltip", content: "Repost", position: "bottom" },
    { id: "share-tooltip", content: "Share", position: "bottom" },
    { id: "copy-tooltip", content: "Copy Link", position: "bottom" },
    { id: "more-tooltip", content: "More Options", position: "bottom" },
];

const className =
    "flex items-center gap-1.5 px-2 py-1 bg-surface-muted hover:opacity-80 rounded-md cursor-pointer";

export default function ActionButton({ post }: ActionButtonProps) {
    const [likedPost, setLikedPost] = useState(post.liked);
    const [repostedPost, setRepostedPost] = useState(post.reposted);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [selectedPostModal, setSelectedPostModal] =
        useState<TrackPost | null>(null);

    // used hooks
    const { showSuccess } = useToastStore();

    const handleLike = (post: TrackPost) => {
        setLikedPost(!likedPost);
        post.likes += likedPost ? -1 : 1;
    };

    const handleRepost = (post: TrackPost) => {
        setRepostedPost(!repostedPost);
        post.reposts += repostedPost ? -1 : 1;
    };

    const handleShare = (post: TrackPost) => {
        setSelectedPostModal(post);
        setIsOpenModal(true);
    };

    const handleCopy = (post: TrackPost) => {
        navigator.clipboard.writeText(`https://sssound.com/track/${post.id}`);
        showSuccess("Copied", "Link has been copied to clipboard");
    };

    return (
        <div className="flex items-center gap-3">
            <span
                id={`like-tooltip-${post.id}`}
                className={cn(className, "text-xs")}
                onClick={() => handleLike(post)}
            >
                <FaHeart
                    size={16}
                    className={cn(likedPost && "text-success")}
                />

                <span>{formatNumber(post.likes)}</span>
            </span>

            <span
                id={`repost-tooltip-${post.id}`}
                className={cn(className, "text-xs")}
                onClick={() => handleRepost(post)}
            >
                <Repeat2Icon
                    size={16}
                    className={cn(repostedPost && "text-success")}
                />

                <span>{formatNumber(post.reposts)}</span>
            </span>

            <span
                id={`share-tooltip-${post.id}`}
                className={cn(className, "text-xs")}
                onClick={() => handleShare(post)}
            >
                <ShareIcon size={16} />
            </span>

            <span
                id={`copy-tooltip-${post.id}`}
                className={cn(className, "text-xs")}
                onClick={() => handleCopy(post)}
            >
                <CopyIcon size={16} />
            </span>

            <span
                id={`more-tooltip-${post.id}`}
                className={cn(className, "text-xs")}
            >
                <MoreHorizontal size={16} />
            </span>

            {tooltips.map((tooltip) => (
                <ToolTip
                    key={tooltip.id}
                    anchorId={`${tooltip.id}-${post.id}`}
                    content={tooltip.content}
                    position={tooltip.position as Position}
                />
            ))}

            {selectedPostModal && (
                <Modal
                    open={isOpenModal}
                    onOpenChange={setIsOpenModal}
                    title="Share Track"
                >
                    <ShareModal trackPost={selectedPostModal} />
                </Modal>
            )}
        </div>
    );
}
