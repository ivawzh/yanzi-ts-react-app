import { useState } from "react"

export function TaskA() {
  const [yesOrNo, setYesOrNo] = useState('Yes')

  return (
    <div>
      <List a={numberPlates} />
      {/* e.g. number plate: 7cbb1f97-02cf-4e4a-b53a-99282c3508b4 */}
      {/* <List plates=numberPlates/> */}
      <button onClick={()=>((yesOrNo ==='Yes')? setYesOrNo('No'):setYesOrNo('Yes'))}>YesOrNo: {yesOrNo}</button>
    </div>
  )
}

type NumberPlates = typeof numberPlates
type ListProps = { a: NumberPlates }
function List({a}: ListProps) {
  return <ul>{
    a.map((p,i)=>{
      const odd = (i%2===0) ? true : false

      // return <li key={i} style={{color: color}}>Number Plate: ${p}</li>
      return <Plate key={p} odd={odd} plateNumber={p}/>
    })
  }</ul>
}

function Plate(props: { odd: boolean, plateNumber: string }){
  const color = props.odd ? 'blue':'red'
  const css = {color: color}
  return <li style={css}> Number Plate: {props.plateNumber}</li>

}

const numberPlates = [
  '7cbb1f97-02cf-4e4a-b53a-99282c3508b4',
  '0b2f8d2c-c1ff-4f29-9596-9009fb445c10',
  'fa43a4ea-c1aa-4291-9ff3-7dde501717b8',
  '78854b75-717a-41d8-85e9-1eda96cac747',
  '42eb3c25-e2ec-463a-84d1-15328c01f088',
  '8ff3533a-35a3-485f-b99e-d983934fee86',
  '463cfec6-828e-47de-831c-31c80fa17783',
  '3c2b4844-718a-448e-b22a-182083eef4f2',
  'b2b24b4e-180b-4291-871f-717bfb239a28',
  '972db2cd-02a8-49ea-9586-1e8999a88d8c',
  '6c299ade-6615-43d5-854d-a8975ecf9659',
  '13dc9299-aba8-45fb-86f3-07e0007cc419',
  '6c8710ed-4e68-43c7-900e-297dc85d701a',
]
