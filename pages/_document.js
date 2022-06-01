import Document, { Html, Head, Main, NextScript } from 'next/document'

//server에서만 렌더링된다. 
class MyDocument extends Document {

  render() {
    return (
      <Html lang='ko'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument