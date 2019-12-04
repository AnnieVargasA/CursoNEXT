export default class extends React.Component{
  render(){
    return <div>
      <div className="head">
      <center>
        <img src="../static/platzi-logo.png"/>
        <h1>Bienvenido al curso de Next.js</h1>
        <h3>Este es un proyecto para aprender Next.js</h3>
      </center>
      </div>
      <style jsx>{`
        .head{
          width:100%;
          justify-content:center;
          align-items: center;
          display:flex
          flex-direction: column;
          margin-top:3%
        }
        img{
          width:300px;
          align-item:center
          margin-top:3%;
        }
        h1{
          color:white;
          font-size:50px
        }
        h3{
          color:white;
          font-size:30px;
        }
      `}
      </style>
      <style jsx global>{`
        body{
          margin:0%;
          background: black;
        }
      `}
      </style>
    </div>
  }
}