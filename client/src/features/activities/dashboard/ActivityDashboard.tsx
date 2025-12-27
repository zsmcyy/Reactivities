import {Grid2} from "@mui/material";
import ActivityList from "./ActivityList.tsx";

// 将 Props 数据直接解构
export default function ActivityDashboard() {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList />
            </Grid2>
            <Grid2 size={5}>
                Activity filters go here
            </Grid2>
        </Grid2>
    )
}