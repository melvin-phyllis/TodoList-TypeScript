import { useState } from "react"
import AddListe from "./components/AddListe"
import ShowList from "./components/ShowList"
import type { Listype } from "./types"


function App() {

  const [List, setList] = useState<Listype[]>([])



  return (
    <>
      <AddListe List={List} setList={setList} />
      <ShowList List={List} />
    </>
  )
}

export default App
