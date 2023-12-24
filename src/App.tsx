import './App.css'
import '@freee_jp/vibes/css'
import { Button } from '@freee_jp/vibes'
import { ButtonGroup } from '@freee_jp/vibes'
import { PageTitle } from '@freee_jp/vibes'
import { Footer } from '@freee_jp/vibes'
import { FinishTaskIllust } from '@freee_jp/vibes'

function App() {
  return (
    <>
      <div>
        <FinishTaskIllust></FinishTaskIllust>
      </div>
      <PageTitle>おめでとうございます</PageTitle>
      <ButtonGroup>
        <Button appearance="primary">ありがとうございます</Button>
        <Button appearance="secondary">え、なんのこと?</Button>
      </ButtonGroup>
      <Footer AppStoreUrl="hoge"></Footer>
    </>
  )
}

export default App
