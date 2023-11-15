function App() {

  return (
  <div>
    <h1>Olá mundo, REACT !</h1>
    <MeuComponente/>
    <MeuComponente/>
    <MyButton/>
  </div>
  )
}

function MeuComponente() {
  return (
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, voluptas qui nihil deleniti quo voluptatem, ad, numquam cum aut consequuntur quidem cumque similique unde alias totam. Quibusdam suscipit nihil sit?</p>
  )
}

function MyButton() {
  return(
  <button>Clique aqui</button>
  )
}

export default App
