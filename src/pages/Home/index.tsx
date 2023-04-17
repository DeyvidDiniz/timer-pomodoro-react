import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HeaderContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HeaderContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou Trabalhar em </label>
          <input id="task" />
          <label htmlFor="">durante </label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HeaderContainer>
  )
}
