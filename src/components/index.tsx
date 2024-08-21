import { Route, Routes } from "react-router";
import styled from "styled-components";
import { MainPage } from "./Page/MainPage/MainPage";
import { StoriesPage } from "./Page/MainPage/MainPageStories";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const routes = [
    { path: '/', name: 'MainPage', element: <MainPage /> },
    { path: '/Stories', name: 'Stories', element: <StoriesPage /> },
    { path: '/leadeboard', name: 'leadeboard', element: <StoriesPage /> },
]


export const MainIndex = () => {
    return(
        <Container>
            <Routes>
                {routes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </Container>
    )
}