import UserManagement from "@/app/components/UserManagement"
import ContentModeration from "@/app/components/ContentModeration"
import Analytics from "@/app/components/Analytics"
import exp from "constants"

export default function(){
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-center">Admin Dashboard </h1>
            <UserManagement/>
            <ContentModeration/>
            <Analytics/>
        </div>
    );
}
