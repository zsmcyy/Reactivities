import {Grid2} from "@mui/material";
import ActivityList from "./ActivityList.tsx";
import ActivityDetail from "../details/ActivityDetail.tsx";
import ActivityForm from "../../form/ActivityForm.tsx";

// 父传子 Props:接收父传过来的数据,名称 类型
type Props = {
    activities: Activity[]
    selectActivity: (id:string) => void
    cancelSelectActivity: () => void
    // selectedActivity: Activity | undefined
    selectedActivity?: Activity     //简写
    editMode: boolean
    openForm: (id: string)=> void
    closeForm: ()=> void
}

// 将 Props 数据直接解构
export default function ActivityDashboard(
    {activities, cancelSelectActivity, selectActivity, selectedActivity,
        editMode, openForm, closeForm}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode && <ActivityDetail 
                    selectedActivity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                />}
                {editMode && <ActivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity}
                />}
            </Grid2>
        </Grid2>
    )
}