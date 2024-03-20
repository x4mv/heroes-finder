import { HeroList } from "../components"


export const MarvelPage = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>MarvelPage</h1>
        <hr/>

        <HeroList
          publisher={'Marvel Comics'}
        />
      </div>
    </>
  )
}
