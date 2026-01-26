import { useState } from "react";
import Switch from "../ui/switch";

export default function Notification() {
    const [isRepost, setIsRepost] = useState(false);

    return (
        <div>
            {/* title and enable status */}
            <div className="flex items-center justify-between">
                <span className="text-lg font-bold">
                    Hear the latest posts from the people you're following
                </span>

                <div className="flex items-center gap-2">
                    <span className="text-sm">Reposts</span>

                    <Switch defaultValue={isRepost} onChange={setIsRepost} />
                </div>
            </div>
        </div>
    );
}
