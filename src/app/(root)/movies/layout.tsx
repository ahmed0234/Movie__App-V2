import MoviesCategoriesList from "@/Components/Server/MoviesCategoriesList";

function Layout({ children }) {
  return (
    <section className="sectionContainer">
      <MoviesCategoriesList />
      {children}
    </section>
  );
}

export default Layout;
