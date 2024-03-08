import { createBrowserRouter, RouterProvider, Outlet, useRouteError, isRouteErrorResponse } from "react-router-dom";
import harvardArt from "./data/harvardArt.js";
import GalleryNavigation from "./components/GalleryNavigation/index.js";
import GalleryView from "./components/GalleryView/index.js"
import ArtDescription from "./components/ArtDescription/index.js";

console.log(harvardArt);

function PageMissing() {
  const error = useRouteError();
  if (isRouteErrorResponse(error))
    console.log(`${error.status} ${error.statusText} ${error.data}`)
  return <h2>Page Not Found</h2>;
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageMissing />,
    children: [
      {
        path: "/",
        element: 
        <>
          <h2>{`Harvard Art Museum`}</h2>
          <p>{`Look, but Don't Touch. Please select a Gallery in the navigation bar.`}</p>
        </>
       },
       {
         path: "/galleries/:galleryId",
         errorElement: <PageMissing />,
         children: [
          {
            index: true,
            element: <GalleryView galleries={harvardArt.records}/>
          },
          {
            path: "art/:artId",
            element: <ArtDescription galleries={harvardArt.records}/>
          },
          {
            path: "*",
            element: <PageMissing />
          },
         ]
       },
      // {
      //   path: "*",
      //   element: <h2>{`Page Not Found`}</h2>
      // }
    ]
  },
]);

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
