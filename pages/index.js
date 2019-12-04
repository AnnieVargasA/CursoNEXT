import 'isomorphic-fetch';
export default class extends React.Component{
  static async getInitialProps() {
    let req = await fetch
    ('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()

    return{ channels: channels}
  }
  render(){
    const { channels } = this.props
    return <div>
      <header>Podcasts</header>
      <div className="container">
        {channels.map((channel) =>(
          <div className="channel">
            <img src={channel.urls.logo_image.original}/>
            <h2>{channel.title}</h2>
          </div>
        ))}
      </div>
      <style jsx>{`
        header{
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;

        }
        .container{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
        }
        .channel{
          padding:15px;
          width:150px;
        }
        .channel img{
          width: 100%;
          border-radius: 5px;
        }
        h2{
          padding 5px;
          font-size: 1em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
      `}
      </style>
      <style jsx global>{`
        body{
          margin:0;
          font-famili:system-ui;
          background: white;
        }
      `}
      </style>
    </div>
  }
}