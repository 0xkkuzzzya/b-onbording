import { Route, Routes } from "react-router";
import styled from "styled-components";
import { MainPage } from "./Page/MainPage/MainPage";
import { StoriesPageEN } from "./Page/MainPage/StoriesEN";
import { LeaderBoard } from "./Page/LeaderBoard/LeaderBoard";
import { StoriesPageRU } from "./Page/MainPage/StoriesRU";
import { BuyMiner } from "./Page/BuyMiner/BuyMiner";
import { TasksPageEN } from "./Page/Tasks/TasksPageEN";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const routes = [
    { path: '/', name: 'MainPage', element: <MainPage /> },
    { path: '/StoriesEN', name: 'Stories', element: <StoriesPageEN /> },
    { path: '/StoriesRU', name: 'Stories', element: <StoriesPageRU /> },
    { path: '/leaderboard', name: 'leaderboard', element: <LeaderBoard /> },
    { path: '/buyminer', name: 'buyminer', element: <BuyMiner /> },
    { path: '/testtime', name: 'testtime', element: <TasksPageEN /> },
]


export const MainIndex = () => {



    return (
        <Container>
            <Routes>
                {routes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </Container>
    )
}