import { Radio, Divider, Typography } from 'antd'
import { useGlobal } from '../../businessLogic'
import { THEME } from '../../constants'
import { AiOutlineFilter } from 'react-icons/ai'
import { FILTERS, FILTER_BY } from './copy'
import { CONTROLS_STYLE as s } from './style'

const { Button } = Radio
const { Text } = Typography
const Controls = () => {
  const [{ filter }, { setFilter }] = useGlobal()

  return (
    <section style={s.center}>
      <Divider orientation='center' plain>
        <AiOutlineFilter size={12} /> {FILTER_BY}
      </Divider>
      <div role='menubar'>
        <Radio.Group onChange={(e) => setFilter(e.target.value)}>
          {FILTERS.map((f, i) => (
            <Button key={i} value={f.value}>
              <Text style={{ color: filter === f.value && THEME.token.colorPrimary }}>{f.label}</Text>
            </Button>
          ))}
        </Radio.Group>
      </div>
    </section>
  )
}

export default Controls
