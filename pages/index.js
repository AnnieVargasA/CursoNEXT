export default class extends React.Component{
  render(){
    return <div>
      <h1>Hola Annie!</h1>
      <p>Este es el curso de Next.js con React.js</p>
      <img src="../static/platzi-logo.png" alt="Platzi-logo"/>
      <style jsx>{`
        h1{
          color: red;
        }
        :global(div p){
          color: green;
        }
        img{
          max-width: 50%;
          display: block;
          margi: 0 auto;
        }
        div{
          width:100%
        }
      `}
      </style>
      <style jsx global>{`
        body{
          background: white;
        }
      `}
      </style>
    </div>
  }
}