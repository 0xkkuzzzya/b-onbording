import { Route, Routes } from "react-router";
import styled from "styled-components";
import { MainPage } from "./Page/MainPage/MainPage";
import { StoriesPageEN } from "./Page/MainPage/MainPageStoriesEN";
import { LeaderBoard } from "./Page/LeaderBoard/LeaderBoard";
import { LinksToPage } from "./Page/helpers/LinksToPage";
import { StoriesPageRU } from "./Page/MainPage/MainPageStoriesRU";

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