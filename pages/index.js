import Link from 'next/link'
import { Typography, Button, message } from 'antd'
import Hero from '../components/hero'
const { Title, Text } = Typography

const Index = () => {

  // handle click me
  const handleOnClick = async () => {

    let body_fields = JSON.stringify({
      isClick: true,
      id: '1001'
    })

    let response = await fetch('/api/search', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: body_fields
    })

    if(response.status === 200) {
      console.log(await response.json())
    }
  }

  return (
    <div>
      <div>
        <h1>Hello World This is a development page and I will update the preview on Vercel!</h1>
        <Button onClick={handleOnClick}>
          Click me!
        </Button>
        <Link href="/about">go to About</Link>
      </div>
    </div>
  )
}

export default Index