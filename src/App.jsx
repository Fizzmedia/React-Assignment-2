import NameList from "./components/RenderingLists/NameList"
import ReverseLists from "./components/RenderingLists/ReverseLists"
import Alphabet from "./components/RenderingLists/Alphabet"
import LetterMatching from "./components/ConditionRendering/LetterMatching"

function App() {
  return (
    <>
      <NameList />
      <ReverseLists />
      <Alphabet />
      <LetterMatching />
    </>
  )
}

export default App