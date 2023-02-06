import { Typography } from 'antd'
import { Meta, ResultCard } from '../../components'
import { useAPI, useGlobal, useFilter } from '../../businessLogic'
import { useEffect, PropsWithChildren } from 'react'
import { SlRocket } from 'react-icons/sl'
import { HOME_STYLE as s } from './style'
import { TITLE, PROMPT } from './copy'
import Controls from './Controls'

const { Title } = Typography

const Home = () => {
  const { getLaunches } = useAPI()
  const [{ launches }] = useGlobal()
  const { applyFilter } = useFilter()

  useEffect(() => {
    if (!launches) {
      getLaunches()
    }
  }, [launches]) // <-- set once upon on-mounting

  const Wrap = ({ children }: PropsWithChildren) => (
    <div style={s.center}>
      <Meta title={'Home | Launches'} />
      <br />
      <Title style={s.marg}>
        <SlRocket size={30} style={{ margin: '0px 8px' }} />
        {TITLE}
      </Title>
      <Controls />
      {children}
    </div>
  )

  if (!launches || !applyFilter()?.length) {
    return (
      <Wrap>
        <Title level={3} style={s.marg}>
          {PROMPT}
        </Title>
      </Wrap>
    )
  }
  return (
    <Wrap>
      <section style={s.wrap} role='list'>
        {applyFilter()?.map((each: any, i: number) => (
          <div key={i} role='listitem'>
            <ResultCard result={each} />
          </div>
        ))}
      </section>
    </Wrap>
  )
}

export default Home
