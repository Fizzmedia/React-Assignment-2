import NameList from "./components/RenderingLists/NameList"
import ReverseLists from "./components/RenderingLists/ReverseLists"
import Alphabet from "./components/RenderingLists/Alphabet"
import LetterMatching from "./components/ConditionRendering/LetterMatching"
import Vowels from "./components/ConditionRendering/Vowels"

function App() {
  return (
    <>
      <NameList />
      <ReverseLists />
      <Alphabet />
      <LetterMatching />
      <Vowels />
    </>
  )
}

export default App