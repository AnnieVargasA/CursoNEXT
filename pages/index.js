import 'isomorphic-fetch';
import Link from 'next/link';
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
          <Link href={`/channel?id=${ channel.id }`}>
            <a className="channel">
              <center>
                <img src={channel.urls.logo_image.original}/>
                <h2>{channel.title}</h2>
              </center>
            </a>
          </Link>
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
          width:190px;
          text-decoration: none;
        }
        .channel img{
          width: 80%;
          border-radius: 5px;
        }
        h2{
          padding 5px;
          font-size: 0.8em;
          font-weight: 600;
          margin: 0;
          text-align: center;
          color:black;
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