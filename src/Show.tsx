import React, { useState } from "react"

type ComponentAProps = {
  name: string
}

type ComponentAState = {
  doneYet: boolean
}

// stateful class component
export class ComponentA extends React.Component<ComponentAProps, ComponentAState> {
  constructor(props: ComponentAProps) {
    super(props)
  }

  state = {
    doneYet: false,
  }

  render() {
    return <div>
      Hi {this.props.name}, {this.state.doneYet.toString()}
      <button onClick={()=>this.setState({doneYet: true})}>Done now!</button>
    </div>
  }
}

// stateless function component
export function ComponentB(props: ComponentAProps) {
  return <div>
    Hi {props.name}
  </div>
}

// stateful function component
export function ComponentC(props: ComponentAProps) {
  const [doneYet, setDoneYet] = useState(false)
  const [color, setColor] = useState('red')
      return <div style={{color: color}}>
    Hi C {props.name}, {doneYet.toString()}
    <button onClick={()=> {setDoneYet(true);setColor('blue')}}>Done now!</button>
  </div>
}

// stateful function components
export function ComponentD(props: ComponentAProps) {
  const [doneYet, setDoneYet] = useState(false)
  const [color, setColor] = useState('red')
      return <div style={{color: color}}>
    Hi C {props.name}, {doneYet.toString()}
    <DoneButton setDoneYet={setDoneYet} setColor={setColor}/>
  </div>
}

type DoneButtonProps = {
  setDoneYet: SetDoneYet,
  setColor: (color: string) => void,
}

export type SetDoneYet = (doneYet: boolean) => void

function DoneButton({ setDoneYet, setColor }: DoneButtonProps){
  return (
    <button onClick={()=> {setDoneYet(true);setColor('blue')}}>done</button>
  )
}



// function ButtonComponent(setDoneYet, setColor){
//   return
//     <button onClick={()=> {setDoneYet(true);setColor('blue')}}></button>
// }

// css-in-js, e.g. styled component

// class Parent extends React.Component {
//   render() {
//     return <ComponentA name='ivan' />
//   }
// }
